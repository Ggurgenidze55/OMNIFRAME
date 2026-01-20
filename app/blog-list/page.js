'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useTranslation } from "@/contexts/LanguageContext"

const blogListTexts = {
    breadcrumb: { en: "Blog List", ka: "ბლოგი" },
    writtenBy: { en: "Written by:", ka: "ავტორი:" },
    viewAllArticles: { en: "View All Articles", ka: "ყველა სტატიის ნახვა" },
    search: { en: "Search", ka: "ძიება" },
    searchPlaceholder: { en: "Search...", ka: "ძიება..." },
    categories: { en: "Categories", ka: "კატეგორიები" },
    recentPosts: { en: "Recent Posts", ka: "ბოლო სტატიები" },
    tags: { en: "Tags", ka: "ტეგები" },
    frontendDevelopment: { en: "Frontend Development", ka: "Frontend დეველოპმენტი" },
    backendDevelopment: { en: "Backend Development", ka: "Backend დეველოპმენტი" },
    performance: { en: "Performance", ka: "წარმადობა" },
    ecommerce: { en: "E-commerce", ka: "E-commerce" },
    bestPractices: { en: "Best Practices", ka: "საუკეთესო პრაქტიკა" },
    // Blog Post 1
    post1Title: { en: "JavaScript Frameworks 2024: Complete Guide", ka: "JavaScript ფრეიმვორკები 2024: სრული გზამკვლევი" },
    post1Description: { en: "The JavaScript ecosystem continues to evolve at a rapid pace, with new frameworks emerging and existing ones maturing. In 2024, developers face increasingly complex choices.", ka: "JavaScript ეკოსისტემა სწრაფად ვითარდება - ჩნდება ახალი ფრეიმვორკები, არსებულები კი უფრო იხვეწება. 2024 წელს დეველოპერებს არჩევანის გაკეთება კიდევ უფრო რთულ პირობებში უწევთ." },
    // Blog Post 2
    post2Title: { en: "React vs Vue 2024: Which Framework to Choose", ka: "React vs Vue 2024: რომელი ფრეიმვორკი ავირჩიოთ" },
    post2Description: { en: "The debate between React and Vue continues to be one of the most discussed topics in the web development community in 2024. Both frameworks have evolved significantly.", ka: "React-სა და Vue-ს შორის დაპირისპირება 2024 წელსაც ვებ-დეველოპმენტის ერთ-ერთი ყველაზე აქტუალური თემაა. ორივე ფრეიმვორკმა განვითარების გრძელი გზა გაიარა." },
    // Blog Post 3
    post3Title: { en: "Next.js Performance Optimization Tips", ka: "Next.js წარმადობის ოპტიმიზაციის რჩევები" },
    post3Description: { en: "Next.js is one of the most popular React frameworks that offers numerous possibilities for performance optimization in modern web applications.", ka: "Next.js ერთ-ერთი ყველაზე პოპულარული React ფრეიმვორკია, რომელიც თანამედროვე ვებ-აპლიკაციების წარმადობის ოპტიმიზაციისთვის უამრავ შესაძლებლობას გვთავაზობს." },
    // Blog Post 4
    post4Title: { en: "Modern CSS Techniques for 2024", ka: "თანამედროვე CSS ტექნიკები 2024 წლისთვის" },
    post4Description: { en: "CSS continues to evolve constantly, and 2024 brings numerous new possibilities for modern web design with cutting-edge techniques.", ka: "CSS მუდმივად ვითარდება. 2024 წელს თანამედროვე ვებ-დიზაინისთვის უამრავი ახალი და საინტერესო ტექნიკა გაჩნდა." },
    // Blog Post 5
    post5Title: { en: "API Design Best Practices", ka: "API დიზაინის საუკეთესო პრაქტიკა" },
    post5Description: { en: "Well-designed APIs are fundamental to the success of modern applications. In this article, we explore the best practices for creating robust APIs.", ka: "კარგად დაპროექტებული API ნებისმიერი თანამედროვე აპლიკაციის წარმატების საფუძველია. ამ სტატიაში განვიხილავთ მძლავრი API-ების შექმნის საუკეთესო პრაქტიკებს." },
    // Recent Posts
    recentPost1Title: { en: "React vs Vue 2024 Comparison", ka: "React vs Vue 2024 შედარება" },
    recentPost2Title: { en: "Next.js Performance Tips", ka: "Next.js წარმადობის რჩევები" },
    recentPost3Title: { en: "Modern CSS Techniques", ka: "თანამედროვე CSS ტექნიკები" },
}

