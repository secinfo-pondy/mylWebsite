export const metadata = {
  title: 'MyLogIQ',
  description: 'Page description',
}

import Hero from '@/components/hero-home'
import FeaturesBlocks from '@/components/products'
import Footer from '@/components/ui/footer'

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturesBlocks />
      {/*<Features />*/}
       {/* Bottom section with inverse shape */}
      {/* <section className="relative h-100 md:h-52">
        Dark background for bottom 
        <div className="absolute inset-0 bg-[#404559] pointer-events-none -z-10 [clip-path:polygon(0_60%,_100%_10%,_100%_100%,_0_100%)]" aria-hidden="true"></div>
      <div className="pt-32 md:pt-20">
          <Footer />
        </div>
        

      </section>*/}
      {/*<Features02 />
      <Features03 /> 
      <Target />
      <PricingSection />
      <Cta /> */}
    </>
  )
}
