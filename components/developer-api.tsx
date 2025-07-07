export default function DeveloperSection() {  
  return (
<section className="developer-section; pl-[70px]">
    
      <h2 className="text-3xl font-bold font-sans-display text-slate-600 mb-2">Built for Developers & Enterprise Integration</h2>
      <div className=" pl-[70px]">  
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
    </section>


    )
}