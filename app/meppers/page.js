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

const meppersTexts = {
    breadcrumb: { en: "Meppers - Digital Solutions", ka: "Meppers - ციფრული ტრანსფორმაცია" },
    categoryLabel: { en: "Category:", ka: "კატეგორია:" },
    categoryValue: { en: "Digital & Technology", ka: "ციფრული ტექნოლოგიები" },
    technologiesLabel: { en: "Technologies:", ka: "ტექნოლოგიები:" },
    technologiesValue: { en: "WordPress, Divi Theme, PHP", ka: "WordPress, Divi Theme, PHP" },
    clientLabel: { en: "Client:", ka: "კლიენტი:" },
    clientValue: { en: "Meppers", ka: "Meppers" },
    locationLabel: { en: "Location:", ka: "მდებარეობა:" },
    locationValue: { en: "International", ka: "საერთაშორისო" },
    dateLabel: { en: "Date:", ka: "თარიღი:" },
    dateValue: { en: "2024", ka: "2024" },
    visitWebsite: { en: "Visit Website", ka: "ვებსაიტის ნახვა" },
    mainTitle: {
        en: "Innovative Digital Solutions & Technology Platform",
        ka: "ინოვაციური ციფრული გადაწყვეტილებები და ტექნოლოგიური პლატფორმა"
    },
    paragraph1: {
        en: "Meppers is a cutting-edge technology company specializing in innovative digital solutions and software development. We developed a modern, tech-forward website that showcases their expertise in digital transformation and technology consulting.",
        ka: "Meppers მოწინავე ტექნოლოგიური კომპანიაა, რომელიც სპეციალიზებულია ინოვაციურ ციფრულ გადაწყვეტილებებსა და პროგრამული უზრუნველყოფის დეველოპმენტში. ჩვენ შევქმენით თანამედროვე, ტექნოლოგიურად მოწინავე პლატფორმა, რომელიც ასახავს მათ ექსპერტიზას ციფრული ტრანსფორმაციისა და ტექნოლოგიური კონსულტაციების მიმართულებით."
    },
    paragraph2: {
        en: "The website features a sleek, contemporary design with interactive elements, detailed service descriptions, and portfolio showcases. The design emphasizes innovation and technical expertise, perfect for attracting technology clients and partners.",
        ka: "ვებსაიტს აქვს ელეგანტური, თანამედროვე დიზაინი ინტერაქტიური ელემენტებით, მომსახურების დეტალური აღწერითა და პორტფოლიოს პრეზენტაციით. დიზაინი ხაზს უსვამს ინოვაციურობასა და ტექნიკურ ექსპერტიზას, რაც იდეალურია ტექნოლოგიური პარტნიორებისა და კლიენტების მოსაზიდად."
    },
    keyFeatures: { en: "Key Features", ka: "ძირითადი მახასიათებლები" },
    feature1: { en: "Engineering Communications Platform", ka: "საინჟინრო კომუნიკაციების პლატფორმა" },
    feature2: { en: "Digital Solutions Showcase", ka: "ციფრული გადაწყვეტილებების წარდგენა" },
    feature3: { en: "Service Portfolio & Expertise", ka: "სერვისების პორტფოლიო და ექსპერტიზა" },
    feature4: { en: "Contact Forms & Consultation", ka: "საკონტაქტო ფორმები და კონსულტაციები" },
    feature5: { en: "Mobile Responsive Design", ka: "Responsive დიზაინი" },
    feature6: { en: "SEO Optimized Content", ka: "SEO-ოპტიმიზებული კონტენტი" },
    technicalImplementation: { en: "Technical Implementation", ka: "ტექნიკური განხორციელება" },
    tech1: { en: "WordPress CMS Platform", ka: "WordPress CMS პლატფორმა" },
    tech2: { en: "Divi Theme & Page Builder", ka: "Divi Theme და Page Builder" },
    tech3: { en: "PHP Backend Development", ka: "PHP ბექენდ დეველოპმენტი" },
    tech4: { en: "MySQL Database", ka: "MySQL მონაცემთა ბაზა" },
    tech5: { en: "SEO Optimization & Plugins", ka: "SEO ოპტიმიზაცია და პლაგინები" },
    tech6: { en: "Security & Performance Optimization", ka: "უსაფრთხოებისა და წარმადობის ოპტიმიზაცია" },
}

