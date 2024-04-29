"use client";




import React from "react";
import {Header} from "@/app/componets/header";

export default function ZhouYi() {

    return (
        <div
            className="bg-scroll  w-full items-center justify-center text-white/90 min-h-1000"
        >
            <Header routeType={2}/>
            <p>
                周易[......]
            </p>

        </div>
    );
}
