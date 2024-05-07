'use client';

import React, {Suspense} from "react";
import Loading from "@/app/componets/loading";
import {Accordion, AccordionItem} from "@nextui-org/react";
import {GuaImage} from "@/app/componets/zy/GuaImage";
import {Divider} from "@nextui-org/divider";

let API = require('@/app/utils/API');

export default async function ZYDetails(props: { guaIndex: string }) {

    const getGua: GuaEntity = await API.getGua(parseInt(props.guaIndex));
    const getGuaExplains: GuaExplainsEntity[] = await API.getGuaExplain(parseInt(props.guaIndex));
    const getGuaExplainItem: GuaExplainsItemEntity[] = await API.getGuaExplainItem(parseInt(props.guaIndex));


    return (
        <div className="w-full h-full px-4 py-4">
            <Suspense fallback={<Loading/>}>
                <div className="mb-4">
                    <GuaImage images={getGua.image} size={3}/>
                </div>
                <p className="text-4xl">{getGua.name}<small>    ({getGua.name_detail})</small></p>
                <p className="text-2xl">{getGua.desc_detail}</p>
            </Suspense>

            <Divider className="my-2"/>

            <Accordion defaultExpandedKeys={"1"}>
                <AccordionItem
                    key="1"
                    aria-label="Accordion 2"
                    title="卦辞"
                >
                    <Suspense fallback={<Loading/>}>
                        {
                            getGuaExplains.map((item, index) => (
                                <div key={index}>
                                    <p>{item.base}</p>
                                    <p>{item.explain}</p>
                                    {
                                        index === getGuaExplains.length - 1 ? "" : <Divider className="my-1"/>
                                    }
                                </div>

                            ))
                        }
                    </Suspense>
                </AccordionItem>
                <AccordionItem
                    key="2"
                    aria-label="Accordion 3"
                    title="六爻">
                    <Suspense fallback={<Loading/>}>
                        {getGuaExplainItem[0].explain}
                    </Suspense>
                </AccordionItem>
            </Accordion>


            <br/>


        </div>
    )
}