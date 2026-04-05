import { useEffect, useRef, useState} from 'react'
import { useLanguage } from '../context/LanguageContext'

interface BadgeProps {
    skill: string
    visible: boolean
    position: 'top' | 'bottom'
}

function Badge({ skill, visible, position }: BadgeProps) {
    const base = [
        'absolute left-1/2 -translate-x-1/2',
        'font-mono text-[11px] font-medium px-3.5 py-1.5 rounded-md',
        'border border-(--color-border-teal-faint) bg-(--color-teal-light) text-(--color-teal-dark) whitespace-nowrap',
        'pointer-events-none transition-all duration-300 ease-out',
    ].join(' ')

    const placed = position === 'top' ? 'top-1' : 'bottom-1'
    const show = visible
        ? 'opacity-100 translate-y-0'
        : position === 'top'
            ? 'opacity-0 -translate-y-1'
            : 'opacity-0 translate-y-1'

    return <span className={`${base} ${placed} ${show}`}>{skill}</span>
}

export default function CourtCanvas() {
    const { t } = useLanguage()
    const skills = t.skills as readonly string[]

    const canvasRef = useRef<HTMLCanvasElement>(null)
    const [bottomSkill, setBottomSkill] = useState(skills[0])
    const [topSkill, setTopSkill] = useState(skills[1])
    const [bottomVisible, setBottomVisible] = useState(true)
    const [topVisible, setTopVisible] = useState(true)

    const bottomIndexRef = useRef(0)
    const topIndexRef = useRef(1)
    const lastBouncePhase = useRef<string | null>(null)
    const skillsRef = useRef(skills)

    useEffect(() => {
        skillsRef.current = skills
        setBottomSkill(skills[bottomIndexRef.current])
        setTopSkill(skills[topIndexRef.current])
    }, [skills])

    function triggerBottom() {
        setBottomVisible(false)
        setTimeout(() => {
            const next = (bottomIndexRef.current + 2) % skillsRef.current.length
            bottomIndexRef.current = next
            setBottomSkill(skillsRef.current[next])
            setBottomVisible(true)
        }, 80)
    }

    function triggerTop() {
        setTopVisible(false)
        setTimeout(() => {
            const next = (topIndexRef.current + 2) % skillsRef.current.length
            topIndexRef.current = next
            setTopSkill(skillsRef.current[next])
            setTopVisible(true)
        }, 80)
    }

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')!
        if (!ctx) return

        const W = 280, H = 320, CX = W / 2
        const COURT_FILL  = 'rgba(26, 127, 110, 0.09)'
        const COURT_LINE  = '#1A7F6E'
        const NET_COLOR   = '#0F5A4E'
        const BALL_COLOR  = '#D4C44A'
        const BALL_STROKE = '#B8A838'
        const netY  = 160
        const svcT  = 100, svcB = 220
        const sideL = 50,  sideR = 230
        const court = { x: 20, y: 20, w: 240, h: 280 }

        let t = 0
        let rafId: number

        function roundRect(x: number, y: number, w: number, h: number, r: number) {
            ctx.beginPath()
            ctx.moveTo(x+r,y); ctx.lineTo(x+w-r,y)
            ctx.quadraticCurveTo(x+w,y,x+w,y+r)
            ctx.lineTo(x+w,y+h-r)
            ctx.quadraticCurveTo(x+w,y+h,x+w-r,y+h)
            ctx.lineTo(x+r,y+h)
            ctx.quadraticCurveTo(x,y+h,x,y+h-r)
            ctx.lineTo(x,y+r)
            ctx.quadraticCurveTo(x,y,x+r,y)
            ctx.closePath()
        }

        function line(x1: number, y1: number, x2: number, y2: number) {
            ctx.beginPath(); ctx.moveTo(x1,y1); ctx.lineTo(x2,y2); ctx.stroke()
        }

        function ease(v: number) {
            return -(Math.cos(Math.PI * v) - 1) / 2
        }

        function drawCourt() {
            ctx.clearRect(0,0,W,H)
            ctx.fillStyle = COURT_FILL
            ctx.strokeStyle = COURT_LINE; ctx.lineWidth = 1.5
            roundRect(court.x, court.y, court.w, court.h, 2)
            ctx.fill(); ctx.stroke()
            ctx.strokeStyle = COURT_LINE; ctx.lineWidth = 1
            ctx.globalAlpha = 0.55
            line(sideL, court.y, sideL, court.y+court.h)
            line(sideR, court.y, sideR, court.y+court.h)
            ctx.globalAlpha = 0.4
            line(sideL, svcT, sideR, svcT)
            line(sideL, svcB, sideR, svcB)
            line(CX, svcT, CX, svcB)
            ctx.globalAlpha = 1
            ctx.lineWidth = 2
            line(CX-10, court.y, CX+10, court.y)
            line(CX-10, court.y+court.h, CX+10, court.y+court.h)
            ctx.strokeStyle = NET_COLOR; ctx.lineWidth = 2
            line(court.x, netY, court.x+court.w, netY)
            ctx.fillStyle = NET_COLOR
            ctx.beginPath(); ctx.arc(court.x, netY, 3, 0, Math.PI*2); ctx.fill()
            ctx.beginPath(); ctx.arc(court.x+court.w, netY, 3, 0, Math.PI*2); ctx.fill()
        }

        function drawShadow(x: number, groundY: number, r: number, alt: number) {
            const s = Math.max(0.2, 1-alt/150)
            ctx.beginPath()
            ctx.ellipse(x, groundY, r*2.2*s, r*0.5*s, 0, 0, Math.PI*2)
            ctx.fillStyle = 'rgba(26,127,110,0.15)'; ctx.fill()
        }

        function drawBall(x: number, y: number, r: number) {
            ctx.beginPath(); ctx.arc(x,y,r,0,Math.PI*2)
            ctx.fillStyle = BALL_COLOR; ctx.globalAlpha = 0.92; ctx.fill()
            ctx.strokeStyle = BALL_STROKE; ctx.lineWidth = 0.5; ctx.stroke()
            ctx.globalAlpha = 1
            ctx.beginPath(); ctx.arc(x+r*0.2, y-r*0.2, r*0.25, 0, Math.PI*2)
            ctx.fillStyle = 'rgba(255,255,255,0.3)'; ctx.fill()
        }

        function animate() {
            t += 0.007
            const cycle = t % 1
            let bx: number, by: number, groundY: number, bouncePhase: string

            if (cycle < 0.5) {
                const p = cycle/0.5, ex = ease(p)
                bx = 60 + (220-60)*ex
                const baseY = 250 + (60-250)*ex
                by = baseY - Math.sin(p*Math.PI)*80
                groundY = baseY
                bouncePhase = p < 0.05 ? 'bounce-bottom' : 'going-top'
            } else {
                const p = (cycle-0.5)/0.5, ex = ease(p)
                bx = 220 + (60-220)*ex
                const baseY = 60 + (250-60)*ex
                by = baseY - Math.sin(p*Math.PI)*80
                groundY = baseY
                bouncePhase = p < 0.05 ? 'bounce-top' : 'going-bottom'
            }

            const isBounce = bouncePhase === 'bounce-bottom' || bouncePhase === 'bounce-top'
            if (isBounce && bouncePhase !== lastBouncePhase.current) {
                lastBouncePhase.current = bouncePhase
                if (bouncePhase === 'bounce-bottom') triggerBottom()
                else triggerTop()
            } else if (!isBounce) {
                lastBouncePhase.current = null
            }

            drawCourt()
            drawShadow(bx, groundY, 8, groundY-by)
            drawBall(bx, by, 8)
            rafId = requestAnimationFrame(animate)
        }

        animate()
        return () => cancelAnimationFrame(rafId)
    }, [])

    return (
        <div className="relative w-full max-w-[280px] mx-auto">
            <Badge skill={topSkill}    visible={topVisible}    position="top"    />
            <canvas ref={canvasRef} width={280} height={320} className="w-full" aria-hidden="true" />
            <Badge skill={bottomSkill} visible={bottomVisible} position="bottom" />
        </div>
    )
}