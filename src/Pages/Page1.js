import React from "react";
import Page1bottom from "../components/Page1bottom";
import Tilttext from "../components/Tilttext";

function Page1() {
  return (
    <div className="h-screen p-4 bg-black">
      <div
        className="shadow-md shadow-gray-400 h-full w-full rounded-[40px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://static.wixstatic.com/media/f1c650_678c0ceab5194893872c60fa3be4bcdc~mv2.jpg/v1/fill/w_1403,h_725,fp_0.69_0.64,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/ANZO.jpg')",
        }}
      >
        {/* Logo */}
        <img
          className="mx-8 pt-8 w-16 h-16 md:mx-16 md:pt-12 lg:w-20 lg:h-20"
          src="https://static.wixstatic.com/media/f1c650_35a00b1fe6ce403eb237970ec8d34f79~mv2.png/v1/fill/w_68,h_68,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Frame%2053.png"
          alt="Logo"
        />

        {/* Tilt Text */}
        <div className="px-4 sm:px-8 md:px-16 lg:px-32">
          <Tilttext />
        </div>

        {/* Page Bottom Content */}
        <div className="px-4 sm:px-8 md:px-16 lg:px-32">
          <Page1bottom />
        </div>
      </div>
    </div>
  );
}

export default Page1;
