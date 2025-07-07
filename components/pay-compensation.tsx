export default function compensation() {
  return (

    <div className="Compensation-page font-roboto">
      {/* SEC Disclosures Section */}
      <section className="sec-disclosures-section py-16">
        <div className="container mx-auto px-10">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <div className="sec-disclosures-left">
                <h2 className="text-3xl font-bold font-roboto text-slate-600 mb-2">Executive & Director Compensation</h2>
                <h6 className="text-lg font-bold mb-4">
                  Comprehensive Data, Instant Access</h6>
                <p className="text-lg mb-6">
                  CompanyIQ® AI offers a complete pay database for U.S. public companies—
                  executives and directors—all accessible via intuitive search.
                </p>
                <p className="font-bold">What You Get:</p>

                <ul className="list-disc pl-6 mb-4">
                  <li><b>Executive Pay:</b> Full compensation details for 51,000+ executives across
                    7,000+ companies, including base salary, bonuses, equity, perks, and
                    severance—all the way back to 1994.</li>
                  <li><b>Director Pay:</b> Compensation data for 100,000+ current and former board
                    members, covering retainers, meeting fees, committee fees, equity grants,
                    and trends over time.</li>
                  <li><b>Regulatory Intelligence:</b> Structured disclosures on CEO pay ratios, median
                    employee pay, claw back policies, severance terms, change-in-control
                    provisions, and full proxy statements.</li>
                </ul>
                <a href="https://api.mylogiq.com/executive-compensation" target="_blank" className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors">
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
                src="https://www.mylogiq.com/wp-content/uploads/2021/10/Executive-Director-Compensation-Image.jpg.webp"
                alt="Proxy"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="our-feature-analysis-section px-10 py-16 bg-gray-50">
        <h3 className="text-2xl font-bold text-center font-roboto text-slate-600 mb-6">
          Complete Compensation Coverage</h3>
        <div className="container bg-white p-6 rounded-lg shadow-md relative">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="py-2">
              <p className="text-xl font-bold">Total Executive Pay Universe</p>
              <ul className="list-disc pl-6 ">
                <li>Complete compensation profiles for every executive at all 7,000+ U.S.
                  public companies</li>
                <li>Every compensation element captured: base salary, bonuses, equity,
                  perks, severance</li>
                <li>Complete historical coverage from 2010 forward—see the full
                  compensation story</li>
              </ul>
            </div>
            <div className="py-2">
              <p className="text-xl font-bold">Total Director Pay Universe</p>
              <ul className="list-disc pl-6 ">
                <li>Complete director pay data for every current and former board
                  member at 7,000+ U.S. public companies</li>
                <li>Every fee structure documented: retainers, meeting fees,
                  committee fees, equity grants</li>
                <li>Track an individual’s full compensation history including contracts
                  and equity transactions</li>
              </ul>
            </div>

          </div>
        </div>

      </section>

      {/* Feature Analysis Section */}
      <section className="our-feature-analysis-section py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h4 className="text-2xl font-bold text-center font-roboto text-slate-600  mb-12">
            Effortless Access to Everything
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              number="1"
              title="Simple Search, Complete Results "
              description="Type in any executive name, company, or compensation topic—instantly access all related data"
            />
            <FeatureCard
              number="2"
              title="One-Click Granular Analysis "
              description="Immediately view complete pay package disaggregation with full granularity"
            />
            <FeatureCard
              number="3"
              title="Instant Reports "
              description="Generate comprehensive reports covering all relevant data points with a single click"
            />
            <FeatureCard
              number="4"
              title="Easy Navigation Across All Data "
              description="Seamlessly browse between executives, companies, time periods, and compensation elements—everything connected and accessible."
            />
            <FeatureCard
              number="5"
              title="Simple Filters, Complete Control "
              description="Apply intuitive filters to access exactly what you need from the CompanyIQ® database—no technical expertise required"
            />
            <FeatureCard
              number="6"
              title="Equity, Cash, Metrics, Perks"
              description="Benchmark equity compensation plans, incentive pay metrics, compensation actually paid, pay ratios, options, travel/security perks, and stock ownership rules"
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
              title="Easy Custom Access"
              description={
                <>
                  <div className="py-2">
                    <p className="text-xl font-bold">
                      Complete Executive Profiles:</p>
                    <ul className="list-disc pl-6 ">
                      <li>Full career compensation history across all companies</li>
                      <li>Complete equity holdings and transaction history</li>
                      <li>Entire peer comparison context instantly available</li>
                    </ul>
                  </div>
                  <div className="py-2">
                    <p className="text-xl font-bold">
                      Comprehensive Company Analysis:</p>
                    <ul className="list-disc pl-6 ">
                      <li>All named executive officers' complete compensation</li>
                      <li>packages in one view</li>
                      <li>Complete board compensation practices and policies</li>
                      <li>All peer benchmarking data easily accessible</li>
                    </ul>
                  </div>

                </>
              }
            />
            <SearchableFeature_mod
              icon=""
              title="Complete Value, Easy Implementation"
              description={
                <>

                  <div className="py-2">
                    <p className="text-xl font-bold">Industry-Leading Accuracy</p>
                    <ul className="list-disc pl-6 ">
                      <li>Access to 100% of public company compensation data</li>
                      <li>Complete historical perspective on all pay trends</li>
                      <li>95%+ accuracy</li>
                      <li>Simple onboarding with complete training and support</li>
                    </ul>
                  </div>
                  <div className="py-2">
                    <p className="text-xl font-bold">Easy Export Options:</p>
                    <ul className="list-disc pl-6 ">
                      <li>Complete data export in Excel</li>
                      <li>All source data linked and included with every export</li>
                      <li>Easy-to-customize peer benchmarking templates</li>
                      <li>Complete executive summaries generated automatically</li>
                    </ul>
                  </div>

                </>
              }
            />


          </div>
        </div>
        <p className="italic text-center mt-8">Source your compensation data from the WSJ’s<br></br>
trusted partner for CEO pay coverage since 2016 </p>

      </section>

      <section className="largest-searchable-section py-10 text-center">
        <div>
          <p>Get complete compensation intelligence with effortless access. </p>
          <p> Everything you need, exactly when you need it, all in one comprehensive, easy-to-use platform.</p>
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