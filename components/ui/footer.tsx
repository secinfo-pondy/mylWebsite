import Link from 'next/link'
import Logo from './logo'

export default function Footer() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Top area: Blocks */}
        <div className="grid sm:grid-cols-14 gap-4 py-4 md:py-4">

          {/* 1st block */}
          <div className="sm:col-span-12 lg:col-span-4 lg:max-w-xs">
            <div className="mb-2">
              {/* Logo */}
              <Link href="/" className="inline-flex text-blue-600 transition duration-150 ease-in-out" >
                 <Logo />
              </Link>
            </div>
            <div className="text-lg font-bold text-slate-800">360° Public Company Intelligence</div>
          </div>

          {/* 2nd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
          <Link href="/"><h6 className="text-sm text-slate-800 font-semibold mb-2 hover:text-blue-600 transition duration-150 ease-in-out">Home</h6></Link>
          </div>

          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
          <Link href="/products"><h6 className="text-sm text-slate-800 font-semibold mb-2 hover:text-blue-600 transition duration-150 ease-in-out">Solutions</h6></Link>
          </div>

          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
          <Link href="/insights"><h6 className="text-sm text-slate-800 font-semibold mb-2 hover:text-blue-600 transition duration-150 ease-in-out">Insights</h6></Link>
          </div>

          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
          <Link href="/about"><h6 className="text-sm text-slate-800 font-semibold mb-2 hover:text-blue-600 transition duration-150 ease-in-out">About Us</h6></Link>
          </div>

          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
          <Link href="/contact-us"><h6 className="text-sm text-slate-800 font-semibold mb-2 hover:text-blue-600 transition duration-150 ease-in-out">Contact us</h6></Link>
          </div>

          

          

        </div>

        {/* Bottom area */}
        <div className="md:flex md:items-center md:justify-between py-6 md:py-8 border-t border-slate-200">

          {/* Social links */}
          <ul className="flex space-x-6 mb-4 md:order-1 md:ml-4 md:mb-0">
            <li>
              <a className="text-blue-500 hover:text-blue-600 transition duration-150 ease-in-out" href="#0" aria-label="Twitter">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="m6.329 1 4.369 5.594L15.75 1h3.068L12.12 8.414 20 18.5h-6.172l-4.833-6.116L3.464 18.5H.395l7.169-7.928L0 1h6.329Zm-.925 1.684H3.583l11.093 14.04h1.7L5.404 2.684Z" />
                </svg>
              </a>
            </li>
            <li>
              <a className="text-blue-500 hover:text-blue-600 transition duration-150 ease-in-out" href="#0" aria-label="LinkedIn">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.5 0C1.57 0 0 .9 0 2.01v15.98C0 19.1 1.57 20 3.5 20h13c1.93 0 3.5-.9 3.5-2.01V2.01C20 .9 18.43 0 16.5 0h-13ZM6.25 17H3.75V7h2.5v10Zm-1.25-11a1.5 1.5 0 1 1 .001-3A1.5 1.5 0 0 1 5 6Zm12.25 11h-2.5v-4c0-.96-.02-2.2-1.34-2.2C13.25 11 .75 12 .75 17h2.5v-4c0-.96-.02-2.2-1.34-2.2C13 .75Z" />
                </svg>
              </a>
            </li>

            <li>
              <a href="#0"> <img src="/images/site/youtube.svg" alt="MYLOGIQ" className="w-5 h-5 fill-current" /> </a>
            </li>
            
          </ul>

          {/* Copyrights note */}
          <div className="text-sm text-slate-500 mr-4">© mlogiq.com. All rights reserved.</div>

        </div>

      </div>
    </footer>
  )
}
