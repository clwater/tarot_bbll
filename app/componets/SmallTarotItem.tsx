// import {useRouter, useSearchParams} from "next/navigation";
import React from "react";
import {Image, Textarea} from "@nextui-org/react";
import commonBack from '../assets/image/common_back.jpg'
import {Chip} from "@nextui-org/chip";


let TarotManager = require('@/app/utils/TarotManager');

export function SmallTarotItem({id = '1'}) {
    console.log(id)

    const card = TarotManager.getTarotData(parseInt(id));
    console.log(card)

    return (
        <div
            className="bg-black text-white"
        >
            <div className="px-8 py-8">
                <b>{card.name}</b>
                <br/>

                <Textarea
                    isReadOnly
                    label={<b>Mean up:</b>}
                    variant="bordered"
                    labelPlacement="outside"
                    placeholder=""
                    defaultValue={card.meaning_up}
                    className="w-full"
                />

                <Textarea
                    isReadOnly
                    label={<b>Mean rev:</b>}
                    variant="bordered"
                    labelPlacement="outside"
                    placeholder=""
                    defaultValue={card.meaning_rev}
                    className="w-full"
                />
            </div>
        </div>
        
    )
}