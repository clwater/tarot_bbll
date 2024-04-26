// import {useRouter, useSearchParams} from "next/navigation";
import React from "react";

let TarotManager = require('@/app/utils/TarotManager');

export async function TarotItem({id= '1'}) {
    console.log("id: "+ id)
    const card = await TarotManager.getTarotData(parseInt(id));
    return (
            <div>
                 {id}
                 {card.name}
                 {card.image}
             </div>
    )
}