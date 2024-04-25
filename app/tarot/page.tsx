import {Header} from "@/app/componets/header";
import React from "react";
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";
import {CardFooter} from "@nextui-org/card";

let TarotManager = require('@/app/utils/TarotManager');


export default async function Tarot() {
    const data = await TarotManager.getTarotData()

    return (
        <div>
            <Header routeType={2}/>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
                {
                    data.map((card: Card, index: number) => (
                        <div>{card.name}</div>
                        // <Card>
                        //     <CardBody className="overflow-visible">
                        //         <Image
                        //             alt="Card background"
                        //             className="object-cover rounded-xl"
                        //             src={card.image}
                        //
                        //         />
                        //     </CardBody>
                        //     <CardFooter className="pb-0 pt-2 px-4 flex-col items-start">
                        //         <p className="text-tiny uppercase font-bold">{card.type}</p>
                        //         {
                        //             card.suit != null ?
                        //                 <small className="text-default-500">{card.suit}</small>
                        //                 :
                        //                 <small className="text-default-500"><br/></small>
                        //
                        //         }
                        //
                        //         <h4 className="font-bold text-large">{card.name}</h4>
                        //     </CardFooter>
                        // </Card>
                    ))
                }

            </div>

        </div>

    );
}
