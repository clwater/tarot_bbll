import React, {Suspense} from "react";

import {Header} from "@/app/componets/header";
import {CardItem} from "@/app/componets/CardItem";

let TarotManager = require('@/app/utils/TarotManager');


export default function Tarot() {
    const major = TarotManager.getTarotDataMajor();
    const wands = TarotManager.getTarotDataMinors("wands");
    const pentacles = TarotManager.getTarotDataMinors("pentacles");
    const cups = TarotManager.getTarotDataMinors("cups");
    const swords = TarotManager.getTarotDataMinors("swords");
    return (
        <div>
            <Header routeType={2}/>

            <b className="px-4 py-4">Major</b>
            <div className="grid grid-cols-4 gap-4 px-4">
                {
                    major.map((card: CardEntity, index: number) => (
                        <div key={card.id}>
                            <CardItem card={card}/>
                        </div>
                    ))
                }
            </div>

            <b className="px-4 py-4">Wands</b>
            <div className="grid grid-cols-4 gap-4 px-4">
                {
                    wands.map((card: CardEntity, index: number) => (
                        <div key={card.id}>
                            <CardItem card={card}/>
                        </div>
                    ))
                }
            </div>

            <b className="px-4 py-4">Pentacles</b>
            <div className="grid grid-cols-4 gap-4 px-4">
                {
                    pentacles.map((card: CardEntity, index: number) => (
                        <div key={card.id}>
                            <CardItem card={card}/>
                        </div>
                    ))
                }
            </div>

            <b className="px-4 py-4">Cups</b>
            <div className="grid grid-cols-4 gap-4 px-4">
                {
                    cups.map((card: CardEntity, index: number) => (
                        <div key={card.id}>
                            <CardItem card={card}/>
                        </div>
                    ))
                }
            </div>

            <b className="px-4 py-4">Swords</b>
            <div className="grid grid-cols-4 gap-4 px-4">
                {
                    swords.map((card: CardEntity, index: number) => (
                        <div key={card.id}>
                            <CardItem card={card}/>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}
