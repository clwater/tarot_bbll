'use client';
import React, {Suspense} from "react";

import {TarotItem} from "@/app/componets/TarotItem";


export default function TarotParent() {
    return (
        // You could have a loading skeleton as the `fallback` too
        <Suspense>
            <TarotItem />
        </Suspense>
    )
}
