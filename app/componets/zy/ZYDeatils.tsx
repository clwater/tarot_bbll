'use client';

import React, {Suspense} from "react";
import Loading from "@/app/componets/loading";
import {Accordion, AccordionItem} from "@nextui-org/react";

let API = require('@/app/utils/API');

export default async function ZYDetails(props: { guaIndex: string }) {

    const getGua: GuaEntity = await API.getGua(parseInt(props.guaIndex));

    const getGuaExplains: GuaExplainsEntity[] = await API.getGuaExplain(parseInt(props.guaIndex));
    const getGuaExplainItem: GuaExplainsItemEntity[] = await API.getGuaExplainItem(parseInt(props.guaIndex));


    return (
        <div>

            <Accordion defaultExpandedKeys={"1"}>
                <AccordionItem
                    key="1"
                    aria-label="Accordion 1"
                    title="基本信息">
                    <Suspense fallback={<Loading/>}>
                        {getGua.name}
                    </Suspense>
                </AccordionItem>
                <AccordionItem
                    key="2"
                    aria-label="Accordion 2"
                    title="卦辞"
                >
                    <Suspense fallback={<Loading/>}>
                        {getGuaExplains[0].explain}
                    </Suspense>
                </AccordionItem>
                <AccordionItem
                    key="3"
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