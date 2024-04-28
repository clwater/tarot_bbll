// import {useRouter, useSearchParams} from "next/navigation";
import React from "react";
import {Image} from "@nextui-org/react";
import commonBack from '../assets/image/common_back.png'
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
            className="bg-scroll h-full w-full items-center justify-center text-white/90 "
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
                {/*<Image src="/image.png" width="100" height="1000" />*/}
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
                <b>Mean up:</b>
                <br/>
                {card.meaning_up}
                <br/>
                <b>Mean rev:</b>
                <br/>
                {card.meaning_rev}
                <br/>
                <br/>
                <b>Desc:</b>
                <br/>
                <small>{card.desc}</small>

            </div>
        </div>
        
    )
}