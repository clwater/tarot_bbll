'use client';

import {supabase} from "@/app/utils/API";
import React from "react";
import {GuaImage} from "@/app/componets/zy/GuaImage";



export default async function ZYDetails(props: { guaIndex: string}) {

    // const [isProcessing, setIsProcessing] = React.useState(false);
    //
    //
    // const {data, error}: { data: GuaSimpleEntity[] | null, error: any } = await supabase.from('zy')
    //     .select('id, name, image, name_detail')


    return (
        <div>
            {props.guaIndex}
        </div>
    )
}