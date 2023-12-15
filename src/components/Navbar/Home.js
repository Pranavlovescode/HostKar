import React from 'react'

function Home() { 

  return (
    <>
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
          src = '/images/header.png'
          alt='' 
          className='md:h-[25rem]'/>
        </div>
      </div>
    </div>
    <div className='h-[100vh] md:p-[30px]'>
      <div className='flex md:flex-row flex-col m-[50px] justify-center'>
        <div>
          <img
          src='/images/customer.png'
          alt=''
          className='md:h-[25rem]'/>
        </div>
        <div className='p-4 flex flex-col justify-center md:ml-[35px]'>
          <div>
            <p className='m-2'>So, What you will get ?</p>
            <p className='text-indigo-500 text-2xl'>We Offer <span className='text-violet-800'>24/7</span> best customer service</p>
          </div>
            <div className='pt-4 text-indigo-950'>
              <p className='pt-3'>✔️ Our team is here to guide you all the way through develoment of your Website.</p>
              <p className='pt-3'>✔️ Expertise will consult you 1 on 1.</p>
              <p className='pt-3'>✔️ Moreover, you will become the webmaster by refering our best video guides.</p>
            </div>
        </div>
      </div>
    </div>
    <div className='h-[100vh] bg-indigo-200 md:p-[30px]'>
    <div className='flex md:flex-row flex-col m-[50px] justify-center'>        
        <div className='p-4 flex flex-col justify-center md:ml-[35px]'>
          <div>
            <p className='m-2'>Only this? Wait my friend.</p>
            <p className='text-indigo-500 text-2xl'>We Offer <span className='text-violet-800'>24/7</span> best customer service</p>
          </div>
            <div className='pt-4 text-indigo-950 mr-20'>
              <p className='pt-3'>✔️ Transfer your website with our mighty migration tool</p>
              <p className='pt-3'>✔️ Expertise will guide you 1 on 1 and 24/7.</p>
              <p className='pt-3'>✔️ Lastly, your website will be tranfered within 12 hrours.</p>
            </div>
        </div>
        <div>
          <img
          src='/images/migration.png'
          alt=''
          className='md:h-[25rem]'/>
        </div>
      </div>
    </div>
    </>
    
  )
}

export default Home