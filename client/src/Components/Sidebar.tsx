import React, { useState } from "react";
import { Link } from "react-router-dom";
import LottiePlayer from "./LottiePlayer";
import DashboardIcon from "../assets/DashboardIcon.json";
import ContactBook from "../assets/ChartGraph.json";
import ChartGraph from "../assets/ContactsBook.json";
import User from "../assets/user.jpg";
import "./styles.css";

// Sidebar component definition
const Sidebar: React.FC = () => {
  // State to control whether the sidebar is minimized or not
  const [isSidebarMinimized, setIsSidebarMinimized] = useState(false);

  // Function to toggle the sidebar state
  const toggleSidebar = () => {
    setIsSidebarMinimized(!isSidebarMinimized);
  };

  // JSX rendering
  return (
    <div
      className={`bg-gray-800 h-2000 transition-all ${
        isSidebarMinimized ? "w-20" : "w-64"
      }`}
    >
      <div className="flex flex-col h-full p-4">
        {/* Top section with app name and toggle button */}
        <div className="flex items-center justify-between">
          <span
            className={`text-xl font-semibold ${
              isSidebarMinimized ? "hidden" : ""
            }`}
            style={{ color: "#FFF" }}
          >
            Dashboard
          </span>
          <button
            onClick={toggleSidebar}
            className="block p-2 focus:outline-none"
          >
            {/* Sidebar toggle icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="h-6 w-6 fill-current"
              style={{ color: "#FFF" }}
            >
              <path d="M2 6H22V8H2zM2 11H22V13H2zM2 16H22V18H2z" />
            </svg>
          </button>
        </div>

        {/* Sidebar navigation links */}
        <ul className="mt-5">

          {/* Dashboard link */}
          <li className="mt-2">
            <Link
              to="/"
              className={`flex items-center transition-colors font-bold text-center hover:bg-gray-700 ${
                isSidebarMinimized ? "text-white" : "text-red-500"
              } ${isSidebarMinimized ? "" : "hover:border rounded-lg"}`}
            >
              <LottiePlayer
                animationData={DashboardIcon}
                width={80}
                height={80}
                loop={true}
                autoplay={true}
                speed={1}
                className={isSidebarMinimized ? "minimized-icon" : ""}
              />
              {!isSidebarMinimized && "Dashboard"}
            </Link>
          </li>

          {/* Contacts link */}
          <li className="mt-2">
            <Link
              to="/contacts"
              className={`flex items-center transition-colors font-bold text-center hover:bg-gray-700 ${
                isSidebarMinimized ? "text-white" : "text-green-500"
              } ${isSidebarMinimized ? "" : "hover:border rounded-lg"}`}
            >
              <LottiePlayer
                animationData={ChartGraph}
                width={80}
                height={80}
                loop={true}
                autoplay={true}
                speed={1}
                className={isSidebarMinimized ? "minimized-icon" : ""}
              />
              {!isSidebarMinimized && "Contacts"}
            </Link>
          </li>

          {/* Charts & Maps link */}
          <li className="mt-2">
            <Link
              to="/charts-and-maps"
              className={`flex items-center transition-colors font-bold text-center hover:bg-gray-700 ${
                isSidebarMinimized ? "text-white" : "text-blue-500"
              } ${isSidebarMinimized ? "" : "hover:border rounded-lg"}`}
            >
              <LottiePlayer
                animationData={ContactBook}
                width={80}
                height={80}
                loop={true}
                autoplay={true}
                speed={1}
                className={isSidebarMinimized ? "minimized-icon" : ""}
              />
              {!isSidebarMinimized && "Charts & Maps"}
            </Link>
          </li>


          {/* User profile image */}
          <img
            src={User}
            alt="Profile"
            className={`w-20 h-20 rounded-full mx-auto mt-20 ${
              isSidebarMinimized ? "hidden" : "block"
            }`}
          />
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;