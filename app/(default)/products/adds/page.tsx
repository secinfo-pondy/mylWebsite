export const metadata = {
  title: 'new content',
  description: 'Page description',
}

import Hero from '@/components/developer-api'
import AIReadySection from '@/components/AI-Ready'
import DataQualitySection from '@/components/dataQuality'
import EnterpriseValueSection from '@/components/EnterpriseValue'

export default function devapi() {
  return (
    <>
      
      <AIReadySection />
      <DataQualitySection />
      <EnterpriseValueSection />
      <Hero />
      
    </>
  )
}