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

const grandeTexts = {
    breadcrumb: { en: "Grande Group - Business Solutions", ka: "Grande Group - ბიზნეს გადაწყვეტილებები" },
    category: { en: "Category:", ka: "კატეგორია:" },
    categoryValue: { en: "Corporate & Business", ka: "კორპორატიული და ბიზნესი" },
    technologies: { en: "Technologies:", ka: "ტექნოლოგიები:" },
    technologiesValue: { en: "WordPress, Divi Theme, PHP", ka: "WordPress, Divi Theme, PHP" },
    client: { en: "Client:", ka: "კლიენტი:" },
    clientValue: { en: "Grande Group", ka: "Grande Group" },
    location: { en: "Location:", ka: "მდებარეობა:" },
    locationValue: { en: "Georgia", ka: "საქართველო" },
    date: { en: "Date:", ka: "თარიღი:" },
    visitWebsite: { en: "Visit Website", ka: "ვებსაიტის ნახვა" },
    mainTitle: { en: "Business & Investment Solutions Platform", ka: "ბიზნესისა და ინვესტიციების გადაწყვეტილებების პლატფორმა" },
    paragraph1: { en: "Grande Group is a diversified business conglomerate offering comprehensive business and investment solutions. We developed a professional corporate website that effectively communicates their business expertise and service portfolio.", ka: "Grande Group არის მრავალფეროვანი ბიზნეს კონგლომერატი, რომელიც გთავაზობთ ყოვლისმომცველ ბიზნეს და ინვესტიციების გადაწყვეტილებებს. ჩვენ შევქმენით პროფესიონალური კორპორატიული ვებსაიტი, რომელიც ეფექტურად ასახავს მათ ბიზნეს ექსპერტიზასა და სერვისების პორტფოლიოს." },
    paragraph2: { en: "The website features a sophisticated design that reflects the company's professional image, with clear service descriptions, company information, and contact details. The design emphasizes trust and reliability, essential for business clients.", ka: "ვებსაიტი გამოირჩევა დახვეწილი დიზაინით, რომელიც ასახავს კომპანიის პროფესიონალურ იმიჯს, ნათელი სერვისების აღწერით, კომპანიის ინფორმაციითა და საკონტაქტო დეტალებით. დიზაინი ხაზს უსვამს ნდობასა და საიმედოობას, რაც აუცილებელია ბიზნეს კლიენტებისთვის." },
    keyFeatures: { en: "Key Features", ka: "მთავარი მახასიათებლები" },
    feature1: { en: "Professional Corporate Design", ka: "პროფესიონალური კორპორატიული დიზაინი" },
    feature2: { en: "Service Portfolio Showcase", ka: "სერვისების პორტფოლიოს წარდგენა" },
    feature3: { en: "Company Information & History", ka: "კომპანიის ინფორმაცია და ისტორია" },
    feature4: { en: "Contact & Location Details", ka: "საკონტაქტო და მდებარეობის დეტალები" },
    feature5: { en: "Mobile Responsive Design", ka: "მობილური რესპონსივი დიზაინი" },
    feature6: { en: "Easy Content Management System", ka: "მარტივი კონტენტის მართვის სისტემა" },
    technicalImplementation: { en: "Technical Implementation", ka: "ტექნიკური განხორციელება" },
    tech1: { en: "WordPress CMS Platform", ka: "WordPress CMS პლატფორმა" },
    tech2: { en: "Divi Theme & Page Builder", ka: "Divi თემა და გვერდის კონსტრუქტორი" },
    tech3: { en: "PHP Backend Development", ka: "PHP ბექენდ განვითარება" },
    tech4: { en: "MySQL Database", ka: "MySQL მონაცემთა ბაზა" },
    tech5: { en: "SEO Optimization & Plugins", ka: "SEO ოპტიმიზაცია და პლაგინები" },
    tech6: { en: "Security & Performance Optimization", ka: "უსაფრთხოება და შესრულების ოპტიმიზაცია" }
}

