import Link from 'next/link'

export default function ContactUs() {
    return (

        <div className="contactus-page  py-20 px-20">

            <div className="row">
                <div className=" contact-page-leftPanel">
                    <h2 className='text-6xl font-bold mb-4 font-roboto text-slate-600 '>Contact Us</h2>

                    <div className="row mb-10">
                        <div className="col-md-6 contact-detail-wrap">
                            <div className="request-btn-detailPage">
                                <div> <h5 className='text-2xl font-bold text-[#15BCC2]' >Request a Demo of the Platform</h5>
                                    <p className='font-bold mt-4 mb-10'>Sign up for a demo and a <strong className="freelargfont">FREE</strong> 7-day trial</p>
                                </div>
                                <div className="w-40 h-10 bg-[#F9AE1C] hover:bg-blue-600 text-white rounded flex items-center justify-center cursor-pointer">
                                    <Link href="/request-demo" className="main-btn btn-primary font-bold p-3">
                                        <span>Request a Demo </span>

                                    </Link>
                                </div>

                            </div>
                        </div>

                    </div>

                    <div className="row grid grid-cols-1 md:grid-cols-2 gap-8 ">
                        <div className="col-md-6 contact-detail-wrap">
                            <h6 className="text-2xl font-bold text-[#15BCC2] mb-4" >MyLogIQ, LLC</h6>
                            <div className="contact-detail-links">
                                <ul>
                                    <li className="mb-4">
                                        <div className="flex items-center gap-3">
                                        <figure>
                                            <img src="https://www.mylogiq.com/wp-content/uploads/2021/11/location_icon.svg" alt="" title="location_icon" className="lazyloaded" data-ll-status="loaded" /><noscript>
                                                <img src="https://www.mylogiq.com/wp-content/uploads/2021/11/location_icon.svg" alt="" title="location_icon" /></noscript>
                                        </figure>
                                        <p>151 Calle San Francisco San Juan, PR 00901</p>
                                        </div>
                                    </li>
                                    <li>
                                        
                                        <a href="tel:8885644910">
                                            <div className="flex items-center gap-3">
                                            <figure>
                                                <img src="https://www.mylogiq.com/wp-content/uploads/2021/10/noun_receive-call_4304827.svg" alt="" title="noun_receive call_4304827" className="lazyloaded" data-ll-status="loaded" />
                                                <noscript><img src="https://www.mylogiq.com/wp-content/uploads/2021/10/noun_receive-call_4304827.svg" alt="" title="noun_receive call_4304827" /></noscript>
                                            </figure>
                                            <p>888.564.4910</p>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6 contact-detail-wrap">
                            <h6 className="text-2xl font-bold text-[#15BCC2] mb-4">Sales</h6>
                            <div className="contact-detail-links">
                                <ul>
                                    <li>
                                        
                                        <a href="mailto:info@mylogiq.com">
                                            <div className="flex items-center gap-3">
                                            <figure>
                                                <img src="https://www.mylogiq.com/wp-content/uploads/2021/11/email_icon.svg"
                                                    alt="" title="email_icon" className="lazyloaded" data-ll-status="loaded" /><noscript><img src="https://www.mylogiq.com/wp-content/uploads/2021/11/email_icon.svg" alt="" title="email_icon" /></noscript>
                                            </figure>
                                            <p>info@mylogiq.com</p>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-6 contact-detail-wrap">
                            <h6 className="text-2xl font-bold text-[#15BCC2] mb-4">Support</h6>
                            <div className="contact-detail-links">
                                <ul>
                                    <li className="mb-4">
                                        <div className="flex items-center gap-3">
                                        <figure>
                                            <img src="https://www.mylogiq.com/wp-content/uploads/2021/10/noun_clock_1348490.svg"
                                                alt="" title="noun_clock_1348490" className="lazyloaded" data-ll-status="loaded" /><noscript><img src="https://www.mylogiq.com/wp-content/uploads/2021/10/noun_clock_1348490.svg" alt="" title="noun_clock_1348490" /></noscript>
                                        </figure>
                                        <p>8am to 8pm EST M-F</p>
                                        </div>
                                    </li>
                                    <li></li>
                                    <li>
                                        <Link href="mailto:support@mylogiq.com">
                                            <div className="flex items-center gap-3">
                                                <figure>
                                                    <img src="https://www.mylogiq.com/wp-content/uploads/2021/11/email_icon.svg"
                                                        alt="" title="email_icon" className="lazyloaded" data-ll-status="loaded" /><noscript><img src="https://www.mylogiq.com/wp-content/uploads/2021/11/email_icon.svg" alt="" title="email_icon" /></noscript>
                                                </figure>
                                                <p  className="mb-4">support@mylogiq.com
                                                    <br /> Our team is here to help!</p>
                                            </div>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6 contact-detail-wrap">
                            <h6 className="text-2xl font-bold text-[#15BCC2]  mb-4">Press</h6>
                            <div className="contact-detail-links">
                                <ul>
                                    <li>
                                        <a href="mailto:press@mylogiq.com">
                                            <div className="flex items-center gap-3">
                                                <figure>
                                                    <img src="https://www.mylogiq.com/wp-content/uploads/2021/11/email_icon.svg"
                                                        alt="" title="email_icon" className="lazyloaded" data-ll-status="loaded" /><noscript><img src="https://www.mylogiq.com/wp-content/uploads/2021/11/email_icon.svg" alt="" title="email_icon" /></noscript>
                                                </figure>
                                                <p>press@mylogiq.com</p>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>


                    </div>

                    <div className="row">

                    </div>

                </div>
                <div className="col-lg-4 col-md-6 contact-form-wrapper">

                    <div className="contact-form">
                        {/*<form id="forminator-module-4471" className="forminator-ui forminator-custom-form 
                    forminator-custom-form-4471 forminator-design--default forminator_ajax forminator-size--small"
                     method="post" data-forminator-render="0" data-form-id="4471" data-design="default"
                      data-grid="open" style="" data-uid="686616bb597a1" novalidate="novalidate"><div role="alert" aria-live="polite" className="forminator-response-message forminator-error" aria-hidden="true"></div><div className="forminator-row"><div id="name-1" className="forminator-field-name forminator-col forminator-col-12 "><div className="forminator-row forminator-no-margin" data-multiple="true"><div className="forminator-col forminator-col-md-6"><div className="forminator-field"><label for="forminator-field-first-name-1_686616bb597a1" id="forminator-field-first-name-1_686616bb597a1-label" className="forminator-label">First Name <span className="forminator-required">*</span></label><input type="text" name="name-1-first-name" placeholder="" id="forminator-field-first-name-1_686616bb597a1" className="forminator-input" aria-required="true" data-multi="1" value=""></div></div><div className="forminator-col forminator-col-md-6"><div className="forminator-field"><label for="forminator-field-last-name-1_686616bb597a1" id="forminator-field-last-name-1_686616bb597a1-label" className="forminator-label">Last Name <span className="forminator-required">*</span></label><input type="text" name="name-1-last-name" placeholder="" id="forminator-field-last-name-1_686616bb597a1" className="forminator-input" aria-required="true" data-multi="1" value=""></div></div></div></div></div><div className="forminator-row"><div id="text-1" className="forminator-field-text forminator-col forminator-col-12 "><div className="forminator-field"><label for="forminator-field-text-1_686616bb597a1" id="forminator-field-text-1_686616bb597a1-label" className="forminator-label">Company <span className="forminator-required">*</span></label><input type="text" name="text-1" value="" placeholder="" id="forminator-field-text-1_686616bb597a1" className="forminator-input forminator-name--field" data-required="1"></div></div></div><div className="forminator-row"><div id="email-1" className="forminator-field-email forminator-col forminator-col-12 "><div className="forminator-field"><label for="forminator-field-email-1_686616bb597a1" id="forminator-field-email-1_686616bb597a1-label" className="forminator-label">Business Email <span className="forminator-required">*</span></label><input type="email" name="email-1" value="" placeholder="" id="forminator-field-email-1_686616bb597a1" className="forminator-input forminator-email--field" data-required="1" aria-required="true"></div></div></div><div className="forminator-row"><div id="text-2" className="forminator-field-text forminator-col forminator-col-12 "><div className="forminator-field"><label for="forminator-field-text-2_686616bb597a1" id="forminator-field-text-2_686616bb597a1-label" className="forminator-label">Subject <span className="forminator-required">*</span></label><input type="text" name="text-2" value="" placeholder="" id="forminator-field-text-2_686616bb597a1" className="forminator-input forminator-name--field" data-required="1"></div></div></div><div className="forminator-row"><div id="phone-1" className="forminator-field-phone forminator-col forminator-col-12 "><div className="forminator-field"><label for="forminator-field-phone-1_686616bb597a1" id="forminator-field-phone-1_686616bb597a1-label" className="forminator-label">Phone Number <span className="forminator-required">*</span></label><div className="forminator-iti-input iti iti--show-flags iti--inline-dropdown forminator-phone"><div className="iti__country-container" style="right: 0px;"><div className="iti__selected-country" title="United States: +1"><div className="iti__selected-country-primary"><div className="iti__flag iti__us"><span className="iti__a11y-text">United States +1</span></div></div></div></div><input type="text" name="phone-1" value="" placeholder="(201) 555-0123" id="forminator-field-phone-1_686616bb597a1" className="forminator-input forminator-field--phone iti__tel-input" data-required="1" aria-required="true" autocomplete="off" data-national_mode="enabled" data-country="us" data-validation="standard" data-intl-tel-input-id="0" style="padding-right: 36px;"></div></div></div></div><div className="forminator-row"><div id="radio-1" className="forminator-field-radio forminator-col forminator-col-12 "><div role="radiogroup" className="forminator-field" aria-labelledby="forminator-radiogroup-radio-1-686616bb597a1-label"><span id="forminator-radiogroup-radio-1-686616bb597a1-label" className="forminator-label">Select Your Time Zone <span className="forminator-required">*</span></span><label id="forminator-field-radio-1-label-1" for="forminator-field-radio-1-1-686616bb597a1" className="forminator-radio forminator-radio-inline" title="Eastern Time"><input type="radio" name="radio-1" value="one" id="forminator-field-radio-1-1-686616bb597a1" aria-labelledby="forminator-field-radio-1-label-1" data-calculation="0" data-hidden-behavior="zero"><span className="forminator-radio-bullet" aria-hidden="true"></span><span className="forminator-radio-label">Eastern Time</span></label><label id="forminator-field-radio-1-label-2" for="forminator-field-radio-1-2-686616bb597a1" className="forminator-radio forminator-radio-inline" title="Central Time"><input type="radio" name="radio-1" value="two" id="forminator-field-radio-1-2-686616bb597a1" aria-labelledby="forminator-field-radio-1-label-2" data-calculation="0" data-hidden-behavior="zero"><span className="forminator-radio-bullet" aria-hidden="true"></span><span className="forminator-radio-label">Central Time</span></label><label id="forminator-field-radio-1-label-3" for="forminator-field-radio-1-3-686616bb597a1" className="forminator-radio forminator-radio-inline" title="Pacific Time"><input type="radio" name="radio-1" value="Pacific-Time" id="forminator-field-radio-1-3-686616bb597a1" aria-labelledby="forminator-field-radio-1-label-3" data-calculation="0" data-hidden-behavior="zero"><span className="forminator-radio-bullet" aria-hidden="true"></span><span className="forminator-radio-label">Pacific Time</span></label></div></div></div><div className="forminator-row"><div id="textarea-1" className="forminator-field-textarea forminator-col forminator-col-12 "><div className="forminator-field"><label for="forminator-field-textarea-1_686616bb597a1" id="forminator-field-textarea-1_686616bb597a1-label" className="forminator-label">Your Message <span className="forminator-required">*</span></label><textarea name="textarea-1" placeholder="" id="forminator-field-textarea-1_686616bb597a1" className="forminator-textarea" rows="6" style="min-height:140px;"></textarea></div></div></div><div className="forminator-row"><div id="captcha-1" className="forminator-field-captcha forminator-col forminator-col-12 "><div className="forminator-captcha-left forminator-g-recaptcha recaptcha-invisible" data-theme="light" data-badge="inline" data-sitekey="6LfPOAcpAAAAADV2vc90Df5lL6crVpuvT8Y5mFIs" data-size="invisible" style="transform: scale(1); transform-origin: 0px 0px;"><div className="grecaptcha-badge" data-style="inline" style="width: 256px; height: 60px; box-shadow: gray 0px 0px 5px; z-index: 99;"><div className="grecaptcha-logo"><iframe title="reCAPTCHA" width="256" height="60" role="presentation" name="a-iwm8uyoz3jrx" frameborder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation" src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6LfPOAcpAAAAADV2vc90Df5lL6crVpuvT8Y5mFIs&amp;co=aHR0cHM6Ly93d3cubXlsb2dpcS5jb206NDQz&amp;hl=en&amp;v=h7qt2xUGz2zqKEhSc8DD8baZ&amp;theme=light&amp;size=invisible&amp;badge=inline&amp;cb=4rfcchrpu29e" style="max-width: 100%; max-height: 60px;"></iframe></div><div className="grecaptcha-error"></div><textarea id="g-recaptcha-response" name="g-recaptcha-response" className="g-recaptcha-response" style="width: 250px; height: 40px; border: 1px solid rgb(193, 193, 193); margin: 10px 25px; padding: 0px; resize: none; display: none;" aria-hidden="true" aria-label="do not use" aria-readonly="true"></textarea></div></div> </div></div><input type="hidden" name="referer_url" value=""><div className="forminator-row forminator-row-last"><div className="forminator-col"><div className="forminator-field"><button className="forminator-button forminator-button-submit submit-btn">SUBMIT</button></div></div></div><input type="hidden" id="forminator_nonce" name="forminator_nonce" value="fb92c605a7"><input type="hidden" name="_wp_http_referer" value="/contact-us"><input type="hidden" name="form_id" value="4471"><input type="hidden" name="page_id" value="511"><input type="hidden" name="form_type" value="default"><input type="hidden" name="current_url" value="https://www.mylogiq.com/contact-us"><input type="hidden" name="render_id" value="0"><input type="hidden" name="action" value="forminator_submit_form_custom-forms"></form>
                     </input> */}
                    </div>

                </div>
            </div>




            {/* CTA Section */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-lg shadow-md">
                            <h5 className="text-xl font-bold text-blue-600 mb-2">Request a Demo</h5>
                            <p className="mb-6">Schedule a demo to see how our Al-powered research<br />solutions can help you.</p>
                            <Link
                                href="https://companyiq.mylogiq.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
                            >
                                <span className="font-bold">Request a Demo</span>
                                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                            </Link>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-md">
                            <h5 className="text-xl font-bold text-blue-600 mb-2">More Information</h5>
                            <p className="mb-6">Download our Proxy brochure.</p>
                            <Link
                                href="https://www.mylogiq.com/wp-content/uploads/2021/11/Corporate-Governance-Brochure.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block"
                            >
                                <img
                                    className="w-40 shadow-md hover:shadow-lg transition-shadow"
                                    src="https://www.mylogiq.com/wp-content/uploads/2021/11/corporate_governance_thumbs.jpg.webp"
                                    alt="Proxy Brochure"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

        </div>

    )

}