export default function Meppers() {
    const { t } = useTranslation()

    return (
        <>

            <Layout headerStyle={2} footerStyle={3}>
                <section className="case-study pt-space pb-space">
                    <div className="container">
                        <div className="row g-xxl-7 g-xl-6 g-5 mb-xxl-13 mb-10">
                            <div className="col-lg-8">
                                <div className="case-thumb1 w-100" data-aos="zoom-in" data-aos-duration={1500}>
                                    <img src="/assets/img/portfolio/meppers-engineering-communications.png" alt="Meppers - Engineering Communications and Digital Solutions" className="w-100" />
                                </div>
                            </div>
                            <div className="col-lg-4" data-aos="zoom-in-left" data-aos-duration={1600}>
                                <div className="case-content-box bg1-clr py-xxl-10 py-xl-9 py-lg-8 py-6 px-xxl-10 px-xl-8 px-lg-6 px-5">
                                    <ul className="case-infobox mb-xxl-12 mb-xl-10 mb-lg-8 mb-7">
                                        <li className="d-flex align-items-center justify-content-between gap-2">
                                            <span className="white-clr">
                                                {t('categoryLabel', meppersTexts.categoryLabel)}
                                            </span>
                                            <span className="white-clr">
                                                {t('categoryValue', meppersTexts.categoryValue)}
                                            </span>
                                        </li>
                                        <li className="d-flex align-items-center justify-content-between gap-2">
                                            <span className="white-clr">
                                                {t('technologiesLabel', meppersTexts.technologiesLabel)}
                                            </span>
                                            <span className="white-clr">
                                                {t('technologiesValue', meppersTexts.technologiesValue)}
                                            </span>
                                        </li>
                                        <li className="d-flex align-items-center justify-content-between gap-2">
                                            <span className="white-clr">
                                                {t('clientLabel', meppersTexts.clientLabel)}
                                            </span>
                                            <span className="white-clr">
                                                {t('clientValue', meppersTexts.clientValue)}
                                            </span>
                                        </li>
                                        <li className="d-flex align-items-center justify-content-between gap-2">
                                            <span className="white-clr">
                                                {t('locationLabel', meppersTexts.locationLabel)}
                                            </span>
                                            <span className="white-clr">
                                                {t('locationValue', meppersTexts.locationValue)}
                                            </span>
                                        </li>
                                        <li className="d-flex align-items-center justify-content-between gap-2">
                                            <span className="white-clr">
                                                {t('dateLabel', meppersTexts.dateLabel)}
                                            </span>
                                            <span className="white-clr">
                                                {t('dateValue', meppersTexts.dateValue)}
                                            </span>
                                        </li>
                                    </ul>
                                    <Link href="https://meppers.com/" target="_blank" className="d-flex align-items-center justify-content-center w-100 fw-semibold py-xxl-4 py-xl-3 py-2 px-3 gap-2 themebg text-whitess">
                                        <i className="fas fa-external-link-alt" />
                                        <span className="text-whitess">
                                            {t('visitWebsite', meppersTexts.visitWebsite)}
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="row g-xxl-7 g-xl-6 g-5 mb-xxl-13 mb-10">
                            <div className="col-lg-12">
                                <div className="case-content-box">
                                    <h3 className="white-clr mb-xxl-9 mb-xl-7 mb-lg-6 mb-4" data-aos="zoom-in-left" data-aos-duration={1600}>
                                        {t('mainTitle', meppersTexts.mainTitle)}
                                    </h3>
                                    <p className="pra-clr mb-xxl-7 mb-xl-6 mb-5" data-aos="zoom-in" data-aos-duration={1500}>
                                        {t('paragraph1', meppersTexts.paragraph1)}
                                    </p>
                                    <p className="pra-clr mb-xxl-7 mb-xl-6 mb-5" data-aos="zoom-in" data-aos-duration={1600}>
                                        {t('paragraph2', meppersTexts.paragraph2)}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row g-xxl-7 g-xl-6 g-5 mb-xxl-13 mb-10">
                            <div className="col-lg-6">
                                <div className="case-content-box">
                                    <h4 className="white-clr mb-xxl-7 mb-xl-6 mb-5" data-aos="zoom-in-left" data-aos-duration={1700}>
                                        {t('keyFeatures', meppersTexts.keyFeatures)}
                                    </h4>
                                    <ul className="modern-list d-grid gap-3" data-aos="zoom-in" data-aos-duration={1500}>
                                        <li className="d-flex align-items-center gap-2">
                                            <i className="fas fa-check theme-clr" />
                                            {t('feature1', meppersTexts.feature1)}
                                        </li>
                                        <li className="d-flex align-items-center gap-2">
                                            <i className="fas fa-check theme-clr" />
                                            {t('feature2', meppersTexts.feature2)}
                                        </li>
                                        <li className="d-flex align-items-center gap-2">
                                            <i className="fas fa-check theme-clr" />
                                            {t('feature3', meppersTexts.feature3)}
                                        </li>
                                        <li className="d-flex align-items-center gap-2">
                                            <i className="fas fa-check theme-clr" />
                                            {t('feature4', meppersTexts.feature4)}
                                        </li>
                                        <li className="d-flex align-items-center gap-2">
                                            <i className="fas fa-check theme-clr" />
                                            {t('feature5', meppersTexts.feature5)}
                                        </li>
                                        <li className="d-flex align-items-center gap-2">
                                            <i className="fas fa-check theme-clr" />
                                            {t('feature6', meppersTexts.feature6)}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="case-content-box">
                                    <h4 className="white-clr mb-xxl-7 mb-xl-6 mb-5" data-aos="zoom-in-left" data-aos-duration={1800}>
                                        {t('technicalImplementation', meppersTexts.technicalImplementation)}
                                    </h4>
                                    <ul className="modern-list d-grid gap-3" data-aos="zoom-in" data-aos-duration={1600}>
                                        <li className="d-flex align-items-center gap-2">
                                            <i className="fas fa-check theme-clr" />
                                            {t('tech1', meppersTexts.tech1)}
                                        </li>
                                        <li className="d-flex align-items-center gap-2">
                                            <i className="fas fa-check theme-clr" />
                                            {t('tech2', meppersTexts.tech2)}
                                        </li>
                                        <li className="d-flex align-items-center gap-2">
                                            <i className="fas fa-check theme-clr" />
                                            {t('tech3', meppersTexts.tech3)}
                                        </li>
                                        <li className="d-flex align-items-center gap-2">
                                            <i className="fas fa-check theme-clr" />
                                            {t('tech4', meppersTexts.tech4)}
                                        </li>
                                        <li className="d-flex align-items-center gap-2">
                                            <i className="fas fa-check theme-clr" />
                                            {t('tech5', meppersTexts.tech5)}
                                        </li>
                                        <li className="d-flex align-items-center gap-2">
                                            <i className="fas fa-check theme-clr" />
                                            {t('tech6', meppersTexts.tech6)}
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
