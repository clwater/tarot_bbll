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

            <Accordion defaultSelectedKeys={"1"}>
                <AccordionItem key="1" aria-label="Major" title="Major">
                    <div className="grid grid-cols-3 gap-4 px-4  justify-center text-centerjustify-center text-center">
                        {
                            major.map((card: CardEntity, index: number) => (
                                <div key={card.id}>
                                    <CardItem card={card}/>
                                </div>
                            ))
                        }
                    </div>
                </AccordionItem>

                <AccordionItem key="2" aria-label="Wands" title="Wands">
                    <div className="grid grid-cols-3 gap-4 px-4">
                        {
                            wands.map((card: CardEntity, index: number) => (
                                <div key={card.id}>
                                    <CardItem card={card}/>
                                </div>
                            ))
                        }
                    </div>
                </AccordionItem>

                <AccordionItem key="3" aria-label="Pentacles" title="Pentacles">
                    <div className="grid grid-cols-3 gap-4 px-4">
                        {
                            pentacles.map((card: CardEntity, index: number) => (
                                <div key={card.id}>
                                    <CardItem card={card}/>
                                </div>
                            ))
                        }
                    </div>
                </AccordionItem>

                <AccordionItem key="4" aria-label="Cups" title="Cups">
                    <div className="grid grid-cols-3 gap-4 px-4">
                        {
                            cups.map((card: CardEntity, index: number) => (
                                <div key={card.id}>
                                    <CardItem card={card}/>
                                </div>
                            ))
                        }
                    </div>
                </AccordionItem>

                <AccordionItem key="5" aria-label="Swords" title="Swords">
                    <div className="grid grid-cols-3 gap-4 px-4">
                        {
                            swords.map((card: CardEntity, index: number) => (
                                <div key={card.id}>
                                    <CardItem card={card}/>
                                </div>
                            ))
                        }
                    </div>
                </AccordionItem>
            </Accordion>

        </div>
    );
}
