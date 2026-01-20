'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { useTranslation } from "@/contexts/LanguageContext"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    spaceBetween: 0,
    speed: 1500,
    loop: true,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".cmn-prev",
        prevEl: ".cmn-next",
    },

    breakpoints: {
        1199: {
            slidesPerView: 1,
        },
        991: {
            slidesPerView: 1,
        },
        767: {
            slidesPerView: 1,
        },
        575: {
            slidesPerView: 1,
        },
        0: {
            slidesPerView: 1,
        },
    },
}

const maintenanceTexts = {
    breadcrumb: { en: "Web Maintenance", ka: "ვებ მოვლა" },
    mainTitle: { en: "Comprehensive Web Maintenance Services for Optimal Performance.", ka: "ყოვლისმომცველი ვებ მოვლის სერვისები ოპტიმალური შესრულებისთვის." },
    security: { en: "Security", ka: "უსაფრთხოება" },
    performance: { en: "Performance", ka: "შესრულება" },
    updates: { en: "Updates", ka: "განახლებები" },
    support: { en: "Support", ka: "მხარდაჭერა" },
    serviceOverview: { en: "Service Overview", ka: "სერვისის მიმოხილვა" },
    paragraph1: { en: "Our web maintenance services ensure your website remains secure, fast, and up-to-date at all times. We provide ongoing support, security updates, performance optimization, and content management to keep your online presence running smoothly and efficiently.", ka: "ჩვენი ვებ მოვლის სერვისები უზრუნველყოფს, რომ თქვენი ვებსაიტი იყოს უსაფრთხო, სწრაფი და განახლებული ყოველთვის. ჩვენ გთავაზობთ მუდმივ მხარდაჭერას, უსაფრთხოების განახლებებს, შესრულების ოპტიმიზაციასა და კონტენტის მართვას, რათა თქვენი ონლაინ არსებობა შეუფერხებლად და ეფექტურად მუშაობდეს." },
    paragraph2: { en: "We understand that a website requires continuous attention to maintain its performance and security. Our maintenance team monitors your site 24/7, performs regular backups, updates software, and addresses any issues promptly to minimize downtime and ensure optimal user experience.", ka: "ჩვენ გვესმის, რომ ვებსაიტს სჭირდება მუდმივი ყურადღება მისი შესრულებისა და უსაფრთხოების შესანარჩუნებლად. ჩვენი მოვლის გუნდი აკონტროლებს თქვენს საიტს 24/7, ასრულებს რეგულარულ ბექაპებს, ახდენს პროგრამული უზრუნველყოფის განახლებებს და სწრაფად წყვეტს ნებისმიერ პრობლემას, რათა შემცდეს გაუმართაობის დრო და უზრუნველვყოთ ოპტიმალური მომხმარებლის გამოცდილება." },
    benefitsTitle: { en: "Benefits With Our Web Maintenance", ka: "ჩვენი ვებ მოვლის უპირატესობები" },
    benefit1: { en: "24/7 website monitoring & support", ka: "24/7 ვებსაიტის მონიტორინგი და მხარდაჭერა" },
    benefit2: { en: "Security updates & vulnerability fixes", ka: "უსაფრთხოების განახლებები და დაუცველობის გასწორება" },
    benefit3: { en: "Performance optimization & speed improvements", ka: "შესრულების ოპტიმიზაცია და სიჩქარის გაუმჯობესება" },
    benefit4: { en: "Regular backups & disaster recovery", ka: "რეგულარული ბექაპები და კატასტროფის აღდგენა" },
    benefit5: { en: "Content updates & management", ka: "კონტენტის განახლებები და მართვა" },
    benefit6: { en: "SEO maintenance & improvements", ka: "SEO მოვლა და გაუმჯობესებები" },
    uptime: { en: "Uptime", ka: "მუშაობის დრო" },
    responseTime: { en: "Response Time", ka: "პასუხის დრო" },
    previous: { en: "previous", ka: "წინა" },
    next: { en: "Next", ka: "შემდეგი" }
}

