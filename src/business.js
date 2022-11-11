import React from "react";
import "./index.css";

const BusinessCard =({name , passport, description})=> {
  
  return (
    
    <div className="container--all">
     
      <img src={passport} alt="passport"  width="350px" height="400px"/>
      <div className="back">
          <h2 className="header">{name}</h2>
          <h5 className="description"><em>{description}</em></h5>
          <h4 className="default">About Me</h4>
              <p className="paragraph">I am a passionate researcher with a focus
              on designing and programing Apps,platforms and sites.
                  I am dediicated to helping people as i can and proving that
                  technology is the future we all gat.
              </p>
        </div>
        <footer>
            <a href="+256-705722053" rel="PHONE" target="_blank">
              <img src="phone-icon.jpg" alt="passport" className="phone-icon" />
            </a>
            <a href="mailto:mulumbamoses94@gmail.com" rel="e-mail">
              <img src="email-icon2.jpg" alt="E-MAIL" className="email-icon" />
            </a>
            <a href="9H73+FJH,Kampala" rel="location">
              <img src="location-icon.jpg" alt="LOCATION" className="location-icon" />
            </a>
        </footer>
    </div>
  )
}

export default BusinessCard;

