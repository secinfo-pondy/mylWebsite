
export default function ExploreLLM() {
    return (


        <div className="corporate-governance-page font-roboto">
            {/* SEC Disclosures Section */}
            <section className="sec-disclosures-section py-16">
                <div className="container mx-auto px-10">
                    <div className="flex flex-col md:flex-row">
                        <div className="w-full md:w-1/2 mt-4 md:mb-0">
                            <div className="sec-disclosures-left">
                                <h2 className="text-3xl font-bold font-roboto text-slate-600 pt-5 mt-4   mb-2">AI & LLM Ready Platform</h2>
                                <div className="pl-[70px]">
                                    <p>Enterprise-grade governance data optimized for artificial intelligence applications</p>

                                    <div className="features">
                                        <div className="feature">
                                            <h3>🤖 RAG-Integrated Datasets</h3>
                                            <p>Structured data ready for Retrieval-Augmented Generation and natural language queries</p>
                                        </div>

                                        <div className="feature">
                                            <h3>⚡ Immediate AI Deployment</h3>
                                            <p>Clean, formatted datasets that integrate seamlessly with LLM applications - no data cleaning required</p>
                                        </div>

                                        <div className="feature">
                                            <h3>🎯 Superior Training Data</h3>
                                            <p>95-98% accuracy vs. 70-80% from web-scraped alternatives - premium quality for AI model training</p>
                                        </div>

                                        <div className="feature">
                                            <h3>🔗 API-First Architecture</h3>
                                            <p>Professional APIs with comprehensive documentation for seamless enterprise integration</p>

                                        </div>
                                    </div>
                                </div>
                                <a href="https://api.mylogiq.com" target="_blank" className="mt-5 inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors">
                                    <span className="font-bold">View Datapoints</span>
                                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="w-[700px] h-[450px] md:w-5/12 md:ml-auto">

                            <img
                                className="w-full mt-6 rounded-lg shadow-lg"
                                src="https://www.mylogiq.com/wp-content/uploads/2021/10/Corporate-Governanc-Image.jpg.webp"
                                alt="New Image to add"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="our-feature-analysis-section px-10 py-16 bg-gray-50">
                <h3 className="text-2xl font-bold text-center font-roboto text-slate-600 mb-6">
                    Human-Verified Excellence</h3>
                <div className="container bg-white p-6 rounded-lg shadow-md relative">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="py-2">
                            <p className="text-xl font-bold">Our Approach</p>
                            <ul>
                                <li>✓ Proprietary structuring algorithms</li>
                                <li>✓ Human QA validation on every data point</li>
                                <li>✓ 95-98% guaranteed accuracy</li>
                                <li>✓ 10-15 years of historical depth</li>
                                <li>✓ Single source across all governance domains</li>
                            </ul>
                        </div>
                        <div >
                            <p className="text-xl font-bold">AI-Only Alternatives</p>
                            <ul>
                                <li>❌ 70-80% accuracy with data gaps</li>
                                <li>❌ Multiple fragmented vendors required</li>
                                <li>❌ Inconsistent data quality</li>
                                <li>❌ Limited historical coverage</li>
                                <li>❌ No accuracy guarantees</li>

                            </ul>
                        </div>

                    </div>
                </div>

            </section>



            {/* Database Section */}
            <section className="largest-searchable-section py-3 bg-gray-900 text-white">
                <div className="container mx-auto px-4">



                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <SearchableFeature_mod
                            icon=""
                            title="Trusted by Industry Leaders"
                            description={
                                <>
                                    <div className="pl-2">
                                        <p>The governance intelligence platform that powers critical business decisions</p>

                                        <div className="value-props">
                                            <div className="prop">
                                                <h3 className="font-bold">📊 Powers WSJ Analysis</h3>
                                                <p className="pl-2">10-year partnership providing data for Wall Street Journal's flagship CEO compensation analysis</p>
                                            </div>

                                            <div className="prop">
                                                <h3 className="font-bold">🏢 Big 4 Validated</h3>
                                                <p className="pl-2">Trusted by major accounting and consulting firms for governance research and compliance</p>
                                            </div>

                                            <div className="prop">
                                                <h3 className="font-bold">🔄 Vendor Consolidation</h3>
                                                <p className="pl-2">Replace multiple specialized providers with one comprehensive governance intelligence platform</p>
                                            </div>

                                            <div className="prop">
                                                <h3 className="font-bold">⚖️ Institutional Grade</h3>
                                                <p className="pl-2">Data quality and reliability standards that meet the requirements of major institutions</p>
                                            </div>
                                        </div>
                                    </div>

                                </>
                            }
                        />
                        <SearchableFeature_mod
                            icon=""
                            title="Built for Developers & Enterprise Integration"
                            description={
                                <>
                                    <div className="py-2">
                                        <div className=" pl-5">
                                            <p>Professional-grade APIs with comprehensive documentation</p>

                                            <div className="api-showcase">
                                                <div className="api-features">
                                                    <h3>🛠️ Developer-Friendly</h3>
                                                    <ul>
                                                        <li>✓ RESTful API design</li>
                                                        <li>✓ Swagger/OpenAPI documentation</li>
                                                        <li>✓ JSON response format</li>
                                                        <li>✓ Rate limiting & authentication</li>
                                                    </ul>
                                                </div>

                                                <div className="api-cta">
                                                    <h3>Ready to Integrate?</h3>
                                                    <a href="https://api.mylogiq.com"
                                                        className="api-button"
                                                        target="_blank"
                                                        rel="noopener noreferrer">
                                                        🚀 Explore API Documentation
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </>
                            }
                        />



                    </div>
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
                <img src={icon} alt={title} className="w-12 h-12" />
                <div>
                    <h6 className="text-xl font-bold mb-2">{title}</h6>
                    <div className="text-gray-300">{description}</div>
                </div>
            </div>
        );
    };

const SearchableFeature_mod: React.FC<{
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

                <div className="ml-10">
                    <h6 className="text-2xl font-bold mb-2">{title}</h6>
                    <div className="text-gray-300">{description}</div>
                </div>
            </div>
        );
    }