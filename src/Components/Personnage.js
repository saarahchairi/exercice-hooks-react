import React from 'react'

export default function Personnage({ dataPerso, change }) {
    return (
        <div>
            <p>bonjour, je m'appelle {dataPerso.prenom} {dataPerso.nom}, j'ai {dataPerso.age}ans et j'habite à {dataPerso.commune}.</p>
            <button onClick={change}>c'est magique</button>
        </div>
    )
}
