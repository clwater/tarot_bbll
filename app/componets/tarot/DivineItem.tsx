import React from "react";


let TarotManager = require('@/app/utils/TarotManager');


export function DivineItem({cardId = 0}) {
    if (cardId == 0) {
        return <div></div>
    }

    let card = TarotManager.getTarotData(cardId)
    const isRev = cardId < 0
    card = isRev ? TarotManager.getTarotData(-1 * cardId) : card
    

    return (
        <div className="text-white">
            {
                <div>
                    {
                        isRev ?
                            <img className="rotate-180" src={card.image} alt={card.name}/>
                            :
                            <img src={card.image} alt={card.name}/>

                    }
                    <br/>
                    {card.name}
                </div>
            }

        </div>
    )
}
