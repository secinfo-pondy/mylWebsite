export default function auditfees() {
  return (

    <div className="auditfees-page font-roboto">
      {/* SEC Disclosures Section */}
      <section className="sec-disclosures-section py-16">
        <div className="container mx-auto px-10">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2  mt-4  md:mb-0">
              <div className="sec-disclosures-left">
                <h2 className="text-3xl font-bold font-roboto text-slate-600 pt-5 mt-4  mb-2">Audit Fees & SOX</h2>
                <h6 className="text-lg font-bold mb-4">
                  Precision Analytics for Identifying Audit Fee Trends & SOX Compliance</h6>
                <p className="text-lg mb-6">
                  Access 10+ years of continuously updated data covering audit fees, tax fees, SOX
                  compliance, and material weaknesses.
                </p>
                <a href="./auditfees/datapoint" className="inline-flex items-center hover:bg-[#81cd47] bg-[#17bdc2] text-white px-6 py-3 rounded-md    transition-colors">
                  <span className="font-bold">View Datapoints</span>
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="w-full md:w-5/12 md:ml-auto">

              <img
                className="w-full mt-6 rounded-lg shadow-lg"
                src="/images/site/Audit Fees Image.png"
                alt="Proxy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Feature Analysis Section */}
      <section className="our-feature-analysis-section py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h4 className="text-2xl font-bold text-center text-slate-600  mb-12">
            Core Intelligence Features
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              number="1"
              title="Consolidated Analytics"
              description="Generate comprehensive audit and tax fee reports segmented by auditor and industry sectors."
            />
            <FeatureCard
              number="2"
              title="Complete Auditor Universe"
              description="Full coverage of all PCAOB-registered auditors and their client portfolios/market share."
            />
            <FeatureCard_list
              number="3"
              title="Fee Structure Analysis"
              description={
                <><ul>
                  <li>•	Audit Fee Trendlines</li>
                  <li>•	Average tax fee benchmarking</li>
                  <li>•	Total fee comparisons across firms</li>
                </ul>
                </>
              }
            />
            <FeatureCard_list
              number="4"
              title="SOX Compliance Monitoring"
              description={
                <>Deep analysis of material weaknesses, remediation efforts, and compliance across:<br />
                  <div className="ml-4">
                    <ul>
                      <li>•	SOX-302 - CEO/CFO Financial Reporting Certification</li>
                      <li>•	SOX-404 - Internal Controls over Financial Reporting</li>
                      <li>•	SOX-906 - CEO/CFO Periodic Financial Reporting Certification</li>
                    </ul>
                  </div>
                </>
              }
            />


            <FeatureCard
              number="5"
              title="Granular Company Intelligence"
              description="Individual company SOX and material weakness tracking, mapped by auditor relationships."
            />
            <FeatureCard
              number="6"
              title="Source Verification"
              description="Direct links to original regulatory filings and source documentation."
            />
          </div>
        </div>
      </section>


      {/* Platform Advantages */}
      <section className="largest-searchable-section py-16 bg-gray-900 text-white">
        <div className="mx-auto px-4 bg-blend-hue ">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <SearchableFeature
              icon=""
              title="Database Foundation"
              description={
                <>
                  <p className="font-bold">Unmatched Historical Depth</p>
                  <ul>
                    <li className="mb-2"><b>•	10+ years</b> of comprehensive data</li>
                    <li className="mb-2"><b>•	20+ million</b> source documents</li>
                    <li className="mb-2"><b>•	All active companies</b> tracked annually</li>

                  </ul>
                  <p className="mb-3"></p>

                </>
              }
            />
            <SearchableFeature
              icon=""
              title="Platform Advantages"
              description={
                <>
                  <ul>
                    <li className="mb-2"><b>•	Market-leading</b> audit fee database</li>
                    <li className="mb-2"><b>•	AI-driven </b>SOX compliance monitoring</li>
                    <li className="mb-2"><b>•	Source-verified</b> filing accuracy</li>
                    <li className="mb-2"><b>•	Multi-dimensional </b>benchmarking capabilities</li>

                  </ul>
                </>
              }
            />
          </div>



        </div>
         <p className="italic text-center mt-8"><b>On-Demand Intelligence Reports</b> Generate sophisticated compliance analyses with statistical modeling and seamless<br></br> navigation to primary regulatory filings.</p>

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