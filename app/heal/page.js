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

const healTexts = {
    breadcrumb: { en: "Heal.ge - Healthcare Platform", ka: "Heal.ge - ჯანდაცვის პლატფორმა" },
    categoryLabel: { en: "Category:", ka: "კატეგორია:" },
    categoryValue: { en: "Healthcare & Medical", ka: "ჯანდაცვა და მედიცინა" },
    technologiesLabel: { en: "Technologies:", ka: "ტექნოლოგიები:" },
    technologiesValue: { en: "WordPress, Elementor, PHP", ka: "WordPress, Elementor, PHP" },
    clientLabel: { en: "Client:", ka: "კლიენტი:" },
    clientValue: { en: "Heal.ge", ka: "Heal.ge" },
    locationLabel: { en: "Location:", ka: "მდებარეობა:" },
    locationValue: { en: "Georgia", ka: "საქართველო" },
    dateLabel: { en: "Date:", ka: "თარიღი:" },
    dateValue: { en: "2024", ka: "2024" },
    visitWebsite: { en: "Visit Website", ka: "ვებსაიტის ნახვა" },
    mainTitle: {
        en: "Modern Healthcare & Medical Services Platform",
        ka: "თანამედროვე ჯანდაცვისა და სამედიცინო სერვისების პლატფორმა"
    },
    paragraph1: {
        en: "Heal.ge is a comprehensive healthcare platform that connects patients with medical professionals and healthcare services. We developed a modern, user-friendly website that prioritizes accessibility and trust in healthcare information.",
        ka: "Heal.ge არის ყოვლისმომცველი ჯანდაცვის პლატფორმა, რომელიც აკავშირებს პაციენტებს სამედიცინო პროფესიონალებთან და ჯანდაცვის სერვისებთან. ჩვენ შევქმენით თანამედროვე, მომხმარებლისთვის მოსახერხებელი ვებსაიტი, რომელიც პრიორიტეტს ანიჭებს ხელმისაწვდომობასა და ნდობას ჯანდაცვის ინფორმაციაში."
    },
    paragraph2: {
        en: "The platform features a clean, medical-themed design with intuitive navigation for finding doctors, booking appointments, and accessing health information. The design emphasizes reliability and professionalism, essential for healthcare services.",
        ka: "პლატფორმას აქვს სუფთა, სამედიცინო თემატიკაზე აწყობილი დიზაინი, ინტუიციური ნავიგაციით ექიმების მოსაძებნად, ვიზიტების დაჯავშნისა და ჯანმრთელობის ინფორმაციის მისაღებად. დიზაინი ხაზს უსვამს სანდოობასა და პროფესიონალიზმს, რაც აუცილებელია ჯანდაცვის სერვისებისთვის."
    },
    keyFeatures: { en: "Key Features", ka: "ძირითადი მახასიათებლები" },
    feature1: { en: "Medical Tourism Information Platform", ka: "სამედიცინო ტურიზმის ინფორმაციული პლატფორმა" },
    feature2: { en: "Healthcare Service Showcase", ka: "ჯანდაცვის სერვისების წარდგენა" },
    feature3: { en: "Multi-language Support", ka: "მრავალენოვანი მხარდაჭერა" },
    feature4: { en: "Contact Forms & Consultation Booking", ka: "საკონტაქტო ფორმები და კონსულტაციის დაჯავშნა" },
    feature5: { en: "Mobile Responsive Design", ka: "მობილური რესპონსივი დიზაინი" },
    feature6: { en: "SEO Optimized Content", ka: "SEO-ზე ოპტიმიზებული კონტენტი" },
    technicalImplementation: { en: "Technical Implementation", ka: "ტექნიკური განხორციელება" },
    tech1: { en: "WordPress CMS Platform", ka: "WordPress CMS პლატფორმა" },
    tech2: { en: "Elementor Page Builder", ka: "Elementor Page Builder" },
    tech3: { en: "PHP Backend Development", ka: "PHP ბექენდ განვითარება" },
    tech4: { en: "MySQL Database", ka: "MySQL მონაცემთა ბაზა" },
    tech5: { en: "SEO Optimization & Plugins", ka: "SEO ოპტიმიზაცია და პლაგინები" },
    tech6: { en: "Security & Performance Optimization", ka: "უსაფრთხოებისა და წარმადობის ოპტიმიზაცია" },
}

