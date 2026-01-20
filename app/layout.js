import "/public/assets/css/bootstrap.min.css"
import "/public/assets/css/all.min.css"
import "/public/assets/css/magnific-popup.css"
import "/public/assets/css/nice-select.css"
import "/public/assets/css/swiper.min.css"
import "/public/assets/css/aos.css"
import "/public/assets/css/main.css"
import { Manrope, Plus_Jakarta_Sans } from 'next/font/google'
import { LanguageProvider } from '@/contexts/LanguageContext'

const manrope = Manrope({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ['latin'],
    variable: "--manrope",
    display: 'swap',
})
const jakarta = Plus_Jakarta_Sans({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ['latin'],
    variable: "--jakarta",
    display: 'swap',
})
export const metadata = {
    metadataBase: new URL('https://omniframe.ge'),
    title: {
        default: 'OMNIframe - Web Development Company',
        template: '%s | OMNIframe'
    },
    description: 'OMNIframe is a leading web development company specializing in frontend, backend, e-commerce solutions, and web maintenance services in Georgia, Tbilisi.',
    keywords: ['OMNIframe', 'web development', 'frontend development', 'backend development', 'e-commerce solutions', 'web maintenance', 'React', 'Next.js', 'Node.js', 'Python', 'Georgia', 'Tbilisi', 'ვებ დეველოპმენტი', 'საიტების დამზადება'],
    authors: [{ name: 'OMNIframe' }],
    creator: 'OMNIframe',
    publisher: 'OMNIframe',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    openGraph: {
        title: 'OMNIframe - Web Development Company',
        description: 'Building modern, high-performance websites and digital products tailored to your business.',
        url: 'https://omniframe.ge',
        siteName: 'OMNIframe',
        images: [
            {
                url: '/assets/img/logo/omniframe-og.png',
                width: 1200,
                height: 630,
                alt: 'OMNIframe - Innovative Web Solutions',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'OMNIframe - Web Development Company',
        description: 'Building modern, high-performance websites and digital products tailored to your business.',
        images: ['/assets/img/logo/omniframe-og.png'],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    alternates: {
        canonical: 'https://omniframe.ge',
        languages: {
            'en-US': 'https://omniframe.ge',
            'ka-GE': 'https://omniframe.ge/ka', // This is theoretical since we don't use [lang] routes yet
        },
    },
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/assets/img/logo/favicon.svg" type="image/svg+xml" />
                <link rel="apple-touch-icon" href="/assets/img/logo/favicon.svg" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Organization",
                            "name": "OMNIframe",
                            "url": "https://omniframe.ge",
                            "logo": "https://omniframe.ge/assets/img/logo/omniframe-logo-modern.svg",
                            "description": "OMNIframe is a leading web development company specializing in frontend, backend, e-commerce solutions, and web maintenance services.",
                            "address": {
                                "@type": "PostalAddress",
                                "streetAddress": "Gabriel Salos Street 120",
                                "addressLocality": "Tbilisi",
                                "addressCountry": "Georgia"
                            },
                            "contactPoint": {
                                "@type": "ContactPoint",
                                "telephone": "+995-544-445-221",
                                "contactType": "customer service",
                                "email": "info@omniframe.ge"
                            },
                            "sameAs": [
                                "https://facebook.com/omniframe",
                                "https://twitter.com/omniframe",
                                "https://linkedin.com/company/omniframe"
                            ]
                        })
                    }}
                />
            </head>
            <body className={`${manrope.variable} ${jakarta.variable} position-relative bg2-clr`} itemScope itemType="https://schema.org/Organization">
                <LanguageProvider>
                    {children}
                </LanguageProvider>
            </body>
        </html>
    )
}
