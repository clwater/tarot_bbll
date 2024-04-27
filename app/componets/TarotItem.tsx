// import {useRouter, useSearchParams} from "next/navigation";
import React from "react";
import {Card, CardBody, CardHeader, Image} from "@nextui-org/react";

let TarotManager = require('@/app/utils/TarotManager');

export async function TarotItem({id = '1'}) {
    
    const card = await TarotManager.getTarotData(parseInt(id));
    return (
        <Card>
            <CardHeader>{card.name}</CardHeader>
            <CardBody>
                <Image
                    alt="CardEntity background"
                    src={card.image}
                    width={300}
                />
            </CardBody>
        </Card>

    )
}