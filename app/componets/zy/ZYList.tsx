'use client';

import React from "react";
import {GuaImage} from "@/app/componets/zy/GuaImage";
import {Link} from "@nextui-org/react";

let API = require('@/app/utils/API');

function ZYItem(props: { gua: GuaSimpleEntity }) {
    return (
        <Link href={`/zy/zy/item?id=${props.gua.index}`} className="">
        <div className="w-full p-2 flex flex-col">
            <p className="flex-none w-full text-center text-white">{props.gua.name}<small>({props.gua.name_detail})</small></p>
            <div className="flex-auto">
                <GuaImage images={props.gua.image} size={1}/>
            </div>
        </div>
        </Link>
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