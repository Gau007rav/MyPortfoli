import React from "react";

function Page4() {
  return (
    <div className="bg-gradient-to-b from-gray-900 via-black to-gray-800 p-5 flex flex-col md:flex-row">
      {/* Left Section */}
      <div className="bg-black rounded-lg w-full md:w-1/2 flex flex-col justify-center items-start p-10 mb-5 md:mb-0">
        <h1 className="text-white text-[60px] sm:text-[120px] md:text-[150px] lg:text-[200px] uppercase font-[anzo4] leading-[150px] sm:leading-[150px] md:leading-[200px]">
          What
        </h1>
        <h1 className="text-white text-[60px] sm:text-[120px] md:text-[150px] lg:text-[200px] uppercase font-[anzo4] leading-[150px] sm:leading-[150px] md:leading-[200px] mt-5 sm:mt-10 md:mt-10">
          I Do
        </h1>
      </div>

      {/* Right Section */}
      <div className="bg-black rounded-lg w-full md:w-1/2 flex flex-col justify-center items-start p-10 border-4 border-gray-700 shadow-lg mt-5 md:mt-0">
        <h2 className="text-blue-400 text-3xl sm:text-4xl md:text-5xl uppercase font-bold mb-5">
          Expertise
        </h2>
        <ul className="space-y-5 text-white text-lg sm:text-xl md:text-2xl font-[anzo3] uppercase list-disc list-inside">
          <li>MERN Stack Development</li>
          <li>Frontend Development</li>
          <li>Backend Development</li>
          <li>API Integration & Development</li>
          <li>Database:MySql , MongoDb</li>
          <li>Responsive Web Design,Git,GitHub</li>
        </ul>
      </div>
    </div>
  );
}

export default Page4;
