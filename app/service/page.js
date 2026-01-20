'use client'
import Layout from "@/components/layout/Layout"
import Service1 from "@/components/sections/Service1"
import { useTranslation } from "@/contexts/LanguageContext"
import { common } from "@/data/translations/common"

export default function Service() {
    const { t } = useTranslation()

    return (
        <>
            <Layout
                headerStyle={2}
                footerStyle={3}
                breadcrumbTitle={t('ourServices', common.ourServices)}
                coverImage="/assets/img/covers/services-cover.jpg"
            >
                <Service1 />
            </Layout>
        </>
    )
}