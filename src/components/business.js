import React from "react";
import "../index.css";
import "../App.css";
import location from "../components/pictures/location.png";
import email from "../components/pictures/email.png";
import phone from "../components/pictures/phone.jpeg";

const BusinessCard =({name , passport, description , about })=> {
  
  return (
      <div className="container--all">
        <img src={passport} alt="passport"  width="250px" height="250px"/>
        <div className="back">
            <h2 className="header">{name}</h2>
            <h5 className="description"><em>{description}</em></h5>
            <h4 className="default">About Me</h4>
              <center>
                <p className="paragraph">{about}</p>
              </center>
          </div>
          <footer>
              <a href="+256-705722053" rel="PHONE" target="_blank">
                <img src={phone} alt="passport" className="phone-icon" />
              </a>
              <a href="mailto:mulumbamoses94@gmail.com" rel="e-mail">
                <img src={email} alt="E-MAIL" className="email-icon" />
              </a>
              <a href="9H73+FJH,Kampala" rel="location">
                <img src={location} alt="LOCATION" className="location-icon" />
              </a>
          </footer>
      </div>
  );
}

export default BusinessCard;

