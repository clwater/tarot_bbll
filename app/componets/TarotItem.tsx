import {useSearchParams} from "next/navigation";
import React, {Suspense} from "react";
import {Header} from "@/app/componets/header";

let TarotManager = require('@/app/utils/TarotManager');

export async function TarotItem() {
    const searchParams = useSearchParams()

    let id = searchParams.get('id');
    if (!id) return id = '0';
    const card = await TarotManager.getTarotData(parseInt(id));
    return (
        <Suspense>
            <div>
                <Header routeType={2}/>
                {id}
                {card.name}
                {card.image}
            </div>
        </Suspense>
    )
}