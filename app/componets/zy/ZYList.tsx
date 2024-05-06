'use client';

import {supabase} from "@/app/utils/API";
import React from "react";
import {GuaImage} from "@/app/componets/zy/GuaImage";

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

    const [isProcessing, setIsProcessing] = React.useState(false);


    const {data, error}: { data: GuaSimpleEntity[] | null, error: any } = await supabase.from('zy')
        .select('id, name, image, name_detail')


    return (
        <>{
            data === null ?
                <div>Loading
                    ....
                </div>
                :
                <div className="grid grid-cols-3 gap-4 px-4">
                    {
                        data.map((gua: GuaSimpleEntity, index: number) => (
                            <ZYItem gua={gua} key={index}/>
                        ))
                    }
                </div>
        }

        </>
    )
}