'use client';
import React, {Suspense} from "react";
import {TarotItem} from "@/app/componets/tarot/TarotItem";
import {Header} from "@/app/componets/header";
import {useSearchParams} from "next/navigation";

function Item() {
    const searchParams = useSearchParams();
    let cardId = searchParams.get('id')
    if (cardId === null) {
        cardId = '0'
    }


    return  <TarotItem id={cardId}/>
}

export default function TarotParent() {

    return (
            <div>
                <Header routeType={2}/>
                <Suspense>
                    <Item/>
                </Suspense>
            </div>
    )
}

