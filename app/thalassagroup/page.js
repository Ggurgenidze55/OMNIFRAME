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
        1199: { slidesPerView: 1 },
        991: { slidesPerView: 1 },
        767: { slidesPerView: 1 },
        575: { slidesPerView: 1 },
        0: { slidesPerView: 1 },
    },
}

const thalassaTexts = {
    breadcrumb: { en: "Thalassa Group - Tourism & Hospitality", ka: "Thalassa Group - ტურიზმი და ჰოსპიტალითი" },
    categoryLabel: { en: "Category:", ka: "კატეგორია:" },
    categoryValue: { en: "Tourism & Hospitality", ka: "ტურიზმი და ჰოსპიტალითი" },
    technologiesLabel: { en: "Technologies:", ka: "ტექნოლოგიები:" },
    technologiesValue: { en: "WordPress, JetEngine, PHP", ka: "WordPress, JetEngine, PHP" },
    clientLabel: { en: "Client:", ka: "კლიენტი:" },
    clientValue: { en: "Thalassa Group", ka: "Thalassa Group" },
    locationLabel: { en: "Location:", ka: "მდებარეობა:" },
    locationValue: { en: "Georgia", ka: "საქართველო" },
    dateLabel: { en: "Date:", ka: "თარიღი:" },
    dateValue: { en: "2024", ka: "2024" },
    visitWebsite: { en: "Visit Website", ka: "ვებსაიტის ნახვა" },
    mainTitle: {
        en: "Tourism & Hospitality Services Platform",
        ka: "ტურიზმისა და ჰოსპიტალიტის სერვისების პლატფორმა"
    },
    paragraph1: {
        en: "Thalassa Group is a premier tourism and hospitality company offering exceptional travel experiences and accommodation services. We developed a visually stunning website that captures the beauty of travel and showcases their premium services.",
        ka: "Thalassa Group არის წამყვანი ტურიზმისა და ჰოსპიტალიტის კომპანია, რომელიც სთავაზობს გამორჩეულ მოგზაურობის გამოცდილებებსა და განთავსების სერვისებს. ჩვენ შევქმენით ვიზუალურად შთამბეჭდავი ვებსაიტი, რომელიც ასახავს მოგზაურობის სილამაზეს და წარმოაჩენს მათ პრემიუმ სერვისებს."
    },
    paragraph2: {
        en: "The website features an immersive design with high-quality imagery, detailed service descriptions, and easy booking functionality. The design emphasizes luxury and adventure, perfect for attracting high-end tourism clients.",
        ka: "ვებსაიტს აქვს ინტერაქტიული დიზაინი მაღალი ხარისხის ვიზუალებით, სერვისების დეტალური აღწერებით და მარტივი ჯავშნის ფუნქციონალით. დიზაინი ხაზს უსვამს ლუქსსა და თავგადასავალს, რაც იდეალურია მაღალი კლასის ტურისტული კლიენტებისთვის."
    },
    keyFeatures: { en: "Key Features", ka: "მთავარი მახასიათებლები" },
    feature1: { en: "Tourism & Hospitality Platform", ka: "ტურიზმისა და ჰოსპიტალიტის პლატფორმა" },
    feature2: { en: "Hotel & Resort Showcase", ka: "სასტუმროებისა და რეზორტების წარდგენა" },
    feature3: { en: "Travel Services & Packages", ka: "მოგზაურობის სერვისები და პაკეტები" },
    feature4: { en: "Contact Forms & Booking", ka: "საკონტაქტო ფორმები და ჯავშნები" },
    feature5: { en: "Mobile Responsive Design", ka: "მობილური რესპონსიული დიზაინი" },
    feature6: { en: "SEO Optimized Content", ka: "SEO-ზე ოპტიმიზებული კონტენტი" },
    technicalImplementation: { en: "Technical Implementation", ka: "ტექნიკური განხორციელება" },
    tech1: { en: "WordPress CMS Platform", ka: "WordPress CMS პლატფორმა" },
    tech2: { en: "JetEngine for Custom Post Types", ka: "JetEngine კასტომ პოსტ ტიპებისთვის" },
    tech3: { en: "PHP Backend Development", ka: "PHP ბექენდ განვითარება" },
    tech4: { en: "MySQL Database", ka: "MySQL მონაცემთა ბაზა" },
    tech5: { en: "SEO Optimization & Plugins", ka: "SEO ოპტიმიზაცია და პლაგინები" },
    tech6: { en: "Security & Performance Optimization", ka: "უსაფრთხოებისა და შესრულების ოპტიმიზაცია" },
}

