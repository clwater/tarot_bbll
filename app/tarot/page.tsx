import {Header} from "@/app/componets/Header";
import {Card, Image, Link} from "@nextui-org/react";
import React from "react";


import {ArrowRight} from "@/app/componets/Icons/ArrowRight";

export default function TarotMenu() {
    return (

        <div>
            <Header routeType={1}/>


            <Link className="w-full" href="/tarot/divine">
                <Card className="m-4 p-4 flex flex-row w-full">
                    <p className="text-2xl flex-1">Tarot Divine</p>
                    <div className="flex-none text-center ">
                        <ArrowRight />
                    </div>
                </Card>
            </Link>

            <Link className="w-full" href="/tarot/tarot">
                <Card className="m-4 p-4 flex flex-row w-full">
                    <p className="text-2xl flex-1">Tarot Detail</p>
                    <div className="flex-none text-center ">
                        <ArrowRight />
                    </div>
                </Card>
            </Link>


        </div>

    )
}