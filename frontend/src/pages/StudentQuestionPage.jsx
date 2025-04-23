import React, { useState } from "react";
import LogOut from "../componenets/logout";

const StudentQuestionPage = () => {
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
        <button
          className="hover:bg-white mb-2 px-4 py-3 rounded hover:text-black text-left transition"
          onClick={() => (window.location.href = "/student")}
        >
          Feed
        </button>
        <button
          onClick={() => (window.location.href = "/student/profile")}
          className="hover:bg-white mb-2 px-4 py-3 rounded hover:text-black text-left transition"
        >
          Profile
        </button>
        <button className="bg-white mb-2 px-4 py-3 rounded text-black text-left transition">
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
        {/* Ask a Question Section */}
        <div className="mt-10 w-[60%]">
          <h3 className="mb-4 font-bold text-violet-400 text-xl">
            Ask a Question
          </h3>
          <textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Type your question here..."
            className="bg-[#1a1a2e] p-4 border border-violet-500 rounded-lg w-full h-32 text-white resize-none"
          />
          <button
            onClick={handleSubmit}
            className="bg-violet-500 hover:bg-violet-600 mt-4 px-6 py-2 rounded-lg text-white transition"
          >
            Submit
          </button>
        </div>

        {/* Display Submitted Questions */}
        {questions.length > 0 && (
          <div className="mt-10 w-[60%]">
            <h4 className="mb-2 font-semibold text-gray-300 text-lg">
              Questions asked by students
            </h4>
            <ul className="flex flex-col justify-start space-y-4">
              {questions.map((q, index) => (
                <li
                  key={index}
                  className="bg-[#1a1a2e] p-4 border border-gray-600 rounded-md"
                >
                  {q}
                </li>
              ))}
            </ul>
          </div>
        )}
      </main>
    </div>
  );
};

export default StudentQuestionPage;
