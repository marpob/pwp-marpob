import {useLanguage} from "../../context/LanguageContext.tsx";


export default function Home () {

    const text = {
        en: {
            heading: "Martin Poboril",
            subtitle: "Full Stack Web Developer and Tennis Coach",
            aboutMe: "About Me",
            aboutMeText: "I am Martin, web developer and tennis coach. My two biggest passions\n" +
                "are web development and tennis. In 2013 I graduated from Oklahoma Christian University with\n" +
                "bachelor degree in Information Technology. After college I wanted to be a professional tennis\n" +
                "player, but after while I realized I might be a better in coaching tennis young kids. My first\n" +
                "big experience was to coach Brenda Fruhvirtova who was at that time 12 years old and one of the\n" +
                "best junior on the world in her age group. While coaching I would be creating websites for people\n" +
                "I know.",
            aboutMeTextSec: "For almost 8 years I worked as a match video analyst for Czech FedCup team. One of my jobs was also\n" +
                "to improve UI/UX design of the software we were working with. In 2016 I joined a company called\n" +
                "Vistasport where we were providing live streaming of tennis matches. I was in charge of the live\n" +
                "streaming department and helping with designing web solutions for our clients. More I was doing\n" +
                "this work, more I wanted to be involved in coding of the web solutions. On the end of 2025 I started\n" +
                "to learn frontend and on the start of the 2026 I joined full stack Deep Dive Bootcamp. I am\n" +
                "so grateful for all the opportunities and learning experiences I can be part of. My goal is to\n" +
                "be better everyday.",
            WebPort: "Web Development Portfolio",
            ctst: "CTSV",
            tennis: "Tennis Achievements/Skills",
            tennNaia: "2012 NAIA Men's Tennis Champion with Oklahoma Christian University",
            brenda: "2018 - 2019, Personal Tennis Coach of Brenda Fruhvirtova (one of the best junior on the world under the age of 14)",
            fedcup: "2016 - 2022 Video data editor for Czech FedCup Team",
            kontakt: "Contact me",
            email: "Your email",
        },
        cz: {
            heading: "Martin Pobořil",
            subtitle: "Full-Stack developer a tenisový trenér",
            aboutMe: "O mně",
            aboutMeText: "Jsem Martin, webový vývojář a tenisový trenér. Mé dvě největší vášně jsou webový vývoj a tenis. V roce 2013 jsem absolvoval Oklahoma Christian University s bakalářským titulem v oboru informačních technologií. Po vysoké škole jsem se chtěl stát profesionálním tenistou, ale časem jsem si uvědomil, že bych mohl být lepším trénérem malých tenistů. Mojí první velkou zkušeností bylo trénování Brendy Fruhvirtové, které bylo v té době 12 let a byla jednou z nejlepších juniorek na světě ve své věkové kategorii. Během trénování jsem vytvářel webové stránky pro lidi, které znám.",
            aboutMeTextSec: "Téměř 8 let jsem pracoval jako analytik zápasových videí pro český FedCup tým. Jedním z mých úkolů bylo také vylepšovat UI/UX design softwaru, se kterým jsme pracovali. V roce 2016 jsem nastoupil do společnosti s názvem Vistasport, kde jsme poskytovali živé streamování tenisových zápasů. Měl jsem na starosti oddělení živého streamování a pomáhal jsem s návrhem webových řešení pro naše klienty. Čím více jsem tuto práci dělal, tím více jsem se chtěl podílet na kódování webových řešení. Na konci roku 2025 jsem se začal učit frontend a na začátku roku 2026 jsem se připojil k full-stack Deep Dive Bootcampu. Jsem velmi vděčný za všechny příležitosti a vzdělávací zkušenosti, kterých se můžu zúčastnit. Mým cílem je být každý den lepší.",
            WebPort: "Moje práce",
            ctst: "ČTSV",
            tennis: "Tenisové úspěchy/dovednosti",
            tennNaia: "2012, NAIA Vítěz národního tenisového mistrovství v USA",
            brenda: "2018 - 2019, Osobní tenisový trenér Brendy Fruhvirotvé (jedna z nejlepších juniorek na světě do 14ti let)",
            fedcup: "2016 - 2022 Zpracování dat z videa pro český FudCupový team",
            kontakt: "Kontakt",
            email: "E-mail",
        },
    };

    const { lang } = useLanguage();
    const t = text[lang]

    return (
        <>
            <section
                className="overflow-hidden block mt-6 bg-center bg-no-repeat bg-dark bg-blue-500 bg-blend-multiply">
                <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
                    <h1 className="mb-6 text-4xl font-bold tracking-tighter text-white md:text-5xl lg:text-6xl">{t.heading}</h1>
                    <p className="mb-8 text-base font-normal text-white md:text-xl sm:px-16 lg:px-48">{t.subtitle}</p>
                </div>
            </section>

            <section className="mb-8 py-16">
                <h2 className="text-4xl font-bold text-center">{t.aboutMe}</h2>
                <div className="mx-auto px-16 container flex gap-16 md:flex-row flex-col items-center">
                    <div className="mt-8 basis-1/3 w-1/2 md:mx-0mx-16">
                        <img src="images/Martin_Poboril.jpg" alt="Martin Poboril"/>
                    </div>
                    <div className="basis-2/3 md:mx-0 mx-8">
                        <p className="mb-4">{t.aboutMeText}</p>
                        <p>{t.aboutMeTextSec}</p>
                    </div>
                </div>
            </section>

            <section className="mb-8 py-16 bg-blue-500">
                <h2 className="text-4xl text-white font-bold text-center">{t.WebPort}</h2>

                <div className="container mx-auto p-16 flex gap-16 md:flex-row flex-col items-center">
                    <div className="mt-8 basis-1/3 w-1/2 md:mx-0mx-16">
                        <a href="https://www.jakubnicod.com/" target="_blank">
                            <img src="images/Jakub_Nicod_Web.jpg" alt="Jakub Nicod"/>
                        </a>
                        <h2 className="text-white font-bold text-center mt-4 text-xl">Jakub Nicod</h2>
                    </div>

                    <div className="mt-8 basis-1/3 w-1/2 md:mx-0mx-16">
                        <a href="http://www.solincosports.eu/" target="_blank">
                            <img src="images/Solinco_Web.jpg" alt="Solinco Tennis Products"/>
                        </a>
                        <h2 className="text-white font-bold text-center mt-4 text-xl">Solinco</h2>
                    </div>

                    <div className="mt-8 basis-1/3 w-1/2 md:mx-0mx-16">
                        <a href="https://www.ctsv.cz/" target="_blank">
                            <img src="images/ctsv.jpg" alt="Český tenisový svaz hráčů na vozíku"/>
                        </a>
                        <h2 className="text-white font-bold text-center mt-4 text-xl">{t.ctst}</h2>
                    </div>

                    <div className="mt-8 basis-1/3 w-1/2 md:mx-0mx-16">
                        <a href="https://tenis-hajnovka.cz/" target="_blank">
                            <img src="images/hajnovka.jpg" alt="Tenisový klub Hajnovka Praha"/>
                        </a>
                        <h2 className="text-white font-bold text-center mt-4 text-xl">Hajnovka</h2>
                    </div>
                </div>

            </section>

            <section className="mb-8">
                <h2 className="text-4xl font-bold text-center">{t.tennis}</h2>
                <div className="mx-auto px-16 container flex gap-16 md:flex-row flex-col items-center">
                    <div className="mt-8 basis-1/3 w-1/2 md:mx-0mx-16">
                        <img src="images/naia_tennis.jpg" alt="Martin Poboril"/>
                    </div>
                    <div className="basis-2/3 md:mx-0 mx-8">
                        <p className="text-2xl">{t.tennNaia}</p>
                    </div>
                </div>
            </section>

            <section className="mb-8">
                <div className="mx-auto px-16 container flex gap-16 md:flex-row flex-col items-center">
                    <div className="basis-1/3 w-1/2 md:mx-0mx-16">
                        <img src="images/Czech_FedCup_team.jpg" alt="Czech Tennis FedCup Team"/>
                    </div>
                    <div className="basis-2/3 md:mx-0 mx-8">
                        <p className="text-2xl">{t.fedcup}</p>
                    </div>
                </div>
            </section>

            <section className="mb-8">
                <div className="mx-auto px-16 container flex gap-16 md:flex-row flex-col items-center">
                    <div className="basis-1/3 w-1/2 md:mx-0mx-16">
                        <img src="images/Brenda_Fruhvirtova.jpg" alt="Tennis coach of Brenda Fruhvirtova"/>
                    </div>
                    <div className="basis-2/3 md:mx-0 mx-8">
                        <p className="text-2xl">{t.brenda}</p>
                    </div>
                </div>
            </section>

            <section className="bg-blue-500 dark:bg-gray-900">
                <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-white dark:text-white">{t.kontakt}</h2>
                    <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl"></p>
                    <form action="#" className="space-y-8">
                        <div>
                            <label htmlFor="email"
                                   className="block mb-2 text-sm font-medium text-white dark:text-gray-300">{t.email}</label>
                            <input type="email" id="email"
                                   className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                   placeholder="name@email.com" required/>
                        </div>

                        <div className="sm:col-span-2">
                            <label htmlFor="message"
                                   className="block mb-2 text-sm font-medium text-white dark:text-gray-400">Your message</label>
                            <textarea id="message" rows={6}
                                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                      placeholder="Leave a message..."></textarea>
                        </div>
                        <button type="submit"
                                className="bg-white py-3 px-5 text-sm font-bold text-center text-blue-500 rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send
                            message
                        </button>
                    </form>
                </div>
            </section>
        </>
    )
}