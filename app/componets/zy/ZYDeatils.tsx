'use client';

import React from "react";
import {json} from "node:stream/consumers";

let API = require('@/app/utils/API');

export default async function ZYDetails(props: { guaIndex: string}) {

    const getGua: GuaEntity = await API.getGua(parseInt(props.guaIndex));

    const getGuaExplain = await API.getGuaExplain(parseInt(props.guaIndex));
    const getGuaExplainItem = await API.getGuaExplainItem(parseInt(props.guaIndex));



    // @ts-ignore
    return (
        <div>
            {getGua.name}
            {getGua.name_detail}
            {getGua.image}

            {
                getGuaExplain.map((item: GuaExplainsEntity) => {
                    return (
                        <div key={item.type}>
                            {item.base}
                            {item.explain}
                        </div>
                    )
                })
            }
        </div>
    )
}