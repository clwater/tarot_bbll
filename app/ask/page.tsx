"use client";

import React, {Suspense} from "react";
import {Header} from "@/app/componets/Header";
import ZYLoading from "@/app/componets/ZYLoading";
import {useSearchParams} from "next/navigation";

import {Button} from "@nextui-org/react";
import {getQuestion} from "@/app/utils/API";

let API = require('@/app/utils/API');


export default function Ask() {
    const searchParams = useSearchParams();
    let name = searchParams.get('name')


    const [result, setResult] = React.useState<string>("23");

    const [type, setType] = React.useState<string>("");
    const [position, setPosition] = React.useState<string>("");


    async function getResult() {
        // const _postion = position === "" ? position : "方向为" + position + ","
        const question = "你现在是一位算命先生, 当前为" + name + "卦, 事项为" + type + ","
        // const _result = API.getQuestion(question)
        alert(question)
    }

    return (
        <div
            className="bg-scroll  w-full items-center justify-center text-white/90 min-h-1000"
        >
            <Header routeType={2}/>
            {
                result === "" ? <ZYLoading/> : (
                    <div className="p-4">
                        <p className="text-4xl">{name}卦</p>
                        <input
                            className="w-full bg-gray-700 rounded-lg mt-4 p-4"
                            placeholder="事项~(出门/吃饭..)" value={type} onChange={(e) => {
                            setType(e.target.value)
                        }}/>

                        <input
                            className="w-full bg-gray-700 rounded-lg mt-4 p-4"
                            placeholder="方向(东北/东...)" value={position} onChange={(e) => {
                            setPosition(e.target.value)
                        }}/>


                        <Button
                            className={`w-full rounded-lg mt-4 p-4 font-bold ${!type ? 'bg-red-400' : 'bg-gray-800 hover:bg-gray-900'} text-white`}
                            onClick={getResult}
                            disabled={!type}
                        >
                            {
                                !type ? "咋地有个事项才能问啊" : "问一问~"
                            }
                        </Button>
                    </div>
                )
            }

        </div>
    );
}
