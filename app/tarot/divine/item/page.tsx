'use client'

import {Header} from "@/app/componets/Header";
import React, {Suspense} from "react";
import {useSearchParams} from "next/navigation";
import {DivineParent} from "@/app/componets/tarot/DivineParent";
import TarotLoading from "@/app/componets/TarotLoading";
import {DivineParentRequest} from "@/app/componets/tarot/DivineParentRequest";

// https://nextjs.org/docs/pages/building-your-application/data-fetching/get-server-side-props

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


    return (<DivineParentRequest type={cardArrayId} randomId={randomId}/>)
}

export default function Divine() {

    return (
        <div>
            <Header routeType={1}/>
            <Suspense fallback={<TarotLoading/>}>
                <Item/>
            </Suspense>

        </div>
    )
}

