export default function DataQualitySection() {  
  return (
    
    <section className="data-quality; pl-[70px]">
        
      <h2 className="text-3xl font-bold font-sans-display text-slate-600 mb-2">Human-Verified Excellence</h2>
      <div className=" pl-[70px]">
      <p>The difference between AI-scraped data and institutional-grade intelligence</p>
      
      <div className="comparison">
        <div className="our-approach">
          <h3 className="font-bold font-sans-display text-slate-600">Our Approach</h3>
          <ul className=" pl-[20px]">
            <li>✓ Proprietary structuring algorithms</li>
            <li>✓ Human QA validation on every data point</li>
            <li>✓ 95-98% guaranteed accuracy</li>
            <li>✓ 10-15 years of historical depth</li>
            <li>✓ Single source across all governance domains</li>
          </ul>
        </div>
        
        <div className="alternatives">
          <h3 className="font-bold font-sans-display text-slate-600">AI-Only Alternatives</h3>
          <ul className=" pl-[20px]">
            <li>❌ 70-80% accuracy with data gaps</li>
            <li>❌ Multiple fragmented vendors required</li>
            <li>❌ Inconsistent data quality</li>
            <li>❌ Limited historical coverage</li>
            <li>❌ No accuracy guarantees</li>
          </ul>
        </div>
      </div>
      </div>
    </section>
  );
};
