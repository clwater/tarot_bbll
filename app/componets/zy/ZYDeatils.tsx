'use client';

import React, {Suspense} from "react";
import {Accordion, AccordionItem, Button, Link} from "@nextui-org/react";
import {GuaImage} from "@/app/componets/zy/GuaImage";
import {Divider} from "@nextui-org/divider";
import {YaoImage} from "@/app/componets/zy/YaoImage";

let API = require('@/app/utils/API');


const explainMap: { [key: number]: string } = {
    0: "事业",
    1: "经商",
    2: "求名",
    3: "外出",
    4: "婚恋",
    5: "决策",
    6: "解释",
    7: "特性",
    8: "运势",
    9: "家运",
    10: "疾病",
    11: "胎孕",
    12: "子女",
    13: "周转",
    14: "买卖",
    15: "等人",
    16: "寻人",
    17: "失物",
    18: "考试",
    19: "诉讼",
    20: "求事",
    21: "改行",
    22: "开业",
    23: "小凶"
}

export default async function ZYDetails(props: { guaIndex: string }) {

    const getGua: GuaEntity = await API.getGua(parseInt(props.guaIndex));
    const getGuaExplains: GuaExplainsEntity[] = await API.getGuaExplain(parseInt(props.guaIndex));
    const getGuaExplainItem: GuaExplainsItemEntity[] = (await API.getGuaExplainItem(parseInt(props.guaIndex))).sort();

    const getGuaExplainItems: { [type: number]: GuaExplainsItemEntity[] } = {};
    getGuaExplainItem.map((item) => {
        if (getGuaExplainItems[item.gua_explain_index] === undefined) {
            getGuaExplainItems[item.gua_explain_index] = []
        }
        getGuaExplainItems[item.gua_explain_index].push(item)
    })


    const getYao: YaoEntity[] = await API.getYao(parseInt(props.guaIndex))

    const getYaoExplain: YaoExplainsEntity[] = await API.getYaoExplain(parseInt(props.guaIndex))

    const getYaoExplains: { [index: number]: YaoExplainsEntity[] } = {};
    getYaoExplain.map((item) => {
        if (getYaoExplains[item.gua_yao_index] === undefined) {
            getYaoExplains[item.gua_yao_index] = []
        }
        getYaoExplains[item.gua_yao_index].push(item)
    })


    return (
        <div className="w-full h-full px-4 py-4">
            <div className="mb-4">
                <GuaImage images={getGua.image} size={3}/>
            </div>
            <p className="text-4xl">{getGua.name}<small> ({getGua.name_detail})</small></p>
            <p className="text-2xl">{getGua.desc_detail}</p>

            <Divider className="my-2"/>

            <Link href={`/ask?name=${getGua.name}`} rel="noopener noreferrer" className="w-full pt-4">
                <Button className="w-full">答疑解惑~</Button>
            </Link>

            <Divider className="my-2"/>

            <Accordion defaultExpandedKeys={"1"}>
                <AccordionItem
                    key="1"
                    aria-label="Accordion 2"
                    title="卦辞"
                >
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
                    <Divider className="my-2"/>


                    <p className="text-2xl">指示</p>
                    {
                        Object.keys(getGuaExplainItems).map((key) => (
                            <div key={key}>
                                {
                                    getGuaExplainItems[parseInt(key)].map((item, index) => (
                                        <div key={index}>
                                            <p><b>{explainMap[item.type]}</b>: {item.explain}</p>
                                        </div>
                                    ))
                                }
                                {
                                    parseInt(key) != Object.keys(getGuaExplainItems).length - 1 ?
                                        <Divider className="my-1"/> : ""
                                }

                            </div>
                        ))
                    }
                </AccordionItem>
                <AccordionItem
                    key="2"
                    aria-label="Accordion 3"
                    title="六爻">
                    {
                        getYao.map((item, index) => (
                            <div key={index}>
                                <div className="w-full flex justify-center mb-4">
                                    <div className="w-1/3">
                                        <YaoImage yang={item.image === 1} index={index} size={2}/>
                                    </div>
                                </div>
                                <p>{item.name}</p>

                                {
                                    getYaoExplains[item.index].map((explain, index) => (
                                        <div key={index} className="mt-1">
                                            <b>{explain.origin}</b>
                                            <p>{explain.explain}</p>
                                        </div>
                                    ))
                                }

                                {
                                    index === getYao.length - 1 ? "" : <Divider className="my-1"/>
                                }
                            </div>
                        ))
                    }
                </AccordionItem>
            </Accordion>


            <br/>


        </div>
    )
}