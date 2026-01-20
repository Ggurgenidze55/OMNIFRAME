'use client'
import Layout from "@/components/layout/Layout"
import Contact from "@/components/sections/Contact"
import { useTranslation } from "@/contexts/LanguageContext"
import { common } from "@/data/translations/common"

export default function ContactPage() {
    const { t } = useTranslation()
    return (
        <>
            <Layout headerStyle={2} footerStyle={3} breadcrumbTitle={t('contactUs', common.contactUs)} coverImage="/assets/img/covers/contact-cover.jpg">
                <Contact />
            </Layout>
        </>
    )
}