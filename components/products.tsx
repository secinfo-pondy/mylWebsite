import Link from 'next/link'

export default function Products() {
  return (
    <section>
      <div className="text-center max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Content */}
          <div className="text-center md:text-left md:min-w-[30rem]" data-aos="fade-right">
            <h1 className="h1 text-center font-roboto text-slate-600 mb-4">Structured <br></br>Intelligence for<br></br> Every Stakeholder</h1>
            <p className="text-center text-xl text-slate-400 mb-8">Unlock 360° insights on public companies across SEC compliance,<br></br>
corporate governance, compensation, proxy proposals, and more
            </p>

            <p className="text-center text-xl text-slate-400 mb-8">Available via API, platform dashboards, or company tear sheets.</p>
            
          </div>

          {/* Items */}
          <div className="relative max-w-sm mx-auto grid gap-16 md:grid-cols-2 lg:grid-cols-3 
          lg:gap-y-20 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>


            {/* 1st item */}
            <div className="relative" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <Link href="/products/disclosure-compliance">
                <img src="/images/site/SEC Disclosures Image.jpg" />
                <h3 className="h4 font-roboto mb-2">Disclosure & Compliance</h3>
                <p className="text-lg text-[16px] text-slate-500">10-K/Qs, DEF 14As, 8-Ks | Filing Alerts  Critical Updates</p>
                
                { /*<div className="flex items-center justify-between w-full">
                  <div className="flex items-center space-x-2">
                    <img className="w-5 h-5" alt="Dashboard" src="/images/site/checkbox-checked-svgrepo-com.svg" />
                    <span>Dashboard</span>
                  </div>
                  <div className="flex items-center space-x-2 ml-auto">
                    <img className="w-5 h-5" alt="API" src="/images/site/pdf.svg" />
                    <span className="mr-3">Brochure</span>
                  </div>
                </div>*/}
              </Link>
            </div>

            {/* 2nd item */}
            <div className="relative" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <Link href="/products/governance">
                <img src="/images/site/Corporate Governance Image.jpg" />
                <h3 className="h4 font-roboto mb-2">Governance</h3>
                <p className="text-lg text-[16px] text-slate-500">Board Composition & Skills | Accountability  AI & Cybersecurity Oversight</p>
                
              </Link>
            </div>

            {/* 3rd item */}
            <div className="relative" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <Link href="/products/proposals">
                <img src="/images/site/Proxy Proposals Image.png" />
                <h3 className="h4 font-roboto mb-2">Proxy Proposals</h3>
                <p className="text-lg text-[16px] text-slate-500">Management & Shareholder | Proposal Text  Voting Outcomes | Activist Investors</p>
                
              </Link>
            </div>

            {/* 4th item */}
            <div className="relative" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <Link href="/products/pay">
                <img className="w-85 h-50" src="/images/site/Compensation_Image.jpg" />
                <h3 className="h4 font-roboto mb-2">Compensation</h3>
                <p className="text-lg text-[16px] text-slate-500">Executive & Director | Equity Plan Design  Analytics</p>
                
              </Link>
            </div>

            {/* 5th item */}
            <div className="relative" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <Link href="/products/auditfees">
                <img className="w-85 h-50" src="/images/site/Audit Fees Image.png" />
                <h3 className="h4 font-roboto mb-2">Audit Fees</h3>
                <p className="text-lg text-[16px] text-slate-500">Audit & Tax Fees | Multi-Year Trend Analysis | SOX Compliance</p>
                
              </Link>
            </div>

            {/* 6th item */}
            <div className="relative" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <Link href="/products/corp-document-policies">
                <img className="w-85 h-50" src="/images/site/Company_Policies.png" />
                <h3 className="h4 font-roboto mb-2">Corporate Documents & Policies</h3>
                <p className="text-lg text-[16px] text-slate-500">Bylaws | Charters | AI Governance <br></br> CSR & Sustainability Reports</p>
                
              </Link>
            </div>

          </div>


        </div>
      </div>
    </section>
  )
}