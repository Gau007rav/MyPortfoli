import React from "react";

const Page3 = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-white">
      {/* Background Image */}
      <img
        src="https://static.wixstatic.com/media/f1c650_23c4e7bcc6294676abdb81290a836c2b~mv2.png/v1/fill/w_791,h_455,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/try.png"
        alt="Background"
        className="w-[90%] h-[50%] sm:w-[80%] sm:h-[60%] md:w-[70%] md:h-[70%] object-cover z-20"
      />
      {/* Video */}
      <div className="absolute w-full h-full flex items-center justify-center">
        <video
          loop
          muted
          autoPlay="true"
          className="w-[90%] h-[50%] sm:w-[70%] sm:h-[50%] md:w-[55%] md:h-[70%] object-cover shadow-lg z-10"
          src="/file.mp4"
          controls
        ></video>
      </div>
    </div>
  );
};

export default Page3;
