import React from "react";
import "../index.css";
import "../App.css";
import logo from "../components/pictures/CraneCloudlogo.png";

export default function Navbar(){
    return(
        <div className="top-header">
            <navbar className="nav">
                <img src={logo} alt="top" className="img-set" />
                <h2>Team Members</h2>
            </navbar>
        </div>
    );
}