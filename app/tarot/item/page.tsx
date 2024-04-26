'use client';
import React from "react";

import {Header} from "@/app/componets/header";
import {usePathname, useSearchParams} from "next/navigation";

let TarotManager = require('@/app/utils/TarotManager');


export default async function Tarot() {
    const searchParams = useSearchParams()

    let id = searchParams.get('id');
    if (!id) return id = '0';
    const card = await TarotManager.getTarotData(parseInt(id));
    return (
        <div>
            <Header routeType={2}/>
            {id}
            {card.name}
            {card.image}
        </div>
    )
}