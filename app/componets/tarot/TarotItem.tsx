// import {useRouter, useSearchParams} from "next/navigation";
import React from "react";
import {Accordion, AccordionItem, Image, Textarea} from "@nextui-org/react";
import {Chip} from "@nextui-org/chip";
import {getTarotExplain} from "@/app/utils/API";
import {Divider} from "@nextui-org/divider";


let API = require('@/app/utils/API');

export async function TarotItem({id = '1'}) {

    const tarot =  await API.getTarotData(parseInt(id));
    const explains: TarotExplainEntity[] = await API.getTarotExplain(parseInt(id));


    const explainsUp = explains.filter((explain) => explain.explain_type === 'up')
    const explainsRev = explains.filter((explain) => explain.explain_type === 'rev')



    let badgeColor = 'bg-gray-500'
    switch (tarot.suit){
        case 'pentacles' : badgeColor = 'bg-orange-800'; break
        case 'cups' : badgeColor = 'bg-blue-800'; break
        case 'wands' : badgeColor = 'bg-red-800'; break
        case 'swords' : badgeColor = 'bg-green-800'; break
    }

    return (
        <div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <Image
                    alt="Woman listing to music"
                    className="object-cover"
                    height={320}
                    src={tarot.image}
                    width={200}
                />
            </div>
            <div className="px-8 py-8">
                <b>{tarot.name}</b>
                <br/>

                <Chip
                    classNames={{
                        base: badgeColor,
                        content: "drop-shadow shadow-black text-white",
                    }}
                    variant="shadow" size="sm">{tarot.type === 'major' ? 'Major': tarot.suit}</Chip>


                <Accordion defaultExpandedKeys={"1"}>
                    <AccordionItem
                        key="1"
                        aria-label="Desc"
                        title="Desc"
                    >
                        {tarot.desc}
                    </AccordionItem>

                    <AccordionItem
                        key="2"
                        aria-label="Up"
                        title="Up"
                    >
                        {
                            explainsUp.map((explain, index) => (
                                <div key={index}>
                                    <p>{explain.explain_type}</p>
                                    <p>{explain.desc}</p>
                                    {
                                        index === explainsUp.length - 1 ? "" : <Divider className="my-1"/>
                                    }
                                </div>

                            ))
                        }
                    </AccordionItem>

                    <AccordionItem
                        key="2"
                        aria-label="Down"
                        title="Down"
                    >
                        {
                            explainsRev.map((explain, index) => (
                                <div key={index}>
                                    <p>{explain.explain_type}</p>
                                    <p>{explain.desc}</p>
                                    {
                                        index === explainsRev.length - 1 ? "" : <Divider className="my-1"/>
                                    }
                                </div>
                            ))
                        }
                    </AccordionItem>
                </Accordion>


            </div>
        </div>
        
    )
}