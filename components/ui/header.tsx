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
                  <Link href="/products/corp-document-policies" className="font-medium text-sm text-gray-600 hover:text-blue-600 flex py-2 px-5 leading-tight">Corporate Document</Link>
                </li>
                <li>
                  <Link href="/products/custom-research" className="font-medium text-sm text-gray-600 hover:text-blue-600 flex py-2 px-5 leading-tight">Custom Research Services</Link>
                </li>
                
                <li>
                  <Link href="/products/portfolio" className="font-medium text-sm text-gray-600 hover:text-blue-600 flex py-2 px-5 leading-tight">Portfolio Due Diligence </Link>
                </li>
                <li>
                  <Link href="/products/explore-llm" className="font-medium text-sm text-gray-600 hover:text-blue-600 flex py-2 px-5 leading-tight">API</Link>
                </li>
                
              </Dropdown>
              <li>
                <Link href="/insight" className="font-bold text-[#17bdc2] hover:text-[#81cd47] dark:text-[#17bdc2] dark:hover:text-[#81cd47] px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out">Insights</Link>
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
                <Link href="/contact-us" className="font-bold text-[#17bdc2] hover:text-[#81cd47] dark:text-[#17bdc2] dark:hover:text-[#81cd47] px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out">Contact Us</Link>
              </li>
              
              
              
              <li>
                <Link href="/request-demo" 
                className="font-bold text-[#17bdc2] hover:text-[#81cd47] dark:text-[#17bdc2] dark:hover:text-[#81cd47] px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out group">
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
                  <FaPhoneAlt className="mt-3 mr-1 text-[#17bdc2]" /></div> <div className="font-bold text-[#17bdc2] hover:text-[#81cd47] dark:text-[#17bdc2] dark:hover:text-[#81cd47]  py-2 flex items-center transition duration-150 ease-in-out group">888-564-4910 </div> </div>
              </li>
              <li>
                
                <Link href="https://companyiq.mylogiq.com" target="_blank" className=" font-medium ml-2.5 rounded-lg
                 bg-[#17bdc2]  
                dark:hover:bg-[#81cd47]
                 hover:text-[#81cd47]
                 dark:text-slate-200
                 dark:hover:text-white
                 lg:px-1 py-2 flex items-center transition duration-150 ease-in-out">
                  
                  <UserIcon2 className="w-5 h-5 mr-2 ml-2" />
                  Account Login</Link>
              </li>
            </ul>

          </nav>

          <MobileMenu />

        </div>
      </div>
    </header>
  )
}



const UserIcon = ({ className = "w-5 h-5" }) => (
  <svg 
    viewBox="0 0 32 32" 
    className={className}
    fill="currentColor" 
    stroke="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle 
      cx="16" 
      cy="16" 
      fill="none" 
      r="15" 
      stroke="currentColor" 
      strokeLinejoin="round" 
      strokeMiterlimit="10" 
      strokeWidth="2"
    />
    <path 
      d="M26,27L26,27 c0-5.523-4.477-10-10-10h0c-5.523,0-10,4.477-10,10v0" 
      fill="none" 
      stroke="currentColor" 
      strokeLinejoin="round" 
      strokeMiterlimit="10" 
      strokeWidth="2"
    />
    <circle 
      cx="16" 
      cy="11" 
      fill="none" 
      r="6" 
      stroke="currentColor" 
      strokeLinejoin="round" 
      strokeMiterlimit="10" 
      strokeWidth="2"
    />
  </svg>
);



const UserIcon2 = ({ className = "w-5 h-5" }) => (
  <svg 
    fill="currentColor" 
    viewBox="0 0 45.532 45.532" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M22.766,0.001C10.194,0.001,0,10.193,0,22.766s10.193,22.765,22.766,22.765c12.574,0,22.766-10.192,22.766-22.765 S35.34,0.001,22.766,0.001z M22.766,6.808c4.16,0,7.531,3.372,7.531,7.53c0,4.159-3.371,7.53-7.531,7.53 c-4.158,0-7.529-3.371-7.529-7.53C15.237,10.18,18.608,6.808,22.766,6.808z M22.761,39.579c-4.149,0-7.949-1.511-10.88-4.012 c-0.714-0.609-1.126-1.502-1.126-2.439c0-4.217,3.413-7.592,7.631-7.592h8.762c4.219,0,7.619,3.375,7.619,7.592 c0,0.938-0.41,1.829-1.125,2.438C30.712,38.068,26.911,39.579,22.761,39.579z"/>
  </svg>
);