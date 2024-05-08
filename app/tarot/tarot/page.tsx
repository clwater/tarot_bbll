"use client";

import React, {Suspense} from "react";

import {Header} from "@/app/componets/Header";
import Loading from "@/app/componets/loading";
import TarotList from "@/app/componets/tarot/TarotList";

export default function Tarot() {

    return (
        <div
            className="bg-scroll  w-full items-center justify-center text-white/90 min-h-1000"
        >
            <Header routeType={2}/>
            <Suspense fallback={<Loading/>}>
                <TarotList/>
            </Suspense>

        </div>
    )
        ;
}
