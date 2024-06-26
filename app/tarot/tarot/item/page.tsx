'use client';
import React, {Suspense} from "react";
import {Header} from "@/app/componets/Header";
import {useSearchParams} from "next/navigation";
import TarotLoading from "@/app/componets/TarotLoading";
import TarotItem from "@/app/componets/tarot/TarotItem";

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
                <Suspense fallback={<TarotLoading/>}>
                    <Item/>
                </Suspense>
            </div>
    )
}

