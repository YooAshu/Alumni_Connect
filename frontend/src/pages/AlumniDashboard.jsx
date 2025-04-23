import React from 'react'
import LogOut from '../componenets/logout'

const AlumniDashboard = () => {
  return (
    <div className="bg-black pb-12 min-h-screen text-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center bg-black px-6 py-4 text-white">
        <div className="font-sans font-bold text-2xl">Alumni Connect</div>
        <div className="flex flex-wrap gap-2">
        <button className="hover:bg-white px-4 py-2 border border-white rounded hover:text-black transition"
           
          >
            Feed
          </button>
          <button className="hover:bg-white px-4 py-2 border border-white rounded hover:text-black transition"
            onClick={() => window.location.href = "/alumni/profile"}
          >
            Profile
          </button>
          <LogOut/>
        </div>
      </nav>

      {/* Dashboard Content */}
      <div className="mt-12 text-center">
        <h2 className="drop-shadow-md font-semibold text-3xl">Welcome to your Dashboard</h2>
        <p className="drop-shadow-sm mt-3 text-gray-300 text-lg">
          Here you can connect with alumni and get valuable insights for your career.
        </p>
      </div>
    </div>
  )
}

export default AlumniDashboard
