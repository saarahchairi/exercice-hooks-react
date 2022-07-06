import React, { useState } from 'react'
import Personnage from './Components/Personnage'
import Article from './Components/Article';

export default function App() {
  let [perso, setPerso] = useState({
    prenom: "Sarah",
    nom: "Chairi",
    age: 25,
    commune: "Evere"
  });
  let rename = () =>{
    setPerso({
      prenom: "Zaza",
      nom: "Chacha",
      age: 20,
      commune: "Anderlecht"
    });
  }
  let [objet, setObjet] = useState([
    "Iphone", "Macbook", "Ipad", "Ipod", "Apple Watch"
  ]);
  return (
    <div>
      <Personnage dataPerso={perso} change={rename}/>
      <Article dataArticle={objet}/>
    </div>
  )
}

