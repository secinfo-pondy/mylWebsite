export default function charter_policies() {
  return (

    <div className="charterpolicies-page">
      {/* SEC Disclosures Section */}
      <section className="sec-disclosures-section py-16">
        <div className="container mx-auto px-10">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2  mt-4  md:mb-0">
              <div className="sec-disclosures-left">
                <h2 className="text-3xl font-bold font-roboto text-slate-600 pt-5 mt-4  mb-2">Corporate Documents & Policies</h2>
                <p className="text-lg mb-6">
                  Navigate governing documents, sustainability reports, AI/cybersecurity governance,
                  conduct guidelines, and supply chain sourcing with our CompanyIQ® AI engine.
                </p>
                <a href="./corp-document-policies/datapoint" className="inline-flex items-center  text-white px-6 py-3 rounded-md hover:bg-[#81cd47] bg-[#17bdc2] transition-colors">
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
                src="/images/site/Charters-Policies.jpg.webp"
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
            Strategic Intelligence Capabilities
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard_mod
              number="1"
              title="Comprehensive Document Universe"
              description={
                <>
                  <div className="py-2">
                    <p className="text-xl font-bold">Unprecedented Corporate Archive</p>
                    <ul>
                      <li>•	Thousands of corporate documents</li>
                      <li>•	7,000+ websites surveyed</li>
                      <li>•	Universal coverage of active public companies</li>
                    </ul>
                  </div>



                </>
              }
            />
            <FeatureCard
              number="2"
              title="Unified Intelligence Platform"
              description="Our AI guides data extraction and synthesis across multiple company websites, enabling cross-enterprise analysis from a centralized platform."
            />
            <FeatureCard_mod
              number="3"
              title="Advanced Semantic Search"
              description={
                <>
                  Deploy sophisticated keyword intelligence across industry sectors within:
                  <ul>
                    <li>•	ESG policy frameworks</li>
                    <li>•	Committee governance structures</li>
                    <li>•	Corporate founding documents</li>
                    <li>•	Sustainability reporting architectures</li>
                  </ul>

                </>
              }
            />
            <FeatureCard
              number="4"
              title="AI-Guided Text Benchmarking"
              description="Understand how your peers are structuring their governing documents, board and committee responsibilities, ethical business policies, and ESG reporting."
            />
            <FeatureCard_mod
              number="5"
              title="Analyze Complete Corporate Governance Systems "
              description={
                <>
                  <div>

                    <ul className="list-disc pl-6 ">
                      <li>ESG and sustainability reports</li>
                      <li>Board and committee charters</li>
                      <li>Articles of incorporation and bylaws</li>
                      <li>AI oversight and governance policies</li>
                      <li>Corporate governance guidelines</li>
                      <li>Conduct and ethics frameworks</li>
                    </ul>
                  </div>

                </>
              }
            />
            <FeatureCard
              number="6"
              title="Source Authentication"
              description="Direct access to authoritative corporate documentation for verification."
            />
          </div>
        </div>
      </section>

      <section className="largest-searchable-section text-center">
        <div>
          <p className="italic text-center">On-Demand Benchmarking of Governance Documents &
            Corporate Reports</p>
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
  }

const FeatureCard_mod: React.FC<{ number: string; title: string; description: React.ReactNode }> = ({
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
