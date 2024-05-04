"use client";

import React, {Suspense} from "react";

import {Header} from "@/app/componets/Header";
import {CardItem} from "@/app/componets/tarot/CardItem";
import {Accordion, AccordionItem} from "@nextui-org/react";
let TarotManager = require('@/app/utils/TarotManager');


export default function Tarot() {
    const major = TarotManager.getTarotDataMajor();
    const wands = TarotManager.getTarotDataMinors("wands");
    const pentacles = TarotManager.getTarotDataMinors("pentacles");
    const cups = TarotManager.getTarotDataMinors("cups");
    const swords = TarotManager.getTarotDataMinors("swords");
    return (
        <div
            className="bg-scroll  w-full items-center justify-center text-white/90 min-h-1000"
        >
            <Header routeType={2}/>

            <p className="px-4 py-4 text-2xl">Major</p>
            <div className="grid grid-cols-3 gap-4 px-4  justify-center text-centerjustify-center text-center">
                {
                    major.map((card: CardEntity, index: number) => (
                        <div key={card.id}>
                            <CardItem card={card}/>
                        </div>
                    ))
                }
            </div>

            <p className="px-4 py-4 text-2xl">Wands</p>
                <div className="grid grid-cols-3 gap-4 px-4">
                    {
                        wands.map((card: CardEntity, index: number) => (
                            <div key={card.id}>
                                <CardItem card={card}/>
                            </div>
                        ))
                    }
                </div>

            <p className="px-4 py-4 text-2xl">Pentacles</p>
                <div className="grid grid-cols-3 gap-4 px-4">
                    {
                        pentacles.map((card: CardEntity, index: number) => (
                            <div key={card.id}>
                                <CardItem card={card}/>
                            </div>
                        ))
                    }
                </div>

            <p className="px-4 py-4 text-2xl">Cups</p>
                <div className="grid grid-cols-3 gap-4 px-4">
                    {
                        cups.map((card: CardEntity, index: number) => (
                            <div key={card.id}>
                                <CardItem card={card}/>
                            </div>
                        ))
                    }
                </div>

            <p className="px-4 py-4 text-2xl">Swords</p>
                <div className="grid grid-cols-3 gap-4 px-4">
                    {
                        swords.map((card: CardEntity, index: number) => (
                            <div key={card.id}>
                                <CardItem card={card}/>
                            </div>
                        ))
                    }
                </div>

</div>
)
    ;
}
