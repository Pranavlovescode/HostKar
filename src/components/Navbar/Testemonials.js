import React, { useEffect, useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

library.add(fas, far);

function Testemonials() {

  const [currentIndex, setCurrentIndex] = useState(0)
  const ratings = [
    { id: 0, img: "/images/google-dark.svg", rates: '4.5/5', reviews: "3,896" },
    { id: 1, img: "/images/pngfind.com-lowrider-png-1063135.png", rates: '4.7/5', reviews: '3,354' },
    { id: 2, img: "/images/wpbeginner-dark.svg", rates: '4.9/5', reviews: '1,494' },
    { id: 3, img: "/images/hostadvice-dark.svg", rates: '4.9/5', reviews: '8,354' },
  ];
  useEffect(() => {
    const intervalId = setInterval(() => {      
      setCurrentIndex((currentIndex+1)%ratings.length);
    }, 2500);

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, [currentIndex, ratings.length]);
  return (
    <>
      <div className="bg-indigo-50 h-[100vh]">
        <div className="pt-[80px] text-center text-3xl font-semibold p-6 text-indigo-800">
          We are Rated
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center p-[70px] gap-10">
        <div className="">
          <img src="/images/Ratings.png" alt="rating" />
        </div>
        <div>{ratings.filter((_,index) => index === currentIndex).map((comapany) => (
          <div key={comapany.id} className="grid grid-row-1 h-[140px] gap-7">
            <div className="flex flex-col justify-center items-center bg-indigo-100 m-2 rounded-lg shadow-xl shadow-indigo-400">
              <div>
                <img
                  src={comapany.img}
                  alt="google.com"
                  className="h-[30px] w-[100px] m-2"
                />
              </div>
              <div>
                <div className="flex flex-row justify-center items-center">
                  <svg
                    className="fill-current text-green-600"
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    width="18"
                    viewBox="0 0 576 512"
                  >
                    <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                  </svg>
                  <svg
                    className="fill-current text-green-600"
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    width="18"
                    viewBox="0 0 576 512"
                  >
                    <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                  </svg>
                  <svg
                    className="fill-current text-green-600"
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    width="18"
                    viewBox="0 0 576 512"
                  >
                    <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                  </svg>
                  <svg
                    className="fill-current text-green-600"
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    width="18"
                    viewBox="0 0 576 512"
                  >
                    <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                  </svg>
                  <svg
                    className="fill-current text-green-600"
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    width="18"
                    viewBox="0 0 576 512"
                  >
                    <path d="M288 0c-12.2 .1-23.3 7-28.6 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3L288 439.8V0zM429.9 512c1.1 .1 2.1 .1 3.2 0h-3.2z" />
                  </svg>
                </div>
                <div id="ratings" className="m-2">
                  <span>Ratings </span>
                  <b>{comapany.rates}</b>
                  <span>
                    {" "}
                    and <b>{comapany.reviews}</b> reviews
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}</div>
        </div>
      </div >
      <div
        id="Testemonials"
        className="p-[100px] text-center text-3xl text-indigo-700 font-bold"
      >
        <h1>Look, We also have some reviews from our Customers</h1>
      </div>

    </>
  );
}

export default Testemonials;
