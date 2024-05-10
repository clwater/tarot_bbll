'use client';
import React, {Suspense, useEffect} from "react";
import {GuaImage} from "@/app/componets/zy/GuaImage";
let RandomUtils = require('@/app/utils/RandomUtils');

export default function ZYLoading() {
    const [yaos, setYaos] = React.useState("111111");


    // useEffect(() => {
    //
    //     function pollDOM() {
    //         const guaImage = RandomUtils.getRandomGuas()
    //         setYaos(guaImage)
    //     }
    //
    //     const interval = setInterval(pollDOM, 300);
    //
    //     return () => clearInterval(interval);
    // }, [])

    return (

        <div className="flex min-h-64 items-center">
            <div className="text-center inline-block my-auto mx-auto w-1/4 min-h-32">
                <GuaImage images={yaos} size={1}/>
                <p className="animate-bounce mt-4">筹算中</p>
            </div>
        </div>

    );
}
