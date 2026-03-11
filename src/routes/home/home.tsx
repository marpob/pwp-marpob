import type { Route } from "./+types/home";

export async function loader({ params }: Route.LoaderArgs) {
    const lan = await params.lan;

    return { lan };
}

export default function Home ({loaderData}: Route.ComponentProps) {
    // const{lan} = loaderData
    console.log(loaderData)

    return (
        <>
            <section
                className="overflow-hidden block mt-6 bg-center bg-no-repeat bg-dark bg-blue-500 bg-blend-multiply">
                <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
                    <h1 className="mb-6 text-4xl font-bold tracking-tighter text-white md:text-5xl lg:text-6xl">Martin
                        Poboril</h1>
                    <p className="mb-8 text-base font-normal text-white md:text-xl sm:px-16 lg:px-48">Full Stack Web
                        Developer and Tennis Coach</p>
                </div>
            </section>

            <section className="mb-8 py-16">
                <h2 className="text-4xl font-bold text-center">About Me</h2>
                <div className="mx-auto px-16 container flex gap-16 md:flex-row flex-col items-center">
                    <div className="mt-8 basis-1/3 w-1/2 md:mx-0mx-16">
                        <img src="images/Martin_Poboril.jpg" alt="Martin Poboril"/>
                    </div>
                    <div className="basis-2/3 md:mx-0 mx-8">
                        <p className="mb-4">I am Martin, web developer and tennis coach. My two biggest passions
                        are web development and tennis. In 2013 I graduated from Oklahoma Christian University with
                        bachelor degree in Information Technology. After college I wanted to be a professional tennis
                        player, but after while I realized I might be a better in coaching tennis young kids. My first
                        big experience was to coach Brenda Fruhvirtova who was at that time 12 years old and one of the
                        best junior on the world in her age group. While coaching I would be creating websites for people
                        I know.</p>

                        <p>For almost 8 years I worked as a match video analyst for Czech FedCup team. One of my jobs was also
                        to improve UI/UX design of the software we were working with. In 2016 I joined a company called
                        Vistasport where we were providing live streaming of tennis matches. I was in charge of the live
                        streaming department and helping with designing web solutions for our clients. More I was doing
                        this work, more I wanted to be involved in coding of the web solutions. On the end of 2025 I started
                        to learn frontend and on the start of the 2026 I joined full stack Deep Dive Bootcamp. I am
                        so grateful for all the opportunities and learning experiences I can be part of. My goal is to
                        be better everyday.</p>
                    </div>
                </div>
            </section>

            <section className="mb-8 py-16 bg-blue-500">
                <h2 className="text-4xl text-white font-bold text-center">Web development Portfolio</h2>

                <div className="container mx-auto p-16 flex gap-16 md:flex-row flex-col items-center">
                    <div className="mt-8 basis-1/3 w-1/2 md:mx-0mx-16">
                        <a href="https://www.jakubnicod.com/" target="_blank">
                            <img src="images/Jakub_Nicod_Web.jpg" alt="Image"/>
                        </a>
                        <h2 className="text-white font-bold text-center mt-4 text-xl">Jakub Nicod</h2>
                    </div>

                    <div className="mt-8 basis-1/3 w-1/2 md:mx-0mx-16">
                        <a href="http://www.solincosports.eu/" target="_blank">
                            <img src="images/Solinco_Web.jpg" alt="Image"/>
                        </a>
                        <h2 className="text-white font-bold text-center mt-4 text-xl">Solinco</h2>
                    </div>

                    <div className="mt-8 basis-1/3 w-1/2 md:mx-0mx-16">
                        <a href="https://www.ctsv.cz/" target="_blank">
                            <img src="images/ctsv.jpg" alt="Image"/>
                        </a>
                        <h2 className="text-white font-bold text-center mt-4 text-xl">CTSV</h2>
                    </div>

                    <div className="mt-8 basis-1/3 w-1/2 md:mx-0mx-16">
                        <a href="https://tenis-hajnovka.cz/" target="_blank">
                            <img src="images/hajnovka.jpg" alt="Image"/>
                        </a>
                        <h2 className="text-white font-bold text-center mt-4 text-xl">Hajnovka</h2>
                    </div>
                </div>

            </section>

            <section className="py-16">
                <h2 className="text-4xl font-bold text-center">Tennis Portfolio</h2>
                <div className="container mx-auto p-16 flex gap-16 md:flex-row flex-col items-center">
                    <div className="mt-8 basis-1/3 w-1/2 md:mx-0mx-16">
                        <img src="images/image400.png" alt="Image"/>
                    </div>
                    <div className="mt-8 basis-1/3 w-1/2 md:mx-0mx-16">
                        <img src="images/image400.png" alt="Image"/>
                    </div>
                    <div className="mt-8 basis-1/3 w-1/2 md:mx-0mx-16">
                        <img src="images/image400.png" alt="Image"/>
                    </div>
                    <div className="mt-8 basis-1/3 w-1/2 md:mx-0mx-16">
                        <img src="images/image400.png" alt="Image"/>
                    </div>
                </div>
            </section>

            <section className="bg-blue-500 dark:bg-gray-900">
                <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-white dark:text-white">Contact
                        Me</h2>
                    <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl"></p>
                    <form action="#" className="space-y-8">
                        <div>
                            <label htmlFor="email"
                                   className="block mb-2 text-sm font-medium text-white dark:text-gray-300">Your
                                email</label>
                            <input type="email" id="email"
                                   className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                   placeholder="name@email.com" required/>
                        </div>
                        {/*<div>*/}
                        {/*    <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>*/}
                        {/*    <input type="text" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required>*/}
                        {/*</div>*/}
                        <div className="sm:col-span-2">
                            <label htmlFor="message"
                                   className="block mb-2 text-sm font-medium text-white dark:text-gray-400">Your
                                message</label>
                            <textarea id="message" rows="6"
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