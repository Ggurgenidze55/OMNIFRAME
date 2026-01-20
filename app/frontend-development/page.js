'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { useTranslation } from "@/contexts/LanguageContext"
import { common } from "@/data/translations/common"

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

const frontendTexts = {
    breadcrumb: { en: "Frontend Development", ka: "Frontend დეველოპმენტი" },
    mainTitle: { en: "Professional Frontend Development Services for Modern Web Applications.", ka: "პროფესიონალური Frontend დეველოპმენტი თანამედროვე ვებ-აპლიკაციებისთვის." },
    react: { en: "React", ka: "React" },
    nextjs: { en: "Next.js", ka: "Next.js" },
    vuejs: { en: "Vue.js", ka: "Vue.js" },
    responsive: { en: "Responsive", ka: "Responsive" },
    serviceOverview: { en: "Service Overview", ka: "მომსახურების მიმოხილვა" },
    paragraph1: { en: "Our frontend development services focus on creating exceptional user experiences through modern, responsive web applications. We specialize in building interactive interfaces using cutting-edge technologies like React, Next.js, and Vue.js that deliver seamless performance across all devices.", ka: "ჩვენი Frontend დეველოპმენტი ორიენტირებულია გამორჩეული მომხმარებლის გამოცდილების შექმნაზე. ჩვენ სპეციალიზებულები ვართ ინტერაქტიული ინტერფეისების აგებაში React, Next.js და Vue.js ტექნოლოგიებით, რაც უზრუნველყოფს საიტის სწრაფ და გამართულ მუშაობას ნებისმიერ მოწყობილობაზე." },
    paragraph2: { en: "We prioritize user-centered design principles, ensuring that every interface we create is not only visually appealing but also highly functional and accessible. Our team combines technical expertise with creative design thinking to deliver frontend solutions that drive user engagement and business growth.", ka: "ჩვენთვის პრიორიტეტულია მომხმარებელზე ორიენტირებული დიზაინის პრინციპები. ვქმნით ინტერფეისებს, რომლებიც არა მხოლოდ ვიზუალურად მომხიბვლელია, არამედ მაღალფუნქციური და ხელმისაწვდომი. ჩვენი გუნდი აერთიანებს ტექნიკურ ცოდნასა და კრეატიულ ხედვას, რათა შექმნას გადაწყვეტილებები, რომლებიც ზრდის მომხმარებელთა ჩართულობას." },
    benefitsTitle: { en: "Benefits With Our Frontend Development", ka: "ჩვენი უპირატესობები" },
    benefit1: { en: "Modern React & Next.js development", ka: "თანამედროვე React & Next.js დეველოპმენტი" },
    benefit2: { en: "Responsive design for all devices", ka: "ადაპტირებული დიზაინი ყველა მოწყობილობისთვის" },
    benefit3: { en: "Performance optimization", ka: "წარმადობის ოპტიმიზაცია" },
    benefit4: { en: "SEO-friendly code structure", ka: "SEO-ზე ოპტიმიზებული კოდის სტრუქტურა" },
    benefit5: { en: "Cross-browser compatibility", ka: "Cross-browser თავსებადობა" },
    benefit6: { en: "Accessibility compliance", ka: "Accessibility (ხელმისაწვდომობის) სტანდარტები" },
    userExperience: { en: "User Experience", ka: "User Experience" },
    performance: { en: "Performance", ka: "წარმადობა" },
    previous: { en: "previous", ka: "წინა" },
    next: { en: "Next", ka: "შემდეგი" }
}

