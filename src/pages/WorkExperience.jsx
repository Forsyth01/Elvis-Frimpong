import React from "react";
import Connectwithme from "../components/Connectwithme";
import Experience from "../components/Experience";

const WorkExperience = () => {
  return (
    <div className="">  
    <div className="sm:w-[85%] m-auto flex justify-center items-center sm:py-10 p-6 sm:bg-[#FFFFFF] ">
      <div className="flex gap-4 flex-col md:flex-row w-full max-w-5xl rounded-lg overflow-hidden space-y-6 sm:space-y-0">
        {/* Work Experience Section */}
        <div className="w-full md:w-1/2 p-6 border-2 border-gray-300 rounded-4xl mr-5">
          <Experience />
        </div>

        {/* Connect With Me Section */}
        <div className="w-full md:w-1/2 p-6 border-2 border-gray-300 rounded-4xl">
          <Connectwithme />
        </div>
      </div>
    </div>
    </div>
  );
};

export default WorkExperience;
