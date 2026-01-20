'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useTranslation } from "@/contexts/LanguageContext"

const modernCssTexts = {
    breadcrumb: {
        en: "Modern CSS Techniques for 2024",
        ka: "თანამედროვე CSS ტექნიკები 2024 წლისთვის",
    },
    writtenBy: { en: "Written by:", ka: "ავტორი:" },
    omniframeTeam: { en: "OMNIframe Team", ka: "OMNIframe გუნდი" },
    mainTitle: {
        en: "Modern CSS Techniques: Cutting-Edge Features for 2024 Web Development",
        ka: "თანამედროვე CSS ტექნიკები: უახლესი შესაძლებლობები 2024 წლის ვებ განვითარებისათვის",
    },
    paragraph1: {
        en: "CSS has evolved dramatically over the past few years, introducing powerful new features that make web development more efficient and creative than ever before. From CSS Grid and Flexbox to modern selectors and custom properties, developers now have access to tools that were unimaginable just a decade ago.",
        ka: "ბოლო წლებში CSS-მა უზარმაზარი გზა გაიარა და წარმოგვიდგინა ახალი, ძლიერი შესაძლებლობები, რომლებიც ვებ განვითარების პროცესს ბევრად ეფექტურსა და კრეატიულს ხდის. CSS Grid-იდან და Flexbox-იდან თანამედროვე სელექტორებამდე და custom properties-მდე, დეველოპერებს დღეს აქვთ ინსტრუმენტები, რომელთა წარმოდგენაც ათი წლის წინ შეუძლებელი იყო.",
    },
    paragraph2: {
        en: "In this comprehensive guide, we'll explore the most cutting-edge CSS techniques that are reshaping how we build modern web interfaces. These techniques not only improve the visual appeal of websites but also enhance performance, accessibility, and maintainability.",
        ka: "ამ ყოვლისმომცველ გზამკვლევში განვიხილავთ ყველაზე ახლის CSS ტექნიკებს, რომლებიც მთლიანად ცვლიან იმ გზას, როგორც ვქმნით თანამედროვე ვებ ინტერფესებს. ეს მიდგომები არა მხოლოდ ვიზუალურ მხარეს აუმჯობესებს, არამედ ზრდის წარმადობას, ხელმისაწვდომობასა და კოდის შენარჩუნებადობას.",
    },
    sectionTitle: {
        en: "CSS Grid: The Ultimate Layout System",
        ka: "CSS Grid: ყველაზე ძლიერი ლეიაუთ სისტემა",
    },
    gridParagraph: {
        en: "CSS Grid has revolutionized web layout by providing a two-dimensional layout system that gives developers unprecedented control over both rows and columns. Unlike Flexbox, which is primarily one-dimensional, Grid allows for complex layouts that were previously only possible with JavaScript or complex CSS hacks.",
        ka: "CSS Grid-მა რადიკალურად შეცვალა ვებ ლეიაუთი, რადგან გვაძლევს ორმხრივ სისტემას, სადაც კონტროლს ვაფარებთ როგორც რიგებს, ასევე სვეტებს. Flexbox-ისგან განსხვავებით, რომელიც ძირითადად ერთგანზომილებიანია, Grid საშუალებას გვაძლევს შევქმნათ რთული ლეიაუთები, რომლებიც ადრე მხოლოდ JavaScript-ის ან რთული CSS ხერხების საშუალებით იყო შესაძლებელი.",
    },
    advantage1: {
        en: "Two-dimensional layout control (rows and columns)",
        ka: "ორმხრივი ლეიაუთის კონტროლი (რიგები და სვეტები)",
    },
    advantage2: {
        en: "Automatic responsive behavior with minmax()",
        ka: "ავტომატური რესპონსიულობა minmax() ფუნქციის საშუალებით",
    },
    advantage3: {
        en: "Named grid areas for semantic layouts",
        ka: "დასახელებული grid-უბნები უფრო_semantიკი ლეიაუთებისთვის",
    },
    advantage4: {
        en: "Powerful alignment and distribution controls",
        ka: "დაძლიერებული განლაგებისა და განაწილების კონტროლი",
    },
    advantage5: {
        en: "Built-in responsive design capabilities",
        ka: "ჩაშენებული რესპონსიული დიზაინის შესაძლებლობები",
    },
    quote: {
        en: "CSS Grid has made complex layouts simple and responsive design intuitive, eliminating the need for countless media queries and JavaScript calculations.",
        ka: "CSS Grid-მა რთული ლეიაუთები მარტივად აქცია და რესპონსიული დიზაინი ინტუიციური გახადა, მოაშორა რა უამრავი media query-სა და JavaScript გამოთვლების საჭიროება.",
    },
    conclusion: {
        en: "The combination of CSS Grid and Flexbox provides developers with a complete toolkit for creating any layout imaginable. While Grid handles the overall page structure, Flexbox excels at component-level layouts and alignment.",
        ka: "CSS Grid-ისა და Flexbox-ის კომბინაცია დეველოპერებს სრულფასოვან ინსტრუმენტარიუმს აძლევს ნებისმიერი წარმოსადგენი ლეიაუთის შესაქმნელად. Grid პასუხისმგებელია გვერდის საერთო სტრუქტურაზე, ხოლო Flexbox ბრწყინვალეა კომპონენტების შიდა განლაგებისა და გასწორებისთვის.",
    },
    tagsLabel: { en: "Tags:", ka: "ტეგები:" },
    share: { en: "Share:", ka: "გაზიარება:" },
    prevPost: {
        en: "Next.js Performance Tips",
        ka: "Next.js წარმადობის რჩევები",
    },
    nextPost: {
        en: "API Design Best Practices",
        ka: "API დიზაინის საუკეთესო პრაქტიკა",
    },
    search: { en: "Search", ka: "ძიება" },
    searchPlaceholder: { en: "Search here...", ka: "ძიება..." },
    categories: { en: "Categories", ka: "კატეგორიები" },
    recentPosts: { en: "Recent Posts", ka: "ბოლო სტატიები" },
    tagTitle: { en: "Tags", ka: "ტეგები" },
    frontendDevelopment: { en: "Frontend Development", ka: "ფრონტენდ განვითარება" },
    backendDevelopment: { en: "Backend Development", ka: "ბექენდ განვითარება" },
    webDevelopment: { en: "Web Development", ka: "ვებ განვითარება" },
    ecommerce: { en: "E-commerce", ka: "ელ. კომერცია" },
    performance: { en: "Performance", ka: "წარმადობა" },
    bestPractices: { en: "Best Practices", ka: "საუკეთესო პრაქტიკა" },
    recentPost1: {
        en: "React vs Vue 2024 Comparison",
        ka: "React vs Vue 2024 შედარება",
    },
    recentPost2: {
        en: "Next.js Performance Optimization Tips",
        ka: "Next.js წარმადობის ოპტიმიზაციის რჩევები",
    },
    recentPost3: {
        en: "API Design Best Practices",
        ka: "API დიზაინის საუკეთესო პრაქტიკა",
    },
}

