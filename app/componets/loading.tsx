'use client';
import React, {Suspense} from "react";
import {CircularProgress} from "@nextui-org/react";


export default function Loading() {


    return (

        <div className="flex min-h-10 items-center">
            <div className="text-center inline-block my-auto mx-auto">
                <CircularProgress aria-label="Loading..." className="justify-center "/>
            </div>
        </div>

    );
}
