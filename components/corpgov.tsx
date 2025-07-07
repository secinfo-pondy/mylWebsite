export default function CorpGov() {
  return (


    <div className="corporate-governance-page font-roboto">
      {/* SEC Disclosures Section */}
      <section className="sec-disclosures-section py-16">
        <div className="container mx-auto px-10">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <div className="sec-disclosures-left">
                <h2 className="text-3xl font-bold font-roboto text-slate-600 mb-2">Corporate Governance</h2>
                <h6 className="text-lg font-bold mb-4">Cut Corporate Governance Research Time - Instant Board & ESG Benchmarking</h6>
                <p className="text-lg mb-6">
                  Transform hours of manual governance research into minutes of targeted analysis. CompanyIQ® AI instantly benchmarks board practices, director profiles, and ESG policies across 7,000+ public companies with precision and speed.
                </p>
                <a href="https://www.mylogiq.com/solutions/corporate-governance/corporate-governance-data-dictionary" className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors">
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
                src="https://www.mylogiq.com/wp-content/uploads/2021/10/Corporate-Governance-Image.jpg.webp"
                alt="Corporate Governance"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="our-feature-analysis-section px-10 py-16 bg-gray-50">
        <h3 className="text-2xl font-bold text-center font-roboto text-slate-600 mb-6">
          The Complete Corporate Governance Profile</h3>
        <div className="container bg-white p-6 rounded-lg shadow-md relative">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="py-2">
              <p className="text-xl font-bold">Comprehensive Board Analytics</p>
              <ul>
                <li>•	Access complete director profiles for 80,000+ current and former board members</li>
                <li>•	Compare board composition, independence, and diversity metrics in seconds</li>
                <li>•	Eliminate manual proxy statement reviews—get structured data instantly</li>
                <li>•	Track director tenure, committee roles, and cross-board relationships automatically</li>
              </ul>
            </div>
            <div >
              <p className="text-xl font-bold">Automated Cybersecurity, AI, & Sustainability Governance Tracking</p>
              <ul>
                <li>•	Monitor sustainability practices, cybersecurity oversight, and AI governance policies</li>
                <li>•	Skip manual document searches—our AI extracts key ESG data points instantly</li>
                <li>•	Compare peer environmental and social initiatives with one click</li>
                <li>•	Track regulatory compliance trends across industries in real-time</li>

              </ul>
            </div>

          </div>
        </div>

      </section>

      {/* Feature Analysis Section */}
      <section className="our-feature-analysis-section py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h4 className="text-2xl font-bold text-center font-roboto text-slate-600  mb-12">
            AI-Powered Efficiency Multipliers
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              number="1"
              title="Esoteric Datapoint Discovery"
              description="Access granular data points on board practices and committee composition."
            />
            <FeatureCard
              number="2"
              title="One-Click Board Analysis"
              description="Eliminate spreadsheet building. Get instant board composition analysis with diversity metrics, independence ratios, and committee structures pre-calculated."
            />
            <FeatureCard
              number="3"
              title="Smart Trend Detection"
              description="Skip manual trend analysis. Our AI identifies emerging governance practices and regulatory shifts across your peer universe automatically."
            />
            <FeatureCard
              number="4"
              title="Instant Industry Reports"
              description="Trending topics or custom reports with overviews that provide statistical summaries of esoteric data points for broad analysis. Reports also allow you to drill down into specific data points that link to original source documents."
            />
            <FeatureCard
              number="5"
              title="Automated Peer Benchmarking"
              description="Stop manual peer selection. Generate comprehensive governance comparisons automatically, then refine by industry, size, or custom criteria in seconds."
            />
            
            
            <FeatureCard
              number="6"
              title="Source Links"
              description="Instant validation at your fingertips with links to original SEC filings."
            />
            
          </div>
        </div>
      </section>

      {/* Database Section */}
      <section className="largest-searchable-section py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <SearchableFeature_mod
              icon=""
              title="Comprehensive Governance Database"
              description={
                <>
                  <div className="py-2">
                    <p className="text-xl font-bold">
                      Complete Market Intelligence - 10+ Years Historical</p>
                    <ul>
                      <li>•	Every public company (7,000+) with full governance profiles</li>
                      <li>•	200+ governance and ESG data points per company</li>
                      <li>•	Complete director histories from 1994 forward</li>
                      <li>•	95%+ data accuracy with continuous updates</li>

                    </ul>
                  </div>
                  <div >
                    <p className="text-xl font-bold">
                      Critical Governance Areas Covered:</p>
                    <ul>
                      <li>•	Board structure and independence metrics</li>
                      <li>•	Director demographics, skills, and tenure analysis</li>
                      <li>•	Committee composition and responsibilities</li>
                      <li>•	Shareholder rights and anti-takeover provisions</li>
                      <li>•	Executive compensation and clawback policies</li>
                      <li>•	ESG oversight and sustainability practices</li>
                      <li>•	Cybersecurity and AI governance frameworks</li>

                    </ul>
                  </div>



                </>
              }
            />
            <SearchableFeature_mod
              icon=""
              title="Precision-Targeted Analysis Tools"
              description={
                <>
                  <div className="py-2">
                    <p className="text-xl font-bold">Pinpoint Specific Practices:</p>
                    <ul>
                      <li>•	Board diversity and inclusion initiatives</li>
                      <li>•	Proxy access and shareholder engagement policies</li>
                      <li>•	Hedging and pledging restrictions for executives</li>
                      <li>•	Poison pill provisions and rights plans</li>
                      <li>•	Special committee formations and mandates</li>
                      <li>•	Director refreshment and succession planning</li>

                    </ul>
                  </div>
                  <div>
                    <p className="text-xl font-bold">Advanced Filtering Capabilities:</p>
                    <ul>
                      <li>•	Filter by governance rating agency scores</li>
                      <li>•	Compare by market capitalization and industry sector</li>
                      <li>•	Analyze by geographic region or index membership</li>
                      <li>•	Track changes over custom time periods</li>

                    </ul>
                  </div>
                </>
              }
            />
            <SearchableFeature_mod
              icon=""
              title="Customized Output Solutions"
              description={
                <>
                  <div className="py-2">
                    <p className="text-xl font-bold">Flexible Data Export:</p>
                    <ul>
                      <li>•	Generate governance reports instantly</li>
                      <li>•	Excel workbooks with linked source documents</li>
                      <li>•	PDF reports with executive summaries</li>
                      <li>•	API integration for existing governance platforms</li>

                    </ul>
                  </div>
                </>
              }
            />
            <SearchableFeature_mod
              icon=""
              title="Measurable Impact for Governance Teams"
              description={
                <>
                  <div className="py-2">
                    <p className="text-xl font-bold">Research Efficiency Gains:</p>
                    <ul>
                      <li>•	Reduction in governance research time</li>
                      <li>•	Instant access to 25+ years of board data</li>
                      <li>•	Zero manual data entry or spreadsheet building</li>

                    </ul>
                  </div>
                  <div >
                    <p className="text-xl font-bold">Enhanced Decision Making:</p>
                    <ul>
                      <li>•	Industry-leading 95%+ data accuracy across all metrics</li>
                      <li>•	Real-time updates on peer governance changes</li>
                      <li>•	Comprehensive trend analysis in minutes</li>
                      <li>•	Custom benchmarking for any governance practice</li>

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
          <p>Transform your corporate governance research with precise
            board intelligence and oversight practices delivered instantly
          </p>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h5 className="text-xl font-bold text-blue-600 mb-2">Request a Demo</h5>
              <p className="mb-6">Schedule a demo to see how our Al-powered research<br />solutions can help you.</p>
              <a
                href="https://companyiq.mylogiq.com/"
                target="_blank"
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