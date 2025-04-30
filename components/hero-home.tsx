import Link from 'next/link'
import VideoThumb from '@/public/images/hero-image-01.jpg'
import ModalVideo01 from '@/components/modal-video-01'

export default function HeroHome() {
  return (
    <section className="relative">

      {/* Dark background */}
      <div className="absolute inset-0 bg-slate-900 pointer-events-none -z-10 [clip-path:polygon(0_0,_5760px_0,_5760px_calc(100%_-_352px),_0_100%)]" aria-hidden="true"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-20 md:pt-40 md:pb-44">

          {/* Hero content */}
          <div className="">

            {/* Content */}
            <div className="text-center md:text-left md:min-w-[30rem]" data-aos="fade-right">
              <h1 className="h1 text-center font-sans-display text-slate-600 mb-4">360° Public<br></br> Company Intelligence</h1>
              <p className="text-center text-xl text-slate-400 mb-8">Structured insights. Instant access. Trusted by leaders.</p>

              <p className="text-center text-xl text-slate-400 mb-8"><Link className=" btn text-white bg-blue-600 hover:bg-slate-700 group" href="/request-demo">
                    Explore the Platform                    
                  </Link>&nbsp;&nbsp;<Link className="btn text-white bg-slate-700 hover:bg-slate-800 " href="/">View Sample Insights</Link></p>
              
            </div>

                       

          </div>

        </div>
      </div>
    </section>
  )
}