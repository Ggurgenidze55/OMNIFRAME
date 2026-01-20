export const metadata = {
    title: 'Our Portfolio',
    description: 'Explore our latest web development projects, e-commerce platforms, and digital solutions for clients in Georgia and internationally.',
    keywords: ['portfolio', 'web development projects', 'case studies', 'e-commerce projects', 'UI/UX design portfolio', 'OMNIframe'],
    alternates: {
        canonical: 'https://omniframe.ge/portfolio',
    },
    openGraph: {
        title: 'Our Portfolio | OMNIframe Projects',
        description: 'Showcasing our best work in web development and digital transformation.',
        url: 'https://omniframe.ge/portfolio',
    },
}

export default function PortfolioLayout({ children }) {
    return <>{children}</>
}
