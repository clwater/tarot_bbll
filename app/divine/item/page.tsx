'use client'

import {Header} from "@/app/componets/header";
import React from "react";
import {useSearchParams} from "next/navigation";
import {DivineParent} from "@/app/componets/DivineParent";

export default function Divine() {

    const searchParams = useSearchParams();
    let cardArrayId = searchParams.get('id')
    if (cardArrayId === null) {
        cardArrayId = '0'
    }

    return (<div>
        <Header routeType={1}/>
        <DivineParent type={cardArrayId}/>
    </div>)
}

