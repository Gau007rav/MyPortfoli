import React, { useRef } from "react";

function Tilttext() {
  const tiltRef = useRef();

  const mouseHandler = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();

    // Calculate center of the element
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    // Calculate offsets
    const offsetX = (clientX - centerX) / width;
    const offsetY = (clientY - centerY) / height;

    // Set tilt effect
    const rotateX = offsetY * 15; // Adjusted intensity for responsiveness
    const rotateY = -offsetX * 15;

    tiltRef.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    tiltRef.current.style.transition = "transform 0.1s ease-out";
  };

  return (
    <div
      className="flex flex-col items-start gap-6 p-8"
      onMouseMove={(e) => mouseHandler(e)}
      ref={tiltRef}
    >
      {/* Title Text */}
      <h1 className="text-gray-300 font-[anzo2] text-4xl md:text-6xl lg:text-5xl uppercase">
        I am Dark Mode
      </h1>

      {/* Subtitle Text */}
      <h1 className="text-gray-400 uppercase font-[anzo3] text-5xl md:text-8xl lg:text-7xl">
        Developer
      </h1>

      {/* Call to Action */}
      <h1 className="text-gray-300 uppercase font-[anzo1] text-4xl md:text-6xl lg:text-7xl">
        To Hire
      </h1>
    </div>
  );
}

export default Tilttext;