export default function BlogList() {
    const { t } = useTranslation()

    return (
        <>
            <Layout headerStyle={2} footerStyle={3} breadcrumbTitle={t('breadcrumb', blogListTexts.breadcrumb)} coverImage="/assets/img/covers/services-cover.jpg">
                <section className="blog-list pt-space pb-space">
                    <div className="container">
                        <div className="row g-5">
                            <div className="col-12 col-lg-8">
                                <div className="blog-post-details">
                                    {/* Blog Post 1 */}
                                    <div className="single-blog-post cmn-border p-xxl-7 p-xl-6 p-lg-4 p-3 mb-xxl-7 mb-xl-7 mb-lg-6 mb-5">
                                        <div className="post-featured-thumb w-100 mb-xxl-7 mb-xl-6 mb-5" data-aos="zoom-in" data-aos-duration={1400}>
                                            <img src="/assets/img/blog/featured/javascript-frameworks-2024-guide.jpg" alt="JavaScript Frameworks 2024 Complete Guide" className="w-100" />
                                        </div>
                                        <div className="post-content">
                                            <div className="post-marry d-flex align-items-center gap-xxl-8 gap-xl-6 gap-4 gap-3 mb-xxl-6 mb-xl-5 mb-sm-4 mb-3" data-aos="fade-left" data-aos-duration={1500}>
                                                <span>
                                                    {t('writtenBy', blogListTexts.writtenBy)} <span className="tag-clr">OMNIframe Team</span>
                                                </span>
                                                <i className="fas fa-circle white" />
                                                <span className="tag-clr">
                                                    ივნისი 8, 2025
                                                </span>
                                            </div>
                                            <h5 className="white mb-xxl-8 mb-xl-7 mb-sm-6 mb-5" data-aos="fade-left" data-aos-duration={1600}>
                                                <Link href="/javascript-frameworks-2024" className="white-clr">
                                                    {t('post1Title', blogListTexts.post1Title)}
                                                </Link>
                                            </h5>
                                            <p className="pra-clr mb-xxl-10 mb-xl-8 mb-sm-7 mb-6" data-aos="fade-left" data-aos-duration={1550}>
                                                {t('post1Description', blogListTexts.post1Description)}
                                            </p>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <Link href="/javascript-frameworks-2024" className="blog-singelbtn d-center whitebg" data-aos="zoom-in" data-aos-duration={1400}>
                                                    <i className="fas fa-arrow-right" />
                                                </Link>
                                                <div className="blog-tags d-flex align-items-center gap-2">
                                                    <span className="tag-item">JavaScript</span>
                                                    <span className="tag-item">Frameworks</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Blog Post 2 */}
                                    <div className="single-blog-post cmn-border p-xxl-7 p-xl-6 p-lg-4 p-3 mb-xxl-7 mb-xl-7 mb-lg-6 mb-5">
                                        <div className="post-featured-thumb w-100 mb-xxl-7 mb-xl-6 mb-5" data-aos="zoom-in" data-aos-duration={1400}>
                                            <img src="/assets/img/blog/featured/react-vs-vue-2024-comparison.jpg" alt="React vs Vue 2024 Framework Comparison" className="w-100" />
                                        </div>
                                        <div className="post-content">
                                            <div className="post-marry d-flex align-items-center gap-xxl-8 gap-xl-6 gap-4 gap-3 mb-xxl-6 mb-xl-5 mb-sm-4 mb-3" data-aos="fade-left" data-aos-duration={1500}>
                                                <span>
                                                    {t('writtenBy', blogListTexts.writtenBy)} <span className="tag-clr">OMNIframe Team</span>
                                                </span>
                                                <i className="fas fa-circle white" />
                                                <span className="tag-clr">
                                                    ივნისი 15, 2025
                                                </span>
                                            </div>
                                            <h5 className="white mb-xxl-8 mb-xl-7 mb-sm-6 mb-5" data-aos="fade-left" data-aos-duration={1600}>
                                                <Link href="/react-vs-vue-2024" className="white-clr">
                                                    {t('post2Title', blogListTexts.post2Title)}
                                                </Link>
                                            </h5>
                                            <p className="pra-clr mb-xxl-10 mb-xl-8 mb-sm-7 mb-6" data-aos="fade-left" data-aos-duration={1550}>
                                                {t('post2Description', blogListTexts.post2Description)}
                                            </p>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <Link href="/react-vs-vue-2024" className="blog-singelbtn d-center whitebg" data-aos="zoom-in" data-aos-duration={1400}>
                                                    <i className="fas fa-arrow-right" />
                                                </Link>
                                                <div className="blog-tags d-flex align-items-center gap-2">
                                                    <span className="tag-item">React</span>
                                                    <span className="tag-item">Vue</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Blog Post 3 */}
                                    <div className="single-blog-post cmn-border p-xxl-7 p-xl-6 p-lg-4 p-3 mb-xxl-7 mb-xl-7 mb-lg-6 mb-5">
                                        <div className="post-featured-thumb w-100 mb-xxl-7 mb-xl-6 mb-5" data-aos="zoom-in" data-aos-duration={1400}>
                                            <img src="/assets/img/blog/featured/nextjs-performance-optimization-tips.jpg" alt="Next.js Performance Optimization Tips" className="w-100" />
                                        </div>
                                        <div className="post-content">
                                            <div className="post-marry d-flex align-items-center gap-xxl-8 gap-xl-6 gap-4 gap-3 mb-xxl-6 mb-xl-5 mb-sm-4 mb-3" data-aos="fade-left" data-aos-duration={1500}>
                                                <span>
                                                    {t('writtenBy', blogListTexts.writtenBy)} <span className="tag-clr">OMNIframe Team</span>
                                                </span>
                                                <i className="fas fa-circle white" />
                                                <span className="tag-clr">
                                                    ივნისი 14, 2025
                                                </span>
                                            </div>
                                            <h5 className="white mb-xxl-8 mb-xl-7 mb-sm-6 mb-5" data-aos="fade-left" data-aos-duration={1600}>
                                                <Link href="/nextjs-performance-tips" className="white-clr">
                                                    {t('post3Title', blogListTexts.post3Title)}
                                                </Link>
                                            </h5>
                                            <p className="pra-clr mb-xxl-10 mb-xl-8 mb-sm-7 mb-6" data-aos="fade-left" data-aos-duration={1550}>
                                                {t('post3Description', blogListTexts.post3Description)}
                                            </p>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <Link href="/nextjs-performance-tips" className="blog-singelbtn d-center whitebg" data-aos="zoom-in" data-aos-duration={1400}>
                                                    <i className="fas fa-arrow-right" />
                                                </Link>
                                                <div className="blog-tags d-flex align-items-center gap-2">
                                                    <span className="tag-item">Next.js</span>
                                                    <span className="tag-item">Performance</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Blog Post 4 */}
                                    <div className="single-blog-post cmn-border p-xxl-7 p-xl-6 p-lg-4 p-3 mb-xxl-7 mb-xl-7 mb-lg-6 mb-5">
                                        <div className="post-featured-thumb w-100 mb-xxl-7 mb-xl-6 mb-5" data-aos="zoom-in" data-aos-duration={1400}>
                                            <img src="/assets/img/blog/featured/modern-css-techniques-2024.jpg" alt="Modern CSS Techniques for 2024" className="w-100" />
                                        </div>
                                        <div className="post-content">
                                            <div className="post-marry d-flex align-items-center gap-xxl-8 gap-xl-6 gap-4 gap-3 mb-xxl-6 mb-xl-5 mb-sm-4 mb-3" data-aos="fade-left" data-aos-duration={1500}>
                                                <span>
                                                    {t('writtenBy', blogListTexts.writtenBy)} <span className="tag-clr">OMNIframe Team</span>
                                                </span>
                                                <i className="fas fa-circle white" />
                                                <span className="tag-clr">
                                                    ივნისი 13, 2025
                                                </span>
                                            </div>
                                            <h5 className="white mb-xxl-8 mb-xl-7 mb-sm-6 mb-5" data-aos="fade-left" data-aos-duration={1600}>
                                                <Link href="/modern-css-techniques" className="white-clr">
                                                    {t('post4Title', blogListTexts.post4Title)}
                                                </Link>
                                            </h5>
                                            <p className="pra-clr mb-xxl-10 mb-xl-8 mb-sm-7 mb-6" data-aos="fade-left" data-aos-duration={1550}>
                                                {t('post4Description', blogListTexts.post4Description)}
                                            </p>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <Link href="/modern-css-techniques" className="blog-singelbtn d-center whitebg" data-aos="zoom-in" data-aos-duration={1400}>
                                                    <i className="fas fa-arrow-right" />
                                                </Link>
                                                <div className="blog-tags d-flex align-items-center gap-2">
                                                    <span className="tag-item">CSS</span>
                                                    <span className="tag-item">Design</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Blog Post 5 */}
                                    <div className="single-blog-post cmn-border p-xxl-7 p-xl-6 p-lg-4 p-3 mb-xxl-7 mb-xl-7 mb-lg-6 mb-5">
                                        <div className="post-featured-thumb w-100 mb-xxl-7 mb-xl-6 mb-5" data-aos="zoom-in" data-aos-duration={1400}>
                                            <img src="/assets/img/blog/featured/api-design-best-practices.jpg" alt="API Design Best Practices" className="w-100" />
                                        </div>
                                        <div className="post-content">
                                            <div className="post-marry d-flex align-items-center gap-xxl-8 gap-xl-6 gap-4 gap-3 mb-xxl-6 mb-xl-5 mb-sm-4 mb-3" data-aos="fade-left" data-aos-duration={1500}>
                                                <span>
                                                    {t('writtenBy', blogListTexts.writtenBy)} <span className="tag-clr">OMNIframe Team</span>
                                                </span>
                                                <i className="fas fa-circle white" />
                                                <span className="tag-clr">
                                                    ივნისი 12, 2025
                                                </span>
                                            </div>
                                            <h5 className="white mb-xxl-8 mb-xl-7 mb-sm-6 mb-5" data-aos="fade-left" data-aos-duration={1600}>
                                                <Link href="/api-design-best-practices" className="white-clr">
                                                    {t('post5Title', blogListTexts.post5Title)}
                                                </Link>
                                            </h5>
                                            <p className="pra-clr mb-xxl-10 mb-xl-8 mb-sm-7 mb-6" data-aos="fade-left" data-aos-duration={1550}>
                                                {t('post5Description', blogListTexts.post5Description)}
                                            </p>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <Link href="/api-design-best-practices" className="blog-singelbtn d-center whitebg" data-aos="zoom-in" data-aos-duration={1400}>
                                                    <i className="fas fa-arrow-right" />
                                                </Link>
                                                <div className="blog-tags d-flex align-items-center gap-2">
                                                    <span className="tag-item">API</span>
                                                    <span className="tag-item">Backend</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Remaining 5 blog posts would follow the same pattern */}
                                    <div className="text-center mt-5">
                                        <Link href="/blog-grid" className="radius-btn d-inline-flex radius100 py-xxl-2 py-2 px-xxl-5 px-5 theme-border theme-clr gap-xxl-4 gap-3 style-2">
                                            {t('viewAllArticles', blogListTexts.viewAllArticles)}
                                            <span className="rot60 d-inline-block">
                                                <i className="fas fa-arrow-up theme-clr" />
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-12 col-lg-4">
                                <div className="blog-right-bar mt-lg-0 mt-4">
                                    <div className="box mb-xxl-10 mb-xl-8 mb-7">
                                        <div className="wid-title" data-aos="fade-left" data-aos-duration={1600}>
                                            <h6>{t('search', blogListTexts.search)}</h6>
                                        </div>
                                        <div className="search-widget" data-aos="zoom-in" data-aos-duration={1400}>
                                            <form action="#">
                                                <input type="text" placeholder={t('searchPlaceholder', blogListTexts.searchPlaceholder)} />
                                                <button type="submit"><i className="fas fa-search" /></button>
                                            </form>
                                        </div>
                                    </div>
                                    
                                    <div className="box mb-xxl-10 mb-xl-8 mb-7">
                                        <div className="wid-title" data-aos="fade-left" data-aos-duration={1600}>
                                            <h6>{t('categories', blogListTexts.categories)}</h6>
                                        </div>
                                        <div className="category" data-aos="fade-down" data-aos-duration={1600}>
                                            <ul className="d-grid gap-xxl-3 gap-3">
                                                <li>
                                                    <Link href="/blog-list">
                                                        {t('frontendDevelopment', blogListTexts.frontendDevelopment)} <span>(4)</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/blog-list">
                                                        {t('backendDevelopment', blogListTexts.backendDevelopment)} <span>(3)</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/blog-list">
                                                        {t('performance', blogListTexts.performance)} <span>(3)</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/blog-list">
                                                        {t('ecommerce', blogListTexts.ecommerce)} <span>(2)</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/blog-list">
                                                        {t('bestPractices', blogListTexts.bestPractices)} <span>(4)</span>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    
                                    <div className="box mb-xxl-10 mb-xl-8 mb-7">
                                        <div className="wid-title" data-aos="fade-left" data-aos-duration={1600}>
                                            <h6>{t('recentPosts', blogListTexts.recentPosts)}</h6>
                                        </div>
                                        <div className="recent-postwrap">
                                            <div className="recent-items d-flex align-items-center gap-xxl-5 gap-xl-4 gap-lg-3 gap-2" data-aos="fade-down" data-aos-duration={1200}>
                                                <div className="recent-thumb">
                                                    <img src="/assets/img/blog/featured/react-vs-vue-2024-comparison.jpg" alt="React vs Vue 2024 Comparison" />
                                                </div>
                                                <div className="recent-content">
                                                    <span className="pra-clr d-block mb-1">
                                                        15/01/2025
                                                    </span>
                                                    <Link href="/react-vs-vue-2024">
                                                        {t('recentPost1Title', blogListTexts.recentPost1Title)}
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="recent-items d-flex align-items-center gap-xxl-5 gap-xl-4 gap-lg-3 gap-2" data-aos="fade-down" data-aos-duration={1400}>
                                                <div className="recent-thumb">
                                                    <img src="/assets/img/blog/featured/nextjs-performance-optimization-tips.jpg" alt="Next.js Performance Tips" />
                                                </div>
                                                <div className="recent-content">
                                                    <span className="pra-clr d-block mb-1">
                                                        14/01/2025
                                                    </span>
                                                    <Link href="/nextjs-performance-tips">
                                                        {t('recentPost2Title', blogListTexts.recentPost2Title)}
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="recent-items d-flex align-items-center gap-xxl-5 gap-xl-4 gap-lg-3 gap-2" data-aos="fade-down" data-aos-duration={1600}>
                                                <div className="recent-thumb">
                                                    <img src="/assets/img/blog/featured/modern-css-techniques-2024.jpg" alt="Modern CSS Techniques" />
                                                </div>
                                                <div className="recent-content">
                                                    <span className="pra-clr d-block mb-1">
                                                        13/01/2025
                                                    </span>
                                                    <Link href="/modern-css-techniques">
                                                        {t('recentPost3Title', blogListTexts.recentPost3Title)}
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="box">
                                        <div className="wid-title" data-aos="fade-left" data-aos-duration={1600}>
                                            <h6>{t('tags', blogListTexts.tags)}</h6>
                                        </div>
                                        <div className="tagwrap d-flex flex-wrap gap-xl-6 gap-lg-4 gap-md-3 gap-2">
                                            <Link href="/blog-list">JavaScript</Link>
                                            <Link href="/blog-list">React</Link>
                                            <Link href="/blog-list">Vue</Link>
                                            <Link href="/blog-list">Next.js</Link>
                                            <Link href="/blog-list">CSS</Link>
                                            <Link href="/blog-list">API</Link>
                                            <Link href="/blog-list">{t('performance', blogListTexts.performance)}</Link>
                                            <Link href="/blog-list">{t('frontendDevelopment', blogListTexts.frontendDevelopment)}</Link>
                                            <Link href="/blog-list">{t('backendDevelopment', blogListTexts.backendDevelopment)}</Link>
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