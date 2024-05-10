// import {useRouter, useSearchParams} from "next/navigation";
import React from "react";
import {Accordion, AccordionItem, ScrollShadow} from "@nextui-org/react";
import {Divider} from "@nextui-org/divider";


const explainMap: { [key: number]: string } = {
    0: "common",
}


export function SmallTarotItem({tarot, explains}: { tarot: TarotEntity, explains: TarotExplainEntity[] }) {

    const explainsUp: TarotExplainEntity[] = explains.filter((explain) => explain.explain_type === 'up')
    const explainsRev: TarotExplainEntity[] = explains.filter((explain) => explain.explain_type === 'rev')


    return (
        <div>
            <div className="px-8 py-8">
                <b>{tarot.name}</b>
                <br/>

                <ScrollShadow className="w-[300px] h-[400px]">
                    <div>

                        <p className="text-2xl">Up</p>
                        {
                            explainsUp.map((explain, index) => (
                                <div key={index}>
                                    <p>{explainMap[parseInt(explain.type)]}</p>
                                    <p>{explain.desc}</p>
                                    {
                                        index === explainsUp.length - 1 ? "" : <Divider className="my-1"/>
                                    }
                                </div>

                            ))
                        }
                        <Divider className="my-2"/>
                        <p className="text-2xl">Down</p>
                        {
                            explainsRev.map((explain, index) => (
                                <div key={index}>
                                    <p>{explainMap[parseInt(explain.type)]}</p>
                                    <p>{explain.desc}</p>
                                    {
                                        index === explainsRev.length - 1 ? "" : <Divider className="my-1"/>
                                    }
                                </div>
                            ))
                        }
                    </div>
                </ScrollShadow>
            </div>
        </div>
    )
}