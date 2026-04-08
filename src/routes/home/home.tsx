import { Link } from 'react-router'
import { Badge, Button, Card } from 'flowbite-react'
import { useLanguage } from '../../context/LanguageContext'
import CourtCanvas from '../../components/CourtCanvas'
import ContactForm from "../../components/ContactForm.tsx";

export default function Home() {
    const { lang, t } = useLanguage()
    const h = t.hero
    const a = t.about

    // const contacts = [
    //     { label: 'martin@martinpoboril.com', href: 'mailto:martin@martinpoboril.com' },
    //     { label: 'github.com/martinpoboril', href: 'https://github.com/martinpoboril' },
    //     { label: 'linkedin.com/in/martinpoboril', href: 'https://linkedin.com/in/martinpoboril' },
    // ]

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
            <div className="flex gap-6 flex-wrap py-14 border-b border-(--color-border-subtle)">
                {t.tags.tech.map((tag) => (
                    <Badge key={tag} color="gray" className="font-mono tracking-[0.04em] text-base">{tag}</Badge>
                ))}
                {t.tags.tennis.map((tag) => (
                    <Badge key={tag} color="success" className="font-mono tracking-[0.04em] text-base">{tag}</Badge>
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
                        {/*<h2 className="font-serif text-[22px] font-normal text-(--color-site-text) mb-2">{a.contactHeading}</h2>*/}
                        {/*{contacts.map(({ label, href }) => (*/}
                        {/*    <a key={label} href={href}*/}
                        {/*       target={href.startsWith('http') ? '_blank' : undefined}*/}
                        {/*       rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}*/}
                        {/*       className="font-mono text-[12px] text-(--color-teal) hover:text-(--color-teal-dark) transition-colors no-underline break-all">*/}
                        {/*        {label}*/}
                        {/*    </a>*/}
                        {/*))}*/}
                        <h2 className="font-serif text-[22px] font-normal text-(--color-site-text) mb-2 text-center">{a.contactHeading}</h2>

                        {/*<a href="mailto:martin@martinpoboril.com"*/}
                        {/*   className="font-mono text-[12px] text-(--color-teal) hover:text-(--color-teal-dark) transition-colors no-underline break-all">*/}
                        {/*    martin@martinpoboril.com*/}
                        {/*</a>*/}

                        <div className="flex items-center gap-4 mt-3 justify-center">
                            {/* GitHub */}
                            <a href="https://github.com/marpob" target="_blank" rel="noopener noreferrer"
                               aria-label="GitHub"
                               className="text-(--color-site-muted) hover:text-(--color-teal) transition-colors duration-200">
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                                </svg>
                            </a>

                            {/* LinkedIn */}
                            <a href="https://www.linkedin.com/in/martin-poboril/" target="_blank" rel="noopener noreferrer"
                               aria-label="LinkedIn"
                               className="text-(--color-site-muted) hover:text-(--color-teal) transition-colors duration-200">
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                </svg>
                            </a>
                        </div>

                        <Button as="a" href="/martin-poboril-cv-en.pdf" download className="!bg-(--color-teal) hover:!bg-(--color-teal-dark) focus:ring-0">
                            {h.cv}
                        </Button>
                        
                    </div>
                </div>
            </section>

            {/* Contact form*/}
            <section id="contact" className="py-12">
                <p className="font-mono text-[11px] font-medium text-(--color-teal) tracking-[0.1em] uppercase mb-2">
                    {lang === 'en' ? 'Send a message' : 'Napište mi'}
                </p>
                <h2 className="font-serif text-[28px] font-normal text-(--color-site-text) mb-8">
                    {a.contactHeading}
                </h2>
                <div className="w-full max-w-[560px]">
                    <ContactForm />
                </div>
            </section>
        </div>
    )
}

