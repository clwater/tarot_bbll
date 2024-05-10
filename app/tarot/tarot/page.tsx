import React, {Suspense} from "react";

import {Header} from "@/app/componets/Header";
import TarotLoading from "@/app/componets/TarotLoading";
import TarotList from "@/app/componets/tarot/TarotList";

export default function Tarot() {

    return (
        <div
            className="bg-scroll  w-full items-center justify-center text-white/90 min-h-1000"
        >
            <Header routeType={2}/>
            <Suspense fallback={<TarotLoading/>}>
                <TarotList/>
            </Suspense>

        </div>
    )
        ;
}
