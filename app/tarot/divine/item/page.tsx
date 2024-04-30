'use client'

import {Header} from "@/app/componets/header";
import React, {Suspense} from "react";
import {useSearchParams} from "next/navigation";
import {DivineParent} from "@/app/componets/tarot/DivineParent";

function Item() {
    const searchParams = useSearchParams();
    let cardArrayId = searchParams.get('id')
    let randomId = searchParams.get('randomId')
    if (cardArrayId === null) {
        cardArrayId = '0'
    }

    if (randomId === null) {
        randomId = '0'
    }

    return <DivineParent type={cardArrayId} randomId={randomId}/>
}

export default function Divine() {


    return (
        <div>
            <Header routeType={1}/>
            <Suspense>
                <Item/>
            </Suspense>

        </div>
    )
}

