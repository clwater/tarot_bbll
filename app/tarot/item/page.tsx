'use client';
import React, {Suspense} from "react";
import {TarotItem} from "@/app/componets/TarotItem";
import {Header} from "@/app/componets/header";
import {useSearchParams} from "next/navigation";

export default function TarotParent(){
    const searchParams = useSearchParams();
    let cardId = searchParams.get('id')
    if (cardId === null) {
        cardId = '0'
    }

    return (<div>
        <Header routeType={2}/>

        <TarotItem id={cardId}/>
    </div>)
}

