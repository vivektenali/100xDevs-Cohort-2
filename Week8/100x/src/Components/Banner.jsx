import React from "react";

const Banner = () => {
  return (
    <section className="flex flex-col justify-between items-center  md:flex md:flex-row m-4">
      <div className="max-w-full m-3 p-6 ">
        <h1 className="font-bold text-3xl">What is 100xDevs?</h1>
        <p className="font-medium  text-slate-700 text-wrap">
          100xDevs is an initiative by Harkirat Singh to personally mentor folks
          in the field of Programming. <br />
          Harkirat strongly feels that today you are either a 1x engineer or a
          100x engineer and nothing in the middle, and his hope is to take
          everyone in this community to be a 100x Engineer. Join him in his
          course on Full Stack development with a heavy focus on Open source
          projects to learn programming practically.
        </p>
        <button className="bg-blue-600 rounded-lg h-9 w-40 text-white font-medium m-1 hover:bg-black hover:text-white transition delay-150 duration-300 ease-in-out">
          Explore Courses
        </button>
      </div>
      <div className="shadow-lg shadow-blue-500/50">
        <img
          src="https://appx-wsb.classx.co.in/teachcode/admin/COURSE/cover/1699610005757WhatsApp-Image-2023-11-10-at-3.16.18-PM.jpeg"
          alt=""
          srcset=""
          className="max-w-screen"
        />
      </div>
    </section>
  );
};

export default Banner;
