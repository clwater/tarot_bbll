
import React, {Suspense} from "react";
import {Header} from "@/app/componets/Header";
import ZYList from "@/app/componets/zy/ZYList";
import TarotLoading from "@/app/componets/TarotLoading";
import ZYLoading from "@/app/componets/ZYLoading";
export default function ZhouYiListPage() {


    return (
        <div
            className="bg-scroll  w-full items-center justify-center text-white/90 min-h-1000"
        >
            <Header routeType={2}/>

            <Suspense fallback={<ZYLoading/>}>
                <ZYList/>
            </Suspense>
        </div>
    );
}