export default function FrontendDevelopment() {
    const { t } = useTranslation()

    return (
        <>

            <Layout headerStyle={2} footerStyle={3} breadcrumbTitle={t('breadcrumb', frontendTexts.breadcrumb)} coverImage="/assets/img/covers/services-cover.jpg">
                <section className="Service-details pt-space pb-space">
                    <div className="container">
                        <div className="service-details-header bb-border pb-xxl-9 pb-xl-7 pb-6">
                            <div className="thumb w-100 mb-xxl-12 mb-xl-9 mb-sm-6 mb-5" data-aos="zoom-in" data-aos-duration={1500}>
                                <img 
                                    src="/assets/img/service/frontend-development-hero.jpg" 
                                    alt="Professional Frontend Development Services - React, Next.js, Vue.js" 
                                    className="w-100" 
                                    style={{
                                        borderRadius: '20px',
                                        overflow: 'hidden'
                                    }}
                                />
                            </div>
                            <h3 className="white-clr mb-xxl-9 mb-xl-7 mb-lg-6 mb-4" data-aos="zoom-in-left" data-aos-duration={1600}>
                                {t('mainTitle', frontendTexts.mainTitle)}
                            </h3>
                            <div className="d-flex flex-wrap align-items-center gap-xxl-5 gap-xl-3 gap-2" data-aos="zoom-in-left" data-aos-duration={1800}>
                                <Link href="/frontend-development" className="radius-btn cmn-border radius100 py-xxl-2 py-2 px-xxl-4 px-3 theme-clr">
                                    {t('react', frontendTexts.react)}
                                </Link>
                                <Link href="/frontend-development" className="radius-btn cmn-border radius100 py-xxl-2 py-2 px-xxl-4 px-3 theme-clr">
                                    {t('nextjs', frontendTexts.nextjs)}
                                </Link>
                                <Link href="/frontend-development" className="radius-btn cmn-border radius100 py-xxl-2 py-2 px-xxl-4 px-3 theme-clr">
                                    {t('vuejs', frontendTexts.vuejs)}
                                </Link>
                                <Link href="/frontend-development" className="radius-btn cmn-border radius100 py-xxl-2 py-2 px-xxl-4 px-3 theme-clr">
                                    {t('responsive', frontendTexts.responsive)}
                                </Link>
                            </div>
                        </div>
                        <div className="case-study-detials-inner mt-xxl-10 mt-xl-7 mt-6">
                            <h4 className="mb-xxl-7 mb-4 white-clr">
                                {t('serviceOverview', frontendTexts.serviceOverview)}
                            </h4>
                            <div className="d-flex flex-md-nowrap flex-wrap justify-content-between gap-xxl-15 gap-xl-10 gap-lg-7 gap-sm-5 gap-3 mb-xxl-9 mb-xl-8 mb-lg-7 mb-4">
                                <p className="pra-clr challenge-pra1">
                                    {t('paragraph1', frontendTexts.paragraph1)}
                                </p>
                                <p className="pra-clr">
                                    {t('paragraph2', frontendTexts.paragraph2)}
                                </p>
                            </div>
                            <div className="finul-result">
                                <h4 className="mb-xxl-3 mb-2 white-clr">
                                    {t('benefitsTitle', frontendTexts.benefitsTitle)}
                                </h4>
                                <div className="d-md-flex flex-grid align-items-center gap-xxl-20 gap-xl-10 gap-lg-7 gap-md-6 gap-10">
                                    <div className="fiial-result-list mb-md-0 mb-4">
                                        <ul>
                                            <li>
                                                {t('benefit1', frontendTexts.benefit1)}
                                            </li>
                                            <li>
                                                {t('benefit2', frontendTexts.benefit2)}
                                            </li>
                                            <li>
                                                {t('benefit3', frontendTexts.benefit3)}
                                            </li>
                                        </ul>
                                        <ul>
                                            <li>
                                                {t('benefit4', frontendTexts.benefit4)}
                                            </li>
                                            <li>
                                                {t('benefit5', frontendTexts.benefit5)}
                                            </li>
                                            <li>
                                                {t('benefit6', frontendTexts.benefit6)}
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="result-progress-wrap">
                                        <div className="progres-item mb-xxl-6 mb-xl-5 mb-4">
                                            <div className="d-flex align-items-center justify-content-between mb-xxl-5 mb-3">
                                                <span className="conssub">
                                                    {t('userExperience', frontendTexts.userExperience)}
                                                </span>
                                                <span className="cons">95%</span>
                                            </div>
                                            <div className="progress-solving">
                                                <div className="progress-bar" />
                                            </div>
                                        </div>
                                        <div className="progres-item">
                                            <div className="d-flex align-items-center justify-content-between mb-xxl-5 mb-3">
                                                <span className="conssub">
                                                    {t('performance', frontendTexts.performance)}
                                                </span>
                                                <span className="cons">92%</span>
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
                                <Link href="/web-maintenance" className="cmn-prev cmn-border d-center" tabIndex={0} aria-label="Previous service">
                                    <i className="fas fa-chevron-left" />
                                </Link>
                                <span className="fw-bold white-clr previus-text text-capitalize">
                                    {t('previous', frontendTexts.previous)}
                                </span>
                            </div>
                            <h3 className="project-storke">
                                {t('breadcrumb', frontendTexts.breadcrumb)}
                            </h3>
                            <div className="d-flex align-items-center gap-xxl-5 gap-3 gap-2">
                                <span className="fw-bold white-clr previus-text text-capitalize">
                                    {t('next', frontendTexts.next)}
                                </span>
                                <Link href="/backend-development" className="cmn-next cmn-border d-center" tabIndex={0} aria-label="Next service">
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
