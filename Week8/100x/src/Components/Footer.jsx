import React from "react";

const Footer = () => {
  return (
    <section className="flex flex-col sm:flex-row sm:justify-around justify-center items-center bg-slate-800">
      <div>
        <img
          src="https://appx-wsb.classx.co.in/subject/2023-01-17-0.17044360120951185.jpg"
          alt=""
          srcset=""
          width={"50px"}
          className="m-1 rounded-full"
        />
        <span className="font-bold text-xl text-white">100xdevs</span>
      </div>
      <div className="flex flex-col py-2 text-white ">
        <a href="#" className="font-bold text-xl my-5">
          Quick Links
        </a>
        <a href="#" className="hover:text-blue-600">
          Terms & Conditions
        </a>
        <a href="#" className="hover:text-blue-600">
          Privacy Policy
        </a>
        <a href="#" className="hover:text-blue-600">
          Refund/Cancellation Policy
        </a>
      </div>
      <div className="flex flex-col m-6">
        <button className="bg-blue-600 font-semibold text-white rounded-md px-4 py-2 m-4 hover:bg-slate-50 hover:text-slate-900 transition delay-150 duration-300 ease-in-out">
          Download on the <br /> App Store <i className="fab fa-apple"></i>
        </button>
        <button className="bg-blue-600 font-semibold text-white rounded-md px-4 py-2 m-4 hover:bg-slate-50 hover:text-slate-900 transition delay-150 duration-300 ease-in-out">
          Get it on <br /> Google Play <i className="fab fa-google-play"></i>
        </button>
      </div>
    </section>
  );
};

export default Footer;
