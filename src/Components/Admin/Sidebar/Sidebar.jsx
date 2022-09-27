import React from "react";
import { BrowserRouter as Router,Link,Route,Routes } from "react-router-dom";
import AttendanceTable from "../AttendanceTable/AttendanceTable"
import  "./Sidebar.css"

function Sidebar(){
    return (
      <div className="admin-sidebar">
        <h4 className="logo">Logo amd name</h4>
        <ul className="admin-navigation">
          <Router>
            <Link to="/employees">
              <li>Employees</li>
            </Link>
            <Link to="/attendance">
              <li>Attendance</li>
            </Link>
            <Link to="/statistics">
              <li>Statistics</li>
            </Link>
            <Link to="/settings">
              <li>Settings</li>
            </Link>
          </Router>
        </ul>
      </div>
    );
}

export default Sidebar;