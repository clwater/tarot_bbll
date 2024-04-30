import React, {useImperativeHandle} from "react";
import {Image} from "@nextui-org/react";
import cardBack from "@/app/assets/image/card_back.jpg";

let TarotManager = require('@/app/utils/TarotManager');


export function DivineItem({cardId = 0}) {
    if (cardId == 0) {
        return <div></div>
    }

    let card = TarotManager.getTarotData(cardId)
    const isRev = cardId < 0
    card = isRev ? TarotManager.getTarotData(-1 * cardId) : card

    const _revClass = isRev ? "rotate-180" : ""
    const [revClass, setRevClass] = React.useState("")



    const [isOpen, setIsOpen] = React.useState(false)


    return (
        <div className="text-white"
            onClick={() => {
                if (isOpen){

                }else {
                    setIsOpen(true)
                    setRevClass(_revClass)
                }
            }}
        >
            {
                <div>

                    <Image
                        removeWrapper
                        alt="Card background"
                        className={` ${revClass} bg-cover`}
                        src={isOpen ? card.image: cardBack.src}
                    />
                    <p className=" text-center max">
                        <small>
                        {
                            isOpen ? `${card.name}`: "[un know]"
                        }
                        </small>
                    </p>

                </div>
            }

        </div>
    )
}
