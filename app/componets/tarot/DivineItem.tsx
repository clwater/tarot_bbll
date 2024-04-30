import React from "react";
import {Image} from "@nextui-org/react";


let TarotManager = require('@/app/utils/TarotManager');


export function DivineItem({cardId = 0}) {
    if (cardId == 0) {
        return <div></div>
    }

    let card = TarotManager.getTarotData(cardId)
    const isRev = cardId < 0
    card = isRev ? TarotManager.getTarotData(-1 * cardId) : card

    const revClass = isRev ? "rotate-180" : ""

    return (
        <div className="text-white">
            {
                <div>

                    <Image
                        removeWrapper
                        alt="Card background"
                        className={` ${revClass} bg-cover`}
                        src={card.image}
                    />
                    {card.name}
                </div>
            }

        </div>
    )
}
