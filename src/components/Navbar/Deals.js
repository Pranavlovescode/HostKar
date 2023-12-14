import React from "react";
import { deals } from "../../data";

function Deals() {
  function addToCart() {
    alert("Added to cart");
  }
  const day = new Date();
  const today = day.getDay();
  const deal = deals
    .filter((day1) => today === day1.id)
    .map((day1) => (
      <div key={day1.id} className="hover:scale-105 ease-in-out duration-[0.8s] flex m-[10px] p-[20px] border-indigo-950 border-solid  rounded-[35px] bg-indigo-200">
        <div className="flex flex-col">
          <h3 className="text-center font-bold text-2xl text-black p-4">
            {day1.name} {/* Fix: use day1.name instead of deal.name */}
          </h3>
          <p className="p-2">{day1.description}</p>
          <div className="font-bold text-pink-700 text-center">
            +1 month FREE
          </div>
          <div className="text-[20px] font-semibold p-3 text-center">
            Price &#8377; <span className="text-5xl">{day1.price}.00</span>  /mo 
            {/* Fix: use day1.price instead of deal.price */}
          </div>
          <div>
            <div className="border-t-2 border-black"></div>
            <p className="text-center font-[12px] text-[21px] text-black py-2">
              Top Features
            </p>
            <ul className="p-2">
              <li className="p-3">{day1.Domain} Domain</li>
              <li className="p-3">{day1.ssl} SSL</li>
              <li className="p-3">{day1.emails} Emails</li>
              <li className="p-3">{day1.bandwidth} Bandwidth</li>
              <li className="p-3">{day1.cdn} CDN</li>
              <li className="p-3">{day1.wordpress} WordPress</li>
              <li className="p-3">{day1.websites} Websites</li>
              <li className="p-3">{day1.backup} Backup</li>

            </ul>
          </div>
          <button
            onClick={addToCart}
            className="bg-indigo-500 rounded-2xl p-2  hover:bg-indigo-800 hover:text-indigo-200 font-bold">
            Add to Cart
          </button>
        </div>
      </div>
    ));
  
  function NormalDeal(){
    return(
      <div className="hover:scale-105 ease-in-out duration-[0.8s] flex m-[10px] p-[20px] border-indigo-950 border-solid  rounded-[35px] bg-indigo-200">
        <div className="flex flex-col">
          <h3 className="text-center font-bold text-2xl text-black p-4">
            Casual Deal
          </h3>
          <p className="p-2">This is one of the basic and most wanted deal for non-professional people. This deal will help you to save money on unwanted facilities. So, be calm and grab this deal ASAP.</p>
          <div className="font-bold text-pink-700 text-center">
            +2 months FREE
          </div>
          <div className="text-[20px] font-semibold p-2 text-center">
            Price &#8377; <span className="text-5xl">129.00 </span>/mo            
          </div>
          <div>
            <div className="border-t-2 border-black"></div>
            <p className="text-center font-[12px] text-[21px] text-black py-2">
              Top Features
            </p>
            <ul className="p-2">
              <li className="p-3">Free Domain</li>
              <li className="p-3">Unlimited Free SSL</li>
              <li className="p-3">Free Emails</li>
              <li className="p-3">Liminted Bandwidth</li>
              <li className="p-3">Paid CDN</li>
              <li className="p-3">Few WordPress</li>
              <li className="p-3">10 Websites</li>
              <li className="p-3">Weekly Backup</li>
            </ul>
          </div>
          <button
            onClick={addToCart}
            className="bg-indigo-500 rounded-2xl p-2  hover:bg-indigo-800 hover:text-indigo-200 font-bold">
            Add to Cart
          </button>
        </div>
      </div>
    )    
  }
  function ProfessionalDeal(){
    return(

      <div className="hover:scale-105 ease-in-out duration-[0.8s] flex m-[10px] p-[20px] border-indigo-950 border-solid  rounded-[35px] bg-indigo-200">
        <div className="flex flex-col">
          <h3 className="text-center font-bold text-2xl text-black p-4">
            Professional Deal
          </h3>
          <p className="p-2">This is one of the best and most suitable deal for working professionals, freelancers, Web Developers.This has all the contain you want. So, no more wandering the best one is here, own it ASAP.</p>
          <div className="font-bold text-pink-700 text-center">
            +4 months FREE
          </div>
          <div className="text-[20px] font-semibold p-2 text-center">
            Price &#8377; <span className="text-5xl">699.00 </span>/mo            
          </div>
          <div>
            <div className="border-t-2 border-black"></div>
            <p className="text-center font-[12px] text-[21px] text-black py-2">
              Top Features
            </p>
            <ul className="p-2">
              <li className="p-3">Free Domain</li>
              <li className="p-3">Unlimited Free SSL</li>
              <li className="p-3">Free Emails</li>
              <li className="p-3">Unliminted Bandwidth</li>
              <li className="p-3">Free CDN</li>
              <li className="p-3">Unliminted WordPress</li>
              <li className="p-3">200 Websites hosting</li>
              <li className="p-3">Daily backup</li>
              {/* <li className="p-3">200GB MVNe SSD Storage</li> */}
            </ul>
          </div>
          <button
            onClick={addToCart}
            className="bg-indigo-500 rounded-2xl p-2  hover:bg-indigo-800 hover:text-indigo-200 font-bold">
            Add to Cart
          </button>
        </div>
      </div>
    )
    
  }

  return (
    <>
      <div className="bg-gradient-to-b from-indigo-950 to-indigo-700 p-6 w-[100%] hover:-z-10">
        <h1 className="text-center p-[20px] text-3xl font-bold mt-[5rem] text-indigo-200">
          Today's Deal!! Have a Look
        </h1>
        <div className="grid md:grid-cols-3  grid-col-1 gap-10 md:m-[30px]">
          <div >
          {deal}
          </div>
          <div >
            {/* This is normal deal */}
            <NormalDeal/>
          </div>
          <div >
            {/* This is another normal deal */}
            <ProfessionalDeal/>
          </div>
        </div>    
      </div>
      
    </>
  );
}

export default Deals;
