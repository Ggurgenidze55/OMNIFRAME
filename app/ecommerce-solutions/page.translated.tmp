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

const ecommerceTexts = {
    breadcrumb: { en: "E-commerce Solutions", ka: "ელ. კომერციის გადაწყვეტები" },
    mainTitle: { en: "Custom E-commerce Solutions for Online Business Success.", ka: "მორგებული ელ. კომერციის გადაწყვეტილებები თქვენი ონლაინ ბიზნესის წარმატებისთვის." },
    payment: { en: "Payment", ka: "გადახდა" },
    inventory: { en: "Inventory", ka: "მარაგები" },
    analytics: { en: "Analytics", ka: "ანალიტიკა" },
    mobile: { en: "Mobile", ka: "მობილური" },
    serviceOverview: { en: "Service Overview", ka: "სერვისის მიმოხილვა" },
    paragraph1: {
        en: "Our e-commerce development services focus on creating custom online shopping experiences that drive sales and customer satisfaction. We build secure, scalable e-commerce platforms with integrated payment gateways, inventory management, and advanced analytics.",
        ka: "ჩვენი ელ. კომერციის განვითარების სერვისები ორიენტირებულია მორგებული ონლაინ შოპინგის გამოცდილებების შექმნაზე, რომლებიც ზრდის გაყიდვებს და მომხმარებლის კმაყოფილებას. ჩვენ ვაშენებთ უსაფრთხო, მასშტაბირებად ელ. კომერციის პლატფორმებს ინტეგრირებული გადახდის სისტემებით, მარაგების მართვით და განვითარებული ანალიტიკით."
    },
    paragraph2: {
        en: "We understand the unique challenges of online retail and create solutions that optimize the customer journey from browsing to checkout. Our platforms are designed for mobile-first experiences and include features like secure payment processing, order management, and customer relationship tools.",
        ka: "ჩვენ კარგად გვესმის ონლაინ რითეილის უნიკალური გამოწვევები და ვქმნით გადაწყვეტილებებს, რომლებიც ოპტიმიზაციას უკეთებს მომხმარებლის გზას პროდუქტის დათვალიერებიდან გადახდამდე. ჩვენი პლატფორმები შექმნილია mobile-first მიდგომით და მოიცავს ფუნქციებს, როგორიცაა უსაფრთხო გადახდის დამუშავება, შეკვეთების მართვა და კლიენტებთან ურთიერთობის ინსტრუმენტები."
    },
    benefitsTitle: { en: "Benefits With Our E-commerce Solutions", ka: "ჩვენი ელ. კომერციის გადაწყვეტილებების უპირატესობები" },
    benefit1: { en: "Custom e-commerce platform development", ka: "მორგებული ელ. კომერციის პლატფორმების შექმნა" },
    benefit2: { en: "Secure payment gateway integration", ka: "უსაფრთხო გადახდის სისტემების ინტეგრაცია" },
    benefit3: { en: "Inventory & order management", ka: "მარაგებისა და შეკვეთების მართვა" },
    benefit4: { en: "Mobile-optimized shopping experience", ka: "მობილურზე ოპტიმიზირებული შოპინგის გამოცდილება" },
    benefit5: { en: "Customer analytics & insights", ka: "კლიენტების ანალიტიკა და ინსაითები" },
    benefit6: { en: "24/7 technical support", ka: "24/7 ტექნიკური მხარდაჭერა" },
    conversionRate: { en: "Conversion Rate", ka: "კონვერსიის მაჩვენებელი" },
    userExperience: { en: "User Experience", ka: "მომხმარებლის გამოცდილება" },
    previous: { en: "previous", ka: "წინა" },
    next: { en: "Next", ka: "შემდეგი" },
}

