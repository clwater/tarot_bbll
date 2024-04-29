import {Header} from "@/app/componets/header";
import {Card, Image, Link} from "@nextui-org/react";
import React from "react";

import cardImage from '@/app/assets/image/card_back.jpg'

export default function TarotMenu() {
    return (

        <div>
            <Header routeType={1}/>


            <Link className="w-full" href="/tarot/divine">
                <Card className="m-4 p-4 flex flex-row w-full">
                    <p className="text-2xl flex-1">Tarot Divine</p>
                    <p className="flex-none text-center ">{"->"}</p>
                </Card>
            </Link>

            <Link className="w-full" href="/tarot/tarot">
                <Card className="m-4 p-4 flex flex-row w-full">
                    <p className="text-2xl flex-1">Tarot Detail</p>
                    <p className="flex-none text-center ">{"->"}</p>
                </Card>
            </Link>


        </div>

    )
}