'use client';

// import {supabase} from "@/app/utils/API";
import React from "react";
import {GuaImage} from "@/app/componets/zy/GuaImage";



export default async function ZYDetails(props: { guaIndex: string}) {

    // const [isProcessing, setIsProcessing] = React.useState(false);
    //
    //
    // const {data, error}: { data: GuaExplainsEntity[] | null, error: any } = await supabase.from('zy_gua_explain')
    //     .select('*')
    //     .eq('gua_index', props.guaIndex)
    //
    // if (data != null) {
    //     console.log(data)
    // }


    // const {data2: data2}: { data2: GuaExplainsItemEntity[] | null, error: any } = await supabase.from('guas_explain_item')
    //     .select('*')
    //     .eq('gua_index', props.guaIndex)
    //
    // if (data2 != null) {
    //     console.log(data2)
    // }

    return (
        <div>
            {props.guaIndex}
        </div>
    )
}