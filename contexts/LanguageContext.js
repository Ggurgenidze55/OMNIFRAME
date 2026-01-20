'use client'
import React, { createContext, useContext, useState, useEffect } from 'react'

// Create Language Context
const LanguageContext = createContext()

// Language Provider Component
export function LanguageProvider({ children }) {
    const [language, setLanguage] = useState('en') // Default to English
    const [isLoading, setIsLoading] = useState(true)

    // Initialize language from localStorage on mount
    useEffect(() => {
        const savedLanguage = localStorage.getItem('omniframe-language')
        if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'ka')) {
            setLanguage(savedLanguage)
        }
        setIsLoading(false)
    }, [])

    // Save language to localStorage when changed
    useEffect(() => {
        if (!isLoading) {
            localStorage.setItem('omniframe-language', language)
            document.documentElement.lang = language
        }
    }, [language, isLoading])

    // Toggle between languages
    const toggleLanguage = () => {
        setLanguage(prev => prev === 'en' ? 'ka' : 'en')
    }

    // Set specific language
    const setSpecificLanguage = (lang) => {
        if (lang === 'en' || lang === 'ka') {
            setLanguage(lang)
        }
    }

    const value = {
        language,
        toggleLanguage,
        setLanguage: setSpecificLanguage,
        isEnglish: language === 'en',
        isGeorgian: language === 'ka',
        isLoading
    }

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    )
}

// Custom hook to use language context
export function useLanguage() {
    const context = useContext(LanguageContext)
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider')
    }
    return context
}

// Hook for translations
export function useTranslation() {
    const { language } = useLanguage()
    
    const t = (key, translations) => {
        if (!translations || typeof translations !== 'object') {
            return key
        }
        return translations[language] || translations['en'] || key
    }

    return { t, language }
}
