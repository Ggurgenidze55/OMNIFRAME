
import Link from "next/link"
import { useTranslation } from "@/contexts/LanguageContext"

const caseTexts = {
    ecommerce: { en: "E-commerce", ka: "E-commerce" },
    construction: { en: "Construction", ka: "მშენებლობა" },
    medicalTourism: { en: "Medical Tourism", ka: "სამედიცინო ტურიზმი" },
    engineering: { en: "Engineering", ka: "ინჟინერია" },
}

export default function CaseStudy1() {
    const { t } = useTranslation()
    return (
        <>

            <section className="case-study-vsesion01 bg2-clr pb-space">
                <div className="container">
                    <div className="row g-xxl-7 g-xl-5 g-4">
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
                                            {t('ecommerce', caseTexts.ecommerce)}
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
                                            {t('construction', caseTexts.construction)}
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
                                            {t('medicalTourism', caseTexts.medicalTourism)}
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
                                    <Link href="/meppers">
                                        <img src="/assets/img/portfolio/meppers-engineering-communications.png" alt="Meppers - Engineering Communications and Digital Solutions" className="w-100 overflow-hidden" />
                                    </Link>
                                </div>
                                <div className="blog-cont">
                                    <div className="d-flex align-items-center gap-xxl-5 gap-xl-4 gap-3 mb-xxl-5 mb-xl-4 mb-3">
                                        <Link href="/meppers" className="radius-btn cmn-border radius100 py-xxl-2 py-2 px-xxl-4 px-3 theme-clr style-2">
                                            {t('engineering', caseTexts.engineering)}
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
        </>
    )
}