export default function EcommerceSolutions() {
    const { t } = useTranslation()

    return (
        <>

            <Layout
                headerStyle={2}
                footerStyle={3}
                breadcrumbTitle={t('breadcrumb', ecommerceTexts.breadcrumb)}
                coverImage="/assets/img/covers/services-cover.jpg"
            >
                <section className="Service-details pt-space pb-space">
                    <div className="container">
                        <div className="service-details-header bb-border pb-xxl-9 pb-xl-7 pb-6">
                            <div className="thumb w-100 mb-xxl-12 mb-xl-9 mb-sm-6 mb-5" data-aos="zoom-in" data-aos-duration={1500}>
                                <img
                                    src="/assets/img/service/ecommerce-solutions-hero.jpg"
                                    alt="Professional E-commerce Solutions - Payment Integration, Inventory Management"
                                    className="w-100"
                                    style={{
                                        borderRadius: '20px',
                                        overflow: 'hidden'
                                    }}
                                />
                            </div>
                            <h3 className="white-clr mb-xxl-9 mb-xl-7 mb-lg-6 mb-4" data-aos="zoom-in-left" data-aos-duration={1600}>
                                {t('mainTitle', ecommerceTexts.mainTitle)}
                            </h3>
                            <div className="d-flex flex-wrap align-items-center gap-xxl-5 gap-xl-3 gap-2" data-aos="zoom-in-left" data-aos-duration={1800}>
                                <Link href="/ecommerce-solutions" className="radius-btn cmn-border radius100 py-xxl-2 py-2 px-xxl-4 px-3 theme-clr">
                                    {t('payment', ecommerceTexts.payment)}
                                </Link>
                                <Link href="/ecommerce-solutions" className="radius-btn cmn-border radius100 py-xxl-2 py-2 px-xxl-4 px-3 theme-clr">
                                    {t('inventory', ecommerceTexts.inventory)}
                                </Link>
                                <Link href="/ecommerce-solutions" className="radius-btn cmn-border radius100 py-xxl-2 py-2 px-xxl-4 px-3 theme-clr">
                                    {t('analytics', ecommerceTexts.analytics)}
                                </Link>
                                <Link href="/ecommerce-solutions" className="radius-btn cmn-border radius100 py-xxl-2 py-2 px-xxl-4 px-3 theme-clr">
                                    {t('mobile', ecommerceTexts.mobile)}
                                </Link>
                            </div>
                        </div>
                        <div className="case-study-detials-inner mt-xxl-10 mt-xl-7 mt-6">
                            <h4 className="mb-xxl-7 mb-4 white-clr">
                                {t('serviceOverview', ecommerceTexts.serviceOverview)}
                            </h4>
                            <div className="d-flex flex-md-nowrap flex-wrap justify-content-between gap-xxl-15 gap-xl-10 gap-lg-7 gap-sm-5 gap-3 mb-xxl-9 mb-xl-8 mb-lg-7 mb-4">
                                <p className="pra-clr challenge-pra1">
                                    {t('paragraph1', ecommerceTexts.paragraph1)}
                                </p>
                                <p className="pra-clr">
                                    {t('paragraph2', ecommerceTexts.paragraph2)}
                                </p>
                            </div>
                            <div className="finul-result">
                                <h4 className="mb-xxl-3 mb-2 white-clr">
                                    {t('benefitsTitle', ecommerceTexts.benefitsTitle)}
                                </h4>
                                <div className="d-md-flex flex-grid align-items-center gap-xxl-20 gap-xl-10 gap-lg-7 gap-md-6 gap-10">
                                    <div className="fiial-result-list mb-md-0 mb-4">
                                        <ul>
                                            <li>
                                                {t('benefit1', ecommerceTexts.benefit1)}
                                            </li>
                                            <li>
                                                {t('benefit2', ecommerceTexts.benefit2)}
                                            </li>
                                            <li>
                                                {t('benefit3', ecommerceTexts.benefit3)}
                                            </li>
                                        </ul>
                                        <ul>
                                            <li>
                                                {t('benefit4', ecommerceTexts.benefit4)}
                                            </li>
                                            <li>
                                                {t('benefit5', ecommerceTexts.benefit5)}
                                            </li>
                                            <li>
                                                {t('benefit6', ecommerceTexts.benefit6)}
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="result-progress-wrap">
                                        <div className="progres-item mb-xxl-6 mb-xl-5 mb-4">
                                            <div className="d-flex align-items-center justify-content-between mb-xxl-5 mb-3">
                                                <span className="conssub">
                                                    {t('conversionRate', ecommerceTexts.conversionRate)}
                                                </span>
                                                <span className="cons">89%</span>
                                            </div>
                                            <div className="progress-solving">
                                                <div className="progress-bar" />
                                            </div>
                                        </div>
                                        <div className="progres-item">
                                            <div className="d-flex align-items-center justify-content-between mb-xxl-5 mb-3">
                                                <span className="conssub">
                                                    {t('userExperience', ecommerceTexts.userExperience)}
                                                </span>
                                                <span className="cons">93%</span>
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
                                <Link href="/backend-development" className="cmn-prev cmn-border d-center" tabIndex={0} aria-label="Previous service">
                                    <i className="fas fa-chevron-left" />
                                </Link>
                                <span className="fw-bold white-clr previus-text text-capitalize">
                                    {t('previous', ecommerceTexts.previous)}
                                </span>
                            </div>
                            <h3 className="project-storke">
                                {t('breadcrumb', ecommerceTexts.breadcrumb)}
                            </h3>
                            <div className="d-flex align-items-center gap-xxl-5 gap-3 gap-2">
                                <span className="fw-bold white-clr previus-text text-capitalize">
                                    {t('next', ecommerceTexts.next)}
                                </span>
                                <Link href="/web-maintenance" className="cmn-next cmn-border d-center" tabIndex={0} aria-label="Next service">
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

