import { Badge, Card } from 'flowbite-react'
import { useLanguage } from '../../context/LanguageContext'
import CourtCanvas from '../../components/CourtCanvas'

export default function Tennis() {
    const { t } = useLanguage()
    const te = t.tennis

    return (
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 pb-20">

            {/* Header with court */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-12 md:py-16 border-b border-(--color-border-subtle)">
                <div className="flex flex-col">
          <span className="font-mono text-[11px] font-medium text-(--color-teal) tracking-[0.1em] uppercase mb-4">
            {te.eyebrow}
          </span>
                    <h1 className="font-serif text-[34px] sm:text-[42px] md:text-[48px] leading-[1.1] font-normal text-(--color-site-text) mb-5">
                        {te.headline}
                    </h1>
                    <p className="text-base leading-[1.7] text-(--color-site-muted)">{te.sub}</p>
                </div>
                <div className="hidden md:flex items-center justify-center">
                    <CourtCanvas />
                </div>
            </section>

            {/* Stats callout */}
            <section className="py-12 border-b border-(--color-border-subtle)">
                <Badge
                    color="warning"
                    className="font-mono tracking-[0.06em] uppercase mb-6 inline-flex"
                >
                    {te.chip}
                </Badge>

                <Card className="!bg-(--color-teal-light) !border-(--color-border-teal-faint)">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                        <div className="flex flex-col gap-3">
                            <p className="font-mono text-[11px] font-medium text-(--color-teal) tracking-[0.1em] uppercase">
                                {te.statsLabel}
                            </p>
                            <div className="flex flex-col gap-5 mt-1">
                                {te.stats.map((s) => (
                                    <div key={s.label} className="flex items-baseline gap-2.5">
                                        <span className="font-serif text-[36px] leading-none text-(--color-teal)">{s.num}</span>
                                        <span className="text-[13px] text-(--color-teal-dark)">{s.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <p className="text-sm leading-[1.75] text-(--color-teal-darker)">{te.body}</p>
                        </div>
                    </div>
                </Card>
            </section>

            {/* Transferable skills */}
            <section className="py-12">
                <p className="font-mono text-[11px] font-medium text-(--color-teal) tracking-[0.1em] uppercase mb-8">
                    {te.skillsLabel}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {te.transferSkills.map((skill) => (
                        <Card key={skill.title} className="hover:border-(--color-border-teal-hover) transition-colors duration-200">
                            <h3 className="font-serif text-lg font-normal text-(--color-site-text) mb-1">
                                {skill.title}
                            </h3>
                            <p className="text-sm text-(--color-site-muted) leading-relaxed">{skill.desc}</p>
                        </Card>
                    ))}
                </div>
            </section>
        </div>
    )
}
