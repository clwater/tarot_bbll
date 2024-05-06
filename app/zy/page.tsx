"use client";


import React from "react";
import {Header} from "@/app/componets/Header";
import {Card, Link} from "@nextui-org/react";
import {ArrowRight} from "@/app/componets/Icons/ArrowRight";

export default function ZhouYi() {

    return (
        <div
            className="bg-scroll  w-full items-center justify-center text-white/90 min-h-1000"
        >
            <Header routeType={2}/>

            <Link className="w-full" href="/zy/yg">
                <Card className="m-4 p-4 flex flex-row w-full">
                    <p className="text-2xl flex-1">启卦</p>
                    <div className="flex-none text-center ">
                        <ArrowRight/>
                    </div>
                </Card>
            </Link>

            <Link className="w-full" href="/zy/zy">
                <Card className="m-4 p-4 flex flex-row w-full">
                    <p className="text-2xl flex-1">列表</p>
                    <div className="flex-none text-center ">
                        <ArrowRight/>
                    </div>
                </Card>
            </Link>

        </div>
    )
        ;
}