export default function GrandeGroup() {
    const { t } = useTranslation()

    return (
        <>

            <Layout headerStyle={2} footerStyle={3}>
                <section className="case-study pt-space pb-space">
                    <div className="container">
                        <div className="row g-xxl-7 g-xl-6 g-5 mb-xxl-13 mb-10">
                            <div className="col-lg-8">
                                <div className="case-thumb1 w-100" data-aos="zoom-in" data-aos-duration={1500}>
                                    <img src="/assets/img/portfolio/grandegroup-business-solutions.png" alt="Grande Group - Business and Investment Solutions Company" className="w-100" />
                                </div>
                            </div>
                            <div className="col-lg-4" data-aos="zoom-in-left" data-aos-duration={1600}>
                                <div className="case-content-box bg1-clr py-xxl-10 py-xl-9 py-lg-8 py-6 px-xxl-10 px-xl-8 px-lg-6 px-5">
                                    <ul className="case-infobox mb-xxl-12 mb-xl-10 mb-lg-8 mb-7">
                                        <li className="d-flex align-items-center justify-content-between gap-2">
                                            <span className="white-clr">
                                                {t('category', grandeTexts.category)}
                                            </span>
                                            <span className="white-clr">
                                                {t('categoryValue', grandeTexts.categoryValue)}
                                            </span>
                                        </li>
                                        <li className="d-flex align-items-center justify-content-between gap-2">
                                            <span className="white-clr">
                                                {t('technologies', grandeTexts.technologies)}
                                            </span>
                                            <span className="white-clr">
                                                {t('technologiesValue', grandeTexts.technologiesValue)}
                                            </span>
                                        </li>
                                        <li className="d-flex align-items-center justify-content-between gap-2">
                                            <span className="white-clr">
                                                {t('client', grandeTexts.client)}
                                            </span>
                                            <span className="white-clr">
                                                {t('clientValue', grandeTexts.clientValue)}
                                            </span>
                                        </li>
                                        <li className="d-flex align-items-center justify-content-between gap-2">
                                            <span className="white-clr">
                                                {t('location', grandeTexts.location)}
                                            </span>
                                            <span className="white-clr">
                                                {t('locationValue', grandeTexts.locationValue)}
                                            </span>
                                        </li>
                                        <li className="d-flex align-items-center justify-content-between gap-2">
                                            <span className="white-clr">
                                                {t('date', grandeTexts.date)}
                                            </span>
                                            <span className="white-clr">
                                                2024
                                            </span>
                                        </li>
                                    </ul>
                                    <Link href="https://www.grandegroup.ge/" target="_blank" className="d-flex align-items-center justify-content-center w-100 fw-semibold py-xxl-4 py-xl-3 py-2 px-3 gap-2 themebg text-whitess">
                                        <i className="fas fa-external-link-alt" />
                                        <span className="text-whitess">
                                            {t('visitWebsite', grandeTexts.visitWebsite)}
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="row g-xxl-7 g-xl-6 g-5 mb-xxl-13 mb-10">
                            <div className="col-lg-12">
                                <div className="case-content-box">
                                    <h3 className="white-clr mb-xxl-9 mb-xl-7 mb-lg-6 mb-4" data-aos="zoom-in-left" data-aos-duration={1600}>
                                        {t('mainTitle', grandeTexts.mainTitle)}
                                    </h3>
                                    <p className="pra-clr mb-xxl-7 mb-xl-6 mb-5" data-aos="zoom-in" data-aos-duration={1500}>
                                        {t('paragraph1', grandeTexts.paragraph1)}
                                    </p>
                                    <p className="pra-clr mb-xxl-7 mb-xl-6 mb-5" data-aos="zoom-in" data-aos-duration={1600}>
                                        {t('paragraph2', grandeTexts.paragraph2)}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row g-xxl-7 g-xl-6 g-5 mb-xxl-13 mb-10">
                            <div className="col-lg-6">
                                <div className="case-content-box">
                                    <h4 className="white-clr mb-xxl-7 mb-xl-6 mb-5" data-aos="zoom-in-left" data-aos-duration={1700}>
                                        {t('keyFeatures', grandeTexts.keyFeatures)}
                                    </h4>
                                    <ul className="modern-list d-grid gap-3" data-aos="zoom-in" data-aos-duration={1500}>
                                        <li className="d-flex align-items-center gap-2">
                                            <i className="fas fa-check theme-clr" />
                                            {t('feature1', grandeTexts.feature1)}
                                        </li>
                                        <li className="d-flex align-items-center gap-2">
                                            <i className="fas fa-check theme-clr" />
                                            {t('feature2', grandeTexts.feature2)}
                                        </li>
                                        <li className="d-flex align-items-center gap-2">
                                            <i className="fas fa-check theme-clr" />
                                            {t('feature3', grandeTexts.feature3)}
                                        </li>
                                        <li className="d-flex align-items-center gap-2">
                                            <i className="fas fa-check theme-clr" />
                                            {t('feature4', grandeTexts.feature4)}
                                        </li>
                                        <li className="d-flex align-items-center gap-2">
                                            <i className="fas fa-check theme-clr" />
                                            {t('feature5', grandeTexts.feature5)}
                                        </li>
                                        <li className="d-flex align-items-center gap-2">
                                            <i className="fas fa-check theme-clr" />
                                            {t('feature6', grandeTexts.feature6)}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="case-content-box">
                                    <h4 className="white-clr mb-xxl-7 mb-xl-6 mb-5" data-aos="zoom-in-left" data-aos-duration={1800}>
                                        {t('technicalImplementation', grandeTexts.technicalImplementation)}
                                    </h4>
                                    <ul className="modern-list d-grid gap-3" data-aos="zoom-in" data-aos-duration={1600}>
                                        <li className="d-flex align-items-center gap-2">
                                            <i className="fas fa-check theme-clr" />
                                            {t('tech1', grandeTexts.tech1)}
                                        </li>
                                        <li className="d-flex align-items-center gap-2">
                                            <i className="fas fa-check theme-clr" />
                                            {t('tech2', grandeTexts.tech2)}
                                        </li>
                                        <li className="d-flex align-items-center gap-2">
                                            <i className="fas fa-check theme-clr" />
                                            {t('tech3', grandeTexts.tech3)}
                                        </li>
                                        <li className="d-flex align-items-center gap-2">
                                            <i className="fas fa-check theme-clr" />
                                            {t('tech4', grandeTexts.tech4)}
                                        </li>
                                        <li className="d-flex align-items-center gap-2">
                                            <i className="fas fa-check theme-clr" />
                                            {t('tech5', grandeTexts.tech5)}
                                        </li>
                                        <li className="d-flex align-items-center gap-2">
                                            <i className="fas fa-check theme-clr" />
                                            {t('tech6', grandeTexts.tech6)}
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
