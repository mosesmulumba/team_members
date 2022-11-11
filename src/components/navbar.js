import React from "react";
import "../index.css";

export default function Navbar(){
    return(
        <div className="top-header">
            <navbar className="nav">
                <img src="CraneCloudlogo.png" alt="top" className="img-set" />
                <h2>Team Members</h2>
            </navbar>
        </div>
    );
}