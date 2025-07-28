import Link from 'next/link'

export default function AboutUs() {
    return (

        <div className="aboutus-page font-roboto  ">
            {/*  Section */}
            <section className="sec-disclosures-section py-16">
                <div className="container mx-auto px-10">
                    <div className="flex flex-col md:flex-row">
                        <div className="w-full md:w-1/2  mt-4 md:mb-0">
                            <div className="sec-disclosures-left">
                                 <h2 className="text-3xl font-bold font-roboto text-slate-600 pt-5 mt-4  mb-2">Custom Research Services & API</h2>
                                <h3 className="text-lg md:text-xl text-gray-700 mb-4">
                                    Elevate your public company intelligence with on-demand data</h3>
                                <p className="text-lg mb-6">
                                    Leverage our CompanyIQ® AI and machine learning technology and 20+ years of SEC EDGAR data knowledge to access bespoke reports and thousands of datapoints via API data feeds.
                                </p>


                            </div>
                        </div>
                        <div className="w-full md:w-5/12 md:ml-auto">

                            <img
                                className="w-full mt-6 rounded-lg shadow-lg"
                                src="/images/site/API-Image-Full.jpg.webp"
                                alt="Proxy"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className=" py-16">
                <div className=" w-[60%] container text-4xl mx-auto px-20 font-bold text-[#15BCC2] text-center item-centre text-wrap">
                    Our AI and machine learning tools can provide custom research datasets for your most sensitive projects.
                </div>

            </section>

            <section className="features  px-20">
                <div className=" text-slate-600 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center item-centre text-wrap ">
                        <div className="w-20 h-20 bg-slate-600 rounded-full flex items-center  mx-auto justify-center">
                            <span className="text-white text-3xl font-bold">1</span>
                        </div>
                        <p className="font-bold mt-10"> The Data You Need in the Format You Want</p><br />
                        Access the data you need in the format that fits best for you either through our custom research services or through our API data feed.


                    </div>
                    <div className="text-center item-centre text-wrap">
                        <div className="w-20 h-20 bg-slate-600 rounded-full flex items-center  mx-auto justify-center">
                            <span className="text-white text-3xl font-bold">2</span>
                        </div>
                        <p className="font-bold mt-10"> Custom Extraction & Reports</p><br />
                        One-time or repeat data pulls of any datapoints aggregated in the structure you want in the report
                        format you need.

                    </div>
                    <div className="text-center item-centre text-wrap">
                        <div className="w-20 h-20 bg-slate-600 rounded-full flex items-center  mx-auto justify-center">
                            <span className="text-white text-3xl font-bold">3</span>
                        </div>
                        <p className="font-bold mt-10"> API Data Feed</p><br />
                        Instant access to our real-time intelligence sets directly to your servers

                    </div>

                </div>
            </section>

            <section className="bg-[#51586D] text-amber-50 py-10 mt-20">
                <div className="container  grid grid-cols-1 md:grid-cols-3 gap-8 px-20">

                    <div className="Leftcolumn">
                        <h4 className="text-3xl font-bold text-[#F9AE1C]">Custom Data</h4>
                        <ul>
                            <li>• Find answers to your esoteric data questions</li>
                            <li>• Financial and non-financial data</li>
                            <li>• Complex disclosure precedence research</li>
                            <li>• Data delivered within 15 minutes to 24 hours</li>
                            <li>• If it’s disclosed, we have it.</li>
                            <li>• Nothing too small or too big</li>
                        </ul>
                    </div>
                    <div className="Rightcolumn">
                        <p className="mt-5 py-5">Recent examples of custom research include:</p>
                        <ul className="square-listing">
                            <li>• Biotech CFO compensation,</li>
                            <li>• ESG and sustainability committees,</li>
                            <li>• Virtual AGMs,</li>
                            <li>• Cybersecurity risk factors,</li>
                            <li>• NEO equity packages,</li>
                            <li>• CFO hires and departures,</li>
                            <li>• Audit warnings, and</li>
                            <li>• Human capital diversity disclosure</li>
                        </ul>

                    </div>


                </div>
            </section>

            <section className="FeedDetails">
                <div className="container  px-20 text-lg">


                    <div className="solutions-features-listing-wrapper">



                        <h4  className="text-4xl font-bold text-center font-roboto text-slate-600 mt-12 mb-12">
                            API Feed <br />Connect With and Use Our Data in the Way You Need</h4>


                        <div className="mb-10">
                            <h5 className="text-3xl mx-auto font-bold text-[#15BCC2] mb-5">Our API allows you to:</h5>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none">
                                <li className="flex items-center gap-2"> <CheckIcon size={32} />Perform data searches from within various datasets for a supplied search term such as company name.</li>
                                <li className="flex items-center gap-2"> <CheckIcon size={32} />Perform data searches from within various datasets for supplied company ticker, CUSIP, or CIK to build profiles for analysis.</li>
                                <li className="flex items-center gap-2"> <CheckIcon size={32} />Perform targeted searches that match user defined tags and location terms.</li>
                                <li className="flex items-center gap-2"> <CheckIcon size={32} />Query for companies based on specific filters or screening criteria.</li>
                            </ul>
                        </div>

                        <div className="mb-10">
                            <h5 className="text-3xl mx-auto font-bold text-[#15BCC2] mb-5">With our 360° CompanyIQ™ API, you can access the following data sets:</h5>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none">
                                <li className="flex items-center gap-2"> <CheckIcon size={32} />Audit Fees and SOX</li>
                                <li className="flex items-center gap-2"> <CheckIcon size={32} />Executive and Director Compensation</li>
                                <li className="flex items-center gap-2"> <CheckIcon size={32} />Corporate Governance Practices and Policies</li>
                                <li className="flex items-center gap-2"> <CheckIcon size={32} />Director Index</li>
                                <li className="flex items-center gap-2"> <CheckIcon size={32} />Finance Datapoints</li>
                                <li className="flex items-center gap-2"> <CheckIcon size={32} />Proxy Proposals and Shareholder Engagement</li>
                                <li className="flex items-center gap-2"> <CheckIcon size={32} />Public Company Peers</li>
                                <li className="flex items-center gap-2"> <CheckIcon size={32} />Risk Factors</li>
                            </ul>
                        </div>

                        <div className="mb-10">
                            <h5 className="text-3xl mx-auto font-bold text-[#15BCC2] mb-5">Within these data sets, you will find:</h5>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none">
                                <li className="flex items-center gap-2"> <CheckIcon size={32} />All components of CEO and board of directors' pay</li>
                                <li className="flex items-center gap-2"> <CheckIcon size={32} />Corporate governance philosophies, including board diversity and say on pay</li>
                                <li className="flex items-center gap-2"> <CheckIcon size={32} />Management proposals and 14a-8 shareholder proposals</li>
                                <li className="flex items-center gap-2"> <CheckIcon size={32} />Audit and tax fees</li>
                                <li className="flex items-center gap-2"> <CheckIcon size={32} />SOX and ICFR remedies</li>
                                <li className="flex items-center gap-2"> <CheckIcon size={32} />Directors and their board interlocks</li>
                                <li className="flex items-center gap-2"> <CheckIcon size={32} />GAAP and non-GAAP financials</li>
                                <li className="flex items-center gap-2"> <CheckIcon size={32} />Disclosed risk factors</li>
                            </ul>
                        </div>
                    </div>
                    Once you determine which dataset is right for your needs, an application key is needed to access and make API calls to fetch data.

                </div>
            </section>



            {/* CTA Section */}
            <section className="py-5 mb-5 items-center">
                <div className="container mx-auto px-4">
                    <div className="flex justify-center">
                        <div className="bg-white p-8 rounded-lg shadow-md max-w-md">
                            <h5 className="text-xl font-bold text-blue-600 mb-2">Request a Demo</h5>
                            <p className="mb-6">Schedule a demo to see how our Al-powered research<br />solutions can help you.</p>

                            <a href="/request-demo"
                                rel="noopener noreferrer"
                                className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
                            >
                                <span className="font-bold">Request a Demo</span>
                                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

const CheckIcon = ({ className = "", size = 64 }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        fill="none"
        stroke="#ffb514"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="0.704"
        className={className}
    >
        <path d="m14.25 8.75c-.5 2.5-2.3849 4.85363-5.03069 5.37991-2.64578.5263-5.33066-.7044-6.65903-3.0523-1.32837-2.34784-1.00043-5.28307.81336-7.27989 1.81379-1.99683 4.87636-2.54771 7.37636-1.54771" />
        <polyline points="5.75 7.75,8.25 10.25,14.25 3.75" />
    </svg>
);


