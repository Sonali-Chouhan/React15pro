import { Link } from "react-router-dom";
import { AiFillDashboard } from "react-icons/ai";
import React,{ useState } from "react";
import "./Sidebar.css"

const Sidebar = () => {
    const [sidebar,setsidebar]=useState(false)
    const showSidebar = () => setsidebar(!sidebar);
    return (
      
      <nav className={sidebar ? "sidebar active" : "sidebar"}>
        <button className="hamburger" type="button" onClick={showSidebar}>
          <div></div>
        </button>
      <ul>
        <li>
          <Link to="/">
            <AiFillDashboard />
            DashBoard
          </Link>
        </li>
        <li>
          <Link to="/card">Card</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
      </ul>
      </nav>
   
  );
};
export default Sidebar;
