import React from "react";
import Navbar from "./components/navbar";
import BusinessCard from "./components/business";
import "./App.css";
import engineer from "./components/pictures/Engineer.photo.png";
import alex from "./components/pictures/Alex.photo.png";
import colins from "./components/pictures/Colin.photo.png";
import inno from "./components/pictures/Inno.photo.jpg";
import dora from "./components/pictures/Dora.photo.jpg";
import aminah from "./components/pictures/Aminah.photo.png";
import ankunda from "./components/pictures/Dorothy.photo.png";
import derrick from "./components/pictures/Greatest.photo.png";
import steve from "./components/pictures/Steve.photo.png";
import allan from "./components/pictures/Allan.photo.png";
import henry from "./components/pictures/Henry.photo.png";

const businessArray = [
  { passport : engineer , name : "Eng. Bainomugisha", description : "Project Lead" , about : "I am a passionate researcher." },
  { passport : alex , name : "Alex Mwotil", description : "Project Manager" , about : "I am a Devops engineer." },
  { passport : colins , name : "Wagaba Colins", description : "Devops Engineer" , about : "I am a Devops engineer." },
  { passport : inno , name : "Inno Asiimwe", description : "Devops Engineer" , about : "I am a Devops engineer." },
  { passport : dora , name : "Dora Bampangana", description : "Project Admin" , about : "I am a passionate researcher." },
  { passport : aminah , name : "Aminah Zawedde", description : "Senior Researcher" , about : "I am a passionate researcher." },
  { passport : steve , name : "Steve Araka", description : "Devops Engineer" , about : "I am a passionate teacher." },
  { passport : derrick , name : "Derrick Ssekidde", description : "Devops Engineer" , about : "I am a passionate teacher." },
  { passport : ankunda , name : "Aminah Zawedde", description : "Senior Researcher" , about : "I am a passionate teacher." },
  { passport : allan , name : "Allan Mubangizi", description : "Devops Engineer" , about : "I am a passionate researcher." },
  { passport : henry , name : "Henry Mutegeki", description : "Devops Engineer" , about : "I am a passionate researcher." },
];

export default function App(){

  return (
    <>
      <Navbar />
       <div className="App">
        {businessArray.map((data) => (
          <BusinessCard  name={data.name} passport={data.passport}  description={data.description} about={data.about} />
        ))}
       </div>
    </>
  )
}
