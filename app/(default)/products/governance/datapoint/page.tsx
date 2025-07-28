export const metadata = {
  title: 'Governance datapoint',
  description: 'Page description',
}

import IframeComponent from '@/components/iframecomponent'

export default function Datapoint() {
  return (
    <>
    <div className="container ml-15 py-15">
      <IframeComponent
      src="https://api.mylogiq.com/corporate-governance"
     
  height="500px"
  title="My Website"
  className="shadow-lg"
       />
      </div>
    </>
  )
}