import React from "react";

const Info = () => {
  return (
    <div className="flex flex-col sm:grid sm:grid-flow-row-dense sm:grid-cols-3  m-14 bg-blue-100">
      <div className="p-4 text-wrap">
        <h1 className="font-bold text-xl text-slate-700">
          Learn from the best
        </h1>
        <h1>
          Harkirat is best in India, when it comes to learning about remote
          work, open source and landing a job.
        </h1>
      </div>
      <div className=" p-4 text-wrap">
        <h1 className="font-bold text-xl text-slate-700">Beginner Friendly</h1>
        <h1>
          Start from the basics and go deep into technologies using projects.
        </h1>
      </div>
      <div className="p-4 text-wrap">
        <h1 className="font-bold text-xl text-slate-700">
          Reach your inflection point
        </h1>
        <h1>Become a self sufficient developer in tech.</h1>
      </div>
      <div className=" p-4 text-wrap">
        <h1 className="font-bold text-xl text-slate-700">Open Source</h1>
        <h1>Helping you make your first open source contribution.</h1>
      </div>
      <div className=" p-4 text-wrap">
        <h1 className="font-bold text-xl text-slate-700">Version Control</h1>
        <h1>
          Helping you understand the basics of how version control is
          implemented in the industry.
        </h1>
      </div>
      <div className=" p-4 text-wrap">
        <h1 className="font-bold text-xl text-slate-700">Assignments</h1>
        <h1>
          Harkirat has personally created assignments after every week of study,
          so it's extremely handson.
        </h1>
      </div>
    </div>
  );
};

export default Info;
