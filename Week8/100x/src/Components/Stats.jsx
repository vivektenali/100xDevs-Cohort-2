import React from "react";

const Stats = () => {
  return (
    <section className="flex flex-col sm:flex-row justify-center items-center bg-blue-100 mx-14">
      <div className="text-2xl p-8">
        <h1>Youtube</h1>
        <h1 className="font-bold">345K+</h1>
        <h1>Subscribers</h1>
      </div>
      <div className="text-2xl p-8">
        <h1>Twitter</h1>
        <h1 className="font-bold">31.4k+</h1>
        <h1>Followers</h1>
      </div>
      <div className="text-2xl p-8">
        <h1>Instagram</h1>
        <h1 className="font-bold">66K+</h1>
        <h1>Followers</h1>
      </div>
    </section>
  );
};

export default Stats;
