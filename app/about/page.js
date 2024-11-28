import React from "react";
import img from "../../public/next.svg"
const About = () => {
  return <div className="flex justify-center items-center w-[100vw] h-[100vh]">
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
  <div className="md:flex">
    <div className="md:shrink-0">
      {/* <img className="h-48 w-full object-cover md:h-full md:w-48" src={img} alt="Modern building architecture" /> */}
    </div>
    <div className="p-8">
      <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">About Us</div>
      <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Incredible accommodation for your team</a>
      <p className="mt-2 text-slate-500">Oracle Netsuite based Enterprise Resource Planning Solution.</p>
    </div>
  </div>
</div>
  </div>;
};

export default About;
