import React from "react";

const NavBar = () => {
  return (
    <>
      <nav className="flex flex-row justify-between items-center shadow-lg shadow-blue-300/50 mt-1 p-1">
        <div className="flex flex-row justify-center items-center">
          <img
            src="https://appx-wsb.classx.co.in/subject/2023-01-17-0.17044360120951185.jpg"
            alt=""
            srcset=""
            width={"50px"}
            className="m-1"
          />
          <span className="font-bold text-xl text-slate-700">100xdevs</span>
        </div>
        <div>
          <button className="font-medium  rounded-lg h-10 w-16 text-white bg-blue-600 hover:bg-black hover:text-white transition delay-150 duration-300 ease-in-out">
            Login
          </button>
          <button className="bg-blue-600 rounded-lg h-10 w-28 text-white font-medium m-1 hover:bg-black hover:text-white transition delay-150 duration-300 ease-in-out">
            Join Now
          </button>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
