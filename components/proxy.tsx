export default function proxy() {
  return (

    <div className="proxy-page font-roboto">
      {/* SEC Disclosures Section */}
      <section className="sec-disclosures-section py-16 font-roboto">
        <div className="container mx-auto px-10">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2  mt-4 md:mb-0">
              <div className="sec-disclosures-left">
                <h1 className="text-3xl font-bold font-roboto text-slate-600 pt-5 mt-4 mb-2">Proxy Proposals</h1>
                <h3 className="text-lg font-bold mb-4">
                  Track and analyze management and shareholder proxy proposals with AI-powered insights</h3>
                <p className="text-lg mb-6">
                  Access comprehensive proxy proposal data including director elections, say-on-pay votes, contested proxies, governance proposals, sustainability initiatives, and voting rights using our CompanyIQ® AI technology.</p>
                <a href="./proposals/datapoint" 
                 className="inline-flex items-center  text-white px-6 py-3 rounded-md hover:bg-[#81cd47] bg-[#17bdc2] transition-colors">
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
                src="/images/site/Proxy Proposals Image.png"
                alt="Proxy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Feature Analysis Section */}
      <section className="our-feature-analysis-section py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h4 className="text-2xl font-bold text-center font-roboto text-slate-600  mb-12">
            Key Features
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard_list
              number="1"
              title="Comprehensive Database"
              description={
                <>
                  <div className="text-lg ml-4">
                    <ul className="list-disc pl-6">
                      <li>Management Proposals</li>
                      <li>Shareholder Proposals</li>
                      <li>10+ years of historical data</li>
                      <li>5,000+ companies covered</li>
                      <li>Hundreds of proxy data points</li>
                    </ul>
                  </div>
                </>
              }
            />
            <FeatureCard_list
              number="2"
              title="Complete Proposal Coverage"
              description={
                <>
                  <p>CompanyIQ® AI extracts and transforms all proxy proposal elements into searchable data:</p>
                  <div className="ml-8">
                    <ul className="list-disc pl-6">
                      <li>Proposal sponsors and language</li>
                      <li>Voting results and patterns</li>
                      <li>Withdrawn proposals and proposal types</li>

                    </ul>
                  </div>
                </>
              }

            />
            <FeatureCard_list
              number="3"
              title="Flexible Search"
              description={
                <>
                  <p>Smart filters allow you to <b>search by:</b></p>
                  <div className="ml-8">
                    <ul className="list-disc pl-6">
                      <li>Company / Year / Meeting Date</li>
                      <li>Proposal Title / Topic / Subtopic</li>
                      <li>Director Name</li>
                      <li>Sponsor</li>
                      <li>Voting Results</li>

                    </ul>
                  </div>
                </>
              }
            />
            <FeatureCard_list
              number="4"
              title="Custom Benchmarking"
              description={
                <>
                  <div>
                    <ul className="list-disc pl-6">
                      <li>Track trends by peers, industry, or financial metrics</li>
                      <li>Pinpoint search with custom data points</li>
                      <li>Identify investor activism</li>

                    </ul>
                  </div>
                </>
              }
            />
            <FeatureCard_list
              number="5"
              title="Director Approval Patterns"
              description={
                <>
                  <div>Complete proxy data on <b>100,000+ directors</b>, including management and contested director information.</div>
                </>
              }
            />

            <FeatureCard
              number="6"
              title="Validate with Source Links"
              description="One-click access to proposal text in company proxies."
            />
          </div>
        </div>
      </section>

      {/* Database Section */}
      <section className="largest-searchable-section py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h4 className="text-2xl font-bold mb-4">Largest searchable public company intelligence database</h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <SearchableFeature_mod
              icon=""
              title="Advanced Analytics"
              description={
                <>
                  <p>
                    <b>Identify Voting Patterns</b> Track individual voting results for each proposal to spot trends and patterns.</p>
                  <p><b>Instant Industry Reports</b> Generate custom reports with statistical summaries and drill-down capabilities to original source documents.</p>
                  

                </>
              }
            />
            <SearchableFeature_mod
              icon=""
              title="Detailed Topic & Subtopics"
              description={
                <>
                  
                    <ul  className="grid grid-cols-1 md:grid-cols-2 gap-x-0.5 gap-y-1">
                    <li>	Climate Change 	</li>
                    <li>	Data Center Siting 	</li>
                    <li>	Food Waste 	</li>
                    <li>	Plastic Pollution 	</li>
                    <li>	Animal Welfare 	</li>
                    <li>	Anti-ESG 	</li>
                    <li>	Artificial Intelligence 	</li>
                    <li>	Civil Rights 	</li>
                    <li>	Debanking 	</li>
                    <li>	DEI 	</li>
                    <li>	Gender Transition Surgery 	</li>
                    <li>	Gun Violence 	</li>
                    <li>	Human Rights 	</li>
                    <li>	LGBTQIA+ Equity 	</li>
                    <li>	Online Safety 	</li>
                    <li>	Reproductive Rights 	</li>
                    <li>	Tobacco 	</li>
                    <li>	Union Activity 	</li>
                    <li>	Artificial Intelligence Governance	</li>
                    <li>	Auditor Ratification	</li>
                    <li>	Bitcoin	</li>
                    <li>	Board Declassification / Annual Elections	</li>
                    <li>	Board Diversity	</li>
                    <li>	Board Size	</li>
                    <li>	Corporate Giving / Partnership Transparency	</li>
                    <li>	Director Elections	</li>
                    <li>	Dual Class Voting Structure	</li>
                    <li>	Lobbying / Political Contributions Transparency	</li>
                    <li>	Merger/Reorganization Approval	</li>
                    <li>	Proxy Access	</li>
                    <li>	Reincorporation	</li>
                    <li>	Say on Pay	</li>
                    <li>	Special Meeting Rights	</li>
                    <li>	Voting Rights	</li>
                    <li>	Voting Standards	</li>
                    <li>	Written Consent	</li>
                    </ul>


                  


                </>
              }
            />

          </div>
        </div>
      </section>
<section className="largest-searchable-section py-10 text-center">
        <div className="italic text-lg w-50px">
          <p>Understand the complete proxy proposal landscape
          </p>

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
        <img src={icon} alt={title} className="w-12 h-12" />
        <div>
          <h6 className="text-xl font-bold mb-2">{title}</h6>
          <div className="text-gray-300">{description}</div>
        </div>
      </div>
    );
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
      <div className="flex items-start bg-gray-800 p-3 pt-6 rounded-lg">

        <div className="ml-10">
          <h6 className="text-2xl font-bold mb-2">{title}</h6>
          <div className="text-gray-300 text-sm ">{description}</div>
        </div>
      </div>
    );
  }