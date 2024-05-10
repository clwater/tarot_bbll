"use client";

import React, {Suspense} from "react";
import {Header} from "@/app/componets/Header";
import {YaoImage} from "@/app/componets/zy/YaoImage";
import YGDetails from "@/app/componets/zy/YGDetails";
import {useSearchParams} from "next/navigation";
import {DivineParentRequest} from "@/app/componets/tarot/DivineParentRequest";
import {getGuas} from "@/app/utils/API";
import Loading from "@/app/componets/loading";

let API = require('@/app/utils/API');

export async function ZhouYiParent() {
    const guas = await API.getGuas()

    return (<YGDetails guas={guas}/>)
}



export default function ZhouYi() {

    return (
        <div
            className="bg-scroll  w-full items-center justify-center text-white/90 min-h-1000"
        >
            <Header routeType={2}/>

            <Suspense fallback={<Loading/>}>
                <ZhouYiParent/>
            </Suspense>

        </div>
    );
}
