import React, { useState } from "react";
import LogOut from "../componenets/logout";
import { Briefcase, Lightbulb, BarChart3 } from "lucide-react";

const postIcons = {
  Internship: <Briefcase className="w-5 h-5 text-violet-400" />,
  Tips: <Lightbulb className="w-5 h-5 text-yellow-400" />,
  "Industry Insights": <BarChart3 className="w-5 h-5 text-cyan-400" />,
};

const StudentDashboard = () => {
  const posts = [
    {
      id: 1,
      type: "Internship",
      content:
        "An internship opening at XYZ Corp for frontend development using React. Remote work, flexible hours, and a certificate upon completion. Apply by June 5th!",
    },
    {
      id: 2,
      type: "Tips",
      content:
        "Always tailor your resume to the specific role. Highlight the skills they’re looking for, and don’t forget to add relevant projects with GitHub links.",
    },
    {
      id: 3,
      type: "Industry Insights",
      content:
        "AI/ML are reshaping industries. Learn about large language models and cloud-based solutions to stay ahead in tech.",
    },
    {
      id: 4,
      type: "Internship",
      content:
        "TechNova is hiring data science interns. You’ll work with real-world datasets and publish your results. Stipend: ₹10,000/month. Deadline: May 31st.",
    },
    {
      id: 5,
      type: "Tips",
      content:
        "Contribute to open-source! It builds your portfolio and gives you real-world team experience. Try Hacktoberfest or pick a GitHub issue to start.",
    },
    {
      id: 6,
      type: "Industry Insights",
      content:
        "Cybersecurity jobs are booming. Entry-level analysts earn ₹5–8 LPA. Get hands-on with tools like Wireshark, Burp Suite, and Kali Linux.",
    },
    {
      id: 7,
      type: "Internship",
      content:
        "Product design internship at PixelWorks. Learn Figma, conduct user testing, and create UI kits. Ideal for students interested in UX/UI.",
    },
    {
      id: 8,
      type: "Tips",
      content:
        "During interviews, explain your thought process clearly. It's not always about the correct answer, but how you approach the problem.",
    },
    {
      id: 9,
      type: "Industry Insights",
      content:
        "DevOps engineers are in demand. Learn CI/CD, Docker, and GitHub Actions to stand out. Certifications from AWS or Azure help too.",
    },
  ];

  return (
    <div className="flex bg-black min-h-screen text-white">
      {/* Left Sidebar Navigation */}
      <aside className="fixed flex flex-col bg-[#0f0f1c] p-6 border-gray-800 border-r w-64 h-screen">
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
        <div className="mx-auto mt-10 px-4 w-full max-w-4xl">
          <h1 className="mb-6 font-bold text-white text-3xl">Alumni Posts</h1>
          <div className="space-y-5">
            {posts.map((post) => (
              <div
                key={post.id}
                className="flex items-start gap-4 bg-[#1c1c2e] shadow-md hover:shadow-violet-700/20 p-5 border border-violet-800/30 rounded-xl transition-shadow duration-300"
              >
                <div className="mt-1">{postIcons[post.type]}</div>
                <div>
                  <span className="inline-block bg-gradient-to-r from-violet-500 to-indigo-500 px-2 py-1 rounded-full font-semibold text-white text-xs uppercase tracking-wider">
                    {post.type}
                  </span>
                  <p className="mt-3 text-gray-200 text-base">{post.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default StudentDashboard;
