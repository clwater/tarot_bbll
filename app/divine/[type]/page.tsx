import {Header} from "@/app/componets/header";
import React from "react";
import {TarotItem} from "@/app/componets/TarotItem";
import {DivineItem} from "@/app/componets/DivineItem";
export default function Divine({ params }: { params: { type: string } }) {
    return (<div>
        <Header routeType={1}/>

        <DivineItem type={params.type}/>
    </div>)
}

