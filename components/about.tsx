import Link from 'next/link'

export default function AboutUs() {
    return (

        <div className="aboutus-page">
            {/*  Section */}
            <section className="sec-disclosures-section py-16">
                <div className="container mx-auto px-10">
                    <div className="flex flex-col md:flex-row">
                        <div className="w-full md:w-1/2 mb-8 md:mb-0">
                            <div className="sec-disclosures-left">
                                <h2 className="text-5xl font-bold mb-4 font-sans-display text-slate-600 ">About MyLogIQ</h2>
                                <h6 className="text-3xl font-bold mb-4 text-slate-600">
                                    MyLogIQ puts <span className="text-[#15BCC2]">Artificial Intelligence (AI) and Machine Learning </span>to work to provide the best public company intelligence available on any platform at any price.</h6>
                                <p className="text-lg mb-6 text-slate-600">
                                     With our CompanyIQ® platform, we provide 360° public company intelligence to anyone who analyzes public companies.<br></br>
                                    
                                    Our founder put his passion for AI and Machine Learning to work because he knew there had to be a better way to manage data and find the intelligence buried inside millions of data points.
                                </p>


                            </div>
                        </div>
                        <div className="w-full md:w-5/12 md:ml-auto">

                            <img
                                className="w-full mt-6 rounded-lg shadow-lg"
                                src="/images/site/about_us.jpg.webp"
                                alt="Proxy"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="founder_section common-padding  px-10 py-10">
                <div className="container">
                    <div className="flex space-x-5 flex-col md:flex-row founder-wrapper">
                         <div className="founder-image-wrap parent relative">
                            <figure className="founder-image">

                                <img className=" w-[430px] img-fluid rounded-full lazyloaded" src="https://www.mylogiq.com/wp-content/uploads/2021/10/Image-154.jpg.webp" alt="" title="Image 154" data-ll-status="loaded" /><noscript>
                                    <img className="img-fluid" src="https://www.mylogiq.com/wp-content/uploads/2021/10/Image-154.jpg.webp" alt="" title="Image 154" /></noscript>
                            </figure>
                            <div className="child absolute  bottom-35 right-0 ">
                                <Link target="_blank" href="https://www.linkedin.com/in/ganeshrajappan/" className=" founder-linkeding">
                                    <img className="img-fluid lazyloaded" src="https://www.mylogiq.com/wp-content/uploads/2021/10/linkedin.svg" alt="" title="linkedin" data-ll-status="loaded" /><noscript>
                                        <img className="img-fluid" src="https://www.mylogiq.com/wp-content/uploads/2021/10/linkedin.svg" alt="" title="linkedin" /></noscript>
                                </Link>
                            </div>
                        </div> 
                        
                        
                        <div className="founder-content-wrapper  px-10">
                            <h2 className="text-5xl font-bold text-slate-600 text-wrap">Founder<br></br> <span className=" text-[#15BCC2]">Ganesh Rajappan</span></h2>
                            <p className='text-xl text-slate-600 m-4'>Ganesh has 20 years of experience working with public company data and providing software solutions to corporations, investment managers, regulators, law firms, academia, the media, and regulatory bodies.</p>
                            <p className='text-xl text-slate-600 m-4'>Ganesh started his career with software development, architecture, consulting, sales, and sales management for several technology companies in Silicon Valley.</p>
                            <p className='text-xl text-slate-600 m-4'>His personal mission is to feed at least 100 impoverished children a day.</p>
                            <div className='pl-3.5'>
                                <h6 className="text-2xl font-bold text-slate-600 text-wrap">"I couldn’t have built our Al platform without the incredibly bright team of engineers and analysts who have been with me from the beginning of this journey that started more than 15 years ago."</h6>
                                <p className="text-2xl font-bold text-[#15BCC2]">- Ganesh Rajappan</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-[#51586D] text-amber-50 py-10">
                <div className="container justify-items-center">

                    <div className="text-center w-[70%]  text-wrap">
                        <h4 className="text-3xl font-bold text-[#F9AE1C]">What sets CompanyIQ AnswerDesk<br></br> apart from other solutions?</h4></div>
                    <div className="text-center ">
                        <div className="mt-10 text-xl ">
                            <p>“We knew there had to be a better way than having multiple vendors to satisfy each intelligence requirement.<br></br>
                                You don’t want a small door for your small cat and a big door for your big cat.<br></br>
                                What you need is one door that fits all your cats.”</p>
                        </div>
                        <p className="mt-12  font-bold text-[#15BCC2]">- Ganesh Rajappan</p>
                    </div>


                </div>
            </section>


            {/* Our-story*/}
            <section className=" Our-story py-16 px-20 font-roboto">
                <div className="Our-story text-lg mb-6 text-slate-600 leading-[2]">
                    <h2 className="text-5xl font-extrabold text-slate-600 py-8">Our Story</h2>


                    <h6 className="text-2xl py-5">MyLogIQ started innovating on big data and analysis 20 years ago, under its former name LogixData.</h6>
                    
                    <p className='mb-2'>In 2001, we started working on structuring the “unstructured information” of public companies, using Artificial Intelligence (AI) and Machine Learning and applying our technology to global regulatory documents, thus eliminating the need for human data collection activities.</p>
                    <p className='mb-2'>Through our Text Information Mining Engine (TIME™), we put our artificial intelligence to work to provide real time mining of SEC filings and information posted on public company websites.</p>
                    <p className='mb-2'>Our first generation (2001-2009) automated engines were licensed by Thomson-Reuters to extract SEDAR and SEC filings data. We also created an executive compensation database and application which was white labelled to Mercer Human Resources, a division of Marsh and McLennan. From 2009, we have been a SaaS provider for answers to our clients’ most pressing SEC compliance and disclosure questions.</p>
                    <p className='mb-2'>In September 2015, we re-branded our company as MyLogIQ, LLC and relocated to Puerto Rico.</p>
                    <p className='mb-2'>Our Company IQ™ platform is a cloud-based Software-as-a-Service (SaaS) for research and analysis on all publicly traded companies in the US. With Company IQ™, we also offer Data-as-a-Service (DaaS) on more than 40,000 companies and thousands of data points, enabling our users for the first time to quantitatively and qualitatively analyze companies from a SINGLE platform. This allows our users to get information faster and cleaner and perform data-blending analysis to manage risk, benchmark with peers, improve SEC compliance, and get ahead of regulatory trends.</p>
                    <p className='mb-2'>MyLogIQ solutions are used by external reporting teams of public companies, corporate boards of directors, corporate secretaries and counsel, public accountants, law firms, buy and sell side, academia, the media, and regulatory bodies.</p>
                    <p className='mb-2 '>We are frequently featured in the Wall Street Journal, Agenda Week, and NACD publications.</p>
                    <figure>
                        <img width="1690" height="600" className="img-fluid lazyloaded" src="https://www.mylogiq.com/wp-content/uploads/2021/10/about-us-img.png.webp" alt="" title="about-us-img" data-ll-status="loaded" />
                        <noscript><img width="1690" height="600" className="img-fluid" src="https://www.mylogiq.com/wp-content/uploads/2021/10/about-us-img.png.webp" alt="" title="about-us-img" /></noscript>
                    </figure>
                </div>




            </section>

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

// Supporting components
const FeatureCard: React.FC<{ number: string; title: string; description: string }> = ({
    number,
    title,
    description
}) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md relative">
            <span className="absolute top-6 left-6 bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                {number}
            </span>
            <h6 className="text-xl font-bold mb-3 pl-10">{title}</h6>
            <p>{description}</p>
        </div>
    );
};

const FeatureCard_list: React.FC<{ number: string; title: string; description: React.ReactNode }> = ({
    number,
    title,
    description
}) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md relative">
            <span className="absolute top-6 left-6 bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                {number}
            </span>
            <h6 className="text-xl font-bold mb-3 pl-10">{title}</h6>
            <div>{description}</div>
        </div>
    );
};

const SearchableFeature: React.FC<{
    icon: string;
    title: string;
    description: React.ReactNode;
}> = ({
    icon,
    title,
    description
}) => {
        return (
            <div className="flex items-start space-x-4 bg-gray-800 p-6 rounded-lg">

                <div>
                    <h6 className="text-xl font-bold mb-2">{title}</h6>
                    <div className="text-gray-300">{description}</div>
                </div>
            </div>
        );
    }