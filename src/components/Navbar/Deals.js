// import React, { useEffect } from "react";
import React, { useEffect, useState } from "react";
import { deals } from "../../data";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import app from "../../firebase";
import { useNavigate } from "react-router-dom";

const auth = getAuth(app);

function Deals() {
  const navigate = useNavigate();
  const [authenticated, setAuthenticated] = useState(null);
  useEffect(() => {
    // const deals = document.getElementById('Deals');
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthenticated(user);
      } else {
        setAuthenticated(null);
      }
    });
    const another = document.getElementById("another");
    if (another) {
      another.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  function addToCart() {
    if (authenticated) {
      navigate('/protected-route/cart')
    } else {
      navigate('/signup-page')
    }
   
  }
  const day = new Date();
  const today = day.getDay();
  const deal = deals
    .filter((day1) => today === day1.id)
    .map((day1) => (
      <div
        key={day1.id}
        className="hover:scale-105 ease-in-out duration-[0.8s] flex m-[10px] p-[20px] border-indigo-950 border-solid  rounded-[35px] bg-indigo-200"
      >
        <div className="flex flex-col">
          <h3 className="text-center font-bold text-2xl text-black p-4">
            {day1.name} {/* Fix: use day1.name instead of deal.name */}
          </h3>
          <p className="p-2">{day1.description}</p>
          <div className="font-bold text-pink-700 text-center">
            +1 month FREE
          </div>
          <div className="text-[20px] font-semibold p-3 text-center">
            Price &#8377; <span className="text-5xl">{day1.price}.00</span> /mo
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
            className="bg-indigo-500 rounded-2xl p-2  hover:bg-indigo-800 hover:text-indigo-200 font-bold"
          >
            Add to Cart
          </button>
        </div>
      </div>
    ));

  function NormalDeal() {
    return (
      <div className="hover:scale-105 ease-in-out duration-[0.8s] flex m-[10px] p-[20px] border-indigo-950 border-solid  rounded-[35px] bg-indigo-200">
        <div className="flex flex-col">
          <h3 className="text-center font-bold text-2xl text-black p-4">
            Casual Deal
          </h3>
          <p className="p-2">
            This is one of the basic and most wanted deal for non-professional
            people. This deal will help you to save money on unwanted
            facilities. So, be calm and grab this deal ASAP.
          </p>
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
            className="bg-indigo-500 rounded-2xl p-2  hover:bg-indigo-800 hover:text-indigo-200 font-bold"
          >
            Add to Cart
          </button>
        </div>
      </div>
    );
  }
  function ProfessionalDeal() {
    return (
      <div className="hover:scale-105 ease-in-out duration-[0.8s] flex m-[10px] p-[20px] border-indigo-950 border-solid  rounded-[35px] bg-indigo-200">
        <div className="flex flex-col">
          <h3 className="text-center font-bold text-2xl text-black p-4">
            Professional Deal
          </h3>
          <p className="p-2">
            This is one of the best and most suitable deal for working
            professionals, freelancers, Web Developers.This has all the contain
            you want. So, no more wandering the best one is here, own it ASAP.
          </p>
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
            className="bg-indigo-500 rounded-2xl p-2  hover:bg-indigo-800 hover:text-indigo-200 font-bold"
          >
            Add to Cart
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* <ScrollToTop/> */}
      <div
        id="Deals"
        className="bg-gradient-to-b from-indigo-950 to-indigo-700 p-6 w-[100%] hover:-z-10"
      >
        <h1 className="text-center p-[20px] text-5xl font-bold mt-[5rem] text-indigo-200">
          Today's Deal!! Have a Look
        </h1>
        <div className="grid md:grid-cols-3  grid-col-1 gap-10 md:m-[30px]">
          <div>{deal}</div>
          <div>
            {/* This is normal deal */}
            <NormalDeal />
          </div>
          <div>
            {/* This is another normal deal */}
            {ProfessionalDeal()}
          </div>
        </div>
      </div>
      <div id="another" className="scroll-smooth  bg-indigo-200">
        <div className=" p-6">
          <h1 className="text-5xl text-start">The detail breakdown...</h1>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-4 p-4">
          <div className="p-5 bg-indigo-100 rounded-lg">
            <h1 className="text-2xl p-5 text-violet-800">Free Domain</h1>
            <p>
              <span className="font-semibold">
                {" "}
                Unlock Your Online Presence with a FREE Domain!{" "}
              </span>
              <br />
              Are you ready to embark on your online journey? Our exclusive deal
              brings you more than just hosting – it comes with the key to your
              digital identity! <br />
              <span className="font-semibold text-center pt-3">
                {" "}
                Why You Shouldn't Miss This Deal:
              </span>
              <br />
              <li>
                <span className="font-semibold">FREE Domain Included:</span>{" "}
                Secure your unique corner of the internet at no extra cost! A
                personalized domain sets the stage for your brand, making it
                memorable and professional.
                <br />
              </li>
              <li>
                <span className="font-semibold"> Instant Credibility:</span>{" "}
                Establish trust and credibility with your audience. A custom
                domain adds a layer of professionalism to your online presence,
                showing visitors that you mean business.
                <br />
              </li>
              <li>
                <span className="font-semibold"> Enhanced Security:</span> Enjoy
                the peace of mind that comes with a secure and custom domain.
                It's not just a web address; it's your digital home, fortified
                against cyber threats.
                <br />
              </li>
              <li>
                <span className="font-semibold"> Boost Your Visibility:</span>{" "}
                Stand out in the crowded online landscape. A custom domain makes
                your website easily discoverable and enhances your search engine
                visibility.
                <br />
              </li>
              <span className="text-center font-semibold ">
                {" "}
                Seize the Opportunity - Act Now!
              </span>
              <br />
              Claim this deal and propel your online journey to new heights.
              Your FREE domain awaits, ready to become the cornerstone of your
              digital success. Don't just host; make a statement with a domain
              that reflects your uniqueness!
              <br />
              <span className="font-semibold">
                {" "}
                Plus, enjoy additional perks and savings included in this
                limited-time offer! Act fast – your digital adventure begins
                here!
              </span>
              <br />
              <span className="font-semibold">🔗 Claim Your Deal Now!</span>
              <br />
            </p>
          </div>
          <div className="p-5 bg-indigo-100 rounded-lg">
            <h1 className="text-2xl p-5 text-violet-800">Fast Migration</h1>
            <p>
              <span className="font-semibold">
                {" "}
                Elevate Your Online Presence with FREE Website Migration! 🚀
              </span>
              <br />
              Ready to level up your online experience? Our exclusive offer
              isn't just about hosting – it's your ticket to a seamless digital
              transition! <br />
              <span className="font-semibold">
                {" "}
                Why This Deal Is Unmissable:
              </span>
              <br />
              <li>
                <span className="font-semibold"> FREE Website Migration:</span>{" "}
                Seamlessly transfer your website to our platform at no
                additional cost! Our expert team ensures a smooth migration, so
                you can focus on what matters most.
                <br />
              </li>
              <li>
                <span className="font-semibold"> Instant Upgrade:</span> Give
                your website a boost with our hassle-free migration process. Say
                goodbye to downtime and hello to a better hosting experience.
                <br />
              </li>
              <li>
                <span className="font-semibold"> Secure Transition:</span> Trust
                in a secure and reliable migration. We safeguard your data
                during the transition, ensuring a secure and stress-free move to
                our platform.
                <br />
              </li>
              <span className="font-semibold">
                {" "}
                Seize the Opportunity - Act Now!
              </span>
              <br />
              Claim this deal and take your digital journey to new heights. Our
              FREE website migration is poised to become the catalyst for your
              online success. Don't just host; make a statement with a platform
              that values your convenience!
              <br />
              <span className="font-semibold">🔗 Grab Your Deal Now!</span>
              <br />
            </p>
          </div>
          <div className="p-5 bg-indigo-100 rounded-lg">
            <h1 className="text-2xl p-5 text-violet-800">
              24/7 Service or what?
            </h1>
            <p>
              <span className="font-semibold">
                {" "}
                Stucked ?, Oh wait we are here to help you{" "}
              </span>
              <br />
              Are you prepared for your digital journey? Our exclusive offer
              isn't just about hosting – it comes bundled with the key to your
              digital identity! <br />
              <span className="font-semibold">
                {" "}
                Why You Shouldn't Miss This Deal:
              </span>
              <br />
              <li>
                <span className="font-semibold">
                  24/7 Customer Service - Your Success, Our Priority:
                </span>
                <br />
                Enjoy round-the-clock expert assistance. Our dedicated support
                team is always here to guide you, ensuring a smooth and seamless
                online experience. Your success is our priority, and we're just
                a click away!
                <br />
              </li>
              <span className="font-semibold">🔗 Claim Your Deal Now!</span>
              <br />
            </p>
          </div>
        </div>
        <p className="p-4 text-center">
          So, Satisfied. What are you waiting for press the button below
        </p>
        <span className="text-center flex justify-center items-center p-10">
          <button
            onClick={addToCart}
            className="bg-indigo-700 pl-4 pr-4 pt-2 pb-2 rounded-md text-white md:hover:bg-indigo-500 duration-500"
          >
            Add to Cart
          </button>
        </span>
      </div>
    </>
  );
}

export default Deals;
