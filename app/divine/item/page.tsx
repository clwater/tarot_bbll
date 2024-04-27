'use client'

import {Header} from "@/app/componets/header";
import React from "react";
import {useSearchParams} from "next/navigation";
import {DivineParent} from "@/app/componets/DivineParent";

export default function Divine() {

    const searchParams = useSearchParams();
    let cardId = searchParams.get('id')
    if (cardId === null) {
        cardId = '0'
    }

    return (<div>
        <Header routeType={1}/>
        <DivineParent type={cardId}/>
    </div>)
}

