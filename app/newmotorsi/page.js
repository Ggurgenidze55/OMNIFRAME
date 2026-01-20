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

const newMotorsiTexts = {
    breadcrumb: { en: "New Motorsi - Warehouse Solutions", ka: "New Motorsi - სასაწყობო სისტემები" },
    categoryLabel: { en: "Category:", ka: "კატეგორია:" },
    categoryValue: { en: "E-commerce & Warehouse", ka: "E-commerce და სასაწყობო სისტემები" },
    technologiesLabel: { en: "Technologies:", ka: "ტექნოლოგიები:" },
    technologiesValue: { en: "Next.js, React, Tailwind CSS", ka: "Next.js, React, Tailwind CSS" },
    clientLabel: { en: "Client:", ka: "კლიენტი:" },
    clientValue: { en: "New Motorsi Georgia", ka: "New Motorsi საქართველო" },
    locationLabel: { en: "Location:", ka: "ლოკაცია:" },
    locationValue: { en: "Tbilisi & Kutaisi, Georgia", ka: "თბილისი და ქუთაისი, საქართველო" },
    dateLabel: { en: "Date:", ka: "თარიღი:" },
    dateValue: { en: "2024", ka: "2024" },
    visitWebsite: { en: "Visit Website", ka: "საიტის ნახვა" },
    mainTitle: {
        en: "Professional Warehouse Solutions & Stelazh Systems",
        ka: "პროფესიონალური სასაწყობო გადაწყვეტილებები და სტელაჟების სისტემები"
    },
    paragraph1: {
        en: "New Motorsi is a leading provider of professional warehouse solutions and stelazh systems in Georgia. We developed a comprehensive website that showcases their extensive product catalog including warehouse shelving, market displays, accessories, and commercial equipment.",
        ka: "New Motorsi საქართველოში პროფესიონალური სასაწყობო გადაწყვეტილებებისა და სტელაჟების სისტემების წამყვანი მიმწოდებელია. ჩვენ შევქმენით ყოვლისმომცველი ვებსაიტი, რომელიც სრულად ასახავს მათ ფართო პროდუქციას: სასაწყობო თაროებს, მარკეტის სტენდებს, აქსესუარებსა და კომერციულ აღჭურვილობას."
    },
    paragraph2: {
        en: "The website features a modern, responsive design optimized for both desktop and mobile devices, with intuitive navigation and detailed product information. Key features include product categorization, contact forms, and comprehensive company information.",
        ka: "ვებსაიტს აქვს თანამედროვე, Responsive დიზაინი, რომელიც ოპტიმიზებულია ნებისმიერი მოწყობილობისთვის. ინტუიციური ნავიგაცია და პროდუქციის დეტალური აღწერა მომხმარებელს სასურველი ნივთის მარტივად პოვნაში ეხმარება. პლატფორმა მოიცავს პროდუქციის კატეგორიზაციას, საკონტაქტო ფორმებსა და კომპანიის შესახებ სრულ ინფორმაციას."
    },
    keyFeatures: { en: "Key Features", ka: "მთავარი ფუნქციები" },
    feature1: { en: "Modern E-commerce Platform", ka: "თანამედროვე E-commerce პლატფორმა" },
    feature2: { en: "Multi-language Support (Georgian, English, Russian)", ka: "მრავალენოვანი მხარდაჭერა (ქართული, ინგლისური, რუსული)" },
    feature3: { en: "Advanced Product Catalog & Search", ka: "გაფართოებული კატალოგი და ძიება" },
    feature4: { en: "Responsive Design & Mobile-First Approach", ka: "Responsive დიზაინი და Mobile-first მიდგომა" },
    feature5: { en: "SEO Optimized with Schema Markup", ka: "SEO ოპტიმიზაცია Schema Markup-ით" },
    feature6: { en: "Contact Forms & Location Services", ka: "საკონტაქტო ფორმები და მდებარეობის სერვისები" },
    technicalImplementation: { en: "Technical Implementation", ka: "ტექნიკური განხორციელება" },
    tech1: { en: "Next.js 14 App Router Architecture", ka: "Next.js 14 App Router არქიტექტურა" },
    tech2: { en: "React 18 with Modern Hooks", ka: "React 18 თანამედროვე Hooks-ებით" },
    tech3: { en: "Tailwind CSS for Utility-First Styling", ka: "Tailwind CSS utility-first სტილებისთვის" },
    tech4: { en: "Server-Side Rendering (SSR) for SEO", ka: "Server-Side Rendering (SSR) SEO-სთვის" },
    tech5: { en: "Optimized Images with Next.js Image Component", ka: "ოპტიმიზებული სურათები Next.js Image კომპონენტით" },
    tech6: { en: "Performance Optimization & Core Web Vitals", ka: "შესრულების ოპტიმიზაცია და Core Web Vitals" },
}

