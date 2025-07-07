import Link from 'next/link'
import Logo from './logo'
import Dropdown from '@/components/utils/dropdown'
import MobileMenu from './mobile-menu'
import { FaPhoneAlt } from "react-icons/fa";

export default function Header({ mode = 'dark' }: {
  mode?: string
}) {
  return (
    <header className={`absolute w-full z-30 ${mode !== 'light' && 'dark'}`}>
      <div className="mx-auto">
        <div className="flex items-center justify-between h-16 md:h-20 bg-brand-dark text-brand-ivory p-4">

          {/* Site branding */}
          <div className="shrink-0 mr-4">
            <Logo />
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow bg-brand-dark text-brand-ivory p-4">

            {/* Desktop menu links */}
            <ul className="flex grow justify-start flex-wrap items-center">
              <li>
                <Link href="/" className="font-bold text-[#17bdc2] hover:text-[#81cd47] dark:text-[#17bdc2] dark:hover:text-[#81cd47] px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out">Home</Link>
              </li>
              
              {/* 1st level: hover */}
              <Dropdown title="Solutions" prnt_link='/products' >
                {/* 2nd level: hover */}
                <li>
                  <Link href="/products/disclosure-compliance" className="font-medium text-sm text-gray-600 hover:text-blue-600 flex py-2 px-5 leading-tight">Disclosure & Compliance</Link>
                </li>
                <li>
                  <Link href="/products/governance" className="font-medium text-sm text-gray-600 hover:text-blue-600 flex py-2 px-5 leading-tight">Governance</Link>
                </li>
                <li>
                  <Link href="/products/proposals" className="font-medium text-sm text-gray-600 hover:text-blue-600 flex py-2 px-5 leading-tight">Proxy Proposals</Link>
                </li>
                <li>
                  <Link href="/products/pay" className="font-medium text-sm text-gray-600 hover:text-blue-600 flex py-2 px-5 leading-tight">Compensation</Link>
                </li>
                <li>
                  <Link href="/products/auditfees" className="font-medium text-sm text-gray-600 hover:text-blue-600 flex py-2 px-5 leading-tight">Audit Fees</Link>
                </li>                

                <li>
                  <Link href="/products/corp-document-policies" className="font-medium text-sm text-gray-600 hover:text-blue-600 flex py-2 px-5 leading-tight">Corporate Document & Policies</Link>
                </li>
                <li>
                  <Link href="/products/custom-research" className="font-medium text-sm text-gray-600 hover:text-blue-600 flex py-2 px-5 leading-tight">Custom Research Services</Link>
                </li>
                <li>
                  <Link href="https://api.mylogiq.com" target="_blank" className="font-medium text-sm text-gray-600 hover:text-blue-600 flex py-2 px-5 leading-tight">API</Link>
                </li>
                <li>
                  <Link href="/products/portfolio" className="font-medium text-sm text-gray-600 hover:text-blue-600 flex py-2 px-5 leading-tight">Portfolio Due Diligence </Link>
                </li>
                
              </Dropdown>
              <li>
                <Link href="/insights" className="font-medium text-slate-800 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-600 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out">Insights</Link>
              </li>
              <Dropdown title="About" prnt_link='/about' >
              <li>
                <Link href="/about" className="font-medium text-slate-800 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-600 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out">About</Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="font-medium text-slate-800 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-600 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out">Privacy Policy</Link>
              </li>
              </Dropdown>
              <li>
                <Link href="/contact-us" className="font-medium text-slate-800 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-600 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out">Contact Us</Link>
              </li>
              
              
              
              <li>
                <Link href="/request-demo" 
                className="font-medium text-slate-800 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-600 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out group">
                  Request Demo 
                  {/* <span className="tracking-normal text-slate-800 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span> */
}

                </Link>
              </li>
              
            </ul>

            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              
              <li>
                 <div className="flex px-0.5"> <div className="phone px-0.5"> 
                  <FaPhoneAlt className="mt-2" /></div> <div className="font-medium text-slate-800 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-600 px-1 py-2 flex items-center transition duration-150 ease-in-out group">888-564-4910 </div> </div>
              </li>
              <li>
                <Link href="https://companyiq.mylogiq.com" target="_blank" className=" ml-1 rounded-lg text-white bg-blue-500 font-medium hover:text-white dark:text-slate-200 dark:hover:text-white lg:px-1 py-2 flex items-center transition duration-150 ease-in-out">Account Login</Link>
              </li>
            </ul>

          </nav>

          <MobileMenu />

        </div>
      </div>
    </header>
  )
}
