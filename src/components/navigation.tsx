import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import { useLanguage } from "../context/LanguageContext.tsx";

export function Navigation() {
    const {lang, toggleLang } = useLanguage();
    return (
        <Navbar fluid rounded className={'border-6 border-gray-200 bg-gray-100 fixed top-0 w-full z-50'}>
            <NavbarBrand href="/">
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">{lang === "en" ? "Martin Poboril" : "Martin Pobořil"}</span>
            </NavbarBrand>
            <NavbarToggle />
            <NavbarCollapse>
                <NavbarLink href="tennis">{lang === "en" ? "Tennis" : "Tenis"}</NavbarLink>
                <NavbarLink href="web-development">{lang === "en" ? "Web Developer" : "Webový vývojář"}</NavbarLink>
                <NavbarLink as="button" onClick={toggleLang}>
                    {lang === "en" ? "Česky" : "English"}
                </NavbarLink>
            </NavbarCollapse>
        </Navbar>
    );
}