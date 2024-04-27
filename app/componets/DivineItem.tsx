import React from "react";


let TarotManager = require('@/app/utils/TarotManager');


export async function DivineItem({cardId = 0}) {
    if (cardId == 0) {
        return <div></div>
    }
    const card = await TarotManager.getTarotData(cardId)
    
    

    return (
        <div className="text-white">
            {
                <div>
                    <img src={card.image} alt={card.name}/>
                    <br/>
                    {card.name}
                </div>
            }

        </div>
    )
}
