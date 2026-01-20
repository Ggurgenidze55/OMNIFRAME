'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useTranslation } from "@/contexts/LanguageContext"

const portfolioTexts = {
    breadcrumb: { en: "Portfolio Projects", ka: "პორტფოლიო პროექტები" },
    newmotorsiCategory: { en: "E-commerce", ka: "ელ. კომერცია" },
    newmotorsiTitle: { en: "New Motorsi - Professional Warehouse Solutions", ka: "New Motorsi - პროფესიონალური საწყობის გადაწყვეტები" },
    grandegroupCategory: { en: "Construction", ka: "აშენება და ინვესტიციები" },
    grandegroupTitle: { en: "Grande Group - Business & Investment Solutions", ka: "Grande Group - ბიზნესისა და ინვესტიციების გადაწყვეტილებები" },
    healCategory: { en: "Medical Tourism", ka: "მედიკური ტურიზმი" },
    healTitle: { en: "Heal.ge - Modern Healthcare Platform", ka: "Heal.ge - თანამედროვე ჯანდაცვის პლატფორმა" },
    igbCategory: { en: "Construction", ka: "ინვესტიციები" },
    igbTitle: { en: "Invest Group Batumi - Investment Services", ka: "Invest Group Batumi - საინვესტიციო სერვისები" },
    thalassaCategory: { en: "Construction", ka: "ტურიზმი და ჰოსპიტალითი" },
    thalassaTitle: { en: "Thalassa Group - Tourism & Hospitality", ka: "Thalassa Group - ტურიზმი და ჰოსპიტალითი" },
    meppersCategory: { en: "Engineering", ka: "ინჟინერია" },
    meppersTitle: { en: "Meppers - Innovative Digital Solutions", ka: "Meppers - ინოვაციური ციფრული გადაწყვეტილებები" }
}

