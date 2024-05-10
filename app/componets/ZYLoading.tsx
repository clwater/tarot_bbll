'use client';
import React, {Suspense, useEffect} from "react";
import {GuaImage} from "@/app/componets/zy/GuaImage";
let RandomUtils = require('@/app/utils/RandomUtils');

function ZYLoadingItem(){
    const [yaos, setYaos] = React.useState("111111");

    useEffect(() => {
        function pollDOM() {
            const guaImage = RandomUtils.getRandomGuas()
            setYaos(guaImage)
        }

        const interval = setInterval(pollDOM, 1000);
        return () => clearInterval(interval);
    }, [yaos])

    return <GuaImage images={yaos} size={1}/>
}

export default function ZYLoading() {

    return (

        <div className="flex min-h-64 items-center">
            <div className="text-center inline-block my-auto mx-auto w-1/4 min-h-32">
                <ZYLoadingItem/>
                <p className="animate-bounce mt-4">筹算中</p>
            </div>
        </div>

    );
}
