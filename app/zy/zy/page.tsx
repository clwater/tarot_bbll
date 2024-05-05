'use client';

import React, {useEffect} from "react";
import {Header} from "@/app/componets/Header";
// import {createClient} from "@/app/utils/server";

import {supabase} from "@/app/utils/API";


interface ZY {
    id: number;
    name: string;
}

export default async function ZhouYi() {
    const {data, error }: {data: ZY[]| null, error: any} = await supabase.from('zy').select();
    if (data != null) {
        console.log(data[0]);
    }

    return (
        <div
            className="bg-scroll  w-full items-center justify-center text-white/90 min-h-1000"
        >
            <Header routeType={2}/>
            <p>
                ZY
            </p>

            <pre>{JSON.stringify(data, null, 2)}</pre>
            {/*<pre>111</pre>*/}

        </div>
    );
}