export default function ThalassaGroup() {
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
                                    <img
                                        src="/assets/img/portfolio/thalassagroup-tourism-hospitality.png"
                                        alt="Thalassa Group - Tourism and Hospitality Services in Georgia"
                                        className="w-100"
                                    />
                                </div>
                            </div>
                            <div className="col-lg-4" data-aos="zoom-in-left" data-aos-duration={1600}>
                                <div className="case-content-box bg1-clr py-xxl-10 py-xl-9 py-lg-8 py-6 px-xxl-10 px-xl-8 px-lg-6 px-5">
                                    <ul className="case-infobox mb-xxl-12 mb-xl-10 mb-lg-8 mb-7">
                                        <li className="d-flex align-items-center justify-content-between gap-2">
                                            <span className="white-clr">
                                                {t('categoryLabel', thalassaTexts.categoryLabel)}
                                            </span>
                                            <span className="white-clr">
                                                {t('categoryValue', thalassaTexts.categoryValue)}
                                            </span>
                                        </li>
                                        <li className="d-flex align-items-center justify-content-between gap-2">
                                            <span className="white-clr">
                                                {t('technologiesLabel', thalassaTexts.technologiesLabel)}
                                            </span>
                                            <span className="white-clr">
                                                {t('technologiesValue', thalassaTexts.technologiesValue)}
                                            </span>
                                        </li>
                                        <li className="d-flex align-items-center justify-content-between gap-2">
                                            <span className="white-clr">
                                                {t('clientLabel', thalassaTexts.clientLabel)}
                                            </span>
                                            <span className="white-clr">
                                                {t('clientValue', thalassaTexts.clientValue)}
                                            </span>
                                        </li>
                                        <li className="d-flex align-items-center justify-content-between gap-2">
                                            <span className="white-clr">
                                                {t('locationLabel', thalassaTexts.locationLabel)}
                                            </span>
                                            <span className="white-clr">
                                                {t('locationValue', thalassaTexts.locationValue)}
                                            </span>
                                        </li>
                                        <li className="d-flex align-items-center justify-content-between gap-2">
                                            <span className="white-clr">
                                                {t('dateLabel', thalassaTexts.dateLabel)}
                                            </span>
                                            <span className="white-clr">
                                                {t('dateValue', thalassaTexts.dateValue)}
                                            </span>
                                        </li>
                                    </ul>
                                    <Link
                                        href="https://thalassagroup.ge/"
                                        target="_blank"
                                        className="d-flex align-items-center justify-content-center w-100 fw-semibold py-xxl-4 py-xl-3 py-2 px-3 gap-2 themebg text-whitess"
                                    >
                                        <i className="fas fa-external-link-alt" />
                                        <span className="text-whitess">
                                            {t('visitWebsite', thalassaTexts.visitWebsite)}
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="row g-xxl-7 g-xl-6 g-5 mb-xxl-13 mb-10">
                            <div className="col-lg-12">
                                <div className="case-content-box">
                                    <h3
                                        className="white-clr mb-xxl-9 mb-xl-7 mb-lg-6 mb-4"
                                        data-aos="zoom-in-left"
                                        data-aos-duration={1600}
                                    >
                                        {t('mainTitle', thalassaTexts.mainTitle)}
                                    </h3>
                                    <p
                                        className="pra-clr mb-xxl-7 mb-xl-6 mb-5"
                                        data-aos="zoom-in"
                                        data-aos-duration={1500}
                                    >
                                        {t('paragraph1', thalassaTexts.paragraph1)}
                                    </p>
                                    <p
                                        className="pra-clr mb-xxl-7 mb-xl-6 mb-5"
                                        data-aos="zoom-in"
                                        data-aos-duration={1600}
                                    >
                                        {t('paragraph2', thalassaTexts.paragraph2)}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row g-xxl-7 g-xl-6 g-5 mb-xxl-13 mb-10">
                            <div className="col-lg-6">
                                <div className="case-content-box">
                                    <h4
                                        className="white-clr mb-xxl-7 mb-xl-6 mb-5"
                                        data-aos="zoom-in-left"
                                        data-aos-duration={1700}
                                    >
                                        {t('keyFeatures', thalassaTexts.keyFeatures)}
                                    </h4>
                                    <ul
                                        className="modern-list d-grid gap-3"
                                        data-aos="zoom-in"
                                        data-aos-duration={1500}
                                    >
                                        <li className="d-flex align-items-center gap-2">
                                            <i className="fas fa-check theme-clr" />
                                            {t('feature1', thalassaTexts.feature1)}
                                        </li>
                                        <li className="d-flex align-items-center gap-2">
                                            <i className="fas fa-check theme-clr" />
                                            {t('feature2', thalassaTexts.feature2)}
                                        </li>
                                        <li className="d-flex align-items-center gap-2">
                                            <i className="fas fa-check theme-clr" />
                                            {t('feature3', thalassaTexts.feature3)}
                                        </li>
                                        <li className="d-flex align-items-center gap-2">
                                            <i className="fas fa-check theme-clr" />
                                            {t('feature4', thalassaTexts.feature4)}
                                        </li>
                                        <li className="d-flex align-items-center gap-2">
                                            <i className="fas fa-check theme-clr" />
                                            {t('feature5', thalassaTexts.feature5)}
                                        </li>
                                        <li className="d-flex align-items-center gap-2">
                                            <i className="fas fa-check theme-clr" />
                                            {t('feature6', thalassaTexts.feature6)}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="case-content-box">
                                    <h4
                                        className="white-clr mb-xxl-7 mb-xl-6 mb-5"
                                        data-aos="zoom-in-left"
                                        data-aos-duration={1800}
                                    >
                                        {t('technicalImplementation', thalassaTexts.technicalImplementation)}
                                    </h4>
                                    <ul
                                        className="modern-list d-grid gap-3"
                                        data-aos="zoom-in"
                                        data-aos-duration={1600}
                                    >
                                        <li className="d-flex align-items-center gap-2">
                                            <i className="fas fa-check theme-clr" />
                                            {t('tech1', thalassaTexts.tech1)}
                                        </li>
                                        <li className="d-flex align-items-center gap-2">
                                            <i className="fas fa-check theme-clr" />
                                            {t('tech2', thalassaTexts.tech2)}
                                        </li>
                                        <li className="d-flex align-items-center gap-2">
                                            <i className="fas fa-check theme-clr" />
                                            {t('tech3', thalassaTexts.tech3)}
                                        </li>
                                        <li className="d-flex align-items-center gap-2">
                                            <i className="fas fa-check theme-clr" />
                                            {t('tech4', thalassaTexts.tech4)}
                                        </li>
                                        <li className="d-flex align-items-center gap-2">
                                            <i className="fas fa-check theme-clr" />
                                            {t('tech5', thalassaTexts.tech5)}
                                        </li>
                                        <li className="d-flex align-items-center gap-2">
                                            <i className="fas fa-check theme-clr" />
                                            {t('tech6', thalassaTexts.tech6)}
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

