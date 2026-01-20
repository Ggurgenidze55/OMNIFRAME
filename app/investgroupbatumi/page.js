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

const igbTexts = {
    breadcrumb: { en: "Invest Group Batumi - Investment Services", ka: "Invest Group Batumi - საინვესტიციო სერვისები" },
    categoryLabel: { en: "Category:", ka: "კატეგორია:" },
    categoryValue: { en: "Investment & Finance", ka: "ინვესტიციები და ფინანსები" },
    technologiesLabel: { en: "Technologies:", ka: "ტექნოლოგიები:" },
    technologiesValue: { en: "WordPress, JetEngine, PHP", ka: "WordPress, JetEngine, PHP" },
    clientLabel: { en: "Client:", ka: "კლიენტი:" },
    clientValue: { en: "Invest Group Batumi", ka: "Invest Group Batumi" },
    locationLabel: { en: "Location:", ka: "მდებარეობა:" },
    locationValue: { en: "Batumi, Georgia", ka: "ბათუმი, საქართველო" },
    dateLabel: { en: "Date:", ka: "თარიღი:" },
    dateValue: { en: "2024", ka: "2024" },
    visitWebsite: { en: "Visit Website", ka: "ვებსაიტის ნახვა" },
    mainTitle: {
        en: "Investment & Financial Services Platform",
        ka: "ინვესტიციებისა და ფინანსური სერვისების პლატფორმა"
    },
    paragraph1: {
        en: "Invest Group Batumi is a leading investment company providing comprehensive financial services in the Batumi region. We developed a professional website that showcases their investment expertise and service offerings with a focus on trust and credibility.",
        ka: "Invest Group Batumi არის წამყვანი საინვესტიციო კომპანია, რომელიც ბათუმის რეგიონში სთავაზობს ფართო ფინანსურ სერვისებს. ჩვენ შევქმენით პროფესიონალური ვებსაიტი, რომელიც აჩვენებს მათ საინვესტიციო ექსპერტიზასა და სერვისებს, აქცენტით ნდობასა და სანდოობაზე."
    },
    paragraph2: {
        en: "The website features a sophisticated financial design with clear service descriptions, investment opportunities, and company credentials. The design emphasizes stability and professionalism, crucial for financial services and investment clients.",
        ka: "ვებსაიტს აქვს დახვეწილი, ფინანსურ თემატიკაზე აწყობილი დიზაინი, ნათელი სერვისების აღწერებით, ინვესტიციის შესაძლებლობებითა და კომპანიის სანდოობის მაჩვენებლებით. დიზაინი ხაზს უსვამს სტაბილურობასა და პროფესიონალიზმს, რაც განსაკუთრებულად მნიშვნელოვანია ფინანსური სერვისებისა და ინვესტიციების კლიენტებისთვის."
    },
    keyFeatures: { en: "Key Features", ka: "მთავარი მახასიათებლები" },
    feature1: { en: "Investment Services Platform", ka: "საინვესტიციო სერვისების პლატფორმა" },
    feature2: { en: "Business Solutions Showcase", ka: "ბიზნეს გადაწყვეტილებების წარდგენა" },
    feature3: { en: "Company Portfolio & Projects", ka: "კომპანიის პორტფოლიო და პროექტები" },
    feature4: { en: "Contact Forms & Consultation", ka: "საკონტაქტო ფორმები და კონსულტაციები" },
    feature5: { en: "Mobile Responsive Design", ka: "მობილური რესპონსივი დიზაინი" },
    feature6: { en: "SEO Optimized Content", ka: "SEO-ზე ოპტიმიზებული კონტენტი" },
    technicalImplementation: { en: "Technical Implementation", ka: "ტექნიკური განხორციელება" },
    tech1: { en: "WordPress CMS Platform", ka: "WordPress CMS პლატფორმა" },
    tech2: { en: "JetEngine for Custom Post Types", ka: "JetEngine კასტომ პოსტ ტიპებისთვის" },
    tech3: { en: "PHP Backend Development", ka: "PHP ბექენდ განვითარება" },
    tech4: { en: "MySQL Database", ka: "MySQL მონაცემთა ბაზა" },
    tech5: { en: "SEO Optimization & Plugins", ka: "SEO ოპტიმიზაცია და პლაგინები" },
    tech6: { en: "Security & Performance Optimization", ka: "უსაფრთხოებისა და შესრულების ოპტიმიზაცია" },
}