export default function ModernCSSTechniques() {
    const { t } = useTranslation()

    return (
        <>
            <Layout
                headerStyle={2}
                footerStyle={3}
            >
                <section className="blog-details pt-space pb-space">
                    <div className="container">
                        <div className="row g-5">
                            <div className="col-12 col-lg-8">
                                <div className="blog-post-details mb-xxl-10 mb-xl-8 mb-lg-7 mb-6">
                                    <div className="single-blog-post">
                                        <div
                                            className="post-featured-thumb w-100 mb-xxl-30 mb-xl-6 mb-5"
                                            data-aos="zoom-in"
                                            data-aos-duration={1400}
                                        >
                                            <img
                                                src="/assets/img/blog/featured/modern-css-techniques-2024.jpg"
                                                alt="Modern CSS Techniques for 2024"
                                                className="w-100"
                                            />
                                        </div>
                                        <div className="post-content">
                                            <div
                                                className="post-marry d-flex align-items-center gap-xxl-8 gap-xl-6 gap-4 gap-3 mb-xxl-5 mb-xl-4 mb-lg-3 mb-3"
                                                data-aos="fade-left"
                                                data-aos-duration={1500}
                                            >
                                                <span>
                                                    {t('writtenBy', modernCssTexts.writtenBy)}{" "}
                                                    <span className="tag-clr">
                                                        {t('omniframeTeam', modernCssTexts.omniframeTeam)}
                                                    </span>
                                                </span>
                                                <i className="fas fa-circle white" />
                                                <span>13/01/2025</span>
                                            </div>
                                            <div className="mb-xxl-13 mb-xl-10 mb-lg-8 mb-7">
                                                <h5
                                                    className="white mb-xxl-5 mb-3"
                                                    data-aos="fade-left"
                                                    data-aos-duration={1600}
                                                >
                                                    {t('mainTitle', modernCssTexts.mainTitle)}
                                                </h5>
                                                <p
                                                    className="pra-clr mb-xxl-5 mb-3"
                                                    data-aos="fade-left"
                                                    data-aos-duration={1550}
                                                >
                                                    {t('paragraph1', modernCssTexts.paragraph1)}
                                                </p>
                                                <p
                                                    className="pra-clr"
                                                    data-aos="fade-left"
                                                    data-aos-duration={1700}
                                                >
                                                    {t('paragraph2', modernCssTexts.paragraph2)}
                                                </p>
                                            </div>
                                            <h5
                                                className="white mb-xxl-10 mb-xl-7 mb-lg-6 mb-4"
                                                data-aos="zoom-in-left"
                                                data-aos-duration={1400}
                                            >
                                                {t('sectionTitle', modernCssTexts.sectionTitle)}
                                            </h5>
                                            <div className="row g-xl-4 g-3 mb-xxl-10 mb-xl-7 mb-lg-6 mb-4">
                                                <div
                                                    className="col-lg-6 col-md-6 col-sm-6"
                                                    data-aos="zoom-in"
                                                    data-aos-duration={1500}
                                                >
                                                    <div className="details-thumb-b1 w-100">
                                                        <img
                                                            src="/assets/img/blog/content/css-grid-layout-examples.jpg"
                                                            alt="CSS Grid Layout Examples"
                                                            className="w-100"
                                                        />
                                                    </div>
                                                </div>
                                                <div
                                                    className="col-lg-6 col-md-6 col-sm-6"
                                                    data-aos="zoom-in"
                                                    data-aos-duration={1600}
                                                >
                                                    <div className="details-thumb-b1 w-100">
                                                        <img
                                                            src="/assets/img/blog/content/modern-css-features-showcase.jpg"
                                                            alt="Modern CSS Features Showcase"
                                                            className="w-100"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <p
                                                className="pra-clr mb-xxl-8 mb-xl-6 mb-lg-5 mb-4"
                                                data-aos="zoom-in-left"
                                                data-aos-duration={1400}
                                            >
                                                {t('gridParagraph', modernCssTexts.gridParagraph)}
                                            </p>
                                            <ul className="blod-dlist d-grid gap-xl-2 gap-2 mb-xxl-8 mb-xl-6 mb-lg-5 mb-4">
                                                <li>{t('advantage1', modernCssTexts.advantage1)}</li>
                                                <li>{t('advantage2', modernCssTexts.advantage2)}</li>
                                                <li>{t('advantage3', modernCssTexts.advantage3)}</li>
                                                <li>{t('advantage4', modernCssTexts.advantage4)}</li>
                                                <li>{t('advantage5', modernCssTexts.advantage5)}</li>
                                            </ul>
                                            <div
                                                className="hilight-text py-xxl-12 py-xl-9 py-lg-7 py-sm-6 py-4 px-xxl-20 px-xl-15 px-lg-10 px-sm-8 px-4 mb-xxl-8 mb-xl-6 mb-lg-5 mb-4"
                                                data-aos="fade-left"
                                                data-aos-duration={1400}
                                            >
                                                <p>"{t('quote', modernCssTexts.quote)}"</p>
                                            </div>
                                            <p
                                                className="pra-clr"
                                                data-aos="zoom-in-left"
                                                data-aos-duration={1400}
                                            >
                                                {t('conclusion', modernCssTexts.conclusion)}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="tag-share d-sm-flex d-grid align-items-center justify-content-sm-between justify-content-center mb-xxl-8 mb-xl-7 mb-5 gap-3"
                                    data-aos="zoom-in"
                                    data-aos-duration={1400}
                                >
                                    <div className="tag d-flex justify-content-sm-start justify-content-center align-items-center gap-xxl-4 gap-3">
                                        {t('tagsLabel', modernCssTexts.tagsLabel)}
                                        <ul className="taglist d-flex align-items-center gap-xxl-3 gap-xl-2 gap-1">
                                            <li>
                                                <Link href="/blog-list" className="tag-clr">
                                                    CSS
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/blog-list" className="tag-clr">
                                                    Frontend
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/blog-list" className="tag-clr">
                                                    Web Design
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-sm-start justify-content-center gap-xxl-4 gap-3">
                                        {t('share', modernCssTexts.share)}
                                        <ul className="common-social d-flex align-items-center gap-2">
                                            <li data-aos="zoom-in-right" data-aos-duration={1400}>
                                                <Link href="/#" className="d-center">
                                                    <svg
                                                        width={10}
                                                        height={16}
                                                        viewBox="0 0 10 16"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <g opacity="0.8" clipPath="url(#clip0_6308_2802)">
                                                            <path
                                                                d="M8.72266 9L9.16703 6.10437H6.38859V4.22531C6.38859 3.43313 6.77672 2.66094 8.02109 2.66094H9.28422V0.195625C9.28422 0.195625 8.13797 0 7.04203 0C4.75391 0 3.25828 1.38688 3.25828 3.8975V6.10437H0.714844V9H3.25828V16H6.38859V9H8.72266Z"
                                                                fill="white"
                                                            />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_6308_2802">
                                                                <rect width={10} height={16} fill="white" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </Link>
                                            </li>
                                            <li data-aos="zoom-in-right" data-aos-duration={1600}>
                                                <Link href="/#" className="d-center">
                                                    <svg
                                                        width={16}
                                                        height={16}
                                                        viewBox="0 0 16 16"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M14.3553 4.74149C14.3655 4.88362 14.3655 5.02577 14.3655 5.1679C14.3655 9.5029 11.066 14.4978 5.03553 14.4978C3.17766 14.4978 1.45178 13.9597 0 13.0258C0.263969 13.0562 0.51775 13.0664 0.791875 13.0664C2.32484 13.0664 3.73603 12.5486 4.86294 11.6654C3.42131 11.6349 2.21319 10.6907 1.79694 9.39124C2 9.42168 2.20303 9.44199 2.41625 9.44199C2.71066 9.44199 3.00509 9.40137 3.27919 9.33034C1.77666 9.02574 0.649719 7.70596 0.649719 6.11205V6.07146C1.08625 6.31512 1.59391 6.4674 2.13194 6.48768C1.24869 5.89884 0.670031 4.89377 0.670031 3.75671C0.670031 3.14759 0.832437 2.58921 1.11672 2.1019C2.73094 4.09174 5.15734 5.39121 7.87812 5.53337C7.82737 5.28971 7.79691 5.03593 7.79691 4.78212C7.79691 2.97499 9.25884 1.50293 11.0761 1.50293C12.0202 1.50293 12.873 1.89887 13.472 2.53846C14.2131 2.39634 14.9238 2.12221 15.5532 1.74659C15.3096 2.50802 14.7918 3.14762 14.1116 3.55368C14.7715 3.48265 15.4111 3.29987 15.9999 3.04609C15.5533 3.6958 14.9949 4.27446 14.3553 4.74149V4.74149Z"
                                                            fill="white"
                                                        />
                                                    </svg>
                                                </Link>
                                            </li>
                                            <li data-aos="zoom-in-right" data-aos-duration={1900}>
                                                <Link href="/#" className="d-center">
                                                    <svg
                                                        width={18}
                                                        height={12}
                                                        viewBox="0 0 18 12"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M17.1769 1.87759C16.9806 1.13853 16.4023 0.556469 15.668 0.358938C14.337 0 9.00014 0 9.00014 0C9.00014 0 3.66327 0 2.3323 0.358938C1.59802 0.5565 1.0197 1.13853 0.823422 1.87759C0.466797 3.21719 0.466797 6.01213 0.466797 6.01213C0.466797 6.01213 0.466797 8.80706 0.823422 10.1467C1.0197 10.8857 1.59802 11.4435 2.3323 11.6411C3.66327 12 9.00014 12 9.00014 12C9.00014 12 14.337 12 15.668 11.6411C16.4023 11.4435 16.9806 10.8857 17.1769 10.1467C17.5335 8.80706 17.5335 6.01213 17.5335 6.01213C17.5335 6.01213 17.5335 3.21719 17.1769 1.87759V1.87759ZM7.25467 8.54972V3.47453L11.7153 6.01219L7.25467 8.54972V8.54972Z"
                                                            fill="white"
                                                        />
                                                    </svg>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="nextprevius-text d-flex align-items-center justify-content-between mb-xxl-6 mb-xl-5 mb-4">
                                    <Link
                                        href="/nextjs-performance-tips"
                                        className="d-flex align-items-center gap-3"
                                        data-aos="zoom-in-left"
                                        data-aos-duration={1500}
                                    >
                                        <i className="fas fa-arrow-left" />
                                        <span className="dd-clr">
                                            {t('prevPost', modernCssTexts.prevPost)}
                                        </span>
                                    </Link>
                                    <Link
                                        href="/api-design-best-practices"
                                        className="dd-clr"
                                        data-aos="zoom-in-left"
                                        data-aos-duration={1500}
                                    >
                                        {t('nextPost', modernCssTexts.nextPost)}
                                    </Link>
                                </div>
                            </div>
                            <div className="col-12 col-lg-4">
                                <div className="blog-right-bar mt-lg-0 mt-4">
                                    <div className="box mb-xxl-10 mb-xl-8 mb-7">
                                        <div
                                            className="wid-title"
                                            data-aos="fade-left"
                                            data-aos-duration={1600}
                                        >
                                            <h6>{t('search', modernCssTexts.search)}</h6>
                                        </div>
                                        <div
                                            className="search-widget"
                                            data-aos="zoom-in"
                                            data-aos-duration={1400}
                                        >
                                            <form action="#">
                                                <input
                                                    type="text"
                                                    placeholder={t(
                                                        'searchPlaceholder',
                                                        modernCssTexts.searchPlaceholder
                                                    )}
                                                />
                                                <button type="submit">
                                                    <i className="fas fa-search" />
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="box mb-xxl-10 mb-xl-8 mb-7">
                                        <div
                                            className="wid-title"
                                            data-aos="fade-left"
                                            data-aos-duration={1600}
                                        >
                                            <h6>{t('categories', modernCssTexts.categories)}</h6>
                                        </div>
                                        <div
                                            className="category"
                                            data-aos="fade-down"
                                            data-aos-duration={1600}
                                        >
                                            <ul className="d-grid gap-xxl-3 gap-3">
                                                <li>
                                                    <Link href="/blog-list">
                                                        {t(
                                                            'frontendDevelopment',
                                                            modernCssTexts.frontendDevelopment
                                                        )}{" "}
                                                        <span>(4)</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/blog-list">
                                                        {t(
                                                            'backendDevelopment',
                                                            modernCssTexts.backendDevelopment
                                                        )}{" "}
                                                        <span>(3)</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/blog-list">
                                                        {t(
                                                            'webDevelopment',
                                                            modernCssTexts.webDevelopment
                                                        )}{" "}
                                                        <span>(5)</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/blog-list">
                                                        {t('ecommerce', modernCssTexts.ecommerce)}{" "}
                                                        <span>(2)</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/blog-list">
                                                        {t('performance', modernCssTexts.performance)}{" "}
                                                        <span>(3)</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/blog-list">
                                                        {t(
                                                            'bestPractices',
                                                            modernCssTexts.bestPractices
                                                        )}{" "}
                                                        <span>(4)</span>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="box mb-xxl-10 mb-xl-8 mb-7">
                                        <div
                                            className="wid-title"
                                            data-aos="fade-left"
                                            data-aos-duration={1600}
                                        >
                                            <h6>{t('recentPosts', modernCssTexts.recentPosts)}</h6>
                                        </div>
                                        <div className="recent-postwrap">
                                            <div
                                                className="recent-items d-flex align-items-center gap-xxl-5 gap-xl-4 gap-lg-3 gap-2"
                                                data-aos="fade-down"
                                                data-aos-duration={1200}
                                            >
                                                <div className="recent-thumb">
                                                    <img
                                                        src="/assets/img/blog/featured/react-vs-vue-2024-comparison.jpg"
                                                        alt="React vs Vue 2024 Comparison"
                                                    />
                                                </div>
                                                <div className="recent-content">
                                                    <span className="pra-clr d-block mb-1">
                                                        15/01/2025
                                                    </span>
                                                    <Link href="/react-vs-vue-2024">
                                                        {t('recentPost1', modernCssTexts.recentPost1)}
                                                    </Link>
                                                </div>
                                            </div>
                                            <div
                                                className="recent-items d-flex align-items-center gap-xxl-5 gap-xl-4 gap-lg-3 gap-2"
                                                data-aos="fade-down"
                                                data-aos-duration={1400}
                                            >
                                                <div className="recent-thumb">
                                                    <img
                                                        src="/assets/img/blog/featured/nextjs-performance-optimization-tips.jpg"
                                                        alt="Next.js Performance Tips"
                                                    />
                                                </div>
                                                <div className="recent-content">
                                                    <span className="pra-clr d-block mb-1">
                                                        14/01/2025
                                                    </span>
                                                    <Link href="/nextjs-performance-tips">
                                                        {t('recentPost2', modernCssTexts.recentPost2)}
                                                    </Link>
                                                </div>
                                            </div>
                                            <div
                                                className="recent-items d-flex align-items-center gap-xxl-5 gap-xl-4 gap-lg-3 gap-2"
                                                data-aos="fade-down"
                                                data-aos-duration={1600}
                                            >
                                                <div className="recent-thumb">
                                                    <img
                                                        src="/assets/img/blog/featured/modern-css-techniques-2024.jpg"
                                                        alt="Modern CSS Techniques"
                                                    />
                                                </div>
                                                <div className="recent-content">
                                                    <span className="pra-clr d-block mb-1">
                                                        12/01/2025
                                                    </span>
                                                    <Link href="/api-design-best-practices">
                                                        {t('recentPost3', modernCssTexts.recentPost3)}
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="box">
                                        <div
                                            className="wid-title"
                                            data-aos="fade-left"
                                            data-aos-duration={1600}
                                        >
                                            <h6>{t('tagTitle', modernCssTexts.tagTitle)}</h6>
                                        </div>
                                        <div className="tagwrap d-flex flex-wrap gap-xl-6 gap-lg-4 gap-md-3 gap-2">
                                            <Link href="/blog-list">CSS</Link>
                                            <Link href="/blog-list">Frontend</Link>
                                            <Link href="/blog-list">Web Design</Link>
                                            <Link href="/blog-list">CSS Grid</Link>
                                            <Link href="/blog-list">Flexbox</Link>
                                            <Link href="/blog-list">Responsive Design</Link>
                                            <Link href="/blog-list">Modern CSS</Link>
                                            <Link href="/blog-list">Layout</Link>
                                            <Link href="/blog-list">Styling</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}

