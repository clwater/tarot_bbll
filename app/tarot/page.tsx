'use client'

import {Header} from "@/app/componets/header";
import React from "react";

export default function Tarot() {
    const array = Array(20).fill(undefined)


    return (
        <div>
            <Header routeType={2} />
            <div>
                <ul>
                    {array.map((_, index) => (
                        <li key={index}>
                            {index}
                        </li>
                    ))}
                </ul>
            </div>
        </div>

  );
}
