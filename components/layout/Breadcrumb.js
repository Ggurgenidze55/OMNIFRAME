import Link from "next/link"

export default function Breadcrumb({ breadcrumbTitle, coverImage }) {
    const backgroundStyle = coverImage ? {
        backgroundImage: `url(${coverImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    } : {};
    
    // If no breadcrumbTitle, show a simple hero section
    if (!breadcrumbTitle) {
        return (
            <section className="breadcrumnd-banner position-relative" style={backgroundStyle}>
                <div className="container">
                    <div className="row g-5 justify-content-center">
                        <div className="col-lg-7">
                            <div className="breadcrumnd-content text-center">
                                <h1 className="white mb-xxl-10 mb-xl-8 mb-6" data-aos="zoom-in-left" data-aos-duration="1800">
                                    Welcome to OmniGreen
                                </h1>
                                <p className="white mb-xxl-7 mb-xl-6 mb-5" data-aos="zoom-in-right" data-aos-duration="2000">
                                    Professional Web Development & Digital Solutions
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <img src="/assets/img/element/cmn-dost.png" alt="img" className="cmn-dots" />
                <div className="cmn-svg-shape cmn-svg">
                    <svg width="211" height="211" viewBox="0 0 211 211" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M153.353 98.3617V190.413H210V1H20.5872V57.6468H112.638L2 168.285L42.7149 209L153.353 98.3617Z" stroke="url(#paint0_linear_6584_3026)" strokeWidth="2"></path>
                        <defs>
                            <linearGradient id="paint0_linear_6584_3026" x1="416.867" y1="-216.267" x2="8.49998" y2="192.1" gradientUnits="userSpaceOnUse">
                                <stop offset="2" stopColor="#E3FF04"></stop>
                                <stop offset="1" stopColor="#FF7425" stopOpacity="0"></stop>
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            </section>
        )
    }

    return (
        <>
            <section className="breadcrumnd-banner position-relative" style={backgroundStyle}>
                {/* Color overlay with #e3ff00 */}
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
                
                <div className="container">
                    <div className="row g-5 justify-content-center">
                        <div className="col-lg-7">
                            <div className="breadcrumnd-content text-center">
                                <h1
                                    className="white mb-xxl-10 mb-xl-8 mb-6"
                                    data-aos="zoom-in-left"
                                    data-aos-duration="1800"
                                    dangerouslySetInnerHTML={{ __html: breadcrumbTitle }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
