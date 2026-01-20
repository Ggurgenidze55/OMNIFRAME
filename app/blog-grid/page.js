'use client'
import Layout from "@/components/layout/Layout"
import Blog1 from "@/components/sections/Blog1"
import { useTranslation } from "@/contexts/LanguageContext"

const blogGridTexts = {
    breadcrumb: {
        en: "Blog Grid",
        ka: "ბლოგის გრიდი",
    },
}

export default function BlogGrid() {
    const { t } = useTranslation()

    return (
        <>
            <Layout
                headerStyle={2}
                footerStyle={3}
                breadcrumbTitle={t('breadcrumb', blogGridTexts.breadcrumb)}
                coverImage="/assets/img/covers/blog-grid-cover.jpg"
            >
                <Blog1 />
            </Layout>
        </>
    )
}