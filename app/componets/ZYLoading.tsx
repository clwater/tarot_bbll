'use client';
import React, {Suspense} from "react";
import {CircularProgress, Image} from "@nextui-org/react";
import cardBack from "@/app/assets/image/card_back.jpg";

export default function TarotLoading() {


    return (

        <div className="flex min-h-64 items-center">
            <div className="text-center inline-block my-auto mx-auto">

                <Image
                    removeWrapper
                    alt="Card background"
                    className="animate-spin bg-cover justify-self-center"
                    src={cardBack.src}
                    height={50}
                    width={50}
                />

                <p className="animate-bounce mt-4">Loading</p>
            </div>
        </div>

    );
}
