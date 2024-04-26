import {Header} from "@/app/componets/header";
import React from "react";
import {TarotItem} from "@/app/componets/TarotItem";
import {DivineParent} from "@/app/componets/DivineParent";
export default function Divine({ params }: { params: { type: string } }) {
    return (<div>
        <Header routeType={1}/>

        <DivineParent type={params.type}/>
    </div>)
}