export default function Portfolio() {
    const { t } = useTranslation()

    return (
        <>
            <Layout
                headerStyle={2}
                footerStyle={3}
                breadcrumbTitle={t('breadcrumb', portfolioTexts.breadcrumb)}
                coverImage="/assets/img/covers/services-cover.jpg"
            >
                <section className="case-study pt-space pb-space">
                    <div className="container">
                        <div className="row g-xxl-7 g-xl-6 g-6">
                            <div className="col-lg-6 col-md-6" data-aos="zoom-in-left" data-aos-duration={1400}>
                                <div className="blog-widget-item bb-border pb-xxl-7 pb-xl-6 pb-4">
                                    <div className="thumb w-100 overflow-hidden mb-xxl-7 mb-xl-6 mb-4">
                                        <Link href="/newmotorsi">
                                            <img src="/assets/img/portfolio/newmotorsi-warehouse-solutions.png" alt="New Motorsi - Professional Warehouse Solutions and E-commerce Platform" className="w-100 overflow-hidden" />
                                        </Link>
                                    </div>
                                    <div className="blog-cont">
                                        <div className="d-flex align-items-center gap-xxl-5 gap-xl-4 gap-3 mb-xxl-5 mb-xl-4 mb-3">
                                            <Link href="/newmotorsi" className="radius-btn cmn-border radius100 py-xxl-2 py-2 px-xxl-4 px-3 theme-clr style-2">
                                                E-commerce
                                                <span className="rot60 d-inline-block ml-10">
                                                    <i className="fas fa-arrow-up theme-clr" />
                                                </span>
                                            </Link>
                                        </div>
                                        <h5>
                                            <Link href="/newmotorsi" className="white-clr d-flex align-items-center justify-content-between gap-3">
                                                New Motorsi - Professional Warehouse Solutions
                                                <span className="rot60">
                                                    <i className="fas fa-arrow-up theme-clr" />
                                                </span>
                                            </Link>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6" data-aos="zoom-in-left" data-aos-duration={1600}>
                                <div className="blog-widget-item bb-border pb-xxl-7 pb-xl-6 pb-4">
                                    <div className="thumb w-100 overflow-hidden mb-xxl-7 mb-xl-6 mb-4">
                                        <Link href="/grandegroup">
                                            <img src="/assets/img/portfolio/grandegroup-business-solutions.png" alt="Grande Group - Business and Investment Solutions Company" className="w-100 overflow-hidden" />
                                        </Link>
                                    </div>
                                    <div className="blog-cont">
                                        <div className="d-flex align-items-center gap-xxl-5 gap-xl-4 gap-3 mb-xxl-5 mb-xl-4 mb-3">
                                            <Link href="/grandegroup" className="radius-btn cmn-border radius100 py-xxl-2 py-2 px-xxl-4 px-3 theme-clr style-2">
                                                Construction
                                                <span className="rot60 d-inline-block ml-10">
                                                    <i className="fas fa-arrow-up theme-clr" />
                                                </span>
                                            </Link>
                                        </div>
                                        <h5>
                                            <Link href="/grandegroup" className="white-clr d-flex align-items-center justify-content-between gap-3">
                                                Grande Group - Business & Investment Solutions
                                                <span className="rot60">
                                                    <i className="fas fa-arrow-up theme-clr" />
                                                </span>
                                            </Link>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6" data-aos="zoom-in-left" data-aos-duration={1800}>
                                <div className="blog-widget-item bb-border pb-xxl-7 pb-xl-6 pb-4">
                                    <div className="thumb w-100 overflow-hidden mb-xxl-7 mb-xl-6 mb-4">
                                        <Link href="/heal">
                                            <img src="/assets/img/portfolio/heal-medical-tourism.png" alt="Heal.ge - Medical Tourism Platform and Healthcare Services in Georgia" className="w-100 overflow-hidden" />
                                        </Link>
                                    </div>
                                    <div className="blog-cont">
                                        <div className="d-flex align-items-center gap-xxl-5 gap-xl-4 gap-3 mb-xxl-5 mb-xl-4 mb-3">
                                            <Link href="/heal" className="radius-btn cmn-border radius100 py-xxl-2 py-2 px-xxl-4 px-3 theme-clr style-2">
                                                Medical Tourism
                                                <span className="rot60 d-inline-block ml-10">
                                                    <i className="fas fa-arrow-up theme-clr" />
                                                </span>
                                            </Link>
                                        </div>
                                        <h5>
                                            <Link href="/heal" className="white-clr d-flex align-items-center justify-content-between gap-3">
                                                Heal.ge - Modern Healthcare Platform
                                                <span className="rot60">
                                                    <i className="fas fa-arrow-up theme-clr" />
                                                </span>
                                            </Link>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6" data-aos="zoom-in-left" data-aos-duration={1900}>
                                <div className="blog-widget-item bb-border pb-xxl-7 pb-xl-6 pb-4">
                                    <div className="thumb w-100 overflow-hidden mb-xxl-7 mb-xl-6 mb-4">
                                        <Link href="/investgroupbatumi">
                                            <img src="/assets/img/portfolio/investgroup-batumi-investment.png" alt="Invest Group Batumi - Investment Services and Business Solutions" className="w-100 overflow-hidden" />
                                        </Link>
                                    </div>
                                    <div className="blog-cont">
                                        <div className="d-flex align-items-center gap-xxl-5 gap-xl-4 gap-3 mb-xxl-5 mb-xl-4 mb-3">
                                            <Link href="/investgroupbatumi" className="radius-btn cmn-border radius100 py-xxl-2 py-2 px-xxl-4 px-3 theme-clr style-2">
                                                Construction
                                                <span className="rot60 d-inline-block ml-10">
                                                    <i className="fas fa-arrow-up theme-clr" />
                                                </span>
                                            </Link>
                                        </div>
                                        <h5>
                                            <Link href="/investgroupbatumi" className="white-clr d-flex align-items-center justify-content-between gap-3">
                                                Invest Group Batumi - Investment Services
                                                <span className="rot60">
                                                    <i className="fas fa-arrow-up theme-clr" />
                                                </span>
                                            </Link>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6" data-aos="zoom-in-left" data-aos-duration={2000}>
                                <div className="blog-widget-item bb-border pb-xxl-7 pb-xl-6 pb-4">
                                    <div className="thumb w-100 overflow-hidden mb-xxl-7 mb-xl-6 mb-4">
                                        <Link href="/thalassagroup">
                                            <img src="/assets/img/portfolio/thalassagroup-tourism-hospitality.png" alt="Thalassa Group - Tourism and Hospitality Services in Georgia" className="w-100 overflow-hidden" />
                                        </Link>
                                    </div>
                                    <div className="blog-cont">
                                        <div className="d-flex align-items-center gap-xxl-5 gap-xl-4 gap-3 mb-xxl-5 mb-xl-4 mb-3">
                                            <Link href="/thalassagroup" className="radius-btn cmn-border radius100 py-xxl-2 py-2 px-xxl-4 px-3 theme-clr style-2">
                                                Construction
                                                <span className="rot60 d-inline-block ml-10">
                                                    <i className="fas fa-arrow-up theme-clr" />
                                                </span>
                                            </Link>
                                        </div>
                                        <h5>
                                            <Link href="/thalassagroup" className="white-clr d-flex align-items-center justify-content-between gap-3">
                                                Thalassa Group - Tourism & Hospitality
                                                <span className="rot60">
                                                    <i className="fas fa-arrow-up theme-clr" />
                                                </span>
                                            </Link>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6" data-aos="zoom-in-left" data-aos-duration={2100}>
                                <div className="blog-widget-item bb-border pb-xxl-7 pb-xl-6 pb-4">
                                    <div className="thumb w-100 overflow-hidden mb-xxl-7 mb-xl-6 mb-4">
                                        <Link href="/meppers">
                                            <img src="/assets/img/portfolio/meppers-engineering-communications.png" alt="Meppers - Engineering Communications and Digital Solutions" className="w-100 overflow-hidden" />
                                        </Link>
                                    </div>
                                    <div className="blog-cont">
                                        <div className="d-flex align-items-center gap-xxl-5 gap-xl-4 gap-3 mb-xxl-5 mb-xl-4 mb-3">
                                            <Link href="/meppers" className="radius-btn cmn-border radius100 py-xxl-2 py-2 px-xxl-4 px-3 theme-clr style-2">
                                                Engineering
                                                <span className="rot60 d-inline-block ml-10">
                                                    <i className="fas fa-arrow-up theme-clr" />
                                                </span>
                                            </Link>
                                        </div>
                                        <h5>
                                            <Link href="/meppers" className="white-clr d-flex align-items-center justify-content-between gap-3">
                                                Meppers - Innovative Digital Solutions
                                                <span className="rot60">
                                                    <i className="fas fa-arrow-up theme-clr" />
                                                </span>
                                            </Link>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}
