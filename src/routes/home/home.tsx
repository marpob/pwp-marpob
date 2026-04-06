import { Link } from 'react-router'
import { Badge, Button, Card } from 'flowbite-react'
import { useLanguage } from '../../context/LanguageContext'
import CourtCanvas from '../../components/CourtCanvas'

export default function Home() {
    const { t } = useLanguage()
    const h = t.hero
    const a = t.about

    const contacts = [
        { label: 'martin@martinpoboril.com', href: 'mailto:martin@martinpoboril.com' },
        { label: 'github.com/martinpoboril', href: 'https://github.com/martinpoboril' },
        { label: 'linkedin.com/in/martinpoboril', href: 'https://linkedin.com/in/martinpoboril' },
    ]

    return (
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 pb-20">

            {/* Hero */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-12 md:py-[72px] border-b border-(--color-border-subtle)">
                <div className="flex flex-col">
          <span className="font-mono text-[11px] font-medium text-(--color-teal) tracking-[0.1em] uppercase mb-4">
            {h.eyebrow}
          </span>
                    <h1 className="font-serif text-[36px] sm:text-[44px] md:text-[52px] leading-[1.08] font-normal text-(--color-site-text) mb-5">
                        {h.headline1}<br />{h.headline2}<br />
                        <em className="italic text-(--color-teal)">{h.headline3}</em>
                    </h1>
                    <p className="text-base leading-[1.7] text-(--color-site-muted) mb-8 max-w-[420px]">
                        {h.sub}
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <Button as={Link} to="/web-development" className="!bg-(--color-teal) hover:!bg-(--color-teal-dark) focus:ring-0">
                            {h.cta}
                        </Button>
                        <Button as="a" href="/martin-poboril-cv-en.pdf" download color="light" className="focus:ring-0">
                            {h.cv}
                        </Button>
                    </div>
                </div>
                <div className="flex items-center justify-center mt-6 md:mt-0">
                    <CourtCanvas />
                </div>
            </section>

            {/* Skill tags */}
            <div className="flex gap-2 flex-wrap py-16 border-b border-(--color-border-subtle)">
                {t.tags.tech.map((tag) => (
                    <Badge key={tag} color="gray" className="font-mono tracking-[0.04em] text-lg">{tag}</Badge>
                ))}
                {t.tags.tennis.map((tag) => (
                    <Badge key={tag} color="success" className="font-mono tracking-[0.04em] text-lg">{tag}</Badge>
                ))}
            </div>

            {/* Page navigation cards */}
            <section className="grid grid-cols-1 sm:grid-cols-2 gap-5 py-12 border-b border-(--color-border-subtle)">
                <Link
                    to="/web-development"
                    className="no-underline group"
                >
                    <Card className="cursor-pointer hover:border-(--color-border-teal-hover) transition-all duration-200 h-full">
                        <span className="font-mono text-[10px] font-medium text-(--color-teal) tracking-[0.1em] uppercase">{t.nav.webDev}</span>
                        <h2 className="font-serif text-xl sm:text-2xl font-normal text-(--color-site-text) mt-1 mb-2">{h.webDevLink}</h2>
                        <p className="text-sm text-(--color-site-muted) leading-relaxed">{t.webDev.sub}</p>
                        <span className="mt-3 inline-block text-(--color-teal) opacity-50 group-hover:opacity-100 transition-opacity text-lg">→</span>
                    </Card>
                </Link>

                <Link
                    to="/tennis/"
                    className="no-underline group"
                >
                    <Card className="cursor-pointer !bg-(--color-teal-light) !border-(--color-border-teal-faint) hover:!border-(--color-border-teal-hover) transition-all duration-200 h-full">
                        <span className="font-mono text-[10px] font-medium text-(--color-teal) tracking-[0.1em] uppercase">{t.nav.tennis}</span>
                        <h2 className="font-serif text-xl sm:text-2xl font-normal text-(--color-teal-dark) mt-1 mb-2">{h.tennisLink}</h2>
                        <p className="text-sm text-(--color-teal-darker) leading-relaxed">{t.tennis.sub}</p>
                        <span className="mt-3 inline-block text-(--color-teal) opacity-50 group-hover:opacity-100 transition-opacity text-lg">→</span>
                    </Card>
                </Link>
            </section>

            {/* Projects */}
            <section className="py-12 border-b border-(--color-border-subtle)">
                <p className="font-mono text-[11px] font-medium text-(--color-teal) tracking-[0.1em] uppercase mb-8">
                    {t.projects.label}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {t.projects.items.map((project) => (
                        <Card
                            key={project.title}
                            className="group cursor-pointer hover:border-(--color-border-teal-hover) hover:shadow-(--shadow-teal) transition-all duration-200"
                            onClick={() => window.open(project.url, '_blank', 'noopener,noreferrer')}
                        >
                            <div className="flex flex-col gap-2 h-full">
                                <div className="flex items-start justify-between gap-2">
                                    <h3 className="font-serif text-lg font-normal text-(--color-site-text) leading-snug">
                                        {project.title}
                                    </h3>
                                    <span className="text-base text-(--color-teal) opacity-40 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-0.5">
                    ↗
                  </span>
                                </div>
                                <p className="text-sm text-(--color-site-muted) leading-relaxed flex-1">
                                    {project.description}
                                </p>
                                <div className="flex gap-1.5 flex-wrap mt-2">
                                    {project.stack.map((s) => (
                                        <Badge key={s} color="gray" className="font-mono tracking-[0.04em] text-[10px]">{s}</Badge>
                                    ))}
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </section>

            {/* About */}
            <section className="py-12 border-b border-(--color-border-subtle)">
                <p className="font-mono text-[11px] font-medium text-(--color-teal) tracking-[0.1em] uppercase mb-8">
                    {a.label}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-10 items-start">
                    <div className="flex flex-col gap-4 text-[15px] leading-[1.8] text-(--color-site-muted)">
                        {a.bio.map((para, i) => <p key={i}>{para}</p>)}
                    </div>
                    <div className="flex flex-col gap-2">
                        <h2 className="font-serif text-[22px] font-normal text-(--color-site-text) mb-2">{a.contactHeading}</h2>
                        {contacts.map(({ label, href }) => (
                            <a key={label} href={href}
                               target={href.startsWith('http') ? '_blank' : undefined}
                               rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                               className="font-mono text-[12px] text-(--color-teal) hover:text-(--color-teal-dark) transition-colors no-underline break-all">
                                {label}
                            </a>
                        ))}
                        <Button as="a" href="/martin-poboril-cv.pdf" download
                                className="!bg-(--color-teal) hover:!bg-(--color-teal-dark) focus:ring-0 mt-4 w-full">
                            {a.cv}
                        </Button>
                    </div>
                </div>
            </section>

            {/* Contact form*/}
            {/*<section id="contact" className="py-12">*/}
            {/*    <p className="font-mono text-[11px] font-medium text-(--color-teal) tracking-[0.1em] uppercase mb-2">*/}
            {/*        {lang === 'en' ? 'Send a message' : 'Napište mi'}*/}
            {/*    </p>*/}
            {/*    <h2 className="font-serif text-[28px] font-normal text-(--color-site-text) mb-8">*/}
            {/*        {a.contactHeading}*/}
            {/*    </h2>*/}
            {/*    <div className="w-full max-w-[560px]">*/}
            {/*        <ContactForm />*/}
            {/*    </div>*/}
            {/*</section>*/}
        </div>
    )
}
