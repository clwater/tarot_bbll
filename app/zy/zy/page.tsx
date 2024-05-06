
import React from "react";
import {Header} from "@/app/componets/Header";
import ZYList from "@/app/componets/zy/ZYList";
export default function ZhouYiListPage() {


    return (
        <div
            className="bg-scroll  w-full items-center justify-center text-white/90 min-h-1000"
        >
            <Header routeType={2}/>

            {/*<Suspense>*/}
            <ZYList/>
            {/*</Suspense>*/}
        </div>
    );
}
