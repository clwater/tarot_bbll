'use client';

import React from "react";
import {Image, Link} from "@nextui-org/react";
import {Divider} from "@nextui-org/divider";

let API = require('@/app/utils/API');


export const TarotListItem = ({tarot}: { tarot: TarotSimpleEntity }) => {
    const url = `/tarot/tarot/item?id=${tarot.index}`;

    let badgeColor = 'outline-gray-500'
    switch (tarot.suit) {
        case 'pentacles' :
            badgeColor = 'outline-orange-800';
            break
        case 'cups' :
            badgeColor = 'outline-blue-800';
            break
        case 'wands' :
            badgeColor = 'outline-red-800';
            break
        case 'swords' :
            badgeColor = 'outline-green-800';
            break
    }

    return (

        <Link href={url} key={tarot.index}>
            <div
                className="bg-scroll  w-full items-center justify-center text-white/90 min-h-1000"
                // className={` outline outline-offset-4 items-center justify-center text-white/90  ${badgeColor}`}
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
                        height={200}
                        src={tarot.image_small}
                        width={200}
                    />
                </div>
                <small>{tarot.name}</small>
            </div>
        </Link>
    )
}

export default async function TarotList() {
    const tarots = await API.getTarotSimple();

    return (
        <div>

            <p className="px-4 py-4 text-2xl">Major</p>
            <div className="grid grid-cols-3 gap-4 px-4">
                {
                    tarots.filter((tarot: TarotSimpleEntity) => tarot.type === "major")
                        .map((tarot: TarotSimpleEntity, index: number) => (
                            <TarotListItem tarot={tarot} key={index}/>
                        ))
                }
            </div>
            <Divider className="my-2"/>

            <p className="px-4 py-4 text-2xl">Wands</p>
            <div className="grid grid-cols-3 gap-4 px-4">
                {
                    tarots.filter((tarot: TarotSimpleEntity) => tarot.suit === "wands")
                        .map((tarot: TarotSimpleEntity, index: number) => (
                            <TarotListItem tarot={tarot} key={index}/>
                        ))
                }
            </div>
            <Divider className="my-2"/>


            <p className="px-4 py-4 text-2xl">Pentacles</p>
            <div className="grid grid-cols-3 gap-4 px-4">
                {
                    tarots.filter((tarot: TarotSimpleEntity) => tarot.suit === "pentacles")
                        .map((tarot: TarotSimpleEntity, index: number) => (
                            <TarotListItem tarot={tarot} key={index}/>
                        ))
                }
            </div>
            <Divider className="my-2"/>


            <p className="px-4 py-4 text-2xl">Cups</p>
            <div className="grid grid-cols-3 gap-4 px-4">
                {
                    tarots.filter((tarot: TarotSimpleEntity) => tarot.suit === "cups")
                        .map((tarot: TarotSimpleEntity, index: number) => (
                            <TarotListItem tarot={tarot} key={index}/>
                        ))
                }
            </div>
            <Divider className="my-2"/>

            <p className="px-4 py-4 text-2xl">Swords</p>
            <div className="grid grid-cols-3 gap-4 px-4">
                {
                    tarots.filter((tarot: TarotSimpleEntity) => tarot.suit === "swords")
                        .map((tarot: TarotSimpleEntity, index: number) => (
                            <TarotListItem tarot={tarot} key={index}/>
                        ))
                }
            </div>


        </div>
    )
}