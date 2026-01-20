 +'use client'
import Link from "next/link"
import { useTranslation } from "@/contexts/LanguageContext"

const blog1Texts = {
    badge: { en: "BLOG & News", ka: "ბლოგი და სიახლეები" },
    titleLine1: { en: "Check Our", ka: "გაეცანით ჩვენი" },
    titleCompany: { en: "Company", ka: "კომპანიის" },
    titleLine2: { en: "Inside Story", ka: "სიახლეებს" },
    viewAll: { en: "View all Articles", ka: "ყველა სტატიის ნახვა" },
    catJavascript: { en: "JavaScript", ka: "JavaScript" },
    catFrontend: { en: "Frontend", ka: "Frontend" },
    catPerformance: { en: "Performance", ka: "წარმადობა" },
    catCSS: { en: "CSS", ka: "CSS" },
    catBackend: { en: "Backend", ka: "Backend" },
    catPwa: { en: "PWA", ka: "PWA" },
    catSecurity: { en: "Security", ka: "უსაფრთხოება" },
    catDesign: { en: "Design", ka: "დიზაინი" },
    catEcommerce: { en: "E-commerce", ka: "E-commerce" },
    jsTitle: {
        en: "JavaScript Frameworks 2024: Complete Guide",
        ka: "JavaScript ფრეიმვორკები 2024: სრული გზამკვლევი",
    },
    reactVueTitle: {
        en: "React vs Vue 2024: Which Framework to Choose",
        ka: "React vs Vue 2024: რომელი ფრეიმვორკი ავირჩიოთ",
    },
    nextPerfTitle: {
        en: "Next.js Performance Optimization Tips",
        ka: "Next.js წარმადობის ოპტიმიზაციის რჩევები",
    },
    cssTitle: {
        en: "Modern CSS Techniques for 2024",
        ka: "თანამედროვე CSS ტექნიკები 2024 წლისთვის",
    },
    apiTitle: {
        en: "API Design Best Practices",
        ka: "API დიზაინის საუკეთესო პრაქტიკა",
    },
    pwaTitle: {
        en: "Progressive Web Apps Complete Guide",
        ka: "პროგრესული ვებ-აპლიკაციების (PWA) სრული გზამკვლევი",
    },
    webPerfTitle: {
        en: "Web Performance Optimization",
        ka: "ვებ-წარმადობის ოპტიმიზაცია",
    },
    secTitle: {
        en: "Web Security Best Practices",
        ka: "ვებ-უსაფრთხოების საუკეთესო პრაქტიკა",
    },
    responsiveTitle: {
        en: "Responsive Design Principles",
        ka: "Responsive დიზაინის პრინციპები",
    },
    ecommerceTitle: {
        en: "E-commerce Development Trends",
        ka: "E-commerce ტენდენციები",
    },
}

