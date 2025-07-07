import Accordion from '@/components/utils/accordion'

export default function Faq() {
    return (
        <section className="bg-slate-50 font-roboto ">

            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="py-12 md:py-20 border-t border-slate-50">

                    {/* Section header */}
                    <div className="max-w-3xl mx-auto font-roboto text-center pb-12 md:pb-20">
                        <h2 className="text-4xl font-bold mb-5 text-slate-700">CompanyIQ® AnswerDesk</h2>
                        <h2 className="text-5xl font-bold   text-[#15BCC2]">Frequently Asked Questions</h2>
                    </div>

                    {/* Faqs */}
                    <div className='sec_disc'>
                        <p>SEC Disclosures</p>

                        <ul className="max-w-3xl mx-auto divide-y divide-slate-200">
                            <Accordion title="How do you search SEC EDGAR filings and disclosures?">
                                <p>SEC Filings are easily searchable through our SEC Disclosures Module. Within this module, you can search for specific concepts using Boolean Operators in your keyword search.</p>
                                <p>You can target:</p>
                                <ul className="list-disc ml-6 space-y-1">
                                    <li>350+ Form Types</li>
                                    <li>Specific Itemizations</li>
                                    <li>Financial Footnotes</li>
                                    <li>Exhibits</li>
                                    <li>Contracts by Clauses.</li>
                                </ul>
                                <p>Use our advanced filters to identify companies by:</p>
                                <ul className="list-disc ml-6 space-y-1">
                                    <li>Peers</li>
                                    <li>Index</li>
                                    <li>Sector</li>
                                    <li>Financial Metric</li>
                                    <li>Location.</li>
                                </ul>
                                <p>Once you have your search results, you can save, export, set alerts, and apply advanced analytics filters.</p>
                            </Accordion>

                            <Accordion title="Can you create company peer lists?">
                                <p>Yes. Peer lists are easily created within our CompanyIQ<sup>®</sup> AnswerDesk Modules. Begin by turning on Smart Search (above the Company Search Box). Then type in a company name to pull up the Quick Peers feature. This will show you which companies are listed as peers by your target company in their proxy. You will also find tabs here with peers of peers, companies in similar sectors, and companies which share directors with your target company.</p>
                            </Accordion>

                            <Accordion title="Besides 10-K, 10-Q, 8-K, what other SEC forms are included in your SEC filings database?">
                                <p>Our TIME™ Text Information Mining Engine extracts and collates language and intelligence from all publicly available forms filed with the SEC (350+ form filings). You can also search for Earnings Releases, and we have a research module dedicated to public company Charters and Polices.</p>
                            </Accordion>

                            <Accordion title="Does your SEC EDGAR database include proxy statements?">
                                <p>Proxy statements are available for searching within our SEC Disclosures Module. Simply type "DEF" in the Form Type search box to identify proxy statements.</p>
                            </Accordion>

                            <Accordion title="What are the sources for your database?">
                                <p>CompanyIQ<sup>®</sup> sources intelligence from publicly available documents. These are primarily obtained from the SEC EDGAR database along with public company websites.</p>
                            </Accordion>

                            <Accordion title="Do you have data on S&P500 companies?">
                                <p>We have data available for all US public companies and some foreign filers. You can search for S&P 500 companies specifically by selecting that option below the Company Search box in the SEC Disclosures and Comment Letters Modules. Our additional modules also allow you to compare and benchmark intelligence from multiple indices, sectors, and custom peer lists.</p>
                            </Accordion>

                            <Accordion title="How many years of EDGAR data is in your database?">
                                <p>CompanyIQ<sup>®</sup> keeps a mirror repository of the SEC EDGAR database, beginning with HTML filings as of 2001.</p>
                            </Accordion>

                            <Accordion title="Can I search within SEC filings for specific items, exhibits, or financial footnotes?">
                                <p>Yes. You can use our advanced filter options to limit your keyword search to specific items, exhibits, financial footnotes, and contracts. You can also limit your keywords more specifically to an exhibit title or agreement header. In addition, you can apply your keywords in relation to dollar amounts, numbers, percentages, and tables. Turning on "Smart Search" will allow you to target specific items or footnotes from the basic search screen "Form Type" field.</p>
                            </Accordion>
                            <span className="block border-t border-gray-200" aria-hidden="true"></span>
                        </ul >
                    </div>

                    <div className="">
                        <h1 className="text-3xl font-bold mb-8 text-gray-900">SEC Comment Letters</h1>


                        <ul className="max-w-3xl mx-auto divide-y divide-slate-200">
                            <Accordion title="How do you search SEC Comment Letters?">
                                <p>Our SEC Comment Letters module lets you search for keywords and concepts in SEC Comment Letters, in company responses and pushbacks, or by topic. Search results will always show the linked SEC Comment Letter and company response side by side. You can also follow all rounds for a specific comment letter as well as identify cases of pushback where there are multiple rounds prior to the comment close.</p>
                            </Accordion>

                            <Accordion title="How do you search for SEC guidance?">
                                <p>From the basic search screen, click on the Advanced Tab. Then select the Literature filter. Here you will find filters for Accounting Standards Codifications, Updates, and Regulations.</p>
                            </Accordion>

                            <Accordion title="Are SEC Comment Letters the same as EDGAR UPLOAD documents?">
                                <p>Yes, SEC Comment Letters are the correspondence from the SEC to a company. Companies are given ten days to respond to SEC compliance comments.</p>
                            </Accordion>

                            <Accordion title="Are SEC Comment Letters the same as EDGAR CORRESP documents?">
                                <p>No, the EDGAR CORRESP is where a company responds to the SEC's comments.</p>
                            </Accordion>

                            <Accordion title="What is unique about your SEC Comment Letters database?">
                                <p>Our SEC Comment Letters database threads multiple rounds of comments and responses together to identify pushbacks by companies and comments by SEC examiners and the SEC Corp Fin Office.</p>
                            </Accordion>

                            <Accordion title="What type of keyword searches and filters can you conduct in your SEC comment letters database?">
                                <p>The Advanced Filters for our SEC Comment Letters module include:</p>
                                <ul className="list-disc ml-6 space-y-1">
                                    <li>Company Filters</li>
                                    <li>Form Filters</li>
                                    <li>Literature</li>
                                    <li>Pushback</li>
                                </ul>
                                <p>In each case, you can couple these filters with specific keywords and Boolean Operators.</p>
                            </Accordion>

                            <Accordion title="What type of SEC Boolean searches can be done?">
                                <p>The Boolean Operators that you can use are: quotation marks, parentheses, AND, OR. You can also apply your keywords specifically to tables, or to quantified text (in relation to dollar amounts, numbers, and percentages). Keyword searches are automatically stemmed, so there is no need to use "*" to find variations. Also, Proximity Operators are not required as our AI engine automatically searches for keywords in context, delivering that context as a preview paragraph in your search results.</p>
                            </Accordion>

                            <Accordion title="Can I search within SEC Comment Letters for specific items, exhibits, or financial footnotes?">
                                <p>Yes. You can use our advanced filter options to limit your keyword search to specific items, exhibits, financial footnotes, and contracts. You can also limit your keywords more specifically to an exhibit title or agreement header. In addition, you can apply your keywords in relation to dollar amounts, numbers, percentages, and tables. Turning on "Smart Search" will allow you to target specific items or footnotes from the basic search screen "Form Type" field.</p>
                            </Accordion>
                        </ul>

                    </div>

                    <div className="max-w-4xl mx-auto p-6 bg-gray-50 min-h-screen">
      <div className="mb-8">
        <h5 className="text-2xl font-bold text-gray-900 mb-4">Executive & Director Compensation</h5>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          
          <Accordion title="Do you have data on CEO pay ratios?">
            <p>For your selection of companies, indices, or sectors, we provide CEO to Median Employee Pay Ratios, as well as the Consistently Applied Compensation Measure (CACM). Additionally, we provide Methodology Disclosures, as well as Supplemental Disclosures.</p>
          </Accordion>

          <Accordion title="What data do you have on executive perks?">
            <p>We have information from NEOs' compensation. It usually includes transportation, executive aircraft perks, security, club memberships, etc.</p>
          </Accordion>

          <Accordion title="How do we establish peer groups?">
            <p>Peer groups are easily created within our CompanyIQ<sup>®</sup> AnswerDesk Modules. Begin by turning on Smart Search (above the Company Search Box). Then type in a company name to pull up the Quick Peers feature. This will show you which companies are listed as peers by your target company in their proxy. You will also find tabs here with peers of peers, companies in similar sectors, and companies which share directors with your target company.</p>
          </Accordion>

          <Accordion title="What components of board chairman pay do you provide?">
            <p>Our database contains information on:</p>
            <ul className="list-disc ml-6 space-y-1">
              <li>Meeting Fees</li>
              <li>Annual Retainer Fees in Cash and Equity</li>
              <li>Appreciation Awards</li>
              <li>Full Value Awards for Annualized Equity Grants.</li>
            </ul>
          </Accordion>

          <Accordion title="Which elements of c-suite compensation does your database include?">
            <p>Our Executive Compensation module includes:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Cash Compensation Current Year and 3-Year Average:
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>Cash Compensation</li>
                  <li>Reported Salary</li>
                  <li>Target Bonus and Percentage</li>
                  <li>Target Total Cash Compensation</li>
                </ul>
              </li>
              <li>Equity Compensation Current Year and 3-Year Average:
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>Time Vested Stock</li>
                  <li>Performance Vested Awards</li>
                  <li>Stock Options</li>
                  <li>Total LTI</li>
                  <li>LTI Multiple</li>
                </ul>
              </li>
            </ul>
          </Accordion>

          <Accordion title="What items does you Pay Elements Report cover?">
            <ul className="list-disc ml-6 space-y-1">
              <li>Salary, Bonus</li>
              <li>Stock Awards</li>
              <li>Stock Options</li>
              <li>LTI</li>
              <li>STI</li>
              <li>Non-Equity Incentive Compensation</li>
              <li>Change in Pension Value</li>
              <li>All other Compensation (including Grants of Plan Based Awards Table)</li>
              <li>Total Compensation.</li>
            </ul>
          </Accordion>

          <Accordion title="Do you include data on CFO compensation?">
            <p>Yes. See c-suite compensation above for further detail on execucomp.</p>
          </Accordion>

          <Accordion title="What datasets do you have on CEO incentive plans and stock awards?">
            <p>Provided in our Pay Elements Report: Salary, Bonus, Stock Awards, Stock Options, LTI (Long-Term Incentive), STI (Short-Term Incentive), Non-Equity Incentive Compensation, Change in Pension Value, all other Compensation (including Grants of Plan Based Awards Table), and Total Compensation.</p>
          </Accordion>

          <Accordion title="How do I identify median employee salary?">
            <p>Within the Executive & Director Compensation Module, select the report titled "Pay Ratio: CEO to Median Employee Pay Ratios"</p>
          </Accordion>

        </div>
      </div>
    </div>

    <div className="max-w-4xl mx-auto p-6 bg-gray-50 min-h-screen">
      <div className="mb-8">
        <h5 className="text-2xl font-bold text-gray-900 mb-4">Corporate Governance</h5>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          
          <Accordion title="What type of board diversity statistics do you offer?">
            <p>Within the Corporate Governance Module, there are several reports that offer statistics and benchmarking for board diversity:</p>
            <ul className="list-disc ml-6 space-y-1">
              <li>Governance Practices Set 2: Datapoint for 1/3 female representation on board of directors.</li>
              <li>Independent, Chair, Lead Director has datapoints for: Female Non-Executive Chair, Female Lead Director</li>
              <li>Board Composition: Percentage of Female Board Members, Female Non-Independent Directors, Female Independent Directors</li>
              <li>Additional reports are available on diversity of tenure, age, and skillset.</li>
            </ul>
          </Accordion>

          <Accordion title="What kind of datasets do you have on board diversity?">
            <p>Within the Corporate Governance Module, there are several reports that offer statistics and benchmarking for board diversity:</p>
            <ul className="list-disc ml-6 space-y-1">
              <li>Governance Practices Set 2: Datapoint for 1/3 female representation on board of directors.</li>
              <li>Independent, Chair, Lead Director has datapoints for: Female Non-Executive Chair, Female Lead Director</li>
              <li>Board Composition: Percentage of Female Board Members, Female Non-Independent Directors, Female Independent Directors</li>
            </ul>
            <p>Additional reports are available on diversity of tenure, age, and skillset.</p>
          </Accordion>

          <Accordion title="What level of detail do you have on say on pay proxy votes?">
            <p>Statistics on the following votes: For, Against, Abstain, For Shares, Against Shares, Abstain Shares, Non-Vote Shares.</p>
            <p>Our say on pay proxy vote reports include: failed SOP packages and votes for proposals receiving less than 70% support.</p>
          </Accordion>

          <Accordion title="What is the scope of corporate governance data that you have?">
            <p>Our Corporate Governance modules contains hundreds of datapoints on topics such as:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-1 mt-3">
              <ul className="list-disc ml-6 space-y-1 text-sm">
                <li>Board Attendance</li>
                <li>Board Composition</li>
                <li>Board Diversity</li>
                <li>Board Meeting Details</li>
                <li>Board Tenure</li>
                <li>Board Skill Set</li>
                <li>Classified Board</li>
                <li>CEO and Director Removal</li>
                <li>CEO and Director Changes in Last 12 Months</li>
                <li>CEO Incentive Pay Clawback</li>
                <li>CEO Succession Plan</li>
                <li>Cybersecurity Oversight</li>
                <li>Director Age</li>
                <li>Director Age Limits</li>
              </ul>
              <ul className="list-disc ml-6 space-y-1 text-sm">
                <li>Director Performance Review</li>
                <li>Double Trigger</li>
                <li>Executive CEO</li>
                <li>Independent Chair</li>
                <li>Independent Director</li>
                <li>Lead Director</li>
                <li>Non-Executive CEO</li>
                <li>Overboarding</li>
                <li>Pledging/Hedging Stocks</li>
                <li>Poison Pill / Shareholder Rights Plan</li>
                <li>Special Meetings</li>
                <li>Supermajority Voting</li>
                <li>Telephonic Meetings</li>
                <li>Written Consent</li>
              </ul>
            </div>
          </Accordion>

        </div>
      </div>
    </div>

    <div className="max-w-4xl mx-auto p-6 bg-gray-50 min-h-screen">
      <div className="mb-8">
        <h5 className="text-2xl font-bold text-gray-900 mb-4">Proxy Proposals & Shareholder Engagement</h5>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          
          <Accordion title="What details does your SEC database have on proxy proposals that appear in proxy statements?">
            <p>Our Proxy Proposals & Shareholder Engagement module contains data on shareholder proposal sponsors, vote outcomes, and topics.</p>
          </Accordion>

          <Accordion title="Do you have data on Rule 14a-8 decisions?">
            <p>SEC action on Rule 14a-8 no-action requests to omit shareholder proposals from annual proxies for vote at AGMs is included in our Proxy Proposals & Shareholder Engagement module.</p>
          </Accordion>

          <Accordion title="How quickly do you have filings from the current proxy season?">
            <p>Data from proxy season filings is available in real-time, within minutes of disclosure to the SEC EDGAR database.</p>
          </Accordion>

          <Accordion title="How do you organize proxy proposals in your database?">
            <p>They are organized by year, sponsor, vote outcome, and topic in our Proxy Proposals & Shareholder Engagement module.</p>
          </Accordion>

          <Accordion title="What data points do you have on management proposals in annual proxy statements?">
            <p>The Proxy Proposals and Shareholder Engagement module has source links to the original proxy statements and vote outcomes. All data is sorted by index: Dow 30, S&P 100, S&P 400, S&P 500, S&P 600, Russell 1000, Russell 2000, and Russell 3000.</p>
          </Accordion>

          <Accordion title="How quickly does your database update during proxy season and shareholder proposal season?">
            <p>The database updates in real-time, within minutes of SEC EDGAR filings being completed.</p>
          </Accordion>

          <Accordion title="What types of datasets do you have on shareholder engagement?">
            <p>The Proxy Proposal and Shareholder Engagement module contains datasets on:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-1 mt-3">
              <ul className="list-disc ml-6 space-y-1 text-sm">
                <li>Sponsors</li>
                <li>Vote Results</li>
                <li>SEC Rule 14a-8 no-action decisions</li>
                <li>Animal Rights</li>
                <li>Board Declassification</li>
                <li>Board Diversity</li>
                <li>Board Size</li>
                <li>Bylaws Repeal</li>
                <li>Charitable Contributions</li>
                <li>Cumulative Voting</li>
                <li>Director Nominations</li>
                <li>Drug Pricing</li>
                <li>ESG</li>
              </ul>
              <ul className="list-disc ml-6 space-y-1 text-sm">
                <li>Equal Vote per Share</li>
                <li>Executive Compensation</li>
                <li>Human Rights</li>
                <li>Independent Board Chair</li>
                <li>Lobbying</li>
                <li>Majority Voting Rights</li>
                <li>Political Activity</li>
                <li>Proxy Access</li>
                <li>Say on Pay</li>
                <li>Special Meeting Rights</li>
                <li>Supermajority Vote Removal</li>
                <li>Vesting Due to Government Service</li>
                <li>Written Consent</li>
              </ul>
            </div>
          </Accordion>

        </div>
      </div>
    </div>



                </div>
            </div>
        </section>
    )
}