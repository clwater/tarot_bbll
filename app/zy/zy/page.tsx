'use client';

import React, {useEffect} from "react";
import {Header} from "@/app/componets/Header";
// import {createClient} from "@/app/utils/server";

import {supabase} from "@/app/utils/API";



export default async function ZhouYi() {
    //
    // const data = await supabase
    //     .from('zy')
    //     .select('*')
    //
    //
    const {data, error } = await supabase.from('zy').select();
    console.log(data);
    // // console.log(error);


    // const { data, error } = await supabase
    //     .from('zy')
    //     .insert([
    //         { some_column: ''},
    //     ])
    //     .select()
    //
    // console.log(data);
    // console.log(error);


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