export default function InvestGroupBatumi() {
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
                                    <img src="/assets/img/portfolio/investgroup-batumi-investment.png" alt="Invest Group Batumi - Investment Services and Business Solutions" className="w-100" />
                                </div>
                            </div>
                            <div className="col-lg-4" data-aos="zoom-in-left" data-aos-duration={1600}>
                                <div className="case-content-box bg1-clr py-xxl-10 py-xl-9 py-lg-8 py-6 px-xxl-10 px-xl-8 px-lg-6 px-5">
                                    <ul className="case-infobox mb-xxl-12 mb-xl-10 mb-lg-8 mb-7">
                                        <li className="d-flex align-items-center justify-content-between gap-2">
                                            <span className="white-clr">
                                                {t('categoryLabel', igbTexts.categoryLabel)}
                                            </span>
                                            <span className="white-clr">
                                                {t('categoryValue', igbTexts.categoryValue)}
                                            </span>
                                        </li>
                                        <li className="d-flex align-items-center justify-content-between gap-2">
                                            <span className="white-clr">
                                                {t('technologiesLabel', igbTexts.technologiesLabel)}
                                            </span>
                                            <span className="white-clr">
                                                {t('technologiesValue', igbTexts.technologiesValue)}
                                            </span>
                                        </li>
                                        <li className="d-flex align-items-center justify-content-between gap-2">
                                            <span className="white-clr">
                                                {t('clientLabel', igbTexts.clientLabel)}
                                            </span>
                                            <span className="white-clr">
                                                {t('clientValue', igbTexts.clientValue)}
                                            </span>
                                        </li>
                                        <li className="d-flex align-items-center justify-content-between gap-2">
                                            <span className="white-clr">
                                                {t('locationLabel', igbTexts.locationLabel)}
                                            </span>
                                            <span className="white-clr">
                                                {t('locationValue', igbTexts.locationValue)}
                                            </span>
                                        </li>
                                        <li className="d-flex align-items-center justify-content-between gap-2">
                                            <span className="white-clr">
                                                {t('dateLabel', igbTexts.dateLabel)}
                                            </span>
                                            <span className="white-clr">
                                                {t('dateValue', igbTexts.dateValue)}
                                            </span>
                                        </li>
                                    </ul>
                                    <Link href="https://investgroupbatumi.ge/" target="_blank" className="d-flex align-items-center justify-content-center w-100 fw-semibold py-xxl-4 py-xl-3 py-2 px-3 gap-2 themebg text-whitess">
                                        <i className="fas fa-external-link-alt" />
                                        <span className="text-whitess">
                                            {t('visitWebsite', igbTexts.visitWebsite)}
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="row g-xxl-7 g-xl-6 g-5 mb-xxl-13 mb-10">
                            <div className="col-lg-12">
                                <div className="case-content-box">
                                    <h3 className="white-clr mb-xxl-9 mb-xl-7 mb-lg-6 mb-4" data-aos="zoom-in-left" data-aos-duration={1600}>
                                        {t('mainTitle', igbTexts.mainTitle)}
                                    </h3>
                                    <p className="pra-clr mb-xxl-7 mb-xl-6 mb-5" data-aos="zoom-in" data-aos-duration={1500}>
                                        {t('paragraph1', igbTexts.paragraph1)}
                                    </p>
                                    <p className="pra-clr mb-xxl-7 mb-xl-6 mb-5" data-aos="zoom-in" data-aos-duration={1600}>
                                        {t('paragraph2', igbTexts.paragraph2)}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row g-xxl-7 g-xl-6 g-5 mb-xxl-13 mb-10">
                            <div className="col-lg-6">
                                <div className="case-content-box">
                                    <h4 className="white-clr mb-xxl-7 mb-xl-6 mb-5" data-aos="zoom-in-left" data-aos-duration={1700}>
                                        {t('keyFeatures', igbTexts.keyFeatures)}
                                    </h4>
                                    <ul className="modern-list d-grid gap-3" data-aos="zoom-in" data-aos-duration={1500}>
                                        <li className="d-flex align-items-center gap-2">
                                            <i className="fas fa-check theme-clr" />
                                            {t('feature1', igbTexts.feature1)}
                                        </li>
                                        <li className="d-flex align-items-center gap-2">
                                            <i className="fas fa-check theme-clr" />
                                            {t('feature2', igbTexts.feature2)}
                                        </li>
                                        <li className="d-flex align-items-center gap-2">
                                            <i className="fas fa-check theme-clr" />
                                            {t('feature3', igbTexts.feature3)}
                                        </li>
                                        <li className="d-flex align-items-center gap-2">
                                            <i className="fas fa-check theme-clr" />
                                            {t('feature4', igbTexts.feature4)}
                                        </li>
                                        <li className="d-flex align-items-center gap-2">
                                            <i className="fas fa-check theme-clr" />
                                            {t('feature5', igbTexts.feature5)}
                                        </li>
                                        <li className="d-flex align-items-center gap-2">
                                            <i className="fas fa-check theme-clr" />
                                            {t('feature6', igbTexts.feature6)}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="case-content-box">
                                    <h4 className="white-clr mb-xxl-7 mb-xl-6 mb-5" data-aos="zoom-in-left" data-aos-duration={1800}>
                                        {t('technicalImplementation', igbTexts.technicalImplementation)}
                                    </h4>
                                    <ul className="modern-list d-grid gap-3" data-aos="zoom-in" data-aos-duration={1600}>
                                        <li className="d-flex align-items-center gap-2">
                                            <i className="fas fa-check theme-clr" />
                                            {t('tech1', igbTexts.tech1)}
                                        </li>
                                        <li className="d-flex align-items-center gap-2">
                                            <i className="fas fa-check theme-clr" />
                                            {t('tech2', igbTexts.tech2)}
                                        </li>
                                        <li className="d-flex align-items-center gap-2">
                                            <i className="fas fa-check theme-clr" />
                                            {t('tech3', igbTexts.tech3)}
                                        </li>
                                        <li className="d-flex align-items-center gap-2">
                                            <i className="fas fa-check theme-clr" />
                                            {t('tech4', igbTexts.tech4)}
                                        </li>
                                        <li className="d-flex align-items-center gap-2">
                                            <i className="fas fa-check theme-clr" />
                                            {t('tech5', igbTexts.tech5)}
                                        </li>
                                        <li className="d-flex align-items-center gap-2">
                                            <i className="fas fa-check theme-clr" />
                                            {t('tech6', igbTexts.tech6)}
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
