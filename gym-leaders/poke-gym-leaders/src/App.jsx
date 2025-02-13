import { useState } from "react";

import Header from "./components/Header";
import Leaders from "./components/Leaders";

import "./App.css";

const gymLeaders = [
  {
    name: "Roxanne",
    title: "The Rock-Loving Honors Student",
    type: "Rock",
    badge:
      "https://archives.bulbagarden.net/media/upload/thumb/6/63/Stone_Badge.png/40px-Stone_Badge.png",
    img: "https://archives.bulbagarden.net/media/upload/thumb/9/90/VSRoxanne.png/150px-VSRoxanne.png",
  },
  {
    name: "Brawly",
    title: "A big wave in fighting",
    type: "Fighting",
    badge:
      "https://archives.bulbagarden.net/media/upload/thumb/9/97/Knuckle_Badge.png/40px-Knuckle_Badge.png",
    img: "https://archives.bulbagarden.net/media/upload/thumb/d/d1/VSBrawly.png/150px-VSBrawly.png",
  },
  {
    name: "Wattson",
    title: "The cheerfully electrifying man",
    type: "Electric",
    badge:
      "https://archives.bulbagarden.net/media/upload/thumb/3/34/Dynamo_Badge.png/40px-Dynamo_Badge.png",
    img: "https://archives.bulbagarden.net/media/upload/thumb/c/c2/VSWattson.png/150px-VSWattson.png",
  },
  {
    name: "Flanney",
    title: "One with a fiery passion that burns",
    type: "Fire",
    badge:
      "https://archives.bulbagarden.net/media/upload/thumb/c/c4/Heat_Badge.png/40px-Heat_Badge.png",
    img: "https://archives.bulbagarden.net/media/upload/thumb/f/f3/VSFlannery.png/150px-VSFlannery.png",
  },
  {
    name: "Norman",
    title: "A man in pursuit of power",
    type: "Normal",
    badge:
      "https://archives.bulbagarden.net/media/upload/thumb/6/63/Balance_Badge.png/40px-Balance_Badge.png",
    img: "https://archives.bulbagarden.net/media/upload/thumb/a/a0/VSNorman.png/150px-VSNorman.png",
  },
  {
    name: "Winona",
    title: " The bird user taking flight into the world",
    type: "Flying",
    badge:
      "https://archives.bulbagarden.net/media/upload/thumb/6/62/Feather_Badge.png/40px-Feather_Badge.png",
    img: "https://archives.bulbagarden.net/media/upload/thumb/0/0a/VSWinona.png/150px-VSWinona.png",
  },
  {
    name: "Tate and Liza",
    title: "The mystic combination ",
    type: "Psychic",
    badge:
      "https://archives.bulbagarden.net/media/upload/thumb/c/cc/Mind_Badge.png/40px-Mind_Badge.png",
    img: "https://archives.bulbagarden.net/media/upload/thumb/c/cb/VSLiza_%26_Tate.png/150px-VSLiza_%26_Tate.png",
  },
  {
    name: "Wallce",
    title: "Artist, and lover of water",
    type: "Rock",
    badge:
      "https://archives.bulbagarden.net/media/upload/thumb/9/9b/Rain_Badge.png/40px-Rain_Badge.png",
    img: "https://archives.bulbagarden.net/media/upload/thumb/3/3d/VSWallace.png/128px-VSWallace.png",
  },
  {
    name: "Juan",
    title: "The Gym Leader with beauty of pure water",
    type: "Water",
    badge:
      "https://archives.bulbagarden.net/media/upload/thumb/9/9b/Rain_Badge.png/40px-Rain_Badge.png",
    img: "https://archives.bulbagarden.net/media/upload/1/16/Spr_E_Juan.png",
  },
];

function App() {
  return (
    <>
      <div className="app">
        <Header />
        <div className="gym-cards">
        {gymLeaders.map((leader) => (
          <Leaders
            key={leader.name}
            nome={leader.name}
            tipo={leader.type}
            foto={leader.img}
            insignia={leader.badge}
            titulo={leader.title}
          ></Leaders>
        ))}
        </div>
      </div>
    </>
  );
}

export default App;
