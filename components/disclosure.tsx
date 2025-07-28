export default function Products() {
  return (
    <div className="sec-disclosures-page">
      {/* Hero Section */}
      <section className="hero-section bg-white py-16">
        <div className="container mx-auto px-10 font-roboto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-3xl md:text-4xl font-roboto text-slate-600 font-bold mb-2">
                SEC Compliance</h1>
              <h3 className="text-lg md:text-xl text-gray-700 mb-4">
                AI-Powered SEC EDGAR Research | Navigate Filings with Precision & Speed
              </h3>
              <p className="text-base mb-4">
                Accelerate regulatory research with CompanyIQ® AI technology.
                Get precision benchmarking from 20 million+ SEC regulatory filings across 350+ form types from 1994 forward, covering all U.S. publicly traded companies.
              </p>


            </div>

            <div className="w-full md:w-5/12 md:ml-auto">

              <img
                className="w-full rounded-lg shadow-lg"
                src="/images/site/SEC Disclosures Image.jpg"
                alt="SEC Disclosures Platform"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="our-feature-analysis-section px-10 py-16 bg-gray-50">
        <h3 className="text-2xl font-bold text-center font-roboto text-slate-600 mb-6">
          Time-Saving Core Features</h3>
        <div className="container bg-white p-6 rounded-lg shadow-md relative">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="py-2">
              <p className="text-xl font-bold">Instant Filing Intelligence</p>
              <ul className="list-disc pl-6">

                <li>Query 10-K, 10-Q, DEF 14A, 8-K, S-1, and 20-F filings in seconds</li>
                <li>Zero in on specific sections: Financial Statements, Footnotes, MD&A, Risk Factors, CD&A, and more</li>
                <li>Search within footnotes to financials</li>
                <li>Instantly identify keywords in narrative versus tabular content </li>

              </ul>
            </div>
            <div >
              <p className="text-xl font-bold">SEC Comment Letter Intelligence</p>
              <ul>
                <li>•	Track SEC comment letters and company responses</li>
                <li>•	Access 2M+ pre-analyzed threaded conversations spanning 10+ years</li>
                <li>•	Learn from regulatory precedents and company pushbacks</li>

              </ul>
            </div>

          </div>
          <div className="grid grid-cols-1 md:grid-cols-1 place-items-center">
            <div >
              <p className="text-xl font-bold">Effortless Monitoring</p>
              <ul>
                <li>•	Set automated alerts for new filings</li>
                <li>•	Receive updates directly to your inbox</li>
                <li>•	Track document changes with redline analysis</li>

              </ul>
            </div>
          </div>
        </div>

      </section>

      {/* Features Section */}
      <section className="features-section py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold font-roboto text-slate-600 text-center mb-12">
            AI-Powered Efficiency Multipliers
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="feature-card bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 font-bold">1</span>
                <h3 className="text-xl font-semibold">Intelligent Research Assistant</h3>
              </div>
              <p>Smart Search guidance for filtering by form item/section, creating peer lists, benchmarking footnotes to financials, and researching exhibits.</p>
            </div>

            {/* Feature 2 */}
            <div className="feature-card bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 font-bold  flex-shrink-0">2</span>
                <h3 className="text-xl font-semibold">Targeted Filters for Precision Searching</h3>
              </div>
              <p>Target your search by <b>form item/section, footnotes to financials, quantification, tables,</b> revenue, location, and more.</p>
            </div>

            {/* Feature 3 */}
            <div className="feature-card bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 font-bold">3</span>
                <h3 className="text-xl font-semibold">Contextual Results</h3>
              </div>
              <p>Eliminate document jumping. Get complete context around every result with full paragraphs and sections displayed instantly.</p>
            </div>

            {/* Feature 4 */}
            <div className="feature-card bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 font-bold">4</span>
                <h3 className="text-xl font-semibold">Concept-Based Search</h3>
              </div>
              <p>Our AI takes the guesswork out of trying to determine where your
                keyword may appear. Search by concept and save the step of
                specifying the relationship of your search term to other words.</p>
            </div>

            {/* Feature 5 */}
            <div className="feature-card bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 font-bold  flex-shrink-0">5</span>
                <h3 className="text-xl font-semibold">Learn from Your Peers' Comment Letters</h3>
              </div>
              <p>Leverage our AI search features to identify SEC Comments and
                Response Precedent with comment letters threaded to company
                responses and pushbacks.</p>
            </div>

            {/* Feature 6 */}
            <div className="feature-card bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 font-bold">6</span>
                <h3 className="text-xl font-semibold">Automated Smart Peers </h3>
              </div>
              <p>Skip manual peer research.
                Generate comprehensive peer list automatically from proxy data, then refine by market cap,
                revenue, industry, and more.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Database Section */}
      <section className="largest-searchable-section py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <SearchableFeature_mod
              icon=""
              title="Database Coverage"
              description={
                <>
                  <div className="py-2">

                    <ul>
                      <li>• 20 Million+ SEC Documents</li>
                      <li>•	7,000+ public companies</li>
                      <li>•	9 major market indices</li>
                      <li>•	All sectors and industries</li>
                      <li>•	7 million+ contracts</li>
                      <li>•	Full historical coverage</li>


                    </ul>
                  </div>
                  <div className="py-2">
                    <p className="text-xl font-bold">Flexible Output Options</p>
                    <ul className="list-disc pl-6 px-5">
                      <li>Export results to Word, PDF, and Excel formats</li>
                      <li>Each footnote or paragraph appears in separate cells / sections</li>
                      <li>Direct links to original SEC filings</li>
                    </ul>
                  </div>

                </>
              }
            />
            <SearchableFeature_mod
              icon=""
              title="Analytics Tools"
              description={
                <>
                  
                  <div className="py-2">
                    <p className="text-xl font-bold">•	Validate & Filter Results with Analytics</p>
                    <ul className="list-[circle] px-5  pl-6">
                      <li>Let our Al do the thinking if you are not sure which search parameters to use</li>
                      <li>Start with broad search terms to ensure complete results  </li>
                      <li>Use the CompanylQ® Analytics visual filters to validate and further filter your results by form type, form item, footnote, FYE, and more.</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-xl font-bold">•  Advanced Comparative Analytics</p>
                    <ul className="list-[circle] px-5  pl-6">
                      <li>Execute side-by-side document comparisons with redline analysis</li>
                      <li>Chronicle textual evolution across reporting periods</li>
                    </ul>
                  </div>
                </>
              }
            />


          </div>
        </div>

      </section>
      <section className="largest-searchable-section py-10 text-center">
        <div className="italic text-lg w-50px">
          Eliminate false positives and focus your research with the<br />
          CompanyIQ® SEC compliance platform



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