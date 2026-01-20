export const metadata = {
    title: 'OMNIframe Blog - Web Development Insights',
    description: 'Latest updates on web development trends, React, Next.js, and technical best practices from the OMNIframe team.',
    keywords: ['web development blog', 'React tips', 'Next.js tutorials', 'tech news Georgia', 'programming insights'],
    alternates: {
        canonical: 'https://omniframe.ge/blog-grid',
    },
    openGraph: {
        title: 'OMNIframe Blog | Web Development Insights',
        description: 'Stay updated with the latest in web technology and digital trends.',
        url: 'https://omniframe.ge/blog-grid',
    },
}

export default function BlogLayout({ children }) {
    return <>{children}</>
}
