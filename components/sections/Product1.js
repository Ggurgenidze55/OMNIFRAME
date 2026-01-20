'use client'
import { useTranslation } from "@/contexts/LanguageContext"
import { common } from "@/data/translations/common"

const product1Texts = {
    ourExpertise: { en: "OUR EXPERTISE", ka: "ჩვენი ექსპერტიზა" },
    webDevelopment: { en: "Web Development", ka: "ვებ განვითარება" },
    company: { en: "Company", ka: "კომპანია" },
    description: {
        en: "We specialize in creating cutting-edge web solutions that drive business growth. Our team of expert developers delivers innovative, scalable, and user-friendly applications using the latest technologies and best practices.",
        ka: "ჩვენ სპეციალიზირებული ვართ თანამედროვე ვებ გადაწყვეტილებების შექმნაში, რომლებიც ზრდის ბიზნესის განვითარებას. ჩვენი გუნდი, რომელიც შედგება ექსპერტ დეველოპერებისგან, ქმნის ინოვაციურ, მასშტაბირებად და მომხმარებლისთვის მოსახერხებელ აპლიკაციებს უახლესი ტექნოლოგიებისა და საუკეთესო პრაქტიკების გამოყენებით."
    },
    reactExpert: { en: "React Expert", ka: "React ექსპერტი" },
    reactDescription: { en: "Advanced React Development", ka: "მოწინავე React განვითარება" },
    nextjsPro: { en: "Next.js Pro", ka: "Next.js პროფესიონალი" },
    nextjsDescription: { en: "Full-Stack Development", ka: "Full-Stack განვითარება" },
    uiuxMaster: { en: "UI/UX Master", ka: "UI/UX მასტერი" },
    uiuxDescription: { en: "User Experience Design", ka: "მომხმარებლის გამოცდილების დიზაინი" },
}

export default function Product1() {
    const { t } = useTranslation()
    return (
        <>

            <section className="about-product pt-space">
                <div className="container">
                    <div className="row g-xxl-7 g-5">
                        <div className="col-lg-6 col-md-6 col-sm-8">
                            <div className="about-product-thumb w-100" data-aos="zoom-in" data-aos-duration={2000}>
                                <img 
                                    src="/assets/img/about/about-v1thumb.png" 
                                    alt="img" 
                                    className="w-100" 
                                    style={{
                                        borderRadius: '20px',
                                        overflow: 'hidden'
                                    }}
                                />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-product-content ps-xxl-10">
                                <div className="pricing-title">
                                    <div className="radius-btn text-uppercase cmn-border d-inline-flex radius100 py-xxl-2 py-2 px-xxl-4 px-4 theme-clr gap-xxl-4 gap-3 mb-xxl-7 mb-xl-6 mb-5" data-aos="fade-up-right" data-aos-duration={1500}>
                                        {t('ourExpertise', product1Texts.ourExpertise)}
                                    </div>
                                    <h2 className="stitle mb-xxl-8 mb-xl-7 mb-xl-5 mb-4" data-aos="fade-up" data-aos-duration={1600}>
                                        OMNIframe <span className="fw-400 theme-clr">{t('webDevelopment', product1Texts.webDevelopment)}</span> {t('company', product1Texts.company)}
                                    </h2>
                                    <p className="white-clr mb-xxl-9 mb-xl-7 mb-xl-6 mb-6" data-aos="fade-up" data-aos-duration={1900}>
                                        {t('description', product1Texts.description)}
                                    </p>
                                    <div className="discover-dating" data-aos="fade-up" data-aos-duration={2200}>
                                        <div className="allyear d-flex align-items-center justify-content-between mb-xxl-4 mb-xl-3">
                                            <h5 className="fw-medium theme-clr">
                                                2019
                                            </h5>
                                            <h5 className="fw-medium theme-clr">
                                                2021
                                            </h5>
                                            <h5 className="fw-medium theme-clr">
                                                2023
                                            </h5>
                                        </div>
                                        <div className="allyear-content d-flex justify-content-between">
                                            <div className="allyear-item">
                                                <h5 className="white-clr mb-xxl-3 mb-2">
                                                    {t('reactExpert', product1Texts.reactExpert)}
                                                </h5>
                                                <span className="spantext-clr">
                                                    {t('reactDescription', product1Texts.reactDescription)}
                                                </span>
                                            </div>
                                            <div className="allyear-item">
                                                <h5 className="white-clr mb-xxl-3 mb-2">
                                                    {t('nextjsPro', product1Texts.nextjsPro)}
                                                </h5>
                                                <span className="spantext-clr">
                                                    {t('nextjsDescription', product1Texts.nextjsDescription)}
                                                </span>
                                            </div>
                                            <div className="allyear-item">
                                                <h5 className="white-clr mb-xxl-3 mb-2">
                                                    {t('uiuxMaster', product1Texts.uiuxMaster)}
                                                </h5>
                                                <span className="spantext-clr">
                                                    {t('uiuxDescription', product1Texts.uiuxDescription)}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
