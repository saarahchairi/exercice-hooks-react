import React from 'react'

export default function Article({dataArticle}) {
    return (
        <div>
            {
                dataArticle.map((objet) => {
                    return(
                        <p key={objet}>{objet}</p>
                    )
                })
            }
        </div>
    )
}
