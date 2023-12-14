import React from 'react'
// import { useEffect,useState } from 'react'
function Home() { 

  return (
    <div className='pt-[60px] md:h-[100vh] bg-indigo-100'>
      <div className={`flex md:flex-row flex-col justify-center p-6 `}>
        <div className='m-[20px]'>
          <h1 className='text-4xl text-indigo-700'>
            Everything You Need to <p className='text-violet-950'>Host</p> Your Website
          </h1>     
          <div>You will get Up to 75% off on Hosting and another webservices</div>
          <div className='m-2 text-xl text-violet-500'>            
            <p>✔️ Free Domain</p>
            <p>✔️ Free Website Migration</p>
            <p>✔️ 24/7 Customer Service</p>
          </div>
          <div>
            This great deal starts from just. Try this quickly.
          </div>
          <div>
            &#8377; <span className='text-3xl text-indigo-800'>149 </span>/mo <span className='text-green-900'>+2 Free Months</span><br/>
            <button className='mt-8 ml-[80px] bg-indigo-500 text-xl text-center p-[10px] rounded-xl md:hover:bg-indigo-600 text-white md:duration-500 md:ease-in-out '>Claim Deal</button>
          </div>
        </div>
        <div className='md:m-[3rem]'>
          <img 
          src='	https://www.hostinger.in/_ipx/f_webp&q_80/h-assets/images/pages/homepage-uplift/header-image-2x.png' 
          alt='' 
          className='md:h-[25rem]'/>
        </div>
      </div>
    </div>
  )
}

export default Home