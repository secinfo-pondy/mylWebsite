export const metadata = {
  title: 'Audit Fees datapoint',
  description: 'Page description',
}

import IframeComponent from '@/components/iframecomponent'

export default function Datapoint() {
  return (
    <>
    <div className="container ml-15 py-15">
      <IframeComponent
      src="https://files.mylogiq.com/audit-fees_api.html"
     width="95%"
  height="500px"
  title="My Website"
  className="shadow-lg"
       />
      </div>
    </>
  )
}