export default function NewMotorsi() {
    const { t } = useTranslation()

    return (
        <>

            <Layout
                headerStyle={2}
                footerStyle={3}
            >
                <section className="case-study pt-space pb-space">
                    <div className="container">
                        <div className="row g-xxl-7 g-xl-6 g-5 mb-xxl-13 mb-10">
                            <div className="col-lg-8">
                                <div className="case-thumb1 w-100" data-aos="zoom-in" data-aos-duration={1500}>
                                    <img src="/assets/img/portfolio/newmotorsi-warehouse-solutions.png" alt="New Motorsi - Professional Warehouse Solutions and E-commerce Platform" className="w-100" />
                                </div>
                            </div>
                            <div className="col-lg-4" data-aos="zoom-in-left" data-aos-duration={1600}>
                                <div className="case-content-box bg1-clr py-xxl-10 py-xl-9 py-lg-8 py-6 px-xxl-10 px-xl-8 px-lg-6 px-5">
                                    <ul className="case-infobox mb-xxl-12 mb-xl-10 mb-lg-8 mb-7">
                                        <li className="d-flex align-items-center justify-content-between gap-2">
                                            <span className="white-clr">
                                                {t('categoryLabel', newMotorsiTexts.categoryLabel)}
                                            </span>
                                            <span className="white-clr">
                                                {t('categoryValue', newMotorsiTexts.categoryValue)}
                                            </span>
                                        </li>
                                        <li className="d-flex align-items-center justify-content-between gap-2">
                                            <span className="white-clr">
                                                {t('technologiesLabel', newMotorsiTexts.technologiesLabel)}
                                            </span>
                                            <span className="white-clr">
                                                {t('technologiesValue', newMotorsiTexts.technologiesValue)}
                                            </span>
                                        </li>
                                        <li className="d-flex align-items-center justify-content-between gap-2">
                                            <span className="white-clr">
                                                {t('clientLabel', newMotorsiTexts.clientLabel)}
                                            </span>
                                            <span className="white-clr">
                                                {t('clientValue', newMotorsiTexts.clientValue)}
                                            </span>
                                        </li>
                                        <li className="d-flex align-items-center justify-content-between gap-2">
                                            <span className="white-clr">
                                                {t('locationLabel', newMotorsiTexts.locationLabel)}
                                            </span>
                                            <span className="white-clr">
                                                {t('locationValue', newMotorsiTexts.locationValue)}
                                            </span>
                                        </li>
                                        <li className="d-flex align-items-center justify-content-between gap-2">
                                            <span className="white-clr">
                                                {t('dateLabel', newMotorsiTexts.dateLabel)}
                                            </span>
                                            <span className="white-clr">
                                                {t('dateValue', newMotorsiTexts.dateValue)}
                                            </span>
                                        </li>
                                    </ul>
                                    <Link href="https://www.newmotorsi.ge/" target="_blank" className="d-flex align-items-center justify-content-center w-100 fw-semibold py-xxl-4 py-xl-3 py-2 px-3 gap-2 themebg text-whitess">
                                        <i className="fas fa-external-link-alt" />
                                        <span className="text-whitess">
                                            {t('visitWebsite', newMotorsiTexts.visitWebsite)}
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="row g-xxl-7 g-xl-6 g-5 mb-xxl-13 mb-10">
                            <div className="col-lg-12">
                                <div className="case-content-box">
                                    <h3 className="white-clr mb-xxl-9 mb-xl-7 mb-lg-6 mb-4" data-aos="zoom-in-left" data-aos-duration={1600}>
                                        {t('mainTitle', newMotorsiTexts.mainTitle)}
                                    </h3>
                                    <p className="pra-clr mb-xxl-7 mb-xl-6 mb-5" data-aos="zoom-in" data-aos-duration={1500}>
                                        {t('paragraph1', newMotorsiTexts.paragraph1)}
                                    </p>
                                    <p className="pra-clr mb-xxl-7 mb-xl-6 mb-5" data-aos="zoom-in" data-aos-duration={1600}>
                                        {t('paragraph2', newMotorsiTexts.paragraph2)}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row g-xxl-7 g-xl-6 g-5 mb-xxl-13 mb-10">
                            <div className="col-lg-6">
                                <div className="case-content-box">
                                    <h4 className="white-clr mb-xxl-7 mb-xl-6 mb-5" data-aos="zoom-in-left" data-aos-duration={1700}>
                                        {t('keyFeatures', newMotorsiTexts.keyFeatures)}
                                    </h4>
                                    <ul className="modern-list d-grid gap-3" data-aos="zoom-in" data-aos-duration={1500}>
                                        <li className="d-flex align-items-center gap-2">
                                            <i className="fas fa-check theme-clr" />
                                            {t('feature1', newMotorsiTexts.feature1)}
                                        </li>
                                        <li className="d-flex align-items-center gap-2">
                                            <i className="fas fa-check theme-clr" />
                                            {t('feature2', newMotorsiTexts.feature2)}
                                        </li>
                                        <li className="d-flex align-items-center gap-2">
                                            <i className="fas fa-check theme-clr" />
                                            {t('feature3', newMotorsiTexts.feature3)}
                                        </li>
                                        <li className="d-flex align-items-center gap-2">
                                            <i className="fas fa-check theme-clr" />
                                            {t('feature4', newMotorsiTexts.feature4)}
                                        </li>
                                        <li className="d-flex align-items-center gap-2">
                                            <i className="fas fa-check theme-clr" />
                                            {t('feature5', newMotorsiTexts.feature5)}
                                        </li>
                                        <li className="d-flex align-items-center gap-2">
                                            <i className="fas fa-check theme-clr" />
                                            {t('feature6', newMotorsiTexts.feature6)}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="case-content-box">
                                    <h4 className="white-clr mb-xxl-7 mb-xl-6 mb-5" data-aos="zoom-in-left" data-aos-duration={1800}>
                                        {t('technicalImplementation', newMotorsiTexts.technicalImplementation)}
                                    </h4>
                                    <ul className="modern-list d-grid gap-3" data-aos="zoom-in" data-aos-duration={1600}>
                                        <li className="d-flex align-items-center gap-2">
                                            <i className="fas fa-check theme-clr" />
                                            {t('tech1', newMotorsiTexts.tech1)}
                                        </li>
                                        <li className="d-flex align-items-center gap-2">
                                            <i className="fas fa-check theme-clr" />
                                            {t('tech2', newMotorsiTexts.tech2)}
                                        </li>
                                        <li className="d-flex align-items-center gap-2">
                                            <i className="fas fa-check theme-clr" />
                                            {t('tech3', newMotorsiTexts.tech3)}
                                        </li>
                                        <li className="d-flex align-items-center gap-2">
                                            <i className="fas fa-check theme-clr" />
                                            {t('tech4', newMotorsiTexts.tech4)}
                                        </li>
                                        <li className="d-flex align-items-center gap-2">
                                            <i className="fas fa-check theme-clr" />
                                            {t('tech5', newMotorsiTexts.tech5)}
                                        </li>
                                        <li className="d-flex align-items-center gap-2">
                                            <i className="fas fa-check theme-clr" />
                                            {t('tech6', newMotorsiTexts.tech6)}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}
