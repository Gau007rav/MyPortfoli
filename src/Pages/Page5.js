import React from "react";

function Page5() {
  return (
    <div className="bg-gradient-to-r from-gray-900 via-black to-gray-800 text-white p-8 rounded-xl shadow-2xl max-w-8xl mx-auto mt-10 mb-10">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-4xl sm:text-5xl md:text-5xl font-[anzo1] uppercase tracking-wide text-white">
          Gaurav Kumar
        </h1>
        <p className="text-gray-300 mt-2 text-lg font-[anzo6]">
          Software Engineer | MERN Developer
        </p>
      </div>

      {/* Contact Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 text-lg">
        <div>
          <p className="mt-4 font-[anzo6]">
            📍 <span className="text-gray-300">Address:</span> Banglore, India
          </p>
          <p className="mt-2">
            📧 <span className="text-gray-300">Email:</span>{" "}
            gaurav033singh@gmail.com
          </p>
          <p className="mt-2">
            📧<span className="text-gray-300">Experience:</span> over 2 years
            Experience as Software Engineer
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-blue-400 underline">
            Education:
          </h2>
          <p className="mt-4">
            🎓 <span className="text-gray-300">M.Tech in Computer Science</span>
          </p>
          <p className="mt-2 text-gray-300">Galgotias University, 2020-2022</p>
        </div>
      </div>

      {/* Links Section */}
      <div className="flex flex-wrap justify-center items-center gap-10 mb-8">
        <a
          href="https://github.com/Gau007rav"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-white transition duration-300"
        >
          <i className="ri-github-fill text-5xl"></i>
          <span className="block text-sm mt-1 uppercase">GitHub</span>
        </a>
        <a
          href="https://www.linkedin.com/in/gaurav-singh-6b902b204/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-white transition duration-300"
        >
          <i className="ri-linkedin-fill text-5xl"></i>
          <span className="block text-sm mt-1 uppercase">LinkedIn</span>
        </a>
        <a
          href="https://unlink-ten.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-white transition duration-300"
        >
          <i className="ri-folder-fill text-5xl"></i>
          <span className="block text-sm mt-1 uppercase">Projects</span>
        </a>
      </div>

      {/* Quote Section */}
      <div className="text-center border-t border-gray-700 pt-6">
        <blockquote className="text-xl italic text-gray-300">
          "Code is like humor. When you have to explain it, it’s bad."
        </blockquote>
      </div>
    </div>
  );
}

export default Page5;
