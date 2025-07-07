export default function HeroSection() {  
  return (
    <section className="hero; pl-[70px] pt-[70px]">

      <h1 className="text-3xl font-bold font-sans-display text-slate-600 mb-2">360° Public Company Intelligence</h1>
      <p className="pl-[70px]">Structured insights. Instant access. Trusted by leaders.</p>
      
      <div className="key-differentiators; pl-[70px]">
        <span className="badge">🤖 AI & RAG Ready</span><br></br>
        <span className="badge">📈 95-98% Accuracy</span><br></br>
        <span className="badge">📰 Powers WSJ Analysis</span><br></br>
        <span className="badge">🏢 Big 4 Trusted</span>
      </div>

      <div className="hero-content">
        <h2 className="text-2xl font-bold font-sans-display text-slate-600 mb-2">Structured Intelligence for Every Stakeholder</h2>
        <p className="pl-[70px]">Explore 360 insights on public companies across governance, compensation, compliance, and filings - all available via API, platform dashboards, or company tear sheets.</p>
      </div>

      <div className="hero-actions">
        <button className="cta-primary; font-bold">Get Started</button>
        <a href="https://api.mylogiq.com" 
           className="cta-secondary" 
           target="_blank" 
           rel="noopener noreferrer">
           📋 API Documentation
        </a>
      </div>

      <div className="press-citations">
        <div className="citation-group">
          <h3 className="text-3xl font-bold font-sans-display text-slate-600 mb-2">As Cited in the press</h3>
          <ul className="pl-[70px]">
            <li>✓ WSJ - "CFO Tenure in R3000"</li>
            <li>✓ FT - "Board Trends"</li>
          </ul>
          <a href="#media">Explore Media →</a>
        </div>

        <div className="citation-group">
          <h3 className="text-3xl font-bold font-sans-display text-slate-600 mb-2">Reports & Studies</h3>
          <ul className="pl-[70px]">
            <li>✓ CEO Pay Report 2025 (PDF)</li>
            <li>✓ Board Tenure Study 2024 (PDF)</li>
          </ul>
          <a href="#reports">View Report →</a>
        </div>
      </div>
    </section>
  );
};
