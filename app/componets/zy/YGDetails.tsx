"use client";

import React from "react";
import {Header} from "@/app/componets/Header";
import {YaoImage} from "@/app/componets/zy/YaoImage";
import {Button, Link} from "@nextui-org/react";

let API = require('@/app/utils/API');


export default function YGDetails({guas}: { guas: GuaSimpleEntity[] }) {
    const [yaos, setYaos] = React.useState([true, true, true, true, true, true]);
    const [checkYao, setCheckYao] = React.useState("111111");
    const [gua, setGua] = React.useState(guas[0]);

    const guasMap:Map<string, number> = new Map<string, number>();

    guas.map((gua, index) => {
        guasMap.set(gua.image, index)
    })


    function setYao(index: number) {
        setYaos(prevYaos => {
            const newYaos = [...prevYaos];
            newYaos[index] = !newYaos[index];
            return newYaos;
        });


        let checkYao = "";
        for (let i = 0; i < yaos.length ; i++) {
            if (i === index) {
                checkYao += yaos[i] ? "0" : "1";
            } else {
                checkYao += yaos[i] ? "1" : "0";
            }
        }
        setCheckYao(checkYao);

        const showGua = guasMap.get(checkYao);
        // @ts-ignore
        setGua(guas[showGua]);
    }

    return (
        <div
            className="bg-scroll  w-full items-center justify-center text-white/90 min-h-1000 px-4"
        >
            <div>

                <div className="flex flex-col gap-2">

                    {
                        yaos.map((yao, index) => (
                            <div onClick={() => {
                                setYao(index)
                            }}
                                 key={index}
                            >
                                <YaoImage yang={yao} index={index} size={3}/>
                                {index === 2 ? <br/> : ""}
                            </div>

                        ))
                    }
                </div>
                <div className="mt-12">
                    <p className="text-4xl">{gua.name}<small> ({gua.name_detail})</small></p>
                    <p className="text-2xl">{gua.desc_detail}</p>
                </div>

                <div className="mt-12 w-full">
                    <Link href={`/zy/zy/item?id=${gua.index}`} rel="noopener noreferrer" className="w-full">
                        <Button className="w-full">详情</Button>
                    </Link>
                </div>
            </div>

        </div>
    );
}
