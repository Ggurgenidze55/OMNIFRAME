'use client'

import Link from 'next/link'
// import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { useTranslation } from '@/contexts/LanguageContext'
import { common } from '@/data/translations/common'

export default function Menu() {
    // const pathname = usePathname()
    // const [currentMenuItem, setCurrentMenuItem] = useState("")

    // useEffect(() => {
    //     setCurrentMenuItem(pathname)
    // }, [pathname])

    // const checkCurrentMenuItem = (path) => currentMenuItem === path ? "active" : ""
    // const checkParentActive = (paths) => paths.some(path => currentMenuItem.startsWith(path)) ? "active" : ""
    const [isAccordion, setIsAccordion] = useState(0)
    const { t } = useTranslation()

    const handleAccordion = (key) => {
        setIsAccordion(prevState => prevState === key ? null : key)
    }

    return (
        <>
            {/* <ul className="menu">
                <li className={`dropdown ${checkParentActive(["/home-02", "/home-03"])}`}>
                    <Link href="/#">Home</Link>
                    <ul className="sub-menu">
                        <li className={`item ${checkCurrentMenuItem("/")}`}>
                            <Link href="//">Home 1</Link>
                        </li>
                        <li className={`item ${checkCurrentMenuItem("/home-02")}`}>
                            <Link href="//home-02">Home 2</Link>
                        </li>
                    </ul>
                </li>
                <li className={`item ${pathname === "/about" ? "active" : ""}`}>
                    <Link href="//about">about</Link>
                </li>
            </ul> */}
            <ul className="custom-nav d-lg-flex d-grid gap-xxl-6 gap-xl-5 gap-lg-4 gap-md-2 gap-2 pt-lg-0 pt-5">
                <li className="menu-item position-relative">
                    <Link href="/" className="fw_500 white-clr">
                        {t('home', common.home)}
                    </Link>
                </li>
                <li className="menu-item position-relative">
                    <button className="position-relative  ps-5 fw_500 white-clr cus-z1" onClick={() => handleAccordion(3)}>
                        {t('services', common.services)}
                    </button>
                    <ul className="sub-menu px-lg-4 py-xxl-3 py-2" style={{ display: `${isAccordion == 3 ? "block" : "none"}` }}>
                        <li className="menu-link py-1">
                            <Link href="/service" className="fw_500 white-clr">
                                {t('allServices', common.allServices)}
                            </Link>
                        </li>
                        <li className="menu-link py-1">
                            <Link href="/frontend-development" className="fw_500 white-clr">
                                {t('frontendDevelopment', common.frontendDevelopment)}
                            </Link>
                        </li>
                        <li className="menu-link py-1">
                            <Link href="/backend-development" className="fw_500 white-clr">
                                {t('backendDevelopment', common.backendDevelopment)}
                            </Link>
                        </li>
                        <li className="menu-link py-1">
                            <Link href="/ecommerce-solutions" className="fw_500 white-clr">
                                {t('ecommerceSolutions', common.ecommerceSolutions)}
                            </Link>
                        </li>
                        <li className="menu-link py-1">
                            <Link href="/web-maintenance" className="fw_500 white-clr">
                                {t('webMaintenance', common.webMaintenance)}
                            </Link>
                        </li>
                    </ul>
                </li>
                <li className="menu-item position-relative">
                    <Link href="/portfolio" className="fw_500 white-clr">
                        {t('portfolio', common.portfolio)}
                    </Link>
                </li>
                <li className="menu-item position-relative">
                    <Link href="/blog-list" className="fw_500 white-clr">
                        {t('blog', common.blog)}
                    </Link>
                </li>
                <li className="menu-item position-relative">
                    <Link href="/about" className="fw_500 white-clr">
                        {t('about', common.about)}
                    </Link>
                </li>
                <li className="menu-item position-relative">
                    <Link href="/contact" className="fw_500">
                        {t('contactUs', common.contactUs)}
                    </Link>
                </li>
            </ul>
        </>
    )
}

