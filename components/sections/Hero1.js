
import Link from "next/link"
import VideoPopup from "../elements/VideoPopup"
import { useTranslation } from "@/contexts/LanguageContext"
import { common } from "@/data/translations/common"

export default function Hero1({ coverImage }) {
    const backgroundStyle = coverImage ? {
        backgroundImage: `url(${coverImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    } : {};

    // Add CSS for rotation animation
    const rotationStyle = `
        @keyframes rotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
    `;

    const { t } = useTranslation()

    return (
        <>
            <style jsx>{rotationStyle}</style>
            <style jsx>{`
                @keyframes rotate {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                
                .experience-circle {
                    transition: all 0.3s ease;
                }
                
                .experience-arrow {
                    transition: all 0.3s ease;
                }

                .hero-expriencebox {
                    bottom: clamp(20px, 5vw, 60px) !important;
                    right: clamp(10px, 3vw, 30px) !important;
                    transform: scale(clamp(0.6, 1vw + 0.5, 1));
                    transform-origin: bottom right;
                }

                @media (max-width: 1400px) {
                    .hero-expriencebox {
                        transform: scale(0.9);
                    }
                }
                
                @media (max-width: 991px) {
                    .hero-expriencebox {
                        transform: scale(0.8);
                        bottom: 30px !important;
                    }
                }

                @media (max-width: 768px) {
                    .hero-expriencebox {
                        transform: scale(0.7);
                        bottom: 20px !important;
                        right: 10px !important;
                    }
                    .experience-circle {
                        width: 80px !important;
                        height: 80px !important;
                    }
                    .experience-arrow {
                        width: 25px !important;
                        height: 25px !important;
                    }
                }
                
                @media (max-width: 480px) {
                    .hero-expriencebox {
                        transform: scale(0.6);
                        bottom: 10px !important;
                        right: 5px !important;
                    }
                    .experience-circle {
                        width: 60px !important;
                        height: 60px !important;
                    }
                    .experience-arrow {
                        width: 20px !important;
                        height: 20px !important;
                    }
                }
            `}</style>
            
            <section className="hero-section-version1 position-relative" style={backgroundStyle}>
                {/* Color overlay with #e3ff00 */}
                {coverImage && (
                    <div 
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: '#e3ff00',
                            opacity: 0.3,
                            mixBlendMode: 'overlay'
                        }}
                    />
                )}
                
                <div className="container">
                    <div className="row g-5">
                        <div className="hero-v1-content position-relative">
                            <div className="d-flex align-items-sm-center align-items-end justify-content-between">
                                <h1 className="white-clr text-uppercase">
                                    <span className="d-block" data-aos="zoom-in-left" data-aos-duration={1800}>
                                        OMNIframe
                                    </span>
                                    <span>
                                        <span className="text-italic me-3" data-aos="zoom-in-right" data-aos-duration={2100}>
                                            {t('web', common.web)}
                                        </span>
                                        <span
                                            className="designers"
                                            data-text={t('development', common.development)}
                                            data-aos="zoom-in"
                                            data-aos-duration={2000}
                                        >
                                            {t('development', common.development)}
                                        </span>
                                    </span>
                                </h1>
                                {/* Removed VideoPopup component */}
                            </div>
                            <div className="hero-sponsor">
                                <div className="brandin-wrap d-block">
                                    <h4 className="white-clr brading-text">
                                        {t('clientsTrust', common.clientsTrust)}
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Hero Exprience box */}
                <div className="hero-expriencebox d-flex align-items-center">
                    <div className="expri-thumb position-relative">
                        <img 
                            src="/assets/img/banner/bn-expri.png" 
                            alt="img" 
                            style={{
                                animation: 'rotate 10s linear infinite'
                            }}
                        />
                        {/* #e3ff00 colored circle overlay */}
                        <div 
                            className="experience-circle"
                            style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                width: 'clamp(60px, 8vw, 117px)',
                                height: 'clamp(60px, 8vw, 117px)',
                                backgroundColor: '#e3ff00',
                                borderRadius: '50%',
                                zIndex: 2,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            {/* Right-pointing arrow */}
                            <svg 
                                className="experience-arrow"
                                style={{
                                    width: 'clamp(20px, 3vw, 40px)',
                                    height: 'clamp(20px, 3vw, 40px)'
                                }}
                                viewBox="0 0 24 24" 
                                fill="none" 
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path 
                                    d="M9 18L15 12L9 6" 
                                    stroke="black" 
                                    strokeWidth="2" 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>
                    </div>
                    <div className="expri-content d-flex align-items-center gap-xxl-11 gap-xl-9 gap-lg-7 gap-6" style={{ width: 'fit-content' }}>
                        <div className="expri-cont-item">
                            <h6 className="white-clr mb-2">
                                5+
                            </h6>
                            <span className="yer spantext-clr">
                                {t('yearsOfExperience', common.yearsOfExperience)}
                            </span>
                        </div>
                        <div className="expri-cont-item">
                            <h6 className="white-clr mb-2">
                                60+
                            </h6>
                            <span className="yer spantext-clr">
                                {t('completedProjects', common.completedProjects)}
                            </span>
                        </div>
                    </div>
                </div>
                {/* Element */}
                {/* Removed hero-arrow element */}
            </section>
        </>
    )
}
