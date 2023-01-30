import React from "react";
import BusinessCard from "./business";
import "./App.css";

export default function App(){

  return (
    <div className="App">
      <BusinessCard  name="Engineer Bainomugisha" passport={"./Engineer.photo.png"}  description={"Project Lead"} about={"I am a passionate researcher."} />&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
      <BusinessCard  name="Alex Mwotil" passport={"./Alex.photo.png"} description={"Project Manager"} about={"I am a Devops engineer."} />&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
      <BusinessCard  name="Wagaba Colins" passport={"./Colin.photo.png"} description={"Devops Engineer"} about={"I am a passionate human creator."} />&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
      <BusinessCard  name="Inno Asiimwe" passport={"./Inno.photo.jpg"} description={"Devops Engineer"} about={"I am a software developer."} />&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
      <BusinessCard  name="Dora Bampangana" passport={"./Dora.photo.jpg"} description={"Project Admin"}  about={"I am a passionate researcher."} />&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
      <BusinessCard  name="Aminah Zawedde" passport={"./Aminah.photo.png"} description={"Senior Researcher"} about={"I am a passionate teacher."} />&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
      <BusinessCard  name="Ankunda Dorothy" passport={"./Dorothy.photo.png"} description={"Business Development Lead"} about={"I am a passionate business personnel."} />&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
      <BusinessCard  name="Derrick Ssekidde" passport={"./Greatest.photo.png"} description={"Devops Engineer"} about={"I am a software designer."} />&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
      <BusinessCard  name="Steve Araka" passport={"./Steve.photo.png"} description={"Devops Engineer"} about={"I am a passionate researcher."} />&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
      <BusinessCard  name="Allan Mubangizi" passport={"./Allan.photo.png"} description={"Devops Engineer"} about={"I am a passionate researcher."} />&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
      <BusinessCard  name="Henry Mutegeki" passport={"./Henry.photo.png"} description={"Devops Engineer"} about={"I am a passionate researcher."} />&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
    </div>
  )
}
