'use client'
import Layout from "@/components/layout/Layout"

export default function TermsConditions() {
    return (
        <>
            <Layout headerStyle={2} footerStyle={3} breadcrumbTitle="Terms & Conditions" coverImage="/assets/img/covers/services-cover.jpg">
                <section className="terms-conditions pt-space pb-space">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="terms-content">
                                    <h2 className="mb-4 white-clr">Terms and Conditions</h2>
                                    <p className="mb-4 pra-clr">Last updated: {new Date().toLocaleDateString()}</p>
                                    
                                    <div className="terms-section mb-5">
                                        <h3 className="mb-3 white-clr">1. Acceptance of Terms</h3>
                                        <p className="pra-clr">
                                            By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. 
                                            If you do not agree to abide by the above, please do not use this service.
                                        </p>
                                    </div>

                                    <div className="terms-section mb-5">
                                        <h3 className="mb-3 white-clr">2. Use License</h3>
                                        <p className="pra-clr">
                                            Permission is granted to temporarily download one copy of the materials (information or software) on OMNIframe's website 
                                            for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                                        </p>
                                        <ul className="pra-clr mt-3">
                                            <li>Modify or copy the materials</li>
                                            <li>Use the materials for any commercial purpose or for any public display</li>
                                            <li>Attempt to reverse engineer any software contained on the website</li>
                                            <li>Remove any copyright or other proprietary notations from the materials</li>
                                        </ul>
                                    </div>

                                    <div className="terms-section mb-5">
                                        <h3 className="mb-3 white-clr">3. Service Description</h3>
                                        <p className="pra-clr">
                                            OmniGreen provides web development services including but not limited to frontend development, backend development, 
                                            e-commerce solutions, and web maintenance. All services are provided "as is" and we make no warranties regarding the 
                                            functionality or compatibility of delivered solutions.
                                        </p>
                                    </div>

                                    <div className="terms-section mb-5">
                                        <h3 className="mb-3 white-clr">4. Payment Terms</h3>
                                        <p className="pra-clr">
                                            Payment terms are as agreed upon in individual service agreements. We reserve the right to suspend services 
                                            for non-payment. All prices are subject to change with 30 days written notice.
                                        </p>
                                    </div>

                                    <div className="terms-section mb-5">
                                        <h3 className="mb-3 white-clr">5. Intellectual Property</h3>
                                        <p className="pra-clr">
                                            All content on this website, including text, graphics, logos, and software, is the property of OMNIframe 
                                            and is protected by copyright laws. Custom developed solutions remain the property of OMNIframe until full payment is received.
                                        </p>
                                    </div>

                                    <div className="terms-section mb-5">
                                        <h3 className="mb-3 white-clr">6. Limitation of Liability</h3>
                                        <p className="pra-clr">
                                            In no event shall OMNIframe be liable for any damages arising out of the use or inability to use the materials 
                                            on our website, even if we have been notified orally or in writing of the possibility of such damage.
                                        </p>
                                    </div>

                                    <div className="terms-section mb-5">
                                        <h3 className="mb-3 white-clr">7. Governing Law</h3>
                                        <p className="pra-clr">
                                            These terms and conditions are governed by and construed in accordance with the laws of Georgia. 
                                            Any disputes relating to these terms will be subject to the exclusive jurisdiction of the courts of Georgia.
                                        </p>
                                    </div>

                                    <div className="terms-section mb-5">
                                        <h3 className="mb-3 white-clr">8. Changes to Terms</h3>
                                        <p className="pra-clr">
                                            We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting. 
                                            Your continued use of the website constitutes acceptance of the modified terms.
                                        </p>
                                    </div>

                                    <div className="terms-section mb-5">
                                        <h3 className="mb-3 white-clr">9. Contact Information</h3>
                                        <p className="pra-clr">
                                            If you have any questions about these Terms and Conditions, please contact us at:
                                        </p>
                                        <p className="pra-clr mt-2">
                                            Email: info@omniframe.ge<br/>
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
