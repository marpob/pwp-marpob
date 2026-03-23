import {useLanguage} from "../../context/LanguageContext.tsx";

export default function Home () {

    const text = {
        en: {
            heading: "Martin Poboril",
            subtitle: "Full Stack Web Developer and Tennis Coach",
            aboutMe: "About Me",
            aboutMeText: "I am Martin, and I love to share my passion for web development and tennis. My journey started with" +
                " passion for tennis followed by degree in Information Technology from Oklahoma Christian University." +
                " I was honored to coach one of the best juniors on the world while simultaneously improving my programming skills." +
                " One of my life goals is to get better everyday.",
            WebPort: "Web Development Portfolio",
            ctst: "CTSV",
            webMore: "More >>",
            tennis: "Tennis Achievements/Skills",
            tennNaia: "2012 NAIA Men's Tennis Champion with Oklahoma Christian University",
            article: "(Read Article)",
            allamer: "2012 All-American Collegiate tennis player",
            brenda: "2018 - 2019, Personal Tennis Coach of Brenda Fruhvirtova (one of the best junior on the world under the age of 14)",
            fedcup: "2016 - 2022 Video data editor for Czech FedCup Team",
            funFacts: "Fun Facts About Me",
            firstFact: "I love to read autobiographies of successful people.",
            secondFact: "The Ed Mylett Podcast",
            thirdFact: "I love to travel. Places I visited: New Zealand, USA, Almost all Europe",
            fourthFact: "I recharge my batteries on mountain bike or motorbike",
            kontakt: "Contact me",
            email: "Your email",
            emailPlace: "name@email.com",
            message: "Your message",
            messagePlace: "Leave a message...",
            send: "Send message",
        },
        cz: {
            heading: "Martin Pobořil",
            subtitle: "Full-Stack developer a tenisový trenér",
            aboutMe: "O mně",
            aboutMeText: "Jmenuji se Martin a rád sdílím svou vášeň pro vývoj webových aplikací a tenis. Moje cesta začala s vášní pro tenis a následně jsem získal titul v oboru informačních technologií na Oklahoma Christian University. Měl jsem tu čest trénovat jednu z nejlepších juniorek na světě a zároveň zlepšovat své programovací dovednosti. Jedním z mých životních cílů je být každý den lepší.",
            WebPort: "Moje práce",
            ctst: "ČTSV",
            webMore: "Více >>",
            tennis: "Tenisové úspěchy/dovednosti",
            tennNaia: "2012, NAIA Vítěz národního tenisového mistrovství v USA",
            article: "(Přečíst článek)",
            allamer: "2012 ocenění All-American Collegiate",
            brenda: "2018 - 2019, Osobní tenisový trenér Brendy Fruhvirotvé (jedna z nejlepších juniorek na světě do 14ti let)",
            fedcup: "2016 - 2022 Zpracování dat z videa pro český FudCupový team",
            funFacts: "Zábava",
            firstFact: "Rád čtu autobiografie úspěšných lidí.",
            secondFact: "Podcast Eda Myletta",
            thirdFact: "Miluji cestování. Místa, která jsem navštívil: Nový Zéland, USA, téměř celá Evropa",
            fourthFact: "Dobíjím si baterie na horském kole nebo motorce",
            kontakt: "Kontakt",
            email: "E-mail",
            emailPlace: "jmeno@email.cz",
            message: "Zpráva",
            messagePlace: "Zanech zprávu...",
            send: "Poslat",
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
                        <img className="w-80" src="/Martin_Poboril.jpg" alt="Martin Poboril"/>
                    </div>
                    <div className="basis-2/3 md:mx-0 mx-8 text-xl/8">
                        <p className="mb-4">{t.aboutMeText}</p>
                    </div>
                </div>
            </section>

            <section className="mb-8 py-16 bg-blue-500">
                <h2 className="text-4xl text-white font-bold text-center">{t.WebPort}</h2>

                <div className="container mx-auto p-16 flex gap-16 md:flex-row flex-col items-center">
                    <div className="mt-8 basis-1/3 w-1/2 md:mx-0mx-16">
                        <a href="https://www.jakubnicod.com/" target="_blank">
                            <img src="/Jakub_Nicod_Web.jpg" alt="Jakub Nicod"/>
                        </a>
                        <h2 className="text-white font-bold text-center mt-4 text-xl">Jakub Nicod</h2>
                    </div>

                    <div className="mt-8 basis-1/3 w-1/2 md:mx-0mx-16">
                        <a href="http://www.solincosports.eu/" target="_blank">
                            <img src="/Solinco_Web.jpg" alt="Solinco Tennis Products"/>
                        </a>
                        <h2 className="text-white font-bold text-center mt-4 text-xl">Solinco</h2>
                    </div>

                    <div className="mt-8 basis-1/3 w-1/2 md:mx-0mx-16">
                        <a href="https://www.ctsv.cz/" target="_blank">
                            <img src="/ctsv.jpg" alt="Český tenisový svaz hráčů na vozíku"/>
                        </a>
                        <h2 className="text-white font-bold text-center mt-4 text-xl">{t.ctst}</h2>
                    </div>

                    <div className="mt-8 basis-1/3 w-1/2 md:mx-0mx-16">
                        <a href="https://tenis-hajnovka.cz/" target="_blank">
                            <img src="/hajnovka.jpg" alt="Tenisový klub Hajnovka Praha"/>
                        </a>
                        <h2 className="text-white font-bold text-center mt-4 text-xl">Hajnovka</h2>
                    </div>
                </div>

                <div className="text-center text-2xl text-white underline">
                    <a href="/web-development">{t.webMore}</a>
                </div>

            </section>

            <section className="mb-8">
                <h2 className="text-4xl font-bold text-center">{t.tennis}</h2>

                <div className="mx-auto px-16 mt-8 container flex gap-8 md:flex-row flex-col items-center text-2xl">
                    <svg className="w-[28px] h-[28px] text-blue-500 dark:text-white" aria-hidden="true"
                         xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                         viewBox="0 0 24 24">
                        <path fill-rule="evenodd"
                              d="M3 4a1 1 0 0 0-.822 1.57L6.632 12l-4.454 6.43A1 1 0 0 0 3 20h13.153a1 1 0 0 0 .822-.43l4.847-7a1 1 0 0 0 0-1.14l-4.847-7a1 1 0 0 0-.822-.43H3Z"
                              clip-rule="evenodd"/>
                    </svg>
                    <p>{t.tennNaia}</p>
                    <a href="https://oceagles.com/news/2012/5/25/TEN_1759.aspx" target="_blank" className="underline">{t.article}</a>
                </div>

                <div className="mx-auto px-16 mt-8 container flex gap-8 md:flex-row flex-col items-center text-2xl">
                    <svg className="w-[28px] h-[28px] text-blue-500 dark:text-white" aria-hidden="true"
                         xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                         viewBox="0 0 24 24">
                        <path fill-rule="evenodd"
                              d="M3 4a1 1 0 0 0-.822 1.57L6.632 12l-4.454 6.43A1 1 0 0 0 3 20h13.153a1 1 0 0 0 .822-.43l4.847-7a1 1 0 0 0 0-1.14l-4.847-7a1 1 0 0 0-.822-.43H3Z"
                              clip-rule="evenodd"/>
                    </svg>
                    <p>{t.allamer}</p>
                </div>

                <div className="mx-auto px-16 mt-8 container flex gap-8 md:flex-row flex-col items-center text-2xl">
                    <svg className="w-[28px] h-[28px] text-blue-500 dark:text-white" aria-hidden="true"
                         xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                         viewBox="0 0 24 24">
                        <path fill-rule="evenodd"
                              d="M3 4a1 1 0 0 0-.822 1.57L6.632 12l-4.454 6.43A1 1 0 0 0 3 20h13.153a1 1 0 0 0 .822-.43l4.847-7a1 1 0 0 0 0-1.14l-4.847-7a1 1 0 0 0-.822-.43H3Z"
                              clip-rule="evenodd"/>
                    </svg>
                    <p>{t.fedcup}</p>
                </div>

                <div className="mx-auto px-16 mt-8 container flex gap-8 md:flex-row flex-col items-center text-2xl">
                    <svg className="w-[28px] h-[28px] text-blue-500 dark:text-white" aria-hidden="true"
                         xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                         viewBox="0 0 24 24">
                        <path fill-rule="evenodd"
                              d="M3 4a1 1 0 0 0-.822 1.57L6.632 12l-4.454 6.43A1 1 0 0 0 3 20h13.153a1 1 0 0 0 .822-.43l4.847-7a1 1 0 0 0 0-1.14l-4.847-7a1 1 0 0 0-.822-.43H3Z"
                              clip-rule="evenodd"/>
                    </svg>
                    <p>{t.brenda}</p>
                </div>

                <div className="text-center text-2xl text-blue-500 underline mt-8">
                    <a href="/tennis">{t.webMore}</a>
                </div>

            </section>

            <section className="bg-blue-500 pb-16">
                <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                    <h2 className="text-4xl tracking-tight font-extrabold text-center text-white dark:text-white">{t.funFacts}</h2>
                </div>

                <div className="mx-auto px-16 container flex gap-8 md:flex-row flex-col items-center text-2xl text-white">
                    <svg className="w-[28px] h-[28px] text-white dark:text-white" aria-hidden="true"
                         xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                         viewBox="0 0 24 24">
                        <path fill-rule="evenodd"
                              d="M3 4a1 1 0 0 0-.822 1.57L6.632 12l-4.454 6.43A1 1 0 0 0 3 20h13.153a1 1 0 0 0 .822-.43l4.847-7a1 1 0 0 0 0-1.14l-4.847-7a1 1 0 0 0-.822-.43H3Z"
                              clip-rule="evenodd"/>
                    </svg>
                    <p>{t.firstFact}</p>
                </div>

                <div className="mx-auto px-16 container flex gap-8 md:flex-row flex-col items-center text-2xl text-white mt-8">
                    <svg className="w-[28px] h-[28px] text-white dark:text-white" aria-hidden="true"
                         xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                         viewBox="0 0 24 24">
                        <path fill-rule="evenodd"
                              d="M3 4a1 1 0 0 0-.822 1.57L6.632 12l-4.454 6.43A1 1 0 0 0 3 20h13.153a1 1 0 0 0 .822-.43l4.847-7a1 1 0 0 0 0-1.14l-4.847-7a1 1 0 0 0-.822-.43H3Z"
                              clip-rule="evenodd"/>
                    </svg>
                    <p>{t.secondFact}</p>
                </div>

                <div className="mx-auto px-16 container flex gap-8 md:flex-row flex-col items-center text-2xl text-white mt-8">
                    <svg className="w-[28px] h-[28px] text-white dark:text-white" aria-hidden="true"
                         xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                         viewBox="0 0 24 24">
                        <path fill-rule="evenodd"
                              d="M3 4a1 1 0 0 0-.822 1.57L6.632 12l-4.454 6.43A1 1 0 0 0 3 20h13.153a1 1 0 0 0 .822-.43l4.847-7a1 1 0 0 0 0-1.14l-4.847-7a1 1 0 0 0-.822-.43H3Z"
                              clip-rule="evenodd"/>
                    </svg>
                    <p>{t.thirdFact}</p>
                </div>

                <div className="mx-auto px-16 container flex gap-8 md:flex-row flex-col items-center text-2xl text-white mt-8">
                    <svg className="w-[28px] h-[28px] text-white dark:text-white" aria-hidden="true"
                         xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                         viewBox="0 0 24 24">
                        <path fill-rule="evenodd"
                              d="M3 4a1 1 0 0 0-.822 1.57L6.632 12l-4.454 6.43A1 1 0 0 0 3 20h13.153a1 1 0 0 0 .822-.43l4.847-7a1 1 0 0 0 0-1.14l-4.847-7a1 1 0 0 0-.822-.43H3Z"
                              clip-rule="evenodd"/>
                    </svg>
                    <p>{t.fourthFact}</p>
                </div>

            </section>

            <section className="bg-white">
                <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-blue-500">{t.kontakt}</h2>
                    <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl"></p>
                    <form action="#" className="space-y-8">
                        <div>
                            <label htmlFor="email"
                                   className="block mb-2 text-sm font-medium text-black dark:text-gray-300">{t.email}</label>
                            <input type="email" id="email"
                                   className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                   placeholder={t.emailPlace} required/>
                        </div>

                        <div className="sm:col-span-2">
                            <label htmlFor="message"
                                   className="block mb-2 text-sm font-medium text-black dark:text-gray-400">{t.message}</label>
                            <textarea id="message" rows={6}
                                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                      placeholder={t.messagePlace}></textarea>
                        </div>
                        <button type="submit"
                                className="bg-blue-500 py-3 px-5 text-sm font-bold text-center text-white rounded-lg sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">{t.send}</button>
                    </form>
                </div>
            </section>
        </>
    )
}