export default function Heal() {
    const { t } = useTranslation()

    return (
        <>
            <Layout headerStyle={2} footerStyle={3}>
                <section className="case-study pt-space pb-space">
                    <div className="container">
                        <div className="row g-xxl-7 g-xl-6 g-5 mb-xxl-13 mb-10">
                            <div className="col-lg-8">
                                <div className="case-thumb1 w-100" data-aos="zoom-in" data-aos-duration={1500}>
                                    <img src="/assets/img/portfolio/heal-medical-tourism.png" alt="Heal.ge - Medical Tourism Platform and Healthcare Services in Georgia" className="w-100" />
                                </div>
                            </div>
                            <div className="col-lg-4" data-aos="zoom-in-left" data-aos-duration={1600}>
                                <div className="case-content-box bg1-clr py-xxl-10 py-xl-9 py-lg-8 py-6 px-xxl-10 px-xl-8 px-lg-6 px-5">
                                    <ul className="case-infobox mb-xxl-12 mb-xl-10 mb-lg-8 mb-7">
                                        <li className="d-flex align-items-center justify-content-between gap-2">
                                            <span className="white-clr">
                                                {t('categoryLabel', healTexts.categoryLabel)}
                                            </span>
                                            <span className="white-clr">
                                                {t('categoryValue', healTexts.categoryValue)}
                                            </span>
                                        </li>
                                        <li className="d-flex align-items-center justify-content-between gap-2">
                                            <span className="white-clr">
                                                {t('technologiesLabel', healTexts.technologiesLabel)}
                                            </span>
                                            <span className="white-clr">
                                                {t('technologiesValue', healTexts.technologiesValue)}
                                            </span>
                                        </li>
                                        <li className="d-flex align-items-center justify-content-between gap-2">
                                            <span className="white-clr">
                                                {t('clientLabel', healTexts.clientLabel)}
                                            </span>
                                            <span className="white-clr">
                                                {t('clientValue', healTexts.clientValue)}
                                            </span>
                                        </li>
                                        <li className="d-flex align-items-center justify-content-between gap-2">
                                            <span className="white-clr">
                                                {t('locationLabel', healTexts.locationLabel)}
                                            </span>
                                            <span className="white-clr">
                                                {t('locationValue', healTexts.locationValue)}
                                            </span>
                                        </li>
                                        <li className="d-flex align-items-center justify-content-between gap-2">
                                            <span className="white-clr">
                                                {t('dateLabel', healTexts.dateLabel)}
                                            </span>
                                            <span className="white-clr">
                                                {t('dateValue', healTexts.dateValue)}
                                            </span>
                                        </li>
                                    </ul>
                                    <Link href="https://heal.ge/" target="_blank" className="d-flex align-items-center justify-content-center w-100 fw-semibold py-xxl-4 py-xl-3 py-2 px-3 gap-2 themebg text-whitess">
                                        <i className="fas fa-external-link-alt" />
                                        <span className="text-whitess">
                                            {t('visitWebsite', healTexts.visitWebsite)}
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="row g-xxl-7 g-xl-6 g-5 mb-xxl-13 mb-10">
                            <div className="col-lg-12">
                                <div className="case-content-box">
                                    <h3 className="white-clr mb-xxl-9 mb-xl-7 mb-lg-6 mb-4" data-aos="zoom-in-left" data-aos-duration={1600}>
                                        {t('mainTitle', healTexts.mainTitle)}
                                    </h3>
                                    <p className="pra-clr mb-xxl-7 mb-xl-6 mb-5" data-aos="zoom-in" data-aos-duration={1500}>
                                        {t('paragraph1', healTexts.paragraph1)}
                                    </p>
                                    <p className="pra-clr mb-xxl-7 mb-xl-6 mb-5" data-aos="zoom-in" data-aos-duration={1600}>
                                        {t('paragraph2', healTexts.paragraph2)}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row g-xxl-7 g-xl-6 g-5 mb-xxl-13 mb-10">
                            <div className="col-lg-6">
                                <div className="case-content-box">
                                    <h4 className="white-clr mb-xxl-7 mb-xl-6 mb-5" data-aos="zoom-in-left" data-aos-duration={1700}>
                                        {t('keyFeatures', healTexts.keyFeatures)}
                                    </h4>
                                    <ul className="modern-list d-grid gap-3" data-aos="zoom-in" data-aos-duration={1500}>
                                        <li className="d-flex align-items-center gap-2">
                                            <i className="fas fa-check theme-clr" />
                                            {t('feature1', healTexts.feature1)}
                                        </li>
                                        <li className="d-flex align-items-center gap-2">
                                            <i className="fas fa-check theme-clr" />
                                            {t('feature2', healTexts.feature2)}
                                        </li>
                                        <li className="d-flex align-items-center gap-2">
                                            <i className="fas fa-check theme-clr" />
                                            {t('feature3', healTexts.feature3)}
                                        </li>
                                        <li className="d-flex align-items-center gap-2">
                                            <i className="fas fa-check theme-clr" />
                                            {t('feature4', healTexts.feature4)}
                                        </li>
                                        <li className="d-flex align-items-center gap-2">
                                            <i className="fas fa-check theme-clr" />
                                            {t('feature5', healTexts.feature5)}
                                        </li>
                                        <li className="d-flex align-items-center gap-2">
                                            <i className="fas fa-check theme-clr" />
                                            {t('feature6', healTexts.feature6)}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="case-content-box">
                                    <h4 className="white-clr mb-xxl-7 mb-xl-6 mb-5" data-aos="zoom-in-left" data-aos-duration={1800}>
                                        {t('technicalImplementation', healTexts.technicalImplementation)}
                                    </h4>
                                    <ul className="modern-list d-grid gap-3" data-aos="zoom-in" data-aos-duration={1600}>
                                        <li className="d-flex align-items-center gap-2">
                                            <i className="fas fa-check theme-clr" />
                                            {t('tech1', healTexts.tech1)}
                                        </li>
                                        <li className="d-flex align-items-center gap-2">
                                            <i className="fas fa-check theme-clr" />
                                            {t('tech2', healTexts.tech2)}
                                        </li>
                                        <li className="d-flex align-items-center gap-2">
                                            <i className="fas fa-check theme-clr" />
                                            {t('tech3', healTexts.tech3)}
                                        </li>
                                        <li className="d-flex align-items-center gap-2">
                                            <i className="fas fa-check theme-clr" />
                                            {t('tech4', healTexts.tech4)}
                                        </li>
                                        <li className="d-flex align-items-center gap-2">
                                            <i className="fas fa-check theme-clr" />
                                            {t('tech5', healTexts.tech5)}
                                        </li>
                                        <li className="d-flex align-items-center gap-2">
                                            <i className="fas fa-check theme-clr" />
                                            {t('tech6', healTexts.tech6)}
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
