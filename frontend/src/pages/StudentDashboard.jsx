import React, { useState } from "react";
import LogOut from "../componenets/logout";

const StudentDashboard = () => {
  const [question, setQuestion] = useState("");
  const [questions, setQuestions] = useState([]);

  const handleSubmit = () => {
    if (question.trim()) {
      setQuestions([...questions, question]);
      setQuestion("");
    }
  };

  return (
    <div className="flex bg-black min-h-screen text-white">
      {/* Left Sidebar Navigation */}
      <aside className="flex flex-col bg-[#0f0f1c] p-6 border-gray-800 border-r w-64">
        <div className="mb-10 font-sans font-bold text-2xl">Alumni Connect</div>
        <button className="bg-white mb-2 px-4 py-3 rounded text-black text-left transition">
          Feed
        </button>
        <button
          onClick={() => (window.location.href = "/student/profile")}
          className="hover:bg-white mb-2 px-4 py-3 rounded hover:text-black text-left transition"
        >
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

      {/* Main Content Area */}
      <main className="flex flex-col flex-1 items-center p-8">
        <h2 className="drop-shadow-md font-semibold text-3xl">
          Welcome to your Dashboard
        </h2>
        <p className="drop-shadow-sm mt-3 text-gray-300 text-lg">
          Here you can connect with alumni and get valuable insights for your
          career.
        </p>
      </main>
    </div>
  );
};

export default StudentDashboard;
