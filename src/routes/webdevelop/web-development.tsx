import { Badge, Card } from 'flowbite-react'
import { useLanguage } from '../../context/LanguageContext'

interface Project { title: string; description: string; stack: string[]; url?: string }

function ProjectCard({ project }: { project: Project }) {
    return (
        <Card
            className="cursor-pointer hover:border-(--color-border-teal-hover) hover:shadow-(--shadow-teal) transition-all duration-200"
            onClick={() => project.url && window.open(project.url, '_blank', 'noopener,noreferrer')}
        >
            <div className="flex justify-between items-start gap-4">
                <div className="flex flex-col gap-2 flex-1 min-w-0">
                    <h3 className="font-serif text-lg sm:text-xl font-normal text-(--color-site-text) leading-snug">
                        {project.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-(--color-site-muted)">{project.description}</p>
                    <div className="flex gap-1.5 flex-wrap mt-1">
                        {project.stack.map((s) => (
                            <Badge key={s} color="gray" className="font-mono tracking-[0.04em] text-[10px]">{s}</Badge>
                        ))}
                    </div>
                </div>
                {project.url && (
                    <span className="text-lg text-(--color-teal) opacity-40 flex-shrink-0 mt-0.5">→</span>
                )}
            </div>
        </Card>
    )
}

export default function WebDevelopment() {
    const { t } = useLanguage()
    const wd = t.webDev

    return (
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 pb-20">

            {/* Header */}
            <section className="py-12 md:py-16 border-b border-(--color-border-subtle)">
        <span className="font-mono text-[11px] font-medium text-(--color-teal) tracking-[0.1em] uppercase mb-4 block">
          {wd.eyebrow}
        </span>
                <h1 className="font-serif text-[34px] sm:text-[44px] md:text-[52px] leading-[1.1] font-normal text-(--color-site-text) mb-5">
                    {wd.headline}
                </h1>
                <p className="text-base leading-[1.7] text-(--color-site-muted) max-w-[520px]">{wd.sub}</p>
            </section>

            {/* Tech stack */}
            <section className="py-12 border-b border-(--color-border-subtle)">
                <p className="font-mono text-[11px] font-medium text-(--color-teal) tracking-[0.1em] uppercase mb-6">
                    {wd.skillsLabel}
                </p>
                <div className="flex gap-2 flex-wrap">
                    {t.tags.tech.map((tag) => (
                        <Badge key={tag} color="gray" className="font-mono tracking-[0.04em] text-[10px]">{tag}</Badge>
                    ))}
                </div>
            </section>

            {/* Projects */}
            <section className="py-12">
                <p className="font-mono text-[11px] font-medium text-(--color-teal) tracking-[0.1em] uppercase mb-8">
                    {wd.projectsLabel}
                </p>
                <div className="flex flex-col gap-5">
                    {wd.projects.map(p => <ProjectCard key={p.title} project={p} />)}
                </div>
            </section>
        </div>
    )
}
