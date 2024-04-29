// import {useRouter, useSearchParams} from "next/navigation";
import React from "react";
import {Image, Textarea} from "@nextui-org/react";
import commonBack from '../assets/image/common_back.jpg'
import {Chip} from "@nextui-org/chip";


let TarotManager = require('@/app/utils/TarotManager');

export function SmallTarotItem({id = '1'}) {

    const card = TarotManager.getTarotData(parseInt(id));

    return (
        <div
            className="text-white"
        >
            <div className="">
                <b>{card.name}</b>
                <br/>

                <Textarea
                    isReadOnly
                    label={<b className="text-white">Mean up:</b>}
                    variant="bordered"
                    labelPlacement="outside"
                    placeholder=""
                    defaultValue={card.meaning_up}
                    className="w-full"
                />

                <Textarea
                    isReadOnly
                    label={<b className="text-white">Mean rev:</b>}
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