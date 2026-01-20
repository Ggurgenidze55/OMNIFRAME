'use client'
import Layout from "@/components/layout/Layout"

export default function PrivacyPolicy() {
    return (
        <>
            <Layout headerStyle={2} footerStyle={3} breadcrumbTitle="Privacy Policy" coverImage="/assets/img/covers/services-cover.jpg">
                <section className="privacy-policy pt-space pb-space">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="privacy-content">
                                    <h2 className="mb-4 white-clr">Privacy Policy</h2>
                                    <p className="mb-4 pra-clr">Last updated: {new Date().toLocaleDateString()}</p>
                                    
                                    <div className="privacy-section mb-5">
                                        <h3 className="mb-3 white-clr">1. Information We Collect</h3>
                                        <p className="pra-clr">
                                            We collect information you provide directly to us, such as when you contact us, request a quote, or subscribe to our newsletter. 
                                            This may include your name, email address, phone number, company name, and project requirements.
                                        </p>
                                        <p className="pra-clr mt-3">
                                            We also automatically collect certain information when you visit our website, including your IP address, browser type, 
                                            operating system, referring URLs, and pages viewed.
                                        </p>
                                    </div>

                                    <div className="privacy-section mb-5">
                                        <h3 className="mb-3 white-clr">2. How We Use Your Information</h3>
                                        <p className="pra-clr">We use the information we collect to:</p>
                                        <ul className="pra-clr mt-3">
                                            <li>Provide and improve our web development services</li>
                                            <li>Respond to your inquiries and provide customer support</li>
                                            <li>Send you technical notices and updates</li>
                                            <li>Send you marketing communications (with your consent)</li>
                                            <li>Analyze website usage and improve user experience</li>
                                            <li>Comply with legal obligations</li>
                                        </ul>
                                    </div>

                                    <div className="privacy-section mb-5">
                                        <h3 className="mb-3 white-clr">3. Information Sharing</h3>
                                        <p className="pra-clr">
                                            We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, 
                                            except in the following circumstances:
                                        </p>
                                        <ul className="pra-clr mt-3">
                                            <li>With service providers who assist us in operating our website and providing services</li>
                                            <li>To comply with legal requirements or protect our rights</li>
                                            <li>In connection with a business transfer or merger</li>
                                        </ul>
                                    </div>

                                    <div className="privacy-section mb-5">
                                        <h3 className="mb-3 white-clr">4. Cookies and Tracking Technologies</h3>
                                        <p className="pra-clr">
                                            We use cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, 
                                            and understand where our visitors are coming from. You can control cookie settings through your browser preferences.
                                        </p>
                                    </div>

                                    <div className="privacy-section mb-5">
                                        <h3 className="mb-3 white-clr">5. Data Security</h3>
                                        <p className="pra-clr">
                                            We implement appropriate security measures to protect your personal information against unauthorized access, 
                                            alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
                                        </p>
                                    </div>

                                    <div className="privacy-section mb-5">
                                        <h3 className="mb-3 white-clr">6. Data Retention</h3>
                                        <p className="pra-clr">
                                            We retain your personal information for as long as necessary to provide our services, comply with legal obligations, 
                                            resolve disputes, and enforce our agreements. When we no longer need your information, we will securely delete it.
                                        </p>
                                    </div>

                                    <div className="privacy-section mb-5">
                                        <h3 className="mb-3 white-clr">7. Your Rights</h3>
                                        <p className="pra-clr">You have the right to:</p>
                                        <ul className="pra-clr mt-3">
                                            <li>Access and receive a copy of your personal information</li>
                                            <li>Correct inaccurate or incomplete information</li>
                                            <li>Request deletion of your personal information</li>
                                            <li>Object to processing of your personal information</li>
                                            <li>Withdraw consent for marketing communications</li>
                                        </ul>
                                    </div>

                                    <div className="privacy-section mb-5">
                                        <h3 className="mb-3 white-clr">8. Third-Party Links</h3>
                                        <p className="pra-clr">
                                            Our website may contain links to third-party websites. We are not responsible for the privacy practices or content 
                                            of these websites. We encourage you to review their privacy policies before providing any personal information.
                                        </p>
                                    </div>

                                    <div className="privacy-section mb-5">
                                        <h3 className="mb-3 white-clr">9. Children's Privacy</h3>
                                        <p className="pra-clr">
                                            Our services are not intended for children under 13 years of age. We do not knowingly collect personal information 
                                            from children under 13. If you believe we have collected such information, please contact us immediately.
                                        </p>
                                    </div>

                                    <div className="privacy-section mb-5">
                                        <h3 className="mb-3 white-clr">10. International Data Transfers</h3>
                                        <p className="pra-clr">
                                            Your personal information may be transferred to and processed in countries other than your own. 
                                            We ensure that such transfers comply with applicable data protection laws and implement appropriate safeguards.
                                        </p>
                                    </div>

                                    <div className="privacy-section mb-5">
                                        <h3 className="mb-3 white-clr">11. Changes to This Policy</h3>
                                        <p className="pra-clr">
                                            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy 
                                            on this page and updating the "Last updated" date.
                                        </p>
                                    </div>

                                    <div className="privacy-section mb-5">
                                        <h3 className="mb-3 white-clr">12. Contact Us</h3>
                                        <p className="pra-clr">
                                            If you have any questions about this Privacy Policy or our data practices, please contact us at:
                                        </p>
                                        <p className="pra-clr mt-2">
                                            Email: privacy@omniframe.ge<br/>
                                            Phone: +995 544 445 221<br/>
                                            Address: Tbilisi, Gabriel Salos Street 120
                                        </p>
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
