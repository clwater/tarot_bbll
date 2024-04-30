import {Header} from "@/app/componets/Header";
import React from "react";
import {CardItem} from "@/app/componets/tarot/CardArrayShowItem";


let DivineUtils = require('@/app/utils/DivineUtils');
export default function Tarot() {
    const matrixs = DivineUtils.getMatrixs()

    return (
        <div
            className="bg-scroll  items-center justify-center text-white/90 h-full"
        >
            <Header routeType={1}/>


            {/*<div className="grid grid-rows-3 grid-flow-col gap-4">*/}
            <div className=" px-2 py-1 gap-2 h-full grid grid-cols-2">
                {
                    matrixs.map((cardArrayItem: CardArrayItem, index: number) => (
                        <div key={cardArrayItem.id} className={`h-${20 * cardArrayItem.hSize}`}>
                            <CardItem card={cardArrayItem}/>
                        </div>
                    ))
                }
            </div>
        </div>

    );
}
