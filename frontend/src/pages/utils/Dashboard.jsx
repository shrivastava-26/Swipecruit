import { useState, useEffect } from "react";
import {
  FaAnglesLeft,
  FaAnglesRight,
  FaArrowLeft,
  FaArrowUp,
} from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";

const Dashboard = () => {
  const [jobFieldsOpen, setJobFieldsOpen] = useState(false);
  const [skillsOpen, setSkillsOpen] = useState(false);
  const [candidates, setCandidates] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // just dummy data for referense
  useEffect(() => {
    const dummyData = [
      {
        id: 1,
        name: "John Doe",
        profilePhoto: "/images/user (1).jpg",
        college: "Harvard University",
        course: "Computer Science",
        skills: ["JavaScript", "React", "Node.js"],
        projectTitle: "E-commerce Website",
        projectDescription:
          "A fully functional e-commerce platform built using React and Node.js.",
        repoLink: "https://github.com/johndoe/ecommerce",
      },
      {
        id: 2,
        name: "allen",
        profilePhoto: "/images/user (2).jpg",
        college: "Harvard University",
        course: "Computer Science",
        skills: ["JavaScript", "React", "Node.js"],
        projectTitle: "E-commerce Website",
        projectDescription:
          "A fully functional e-commerce platform built using React and Node.js.",
        repoLink: "https://github.com/johndoe/ecommerce",
      },
      {
        id: 3,
        name: "miller",
        profilePhoto: "/images/user (6).jpg",
        college: "Harvard University",
        course: "Computer Science",
        skills: ["JavaScript", "React", "Node.js"],
        projectTitle: "E-commerce Website",
        projectDescription:
          "A fully functional e-commerce platform built using React and Node.js.",
        repoLink: "https://github.com/johndoe/ecommerce",
      },
    ];
    setCandidates(dummyData);
  }, []);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : candidates.length - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < candidates.length - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <div className="ml-40 h-screen">
      {/* <nav className="h-16 flex items-center gap-6 px-6 bg-white shadow-md rounded-lg fixed top-0">
        <div
          className="relative"
          onMouseEnter={() => setJobFieldsOpen(true)}
          onMouseLeave={() => setJobFieldsOpen(false)}
        >
          <button className="px-4 py-2 bg-pink-200 text-black rounded-lg shadow-md hover:bg-pink-300 focus:outline-none">
            Job Fields
          </button>
          {jobFieldsOpen && (
            <div className="absolute left-0 w-48 bg-white border border-pink-300 rounded-lg shadow-lg">
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-pink-100"
              >
                Software Developer
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-pink-100"
              >
                Data Analyst
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-pink-100"
              >
                Web Designer
              </a>
            </div>
          )}
        </div>

        <div
          className="relative"
          onMouseEnter={() => setSkillsOpen(true)}
          onMouseLeave={() => setSkillsOpen(false)}
        >
          <button className="px-4 py-2 bg-pink-200 text-black rounded-lg shadow-md hover:bg-pink-300 focus:outline-none">
            Skills
          </button>
          {skillsOpen && (
            <div className="absolute left-0 w-48 bg-white border border-pink-300 rounded-lg shadow-lg">
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-purple-100"
              >
                JavaScript
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-purple-100"
              >
                Python
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-purple-100"
              >
                React.js
              </a>
            </div>
          )}
        </div>
      </nav> */}

      <div className="flex flex-col h-full items-center justify-around">
        <div className="bg-white h-4/5 relative shadow-xl rounded-xl overflow-hidden flex flex-col items-center text-gray-700 w-full max-w-sm">
          {candidates.length > 0 ? (
            <>
              <div className="relative w-full h-full">
                <img
                  src={candidates[currentIndex].profilePhoto}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute  bg-gradient-to-b from-transparent to-black/60 text-white w-full h-full flex flex-col items-center justify-end">
                <div className="w-11/12 h-1/6">
                  <h2 className="text-2xl font-semibold capitalize">
                    {candidates[currentIndex].name}
                  </h2>
                  <div className="flex items-center justify-between">
                    <p className="text-md ">
                      {candidates[currentIndex].college}
                    </p>
                    <p className="text-sm italic">
                      {candidates[currentIndex].course}
                    </p>
                  </div>
                </div>

                {/* <h3 className="mt-3 text-lg font-semibold text-purple-500">
                  Project
                </h3>
                <p className="text-md font-semibold text-gray-800">
                  {candidates[currentIndex].projectTitle}
                </p>
                <p className="text-sm text-gray-600">
                  {candidates[currentIndex].projectDescription}
                </p> */}
              </div>
            </>
          ) : (
            <p className="text-gray-500 text-lg animate-pulse">
              Loading candidates...
            </p>
          )}
        </div>
        <div>
          <div className="flex items-center gap-4">
            <button
              onClick={handlePrevious}
              className="py-4 rounded-md gap-1 px-5 bg-rose-100 flex flex-col items-center justify-center cursor-pointer"
            >
              <FaArrowLeft className="text-rose-400" />
              <span className="text-xs text-red-400 font-medium">Cancel</span>
            </button>
            <button
              onClick={handleNext}
              className="py-4 rounded-md gap-1 px-5 bg-rose-100 flex flex-col items-center justify-center cursor-pointer"
            >
              <FaArrowRight className="text-rose-400" />
              <span className="text-xs text-red-400 font-medium">Accept</span>
            </button>
            <button
              onClick={handleNext}
              className="py-4 rounded-md gap-1 px-5 bg-rose-100 flex flex-col items-center justify-center cursor-pointer"
            >
              <FaArrowUp className="text-rose-400" />
              <span className="text-xs text-red-400 font-medium">Profile</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
