import {useSearchParams} from "next/navigation";
import React, {Suspense} from "react";
import {Header} from "@/app/componets/header";

let TarotManager = require('@/app/utils/TarotManager');

export function TarotItem() {
    const searchParams = useSearchParams()

    let id = searchParams.get('id');
    if (!id) return id = '0';
    const card = TarotManager.getTarotData(parseInt(id));
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