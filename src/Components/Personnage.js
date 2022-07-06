import React from 'react'
import App from '../App';

export default function Personnage({dataPerso}) {
  return (
    <div>
        <p>bonjour, je m'appelle {dataPerso.prenom} {dataPerso.nom}, j'ai {dataPerso.age}ans et j'habite à {dataPerso.commune}.</p>
    </div>
  )
}
