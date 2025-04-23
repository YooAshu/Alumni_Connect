import React, { useEffect, useState } from "react";
import LogOut from "../componenets/logout";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AlumniProfile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const getUser = async () => {
    try {
      const response = await axios.get("/api/user/current-user");
      setUser(response.data.data);
    } catch (error) {
      if (error.response && error.response.status === 401) {
        navigate("/login");
      } else {
        console.error("Failed to fetch user:", error);
      }
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="bg-black pb-12 min-h-screen text-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center bg-black px-6 py-4 text-white">
        <div className="font-sans font-bold text-2xl">Alumni Connect</div>
        <div className="flex flex-wrap gap-2">
          <button
            className="hover:bg-white px-4 py-2 border border-white rounded hover:text-black transition"
            onClick={() => (window.location.href = "/alumni")}
          >
            Feed
          </button>
          <button className="hover:bg-white px-4 py-2 border border-white rounded hover:text-black transition">
            Profile
          </button>
          <LogOut />
        </div>
      </nav>

      {/* Profile Content */}
      {user ? (
        <div className="bg-[#0f0f1c] px-6 py-10 min-h-screen text-white">
          <div className="bg-[#1a1a2e] shadow-lg mx-auto p-6 rounded-xl max-w-4xl">
            <div className="flex items-center gap-6 mb-6">
              <img
                src={`https://api.dicebear.com/9.x/big-smile/svg?seed=${
                  user.rollNumber || "alumni"
                }&backgroundColor=c0aede`}
                alt="Avatar"
                className="border-2 border-violet-500 rounded-full w-24 h-24"
              />
              <div>
                <h2 className="font-bold text-violet-400 text-3xl">
                  {user.fullName}
                </h2>
                <p className="text-gray-400 text-sm">Role: Alumni</p>
              </div>
            </div>
            <div className="gap-6 grid md:grid-cols-2">
              <div>
                <p>
                  <span className="text-gray-400">Graduation Year:</span>{" "}
                  {user.graduationYear || "N/A"}
                </p>
                <p>
                  <span className="text-gray-400">Company:</span>{" "}
                  {user.company || "N/A"}
                </p>
                <p>
                  <span className="text-gray-400">Position:</span>{" "}
                  {user.position || "N/A"}
                </p>
                <p>
                  <span className="text-gray-400">Skills:</span>{" "}
                  {user.skills ? user.skills.join(", ") : "N/A"}
                </p>
                <p>
                  <span className="text-gray-400">Willing to Mentor:</span>{" "}
                  {user.willingToMentor ? "Yes" : "No"}
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="pt-10 text-lg text-center">Loading...</div>
      )}
    </div>
  );
};

export default AlumniProfile;
