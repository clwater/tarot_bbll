'use client';
import React from "react";

import {Header} from "@/app/componets/header";
import {usePathname, useSearchParams} from "next/navigation";

let TarotManager = require('@/app/utils/TarotManager');


export default async function Tarot() {
    const searchParams = useSearchParams()

    const id = searchParams.get('id')
    return (
        <div>
            <Header routeType={2}/>
            {id}
        </div>
    )
}