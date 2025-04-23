import React, { useEffect, useState } from "react";
import LogOut from "../componenets/logout";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const StudentProfile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const getUser = async () => {
    try {
      const response = await axios.get("/api/user/current-user");
      setUser(response.data.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
      if (error.response && error.response.status === 401) {
        navigate("/login");
      }
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="flex bg-black min-h-screen text-white">
      {/* Left Sidebar */}
      <aside className="flex flex-col bg-[#0f0f1c] p-6 border-gray-800 border-r w-64">
        <div className="mb-10 font-sans font-bold text-2xl">Alumni Connect</div>
        <button
          className="hover:bg-white mb-2 px-4 py-3 rounded hover:text-black text-left transition"
          onClick={() => (window.location.href = "/student")}
        >
          Feed
        </button>
        <button className="bg-white mb-2 px-4 py-3 rounded text-black text-left transition">
          Profile
        </button>
        <button
          onClick={() => (window.location.href = "/student/questions")}
          className="hover:bg-white mb-2 px-4 py-3 rounded hover:text-black text-left transition"
        >
          Questions
        </button>
        <button
          onClick={() => (window.location.href = "/student/connect")}
          className="hover:bg-white mb-2 px-4 py-3 rounded hover:text-black text-left transition"
        >
          Connect
        </button>
        <div className="mt-auto">
          <LogOut />
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {user ? (
          <div className="bg-[#1a1a2e] shadow-lg mx-auto p-6 rounded-xl max-w-4xl">
            <div className="flex items-center gap-6 mb-6">
              <img
                src={`https://api.dicebear.com/9.x/big-smile/svg?seed=${
                  user.rollNumber || "student"
                }&backgroundColor=c0aede`}
                alt="Avatar"
                className="border-2 border-violet-500 rounded-full w-24 h-24"
              />
              <div>
                <h2 className="font-bold text-violet-400 text-3xl">
                  {user.fullName}
                </h2>
                <p className="text-gray-400 text-sm">Role: Student</p>
              </div>
            </div>
            <div className="gap-6 grid md:grid-cols-2">
              <div>
                <p>
                  <span className="text-gray-400">Skills:</span> React, Node.js,
                  MongoDB
                  {/* Replace with dynamic skills later if needed */}
                </p>
                <p>
                  <span className="text-gray-400">College:</span>{" "}
                  {user.college || "TMSL"}
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="pt-10 text-lg text-center">Loading...</div>
        )}
      </main>
    </div>
  );
};

export default StudentProfile;
