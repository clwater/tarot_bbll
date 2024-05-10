"use client";

import React, {Suspense} from "react";
import {Header} from "@/app/componets/Header";
import YGDetails from "@/app/componets/zy/YGDetails";
import ZYLoading from "@/app/componets/ZYLoading";

let API = require('@/app/utils/API');

async function ZhouYiParent() {
    const guas = await API.getGuas()

    return (<YGDetails guas={guas}/>)
}



export default function ZhouYi() {

    return (
        <div
            className="bg-scroll  w-full items-center justify-center text-white/90 min-h-1000"
        >
            <Header routeType={2}/>

            <Suspense fallback={<ZYLoading/>}>
                <ZhouYiParent/>
            </Suspense>

        </div>
    );
}
