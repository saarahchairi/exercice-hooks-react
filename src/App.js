import React, { useState } from 'react'
import Personnage from './Components/Personnage'

export default function App() {
  let [perso, setPerso] = useState({
    prenom: "Sarah",
    nom: "Chairi",
    age: 25,
    commune: "Evere"
  })
  return (
    <div>
      <Personnage dataPerso={perso} />
    </div>
  )
}

