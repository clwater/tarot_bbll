'use client';
import React, {Suspense} from "react";

import {Header} from "@/app/componets/Header";
import ZYDetails from "@/app/componets/zy/ZYDeatils";
import {useSearchParams} from "next/navigation";
import TarotLoading from "@/app/componets/TarotLoading";
import ZYLoading from "@/app/componets/ZYLoading";

function Item() {
    const searchParams = useSearchParams();
    let guaIndex = searchParams.get('id')
    if (guaIndex === null) {
        guaIndex = '0'
    }
    return <ZYDetails guaIndex={guaIndex}/>
}


export default function GuaParent() {


    return (
        <div
            className="bg-scroll  w-full items-center justify-center text-white/90 min-h-1000"
        >
            <Header routeType={2}/>

            <Suspense fallback={<ZYLoading/>}>
                <Item/>
            </Suspense>
        </div>
    );
}
