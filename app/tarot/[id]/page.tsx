'use client';
import React, {Suspense} from "react";
import {TarotItem} from "@/app/componets/TarotItem";
import {Header} from "@/app/componets/header";


export default function TarotParent({ params }: { params: { id: string } }) {
    return (<div>
        <Header routeType={2}/>

        <TarotItem id={params.id}/>
    </div>)
}

