import { useState, useEffect } from "react";
import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";

const Dashboard = () => {
  const [jobFieldsOpen, setJobFieldsOpen] = useState(false);
  const [skillsOpen, setSkillsOpen] = useState(false);
  const [candidates, setCandidates] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // just dummy data for referense 
  useEffect(() => {
    const dummyData = [
      {
        "id": 1,
        "name": "John Doe",
        "profilePhoto": "https://randomuser.me/api/portraits/men/1.jpg",
        "college": "Harvard University",
        "course": "Computer Science",
        "skills": ["JavaScript", "React", "Node.js"],
        "projectTitle": "E-commerce Website",
        "projectDescription": "A fully functional e-commerce platform built using React and Node.js.",
        "repoLink": "https://github.com/johndoe/ecommerce"
      },
      {
        "id": 2,
        "name": "allen",
        "profilePhoto": "https://randomuser.me/api/portraits/men/1.jpg",
        "college": "Harvard University",
        "course": "Computer Science",
        "skills": ["JavaScript", "React", "Node.js"],
        "projectTitle": "E-commerce Website",
        "projectDescription": "A fully functional e-commerce platform built using React and Node.js.",
        "repoLink": "https://github.com/johndoe/ecommerce"
      },
      {
        "id": 3,
        "name": "miller",
        "profilePhoto": "https://randomuser.me/api/portraits/men/1.jpg",
        "college": "Harvard University",
        "course": "Computer Science",
        "skills": ["JavaScript", "React", "Node.js"],
        "projectTitle": "E-commerce Website",
        "projectDescription": "A fully functional e-commerce platform built using React and Node.js.",
        "repoLink": "https://github.com/johndoe/ecommerce"
      }
    ];
    setCandidates(dummyData);
  }, []);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : candidates.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < candidates.length - 1 ? prevIndex + 1 : 0));
  };

  return (
    <div className="ml-40">

      <nav className="h-16 flex items-center gap-6 px-6 bg-white shadow-md rounded-lg">

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
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-pink-100">Software Developer</a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-pink-100">Data Analyst</a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-pink-100">Web Designer</a>
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
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-purple-100">JavaScript</a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-purple-100">Python</a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-purple-100">React.js</a>
            </div>
          )}
        </div>
      </nav>


      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full h-screen p-4">

        <div
          className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-center cursor-pointer hover:bg-pink-100 transition"
          onClick={handlePrevious}
        >
          <FaAnglesLeft className="text-pink-400 text-2xl" />
        </div>


        <div className="bg-white shadow-xl rounded-2xl p-6 flex flex-col items-center text-gray-700 w-full max-w-md 
                transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
          {candidates.length > 0 ? (
            <>
              <div className="relative w-[150px] h-[150px] rounded-full overflow-hidden border-4 border-transparent bg-gradient-to-r from-pink-300 to-purple-400 p-1">
                <img
                  src={candidates[currentIndex].profilePhoto}
                  alt="Profile"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="w-full mt-4 text-left">
                <h2 className="text-2xl font-semibold text-gray-800">{candidates[currentIndex].name}</h2>
                <p className="text-md text-gray-600">{candidates[currentIndex].college}</p>
                <p className="text-sm text-gray-500 italic">{candidates[currentIndex].course}</p>

                <h3 className="mt-3 text-lg font-semibold text-pink-500">Skills</h3>
                <p className="text-sm text-gray-600">{candidates[currentIndex].skills.join(", ")}</p>

                <h3 className="mt-3 text-lg font-semibold text-purple-500">Project</h3>
                <p className="text-md font-semibold text-gray-800">{candidates[currentIndex].projectTitle}</p>
                <p className="text-sm text-gray-600">{candidates[currentIndex].projectDescription}</p>
              </div>

              <div className="w-full flex justify-center mt-4">
                <a
                  href={candidates[currentIndex].repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
                >
                  View Repository
                </a>
              </div>
            </>
          ) : (
            <p className="text-gray-500 text-lg animate-pulse">Loading candidates...</p>
          )}
        </div>





        <div
          className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-center cursor-pointer hover:bg-pink-100 transition"
          onClick={handleNext}
        >
          <FaAnglesRight className="text-pink-400 text-2xl" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
