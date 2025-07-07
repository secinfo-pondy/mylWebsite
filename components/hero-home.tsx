import Link from 'next/link'
import VideoThumb from '@/public/images/hero-image-01.jpg'
import ModalVideo01 from '@/components/modal-video-01'

export default function HeroHome() {
  return (
    <section className="relative font-roboto">

      {/* Dark background   bg-slate-900 */}
      <div className="absolute inset-0 bg-[#404559] pointer-events-none -z-10 [clip-path:polygon(0_0,_100%_0,_100%_65%,_0_80%)]" aria-hidden="true"></div>
{/*(0_0,_5760px_0,_5760px_calc(100%_-_352px),_0_100%)  bg-[#f4f3df]   bg-[#404559]*/}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-20 md:pt-40 md:pb-44">

          {/* Hero content */}
          <div className="">

            {/* Content */}
            <div className="text-center md:text-left md:min-w-[30rem]" data-aos="fade-right">
              {/*text-slate-600 */}
              <h1 className="h1 text-center text-white  mb-4">360° Public<br></br> Company Intelligence</h1>
              <p className="text-center text-xl text-white mb-8">Structured insights. Instant access. Trusted by leaders.</p>

              <div className="flex items-center justify-center gap-3 mb-8">
                <div><Link className=" btn text-white bg-[#81cd47] hover:bg-[#17bdc2]" href="/products">
                    Explore the Platform                    
                  </Link></div>   {/*bg-blue-600 hover:bg-slate-700 */}
                  <div><Link className="btn text-white bg-[#81cd47] hover:bg-[#17bdc2] "
                   href="/">View Insights</Link></div>
                  <div><Link className="btn text-white bg-[#81cd47] hover:bg-[#17bdc2]" 
                  href="/products/adds" >Explore LLM-RAG</Link></div>
                </div>
              
            </div>

                       

          </div>

        </div>
      </div>
    </section>
  )
}