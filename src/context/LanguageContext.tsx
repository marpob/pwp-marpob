import { createContext, useContext, useState, type ReactNode } from "react";
import { translations, type Translations} from "../translate/translations.ts";

type Language = 'en' | 'cs'

interface LanguageContextType {
    lang: Language;
    toggleLang: () => void;
    t: Translations
}

const LanguageContext = createContext<LanguageContextType | null>(null);

function getInitialLanguage(): Language {
    // 1. Check if the user has a saved preference from a previous visit
    const saved = localStorage.getItem('language')
    if (saved === 'en' || saved === 'cs') {
        return saved;
    }

    // 2. No saved preference - check the browser's language setting navigator.language returns code like "cs", "cs-CZ", "en-US", etc.
    if (navigator.language.toLowerCase().startsWith('cs')) {
        return 'cs'
    }

    // 3. Default to English
    return 'en'
}


export function LanguageProvider({ children }: { children: ReactNode }) {
    const [lang, setLang] = useState<Language>(getInitialLanguage);

    function toggleLang() {
        const next: Language = lang === 'en' ? 'cs' : 'en'
            localStorage.setItem("language", next)
            setLang(next)
        }

    // Cast resolves the Typescript union type issue from `as const` in translation
    const t = translations[lang] as unknown as Translations

    return (
        <LanguageContext.Provider value={{ lang, toggleLang, t}}>
            {children}
        </LanguageContext.Provider>
    )
}

export function useLanguage(): LanguageContextType {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}
