'use client'
import { useState } from 'react'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useTranslation } from "@/contexts/LanguageContext"
import { common } from "@/data/translations/common"

const serviceTexts = {
    ourServicesBadge: {
        en: "OUR SERVICES",
        ka: "ჩვენი სერვისები"
    },
    servicesTitle: {
        en: "OMNIframe web development services",
        ka: "OMNIframe-ის ვებ განვითარების სერვისები"
    },
    viewAllServicesBtn: {
        en: "View All Services",
        ka: "ყველა სერვისის ნახვა"
    },
    feTitle: {
        en: "Frontend Development",
        ka: "ფრონტენდ განვითარება"
    },
    feDesc: {
        en: "We create modern, responsive user interfaces using cutting-edge technologies like React, Next.js, and Vue.js for exceptional user experiences.",
        ka: "ვქმნით თანამედროვე,_RESPONSIVE ინტერფეისებს React‑ის, Next.js‑ის და Vue.js‑ის მსგავსი უახლესი ტექნოლოგიებით, რათა მომხმარებელს შევთავაზოთ გამორჩეული გამოცდილება."
    },
    beTitle: {
        en: "Backend Development",
        ka: "ბექენდ განვითარება"
    },
    beDesc: {
        en: "We build robust, scalable backend systems using Node.js, Python, and modern databases to power your web applications.",
        ka: "ვ ავითარებთ მდგრად და მასშტაბირებად ბექენდ სისტემებს Node.js‑ით, Python‑ით და თანამედროვე მონაცემთა ბაზებით, რომლითაც आपकी ვებ-აპლიკაციები საიმედოდ იმუშავებს."
    },
    ecomTitle: {
        en: "E-commerce Solutions",
        ka: "ელ. კომერციის გადაწყვეტები"
    },
    ecomDesc: {
        en: "We develop custom e-commerce platforms with secure payment gateways, inventory management, and seamless shopping experiences.",
        ka: "ვქმნით საბაჟო ელ. კომერციის პლატფორმებს უსაფრთხო გადახდის სისტემებით, მარაგის მართვით და კომფორტული შოპინგის გამოცდილებით."
    },
    maintenanceTitle: {
        en: "Web Maintenance",
        ka: "ვებ მხარდაჭერა"
    },
    maintenanceDesc: {
        en: "We provide ongoing support, updates, and maintenance to ensure your website runs smoothly and stays secure at all times.",
        ka: "ვთავაზობთ მუდმივ მხარდაჭერას, განახლებებს და ტექნიკურ მომსახურებას, რომ თქვენი ვებსაიტი ყოველთვის სტაბილურად და უსაფრთხოდ იმუშაოს."
    }
}

