import {Header} from "@/app/componets/header";
import React from "react";
import {CardItem} from "@/app/componets/CardArrayShowItem";
import commonBack from "@/app/assets/image/common_back.jpg";


let DivineUtils = require('@/app/utils/DivineUtils');
export default function Tarot() {
    const matrixs = DivineUtils.getMatrixs()

    return (
        <div
            className="bg-scroll  items-center justify-center text-white/90"
            style={{
                backgroundImage: `url(${commonBack.src})`,
            }}
        >
            <Header routeType={1}/>


            {/*<div className="grid grid-rows-3 grid-flow-col gap-4">*/}
            <div className=" px-4 py-4">
                {
                    matrixs.map((cardArrayItem: CardArrayItem, index: number) => (
                        <div key={cardArrayItem.id} className="h-1/2">
                            <CardItem card={cardArrayItem}/>
                        </div>
                    ))
                }
            </div>
        </div>

    );
}