export default function Blog1() {
    const { t } = useTranslation()

    return (
        <>

            <section className="home-blog-version1 pb-space pt-space">
                <div className="container zindex position-relative">
                    <div className="d-flex align-items-center justify-content-between flex-wrap gap-5 mb-xxl-15 mb-xl-12 mb-lg-10 mb-md-10 mb-sm-10 mb-9">
                        <div className="pricing-title">
                            <div className="radius-btn text-uppercase cmn-border d-inline-flex radius100 py-xxl-2 py-2 px-xxl-4 px-4 theme-clr gap-xxl-4 gap-3 mb-xxl-8 mb-xl-6 mb-5">
                                {t('badge', blog1Texts.badge)}
                            </div>
                            <h2 className="stitle">
                                {t('titleLine1', blog1Texts.titleLine1)}{" "}
                                <span className="fw-400">{t('titleCompany', blog1Texts.titleCompany)}</span>
                                <span className="d-block fw-semibold">
                                    {t('titleLine2', blog1Texts.titleLine2)}
                                </span>
                            </h2>
                        </div>
                        <Link href="/blog-grid" className="radius-btn d-inline-flex radius100 py-xxl-2 py-2 px-xxl-5 px-5 theme-border theme-clr gap-xxl-4 gap-3 mb-xxl-8 mb-xl-6 mb-5 style-2">
                            {t('viewAll', blog1Texts.viewAll)}
                            <span className="rot60 d-inline-block">
                                <i className="fas fa-arrow-up theme-clr" />
                            </span>
                        </Link>
                    </div>
                    <div className="row g-xxl-7 g-xl-6 g-4">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="blog-widget-item">
                                <div className="thumb w-100 overflow-hidden mb-xxl-7 mb-xl-6 mb-4">
                                    <img src="/assets/img/blog/featured/javascript-frameworks-2024-guide.jpg" alt="JavaScript Frameworks 2024 Complete Guide" className="w-100 overflow-hidden" />
                                </div>
                                <div className="blog-cont">
                                    <div className="d-flex align-items-center gap-xxl-5 gap-xl-4 gap-3 mb-xxl-5 mb-xl-4 mb-3">
                                        <Link href="/javascript-frameworks-2024" className="radius-btn cmn-border radius100 py-xxl-1 py-1 px-xxl-4 px-3 theme-clr style-2">
                                            {t('catJavascript', blog1Texts.catJavascript)}
                                            <span className="rot60 d-inline-block ml-10">
                                                <i className="fas fa-arrow-up theme-clr" />
                                            </span>
                                        </Link>
                                        <span className="bspan-clr">
                                            June 8, 2025
                                        </span>
                                    </div>
                                    <h5>
                                        <Link href="/javascript-frameworks-2024" className="white-clr">
                                            {t('jsTitle', blog1Texts.jsTitle)}
                                        </Link>
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="blog-widget-item">
                                <div className="thumb w-100 overflow-hidden mb-xxl-7 mb-xl-6 mb-4">
                                    <img src="/assets/img/blog/featured/react-vs-vue-2024-comparison.jpg" alt="React vs Vue 2024 Framework Comparison" className="w-100 overflow-hidden" />
                                </div>
                                <div className="blog-cont">
                                    <div className="d-flex align-items-center gap-xxl-5 gap-xl-4 gap-3 mb-xxl-5 mb-xl-4 mb-3">
                                        <Link href="/react-vs-vue-2024" className="radius-btn cmn-border radius100 py-xxl-1 py-1 px-xxl-4 px-3 theme-clr style-2">
                                            {t('catFrontend', blog1Texts.catFrontend)}
                                            <span className="rot60 d-inline-block ml-10">
                                                <i className="fas fa-arrow-up theme-clr" />
                                            </span>
                                        </Link>
                                        <span className="bspan-clr">
                                            June 15, 2025
                                        </span>
                                    </div>
                                    <h5>
                                        <Link href="/react-vs-vue-2024" className="white-clr">
                                            {t('reactVueTitle', blog1Texts.reactVueTitle)}
                                        </Link>
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="blog-widget-item">
                                <div className="thumb w-100 overflow-hidden mb-xxl-7 mb-xl-6 mb-4">
                                    <img src="/assets/img/blog/featured/nextjs-performance-optimization-tips.jpg" alt="Next.js Performance Optimization Tips" className="w-100 overflow-hidden" />
                                </div>
                                <div className="blog-cont">
                                    <div className="d-flex align-items-center gap-xxl-5 gap-xl-4 gap-3 mb-xxl-5 mb-xl-4 mb-3">
                                        <Link href="/nextjs-performance-tips" className="radius-btn cmn-border radius100 py-xxl-1 py-1 px-xxl-4 px-3 theme-clr style-2">
                                            {t('catPerformance', blog1Texts.catPerformance)}
                                            <span className="rot60 d-inline-block ml-10">
                                                <i className="fas fa-arrow-up theme-clr" />
                                            </span>
                                        </Link>
                                        <span className="bspan-clr">
                                            June 14, 2025
                                        </span>
                                    </div>
                                    <h5>
                                        <Link href="/nextjs-performance-tips" className="white-clr">
                                            {t('nextPerfTitle', blog1Texts.nextPerfTitle)}
                                        </Link>
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="blog-widget-item">
                                <div className="thumb w-100 overflow-hidden mb-xxl-7 mb-xl-6 mb-4">
                                    <img src="/assets/img/blog/featured/modern-css-techniques-2024.jpg" alt="Modern CSS Techniques for 2024" className="w-100 overflow-hidden" />
                                </div>
                                <div className="blog-cont">
                                    <div className="d-flex align-items-center gap-xxl-5 gap-xl-4 gap-3 mb-xxl-5 mb-xl-4 mb-3">
                                        <Link href="/modern-css-techniques" className="radius-btn cmn-border radius100 py-xxl-1 py-1 px-xxl-4 px-3 theme-clr style-2">
                                            {t('catCSS', blog1Texts.catCSS)}
                                            <span className="rot60 d-inline-block ml-10">
                                                <i className="fas fa-arrow-up theme-clr" />
                                            </span>
                                        </Link>
                                        <span className="bspan-clr">
                                            June 13, 2025
                                        </span>
                                    </div>
                                    <h5>
                                        <Link href="/modern-css-techniques" className="white-clr">
                                            {t('cssTitle', blog1Texts.cssTitle)}
                                        </Link>
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="blog-widget-item">
                                <div className="thumb w-100 overflow-hidden mb-xxl-7 mb-xl-6 mb-4">
                                    <img src="/assets/img/blog/featured/api-design-best-practices.jpg" alt="API Design Best Practices" className="w-100 overflow-hidden" />
                                </div>
                                <div className="blog-cont">
                                    <div className="d-flex align-items-center gap-xxl-5 gap-xl-4 gap-3 mb-xxl-5 mb-xl-4 mb-3">
                                        <Link href="/api-design-best-practices" className="radius-btn cmn-border radius100 py-xxl-1 py-1 px-xxl-4 px-3 theme-clr style-2">
                                            {t('catBackend', blog1Texts.catBackend)}
                                            <span className="rot60 d-inline-block ml-10">
                                                <i className="fas fa-arrow-up theme-clr" />
                                            </span>
                                        </Link>
                                        <span className="bspan-clr">
                                            June 12, 2025
                                        </span>
                                    </div>
                                    <h5>
                                        <Link href="/api-design-best-practices" className="white-clr">
                                            {t('apiTitle', blog1Texts.apiTitle)}
                                        </Link>
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="blog-widget-item">
                                <div className="thumb w-100 overflow-hidden mb-xxl-7 mb-xl-6 mb-4">
                                    <img src="/assets/img/blog/featured/progressive-web-apps-guide-2024.jpg" alt="Progressive Web Apps Complete Guide 2024" className="w-100 overflow-hidden" />
                                </div>
                                <div className="blog-cont">
                                    <div className="d-flex align-items-center gap-xxl-5 gap-xl-4 gap-3 mb-xxl-5 mb-xl-4 mb-3">
                                        <Link href="/progressive-web-apps-guide" className="radius-btn cmn-border radius100 py-xxl-1 py-1 px-xxl-4 px-3 theme-clr style-2">
                                            {t('catPwa', blog1Texts.catPwa)}
                                            <span className="rot60 d-inline-block ml-10">
                                                <i className="fas fa-arrow-up theme-clr" />
                                            </span>
                                        </Link>
                                        <span className="bspan-clr">
                                            June 11, 2025
                                        </span>
                                    </div>
                                    <h5>
                                        <Link href="/progressive-web-apps-guide" className="white-clr">
                                            {t('pwaTitle', blog1Texts.pwaTitle)}
                                        </Link>
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="blog-widget-item">
                                <div className="thumb w-100 overflow-hidden mb-xxl-7 mb-xl-6 mb-4">
                                    <img src="/assets/img/blog/featured/web-performance-optimization-guide.jpg" alt="Web Performance Optimization Guide" className="w-100 overflow-hidden" />
                                </div>
                                <div className="blog-cont">
                                    <div className="d-flex align-items-center gap-xxl-5 gap-xl-4 gap-3 mb-xxl-5 mb-xl-4 mb-3">
                                        <Link href="/web-performance-optimization" className="radius-btn cmn-border radius100 py-xxl-1 py-1 px-xxl-4 px-3 theme-clr style-2">
                                            {t('catPerformance', blog1Texts.catPerformance)}
                                            <span className="rot60 d-inline-block ml-10">
                                                <i className="fas fa-arrow-up theme-clr" />
                                            </span>
                                        </Link>
                                        <span className="bspan-clr">
                                            June 10, 2025
                                        </span>
                                    </div>
                                    <h5>
                                        <Link href="/web-performance-optimization" className="white-clr">
                                            {t('webPerfTitle', blog1Texts.webPerfTitle)}
                                        </Link>
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="blog-widget-item">
                                <div className="thumb w-100 overflow-hidden mb-xxl-7 mb-xl-6 mb-4">
                                    <img src="/assets/img/blog/featured/web-security-best-practices-developers.jpg" alt="Web Security Best Practices for Developers" className="w-100 overflow-hidden" />
                                </div>
                                <div className="blog-cont">
                                    <div className="d-flex align-items-center gap-xxl-5 gap-xl-4 gap-3 mb-xxl-5 mb-xl-4 mb-3">
                                        <Link href="/web-security-best-practices" className="radius-btn cmn-border radius100 py-xxl-1 py-1 px-xxl-4 px-3 theme-clr style-2">
                                            {t('catSecurity', blog1Texts.catSecurity)}
                                            <span className="rot60 d-inline-block ml-10">
                                                <i className="fas fa-arrow-up theme-clr" />
                                            </span>
                                        </Link>
                                        <span className="bspan-clr">
                                            June 9, 2025
                                        </span>
                                    </div>
                                    <h5>
                                        <Link href="/web-security-best-practices" className="white-clr">
                                            {t('secTitle', blog1Texts.secTitle)}
                                        </Link>
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="blog-widget-item">
                                <div className="thumb w-100 overflow-hidden mb-xxl-7 mb-xl-6 mb-4">
                                    <img src="/assets/img/blog/featured/responsive-design-principles-guide.jpg" alt="Responsive Design Principles Guide" className="w-100 overflow-hidden" />
                                </div>
                                <div className="blog-cont">
                                    <div className="d-flex align-items-center gap-xxl-5 gap-xl-4 gap-3 mb-xxl-5 mb-xl-4 mb-3">
                                        <Link href="/responsive-design-principles" className="radius-btn cmn-border radius100 py-xxl-1 py-1 px-xxl-4 px-3 theme-clr style-2">
                                            {t('catDesign', blog1Texts.catDesign)}
                                            <span className="rot60 d-inline-block ml-10">
                                                <i className="fas fa-arrow-up theme-clr" />
                                            </span>
                                        </Link>
                                        <span className="bspan-clr">
                                            June 7, 2025
                                        </span>
                                    </div>
                                    <h5>
                                        <Link href="/responsive-design-principles" className="white-clr">
                                            {t('responsiveTitle', blog1Texts.responsiveTitle)}
                                        </Link>
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="blog-widget-item">
                                <div className="thumb w-100 overflow-hidden mb-xxl-7 mb-xl-6 mb-4">
                                    <img src="/assets/img/blog/featured/ecommerce-development-trends-2024.jpg" alt="E-commerce Development Trends 2024" className="w-100 overflow-hidden" />
                                </div>
                                <div className="blog-cont">
                                    <div className="d-flex align-items-center gap-xxl-5 gap-xl-4 gap-3 mb-xxl-5 mb-xl-4 mb-3">
                                        <Link href="/ecommerce-development-trends" className="radius-btn cmn-border radius100 py-xxl-1 py-1 px-xxl-4 px-3 theme-clr style-2">
                                            {t('catEcommerce', blog1Texts.catEcommerce)}
                                            <span className="rot60 d-inline-block ml-10">
                                                <i className="fas fa-arrow-up theme-clr" />
                                            </span>
                                        </Link>
                                        <span className="bspan-clr">
                                            June 6, 2025
                                        </span>
                                    </div>
                                    <h5>
                                        <Link href="/ecommerce-development-trends" className="white-clr">
                                            {t('ecommerceTitle', blog1Texts.ecommerceTitle)}
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