export default function Service1() {
    const [isAccordion, setIsAccordion] = useState(1)
    const { t } = useTranslation()
    const handleAccordion = (key) => {
        setIsAccordion(prevState => prevState === key ? null : key)
    }
    return (
        <>

            <section className="service-section pt-space pb-space">
                <div className="container position-relative">
                    <div className="d-flex align-items-center justify-content-between flex-wrap gap-5 mb-xxl-17 mb-xl-12 mb-lg-10 mb-md-10 mb-sm-10 mb-9">
                        <div className="pricing-title">
                            <div className="radius-btn text-uppercase cmn-border d-inline-flex radius100 py-xxl-2 py-2 px-xxl-4 px-4 theme-clr gap-xxl-4 gap-3 mb-xxl-8 mb-xl-6 mb-5">
                                {t('ourServicesBadge', serviceTexts.ourServicesBadge)}
                            </div>
                            <h2 className="stitle">
                                {t('servicesTitle', serviceTexts.servicesTitle)}
                            </h2>
                        </div>
                        <Link href="/service" className="radius-btn d-inline-flex radius100 py-xxl-2 py-2 px-xxl-5 px-5 theme-border theme-clr gap-xxl-4 gap-3 mb-xxl-8 mb-xl-6 mb-5 style-2">
                            {t('viewAllServicesBtn', serviceTexts.viewAllServicesBtn)}
                            <span className="rot60 d-inline-block">
                                <i className="fas fa-arrow-up theme-clr" />
                            </span>
                        </Link>
                    </div>
                    {/*Service Tabing section*/}
                    <div className="row g-xxl-6 g-4">
                        <div className="service-tabing-wrap Faqs-section">
                            <div className={`accordion-single py-xxl-9 py-xl-7 py-lg-6 py-5 bt-border ${isAccordion === 1 ? "active" : ""}`}>
                                <div className="header-area" onClick={() => handleAccordion(1)}>
                                    <div className="accordion-btn justify-content-between d-flex align-items-center text-start d-flex position-relative w-100">
                                        <div className="mtitle-ara">
                                            <span className="d-inine-flex serial-badge align-items-center gap-4 cmn-border radius100 white-clr">
                                                01
                                                <span className="rot60 d-inline-block theme-clr">
                                                    <i className="fa-solid fa-arrow-right" />
                                                </span>
                                            </span>
                                            <span className="mtitle d-block mt-6">
                                                <Link href="/frontend-development" className="white-clr whitehover">
                                                    {t('feTitle', serviceTexts.feTitle)}
                                                </Link>
                                            </span>
                                            <span className="pras mt-xxl-7 mt-xl-5 mt-4 d-block">
                                                {t('feDesc', serviceTexts.feDesc)}
                                            </span>
                                        </div>
                                        <div className="images-remove-area d-lg-flex d-none align-items-center gap-xxl-8 gap-4">
                                            <ul className="modern-list d-grid gap-2">
                                                <li className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> React & Next.js
                                                </li>
                                                <li className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> Responsive Design
                                                </li>
                                                <li className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> UI/UX
                                                </li>
                                                <li className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> Optimization
                                                </li>
                                                <li className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> Progressive Web Apps
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`accordion-single py-xxl-9 py-xl-7 py-lg-6 py-5 bt-border ${isAccordion === 2 ? "active" : ""}`}>
                                <div className="header-area" onClick={() => handleAccordion(2)}>
                                    <div className="accordion-btn justify-content-between d-flex align-items-center text-start d-flex position-relative w-100">
                                        <div className="mtitle-ara">
                                            <span className="d-inine-flex serial-badge align-items-center gap-4 cmn-border radius100 white-clr">
                                                02
                                                <span className="rot60 d-inline-block theme-clr">
                                                    <i className="fa-solid fa-arrow-right" />
                                                </span>
                                            </span>
                                            <span className="mtitle d-block mt-6">
                                                <Link href="/backend-development" className="white-clr whitehover">
                                                    {t('beTitle', serviceTexts.beTitle)}
                                                </Link>
                                            </span>
                                            <span className="pras mt-xxl-7 mt-xl-5 mt-4 d-block">
                                                {t('beDesc', serviceTexts.beDesc)}
                                            </span>
                                        </div>
                                        <div className="images-remove-area d-lg-flex d-none align-items-center gap-xxl-8 gap-4">
                                            <ul className="modern-list d-grid gap-2">
                                                <li className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> Node.js & Express
                                                </li>
                                                <li className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> Python & Django
                                                </li>
                                                <li className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> Database Design
                                                </li>
                                                <li className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> API Development
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`accordion-single py-xxl-9 py-xl-7 py-lg-6 py-5 bt-border ${isAccordion === 3 ? "active" : ""}`}>
                                <div className="header-area" onClick={() => handleAccordion(3)}>
                                    <div className="accordion-btn justify-content-between d-flex align-items-center text-start d-flex position-relative w-100">
                                        <div className="mtitle-ara">
                                            <span className="d-inine-flex serial-badge align-items-center gap-4 cmn-border radius100 white-clr">
                                                03
                                                <span className="rot60 d-inline-block theme-clr">
                                                    <i className="fa-solid fa-arrow-right" />
                                                </span>
                                            </span>
                                            <span className="mtitle d-block mt-6">
                                                <Link href="/ecommerce-solutions" className="white-clr whitehover">
                                                    {t('ecomTitle', serviceTexts.ecomTitle)}
                                                </Link>
                                            </span>
                                            <span className="pras mt-xxl-7 mt-xl-5 mt-4 d-block">
                                                {t('ecomDesc', serviceTexts.ecomDesc)}
                                            </span>
                                        </div>
                                        <div className="images-remove-area d-lg-flex d-none align-items-center gap-xxl-8 gap-4">
                                            <ul className="modern-list d-grid gap-2">
                                                <li className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> Payment Integration
                                                </li>
                                                <li className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> Inventory Management
                                                </li>
                                                <li className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> Order Processing
                                                </li>
                                                <li className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> Customer Analytics
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`accordion-single py-xxl-9 py-xl-7 py-lg-6 py-5 bb-border bt-border ${isAccordion === 4 ? "active" : ""}`}>
                                <div className="header-area" onClick={() => handleAccordion(4)}>
                                    <div className="accordion-btn justify-content-between d-flex align-items-center text-start d-flex position-relative w-100">
                                        <div className="mtitle-ara">
                                            <span className="d-inine-flex serial-badge align-items-center gap-4 cmn-border radius100 white-clr">
                                                04
                                                <span className="rot60 d-inline-block theme-clr">
                                                    <i className="fa-solid fa-arrow-right" />
                                                </span>
                                            </span>
                                            <span className="mtitle d-block mt-6">
                                                <Link href="/web-maintenance" className="white-clr whitehover">
                                                    {t('maintenanceTitle', serviceTexts.maintenanceTitle)}
                                                </Link>
                                            </span>
                                            <span className="pras mt-xxl-7 mt-xl-5 mt-4 d-block">
                                                {t('maintenanceDesc', serviceTexts.maintenanceDesc)}
                                            </span>
                                        </div>
                                        <div className="images-remove-area d-lg-flex d-none align-items-center gap-xxl-8 gap-4">
                                             <ul className="modern-list d-grid gap-2">
                                                 <li className="d-flex align-items-center gap-2">
                                                     <i className="fas fa-chevron-right" /> Security Updates
                                                 </li>
                                                 <li className="d-flex align-items-center gap-2">
                                                     <i className="fas fa-chevron-right" /> Performance Optimization
                                                 </li>
                                                 <li className="d-flex align-items-center gap-2">
                                                     <i className="fas fa-chevron-right" /> Content Updates
                                                 </li>
                                                 <li className="d-flex align-items-center gap-2">
                                                     <i className="fas fa-chevron-right" /> 24/7 Support
                                                 </li>
                                             </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Service Tabing section*/}
                </div>
            </section>
        </>
    )
}
