'use client'
import { useLanguage, useTranslation } from '@/contexts/LanguageContext'
import { common } from '@/data/translations/common'

export default function LanguageSwitcher({ className = "", showText = false }) {
    const { language, toggleLanguage, isLoading } = useLanguage()
    const { t } = useTranslation()

    if (isLoading) {
        return null // Don't render during hydration
    }

    return (
        <div className={`language-switcher ${className}`}>
            <button 
                onClick={toggleLanguage}
                className="lang-btn d-flex align-items-center gap-2"
                title={t('language', common.language)}
                aria-label={`Switch to ${language === 'en' ? 'Georgian' : 'English'}`}
            >
                {/* Language Flag/Icon */}
                <span className="lang-flag">
                    {language === 'en' ? (
                        // US/UK Flag for English
                        <svg width="20" height="15" viewBox="0 0 20 15" xmlns="http://www.w3.org/2000/svg">
                            <rect width="20" height="15" fill="#012169"/>
                            <path d="M0,0 L20,15 M20,0 L0,15" stroke="#ffffff" strokeWidth="2"/>
                            <path d="M0,0 L20,15 M20,0 L0,15" stroke="#c8102e" strokeWidth="1"/>
                            <path d="M10,0 L10,15 M0,7.5 L20,7.5" stroke="#ffffff" strokeWidth="3"/>
                            <path d="M10,0 L10,15 M0,7.5 L20,7.5" stroke="#c8102e" strokeWidth="2"/>
                        </svg>
                    ) : (
                        // Georgian Flag for Georgian
                        <svg width="20" height="15" viewBox="0 0 20 15" xmlns="http://www.w3.org/2000/svg">
                            <rect width="20" height="15" fill="#ffffff"/>
                            <rect x="0" y="6" width="20" height="3" fill="#ff0000"/>
                            <rect x="8" y="0" width="4" height="15" fill="#ff0000"/>
                            <rect x="2" y="2" width="4" height="3" fill="#ff0000"/>
                            <rect x="14" y="2" width="4" height="3" fill="#ff0000"/>
                            <rect x="2" y="10" width="4" height="3" fill="#ff0000"/>
                            <rect x="14" y="10" width="4" height="3" fill="#ff0000"/>
                        </svg>
                    )}
                </span>
                
                {/* Language Text (optional) */}
                {showText && (
                    <span className="lang-text">
                        {language === 'en' ? 'ENG' : 'ქარ'}
                    </span>
                )}
                
                {/* Dropdown Arrow */}
                <span className="lang-arrow">
                    <i className="fas fa-chevron-down"></i>
                </span>
            </button>
        </div>
    )
}
