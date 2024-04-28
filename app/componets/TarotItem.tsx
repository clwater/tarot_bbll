// import {useRouter, useSearchParams} from "next/navigation";
import React from "react";
import {Image, Textarea} from "@nextui-org/react";
import commonBack from '../assets/image/common_back.jpg'
import {Chip} from "@nextui-org/chip";


let TarotManager = require('@/app/utils/TarotManager');

export function TarotItem({id = '1'}) {

    const card = TarotManager.getTarotData(parseInt(id));

    let badgeColor = 'bg-gray-500'
    switch (card.suit){
        case 'pentacles' : badgeColor = 'bg-orange-800'; break
        case 'cups' : badgeColor = 'bg-blue-800'; break
        case 'wands' : badgeColor = 'bg-red-800'; break
        case 'swords' : badgeColor = 'bg-green-800'; break
    }

    return (
        <div
            className="bg-opacity-75 text-white/90 bg-scroll hover:bg-fixed bg-cover bg-center w-full items-center justify-center min-h-1000 backdrop-blur-lg "
            style={{
                backgroundImage: `url(${commonBack.src})`,
            }}

        >
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <Image
                    alt="Woman listing to music"
                    className="object-cover"
                    height={320}
                    src={card.image}
                    width={200}
                />
            </div>
            <div className="px-8 py-8">
                <b>{card.name}</b>
                <br/>

                <Chip
                    classNames={{
                        base: badgeColor,
                        content: "drop-shadow shadow-black text-white",
                    }}
                    variant="shadow" size="sm">{card.type === 'major' ? 'Major': card.suit}</Chip>

                <br/>
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

                <Textarea
                    isReadOnly
                    label={<b>Desc:</b>}
                    variant="bordered"
                    labelPlacement="outside"
                    placeholder=""
                    defaultValue={card.desc}
                    className="w-full"
                />


            </div>
        </div>
        
    )
}