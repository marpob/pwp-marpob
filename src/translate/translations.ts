export type Lang = 'en' | 'cs'

export const translations = {
    en: {
        nav: { home: 'Home', webDev: 'Web Development', tennis: 'Tennis', contact: 'Contact' },
        hero: {
            eyebrow: 'Frontend Developer',
            headline1: 'I build', headline2: 'the web.', headline3: 'with Precision',
            sub: 'Frontend developer with more than a decade of tennis coaching — I apply the same precision, team work, and systems thinking to web development as I do to tennis coaching.',
            cta: 'View projects', cv: 'Download CV', webDevLink: 'Web Development', tennisLink: 'Tennis Coaching',
        },
        projects: {
            label: 'Projects',
            items: [
                {
                    title: 'Jakub Nicod — Player Website',
                    description: 'Personal website for Jakub Nicod, a rising professional tennis player ranked #13 in the junior world rankings and European U16 champion. Showcases his career stats, sponsors, and story.',
                    stack: ['WordPress', 'HTML', 'CSS'],
                    url: 'https://www.jakubnicod.com/',
                },
                {
                    title: 'Solinco Sports — Czech & Slovak Distributor',
                    description: 'Official website for Solinco\'s Czech and Slovak distribution. Features the full product range — strings, rackets, and accessories — plus team players and distributor network.',
                    stack: ['WordPress', 'HTML', 'CSS'],
                    url: 'http://www.solincosports.eu/',
                },
                {
                    title: 'ČTSV — Czech Wheelchair Tennis Association',
                    description: 'Official website for the Czech Wheelchair Tennis Association. Covers tournaments, rankings, player stories, and international event coverage. Built with inclusivity in mind.',
                    stack: ['WordPress', 'HTML', 'CSS'],
                    url: 'https://www.ctsv.cz/',
                },
                {
                    title: 'Tenis Hajnovka — Tennis Club Prague',
                    description: 'Website for a tennis club in Prague 8 with 5 clay courts and 2 hard courts. Includes court booking, camp registration, pricing, and event calendar.',
                    stack: ['WordPress', 'HTML', 'CSS'],
                    url: 'https://tenis-hajnovka.cz/',
                },
            ],
        },
        webDev: {
            eyebrow: 'Web Development',
            headline: 'Building precise, accessible interfaces.',
            sub: 'I work primarily with React, TypeScript, and Vite. I care deeply about performance, clean code, and the details that make an interface feel right.',
            skillsLabel: 'Tech stack', projectsLabel: 'Featured Projects',
            projects: [
                { title: 'CourtIQ — Tennis Analytics Dashboard', description: 'A real-time dashboard for tracking player stats across sessions. Built with React and D3.js, using coaching methodology to determine which metrics actually matter.', stack: ['React', 'D3.js', 'TypeScript', 'Supabase'], url: 'https://github.com/martinpoboril' },
                { title: 'Session Planner — Coaching Tool', description: 'A scheduling and drill-management app for tennis coaches. Drag-and-drop session builder with drill library, progress notes, and PDF export.', stack: ['React', 'dnd-kit', 'Tailwind', 'Vite'], url: 'https://github.com/martinpoboril' },
                { title: 'martinpoboril.com — this site', description: 'Portfolio built with React + TypeScript + Vite + Tailwind v4. Focused on performance, accessibility, and a design language rooted in tennis.', stack: ['React', 'TypeScript', 'Vite', 'Tailwind v4'], url: 'https://martinpoboril.com' },
            ],
        },
        tennis: {
            eyebrow: 'Tennis Coaching',
            headline: 'Coaching taught me how to build software.',
            sub: 'In tennis, feedback loops are everything — you adjust technique based on real results, not assumptions. I bring this mindset to frontend: ship fast, observe, iterate.',
            chip: 'The Tennis Edge',
            body: 'Precision in movement translates to precision in code. The systems thinking I developed on the court is the same thinking I bring to every frontend problem.',
            statsLabel: 'By the numbers',
            stats: [{ num: '8+', label: 'years coaching experience' }, { num: '200+', label: 'players coached' }, { num: '3', label: 'apps built for tennis coaches' }],
            skillsLabel: 'Skills that transfer',
            transferSkills: [
                { title: 'Feedback loops',   desc: 'Adjust based on real results, not assumptions.' },
                { title: 'Systems thinking', desc: 'See the whole picture, fix the right thing.' },
                { title: 'Teaching clearly', desc: 'Explain complex ideas simply — in docs and in code.' },
                { title: 'Precision',        desc: 'The details matter. On court and on screen.' },
            ],
        },
        tags: { tech: ['HTML', 'Javascript', 'Postgresql', 'React', 'TypeScript', 'Vite', 'Node.js', 'Tailwind', 'CSS', 'REST APIs', 'Node', 'Express', 'Git/GitHub', 'Wordpress', 'Elementor'], tennis: ['Tennis Coach', 'Sports Analytics', 'Player Development', 'Tennis Data Analyst'] },
        about: {
            label: 'About & Contact', contactHeading: "Let's work together", cv: 'Download CV',
            bio: [
                "I'm Martin Poboril, a frontend developer based in Europe. I work primarily with React, TypeScript, and Vite, and I care deeply about performance, accessibility, and the quality of interfaces I ship.",
                "Before I was a developer, I spent years as a tennis coach — studying movement mechanics, designing training systems, and teaching under pressure.",
                "I'm currently looking for frontend roles where I can contribute from day one and keep growing. If that sounds like your team, I'd love to talk.",
            ],
            form: {
                labelName: 'Name', labelEmail: 'Email', labelMessage: 'Message',
                placeholderName: 'Martin Novák', placeholderEmail: 'martin@example.com',
                placeholderMessage: 'Tell me about your project or role...',
                submit: 'Send message', sending: 'Sending...',
                successTitle: 'Message sent!', successBody: "Thanks for reaching out — I'll get back to you as soon as possible.",
                errorName: 'Please enter your name.', errorEmail: 'Please enter a valid email address.',
                errorMessage: 'Please enter a message.', errorGeneral: 'Something went wrong. Please try again or email me directly.',
            },
        },
        skills: ['HTML', 'CSS', 'React', 'Tailwind', 'JavaScript', 'TypeScript', 'PostgreSQL', 'Git / GitHub'],
    },

    cs: {
        nav: { home: 'Domů', webDev: 'Vývoj webu', tennis: 'Tenis', contact: 'Kontakt' },
        hero: {
            eyebrow: 'Frontend vývojář',
            headline1: 'Stavím', headline2: 'web.', headline3: 'Přesně.',
            sub: 'Frontend inženýr s desetiletou zkušeností tenisového trenéra — stejnou přesnost, zpětnou vazbu a systémové myšlení, které používám na kurtu, aplikuji i na React.',
            cta: 'Zobrazit projekty', cv: 'Stáhnout CV', webDevLink: 'Vývoj webu', tennisLink: 'Tenisový trenér',
        },
        projects: {
            label: 'Projekty',
            items: [
                {
                    title: 'Jakub Nicod — Hráčský web',
                    description: 'Osobní web pro Jakuba Nicoda, nastupujícího profesionálního tenistu, světového juniora č. 13 a mistra Evropy do 16 let. Představuje jeho kariérní statistiky, sponzory a příběh.',
                    stack: ['WordPress', 'HTML', 'CSS'],
                    url: 'https://www.jakubnicod.com/',
                },
                {
                    title: 'Solinco Sports — Distributor pro ČR a SR',
                    description: 'Oficiální web pro českou a slovenskou distribuci Solinco. Představuje celý sortiment — výplety, rakety a doplňky — včetně týmových hráčů a sítě distributorů.',
                    stack: ['WordPress', 'HTML', 'CSS'],
                    url: 'http://www.solincosports.eu/',
                },
                {
                    title: 'ČTSV — Český Tenisový Svaz Vozíčkářů',
                    description: 'Oficiální web Českého Tenisového Svazu Vozíčkářů. Zahrnuje turnaje, žebříčky, příběhy hráčů a přehledy mezinárodních akcí. Vytvořeno s důrazem na přístupnost.',
                    stack: ['WordPress', 'HTML', 'CSS'],
                    url: 'https://www.ctsv.cz/',
                },
                {
                    title: 'Tenis Hajnovka — Tenisový klub Praha',
                    description: 'Web pro tenisový klub v Praze 8 s 5 antukových kurty a 2 kurty s pevným povrchem. Obsahuje rezervace kurtů, přihlášky na kempy, ceník a kalendář akcí.',
                    stack: ['WordPress', 'HTML', 'CSS'],
                    url: 'https://tenis-hajnovka.cz/',
                },
            ],
        },
        webDev: {
            eyebrow: 'Vývoj webu',
            headline: 'Přesná a přístupná rozhraní.',
            sub: 'Pracuji především s Reactem, TypeScriptem a Vite. Záleží mi na výkonu, čistém kódu a detailech, které dělají rozhraní správným.',
            skillsLabel: 'Technologie', projectsLabel: 'Vybrané projekty',
            projects: [
                { title: 'CourtIQ — Tenisový analytický dashboard', description: 'Dashboard v reálném čase pro sledování statistik hráčů. Postaven v Reactu a D3.js s využitím trenérské metodiky.', stack: ['React', 'D3.js', 'TypeScript', 'Supabase'], url: 'https://github.com/martinpoboril' },
                { title: 'Session Planner — Trenérský nástroj', description: 'Drag-and-drop sestavování tréninků, knihovna cvičení, poznámky o pokroku hráčů a export do PDF.', stack: ['React', 'dnd-kit', 'Tailwind', 'Vite'], url: 'https://github.com/martinpoboril' },
                { title: 'martinpoboril.com — tento web', description: 'Portfolio postavené v Reactu + TypeScriptu + Vite + Tailwind v4. Zaměřeno na výkon a vizuální jazyk vycházející ze světa tenisu.', stack: ['React', 'TypeScript', 'Vite', 'Tailwind v4'], url: 'https://martinpoboril.com' },
            ],
        },
        tennis: {
            eyebrow: 'Tenisový trenér',
            headline: 'Trénování mě naučilo programovat.',
            sub: 'V tenisu je vše o zpětné vazbě — techniku upravuješ na základě skutečných výsledků, ne domněnek. Tento přístup přenáším do frontendu: rychle vydávej, sleduj, iteruj.',
            chip: 'Tenisová výhoda',
            body: 'Přesnost pohybu se přetavuje v přesnost kódu. Systémové myšlení z kurtu přináším ke každému frontendovému problému.',
            statsLabel: 'Čísla',
            stats: [{ num: '8+', label: 'let trenérské praxe' }, { num: '200+', label: 'trénovaných hráčů' }, { num: '3', label: 'aplikace pro trenéry' }],
            skillsLabel: 'Dovednosti, které se přenáší',
            transferSkills: [
                { title: 'Zpětná vazba',      desc: 'Upravuj na základě skutečných výsledků, ne domněnek.' },
                { title: 'Systémové myšlení', desc: 'Vidíš celkový obraz a opravíš správnou věc.' },
                { title: 'Jasná komunikace',  desc: 'Vysvětlíš složité věci jednoduše — v dokumentaci i v kódu.' },
                { title: 'Přesnost',          desc: 'Na detailech záleží. Na kurtu i na obrazovce.' },
            ],
        },
        tags: { tech: ['HTML', 'Javascript', 'Postgresql', 'React', 'TypeScript', 'Vite', 'Node.js', 'Tailwind', 'CSS', 'REST APIs', 'Node', 'Express', 'Git/GitHub', 'Wordpress', 'Elementor'], tennis: ['Tenisový trenér', 'Sportovní analytika', 'Rozvoj hráčů', 'Datový analytik'] },
        about: {
            label: 'O mně & Kontakt', contactHeading: 'Pojďme spolupracovat', cv: 'Stáhnout CV',
            bio: [
                'Jsem Martin Poboril, frontend vývojář působící v Evropě. Pracuji především s Reactem, TypeScriptem a Vite.',
                'Než jsem se stal vývojářem, strávil jsem roky jako tenisový trenér — studoval jsem pohybovou mechaniku a navrhoval tréninkové systémy.',
                'Aktuálně hledám frontend pozici, kde mohu od prvního dne přispívat a dál růst. Pokud to zní jako váš tým, rád si popovídám.',
            ],
            form: {
                labelName: 'Jméno', labelEmail: 'E-mail', labelMessage: 'Zpráva',
                placeholderName: 'Martin Novák', placeholderEmail: 'martin@example.com',
                placeholderMessage: 'Napište mi o projektu nebo pozici...',
                submit: 'Odeslat zprávu', sending: 'Odesílám...',
                successTitle: 'Zpráva odeslána!', successBody: 'Díky za zprávu — ozvám se co nejdříve.',
                errorName: 'Zadejte prosím své jméno.', errorEmail: 'Zadejte prosím platnou e-mailovou adresu.',
                errorMessage: 'Zadejte prosím zprávu.', errorGeneral: 'Něco se nepovedlo. Zkuste to znovu nebo mi napište přímo e-mailem.',
            },
        },
        skills: ['HTML', 'CSS', 'React', 'Tailwind', 'JavaScript', 'TypeScript', 'PostgreSQL', 'Git / GitHub'],
    },
}

export type Translations = typeof translations.en
