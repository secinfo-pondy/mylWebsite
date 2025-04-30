'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Transition } from '@headlessui/react'
import FeaturesImage from '@/public/images/features-home-01.jpg'

export default function FeaturesHome() {

  const [tab, setTab] = useState<number>(1)

  return (
    <section className="relative">

      <div className="absolute inset-0 bg-slate-100 pointer-events-none mb-64 md:mb-80" aria-hidden="true"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          

          {/* Section content */}
          <div className="w-full ">

            {/* Tabs buttons */}
            <div className="grid grid-cols-2 gap-6  h-full">
              <div className="flex items-center justify-center text-xl">
                <ul>
                  <li className="text-2xl font-bold font-sans-display text-slate-800 mb-4"> As Cited in the press </li>
                  <li className="text-lg font-sans-display text-slate-800 mb-4">&#x2713; WSJ - “CFO Tenure in R3000” </li>
                  <li className="text-lg font-sans-display text-slate-800 mb-4">&#x2713; FT - “Board Trends” </li>
                  <li ><Link href="/media"> 
                  <p className="btn text-white bg-slate-700 hover:bg-slate-800">Explore Media -&gt;</p></Link> </li>
                </ul>
              </div>
              <div className="flex items-center justify-center text-xl">
              <ul>
                  <li className="text-2xl font-bold font-sans-display text-slate-800 mb-4">Reports & Studies</li>
                  <li className="text-lg font-sans-display text-slate-800 mb-4">&#x2713; CEO Pay Report 2025 (PDF) </li>
                  <li className="text-lg font-sans-display text-slate-800 mb-4">&#x2713; Board Tenure Study 2024 (PDF) </li>
                  <li ><Link href="/media"> 
                  <p className="btn text-white bg-slate-700 hover:bg-slate-800">View Report -&gt;</p></Link> </li>
                
                </ul>
             </div>

            </div>

           

          </div>

        </div>
      </div>
    </section>
  )
}