export default function WebMaintenance() {
    const { t } = useTranslation()

    return (
        <>

            <Layout headerStyle={2} footerStyle={3} breadcrumbTitle={t('breadcrumb', maintenanceTexts.breadcrumb)} coverImage="/assets/img/covers/services-cover.jpg">
                <section className="Service-details pt-space pb-space">
                    <div className="container">
                        <div className="service-details-header bb-border pb-xxl-9 pb-xl-7 pb-6">
                            <div className="thumb w-100 mb-xxl-12 mb-xl-9 mb-sm-6 mb-5" data-aos="zoom-in" data-aos-duration={1500}>
                                <img 
                                    src="/assets/img/service/web-maintenance-hero.jpg" 
                                    alt="Professional Web Maintenance Services - Security Updates, Performance Optimization" 
                                    className="w-100" 
                                    style={{
                                        borderRadius: '20px',
                                        overflow: 'hidden'
                                    }}
                                />
                            </div>
                            <h3 className="white-clr mb-xxl-9 mb-xl-7 mb-lg-6 mb-4" data-aos="zoom-in-left" data-aos-duration={1600}>
                                {t('mainTitle', maintenanceTexts.mainTitle)}
                            </h3>
                            <div className="d-flex flex-wrap align-items-center gap-xxl-5 gap-xl-3 gap-2" data-aos="zoom-in-left" data-aos-duration={1800}>
                                <Link href="/web-maintenance" className="radius-btn cmn-border radius100 py-xxl-2 py-2 px-xxl-4 px-3 theme-clr">
                                    {t('security', maintenanceTexts.security)}
                                </Link>
                                <Link href="/web-maintenance" className="radius-btn cmn-border radius100 py-xxl-2 py-2 px-xxl-4 px-3 theme-clr">
                                    {t('performance', maintenanceTexts.performance)}
                                </Link>
                                <Link href="/web-maintenance" className="radius-btn cmn-border radius100 py-xxl-2 py-2 px-xxl-4 px-3 theme-clr">
                                    {t('updates', maintenanceTexts.updates)}
                                </Link>
                                <Link href="/web-maintenance" className="radius-btn cmn-border radius100 py-xxl-2 py-2 px-xxl-4 px-3 theme-clr">
                                    {t('support', maintenanceTexts.support)}
                                </Link>
                            </div>
                        </div>
                        <div className="case-study-detials-inner mt-xxl-10 mt-xl-7 mt-6">
                            <h4 className="mb-xxl-7 mb-4 white-clr">
                                {t('serviceOverview', maintenanceTexts.serviceOverview)}
                            </h4>
                            <div className="d-flex flex-md-nowrap flex-wrap justify-content-between gap-xxl-15 gap-xl-10 gap-lg-7 gap-sm-5 gap-3 mb-xxl-9 mb-xl-8 mb-lg-7 mb-4">
                                <p className="pra-clr challenge-pra1">
                                    {t('paragraph1', maintenanceTexts.paragraph1)}
                                </p>
                                <p className="pra-clr">
                                    {t('paragraph2', maintenanceTexts.paragraph2)}
                                </p>
                            </div>
                            <div className="finul-result">
                                <h4 className="mb-xxl-3 mb-2 white-clr">
                                    {t('benefitsTitle', maintenanceTexts.benefitsTitle)}
                                </h4>
                                <div className="d-md-flex flex-grid align-items-center gap-xxl-20 gap-xl-10 gap-lg-7 gap-md-6 gap-10">
                                    <div className="fiial-result-list mb-md-0 mb-4">
                                        <ul>
                                            <li>
                                                {t('benefit1', maintenanceTexts.benefit1)}
                                            </li>
                                            <li>
                                                {t('benefit2', maintenanceTexts.benefit2)}
                                            </li>
                                            <li>
                                                {t('benefit3', maintenanceTexts.benefit3)}
                                            </li>
                                        </ul>
                                        <ul>
                                            <li>
                                                {t('benefit4', maintenanceTexts.benefit4)}
                                            </li>
                                            <li>
                                                {t('benefit5', maintenanceTexts.benefit5)}
                                            </li>
                                            <li>
                                                {t('benefit6', maintenanceTexts.benefit6)}
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="result-progress-wrap">
                                        <div className="progres-item mb-xxl-6 mb-xl-5 mb-4">
                                            <div className="d-flex align-items-center justify-content-between mb-xxl-5 mb-3">
                                                <span className="conssub">
                                                    {t('uptime', maintenanceTexts.uptime)}
                                                </span>
                                                <span className="cons">99.9%</span>
                                            </div>
                                            <div className="progress-solving">
                                                <div className="progress-bar" />
                                            </div>
                                        </div>
                                        <div className="progres-item">
                                            <div className="d-flex align-items-center justify-content-between mb-xxl-5 mb-3">
                                                <span className="conssub">
                                                    {t('responseTime', maintenanceTexts.responseTime)}
                                                </span>
                                                <span className="cons">96%</span>
                                            </div>
                                            <div className="progress-solving">
                                                <div className="progress-bar" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper study-slidewrap py-xxl-15 py-xl-10 py-9">
                            {/* Removed slider images */}
                        </div>
                        <div className="slider-button d-flex align-items-center justify-content-between py-xxl-6 py-xl-5 py-4">
                            <div className="d-flex align-items-center gap-xxl-5 gap-3 gap-2">
                                <Link href="/ecommerce-solutions" className="cmn-prev cmn-border d-center" tabIndex={0} aria-label="Previous service">
                                    <i className="fas fa-chevron-left" />
                                </Link>
                                <span className="fw-bold white-clr previus-text text-capitalize">
                                    {t('previous', maintenanceTexts.previous)}
                                </span>
                            </div>
                            <h3 className="project-storke">
                                {t('breadcrumb', maintenanceTexts.breadcrumb)}
                            </h3>
                            <div className="d-flex align-items-center gap-xxl-5 gap-3 gap-2">
                                <span className="fw-bold white-clr previus-text text-capitalize">
                                    {t('next', maintenanceTexts.next)}
                                </span>
                                <Link href="/frontend-development" className="cmn-next cmn-border d-center" tabIndex={0} aria-label="Next service">
                                    <i className="fas fa-chevron-right" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

            </Layout>
        </>
    )
}
