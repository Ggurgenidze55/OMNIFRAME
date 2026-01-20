'use client'
import Layout from "@/components/layout/Layout"
import Hero1 from "@/components/sections/Hero1"
import Service1 from "@/components/sections/Service1"
import Product1 from "@/components/sections/Product1"
import CaseStudy1 from "@/components/sections/CaseStudy1"
import TextSLider1 from "@/components/sections/TextSLider1"

export default function Home() {
    return (
        <>
            <Layout headerStyle={2} footerStyle={3}>
                <Hero1 coverImage="/assets/img/covers/home-cover.jpg" />
                <Service1 />
                <Product1 />
                <CaseStudy1 />
                <TextSLider1 />
            </Layout>
        </>
    )
}