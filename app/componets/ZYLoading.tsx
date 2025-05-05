'use client';
import React from "react";
import {GuaImage} from "@/app/componets/zy/GuaImage";
let RandomUtils = require('@/app/utils/RandomUtils');

function ZYLoadingItem() {
    const guaImage = RandomUtils.getRandomGuas();

    // Ensure `guaImage` and its `image` property are defined
    const image = guaImage?.image || "defaultImagePath"; // Replace "defaultImagePath" with a valid fallback

    return <GuaImage images={image} size={1} />;
}

export default function ZYLoading() {
    return (
        <div className="flex min-h-64 items-center">
            <div className="text-center inline-block my-auto mx-auto w-1/4 min-h-32">
                <ZYLoadingItem />
                <p className="animate-bounce mt-4">筹算中</p>
            </div>
        </div>
    );
}