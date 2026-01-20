'use client'
import Layout from "@/components/layout/Layout"
import Contact from "@/components/sections/Contact"

export default function ContactPage() {
    return (
        <>
            <Layout headerStyle={2} footerStyle={3} breadcrumbTitle="Contact Us" coverImage="/assets/img/covers/contact-cover.jpg">
                <Contact />
            </Layout>
        </>
    )
}