'use client';

import React from "react";
import {GuaImage} from "@/app/componets/zy/GuaImage";

let API = require('@/app/utils/API');

function ZYItem(props: { gua: GuaSimpleEntity }) {
    return (
        <div className="w-full p-2 flex flex-col">
            <p className="flex-none w-full text-center">{props.gua.name}<small>({props.gua.name_detail})</small></p>
            <div className="flex-auto">
                <GuaImage images={props.gua.image}/>
            </div>
        </div>
    )
}

export default async function ZYList() {

    const guas = await API.getGuas();

    return (
        <>{
            guas != null ?

                <div className="grid grid-cols-3 gap-4 px-4">
                    {
                        guas.map((gua: GuaSimpleEntity, index: number) => (
                            <ZYItem gua={gua} key={index}/>
                        ))
                    }
                </div>
                :
                <div>Loading
                    ....
                </div>

        }

        </>
    )
}