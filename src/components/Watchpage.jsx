import React from 'react'
import { useSearchParams } from 'react-router-dom'

const Watchpage = () => {
  const [searchParams] = useSearchParams();
  // console.log(searchParams.get('v').length);
 
  return (
    <div className="Body_container margin-top">
      <iframe width="68%" height="450" src={"https://www.youtube.com/embed/"+searchParams.get('v')} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
  )
}

export default Watchpage