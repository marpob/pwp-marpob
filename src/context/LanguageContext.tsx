import { createContext, useContext, useState, type ReactNode } from "react";

type Language = "en" | "cz";

interface LanguageContextType {
    lang: Language;
    toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

function getInitialLanguage(): "en" | "cz" {
    // 1. Check if the user has a saved preference from a previous visit
    const saved = localStorage.getItem("language");
    if (saved === "en" || saved === "cz") {
        return saved;
    }

    // 2. No saved preference - check the browser's language setting navigator.language returns code like "cs", "cs-CZ", "en-US", etc.
    if (navigator.language.startsWith("cs")) {
        return "cz";
    }

    // 3. Default to English
    return "en";
}


export function LanguageProvider({ children }: { children: ReactNode }) {
    const [lang, setLang] = useState<Language>(getInitialLanguage);
    console.log(lang)
    const toggleLang = () => {
        setLang((prev) => {
            const next = prev === "cz" ? "en" : "cz";
            localStorage.setItem("language", next);
            return next;
        });
    };
    return (
        <LanguageContext.Provider value={{ lang, toggleLang}}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage(): LanguageContextType {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}
