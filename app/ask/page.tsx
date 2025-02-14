"use client";

import React, { Suspense } from "react";
import { Header } from "@/app/componets/Header";
import { useSearchParams } from "next/navigation";
import { Button } from "@nextui-org/react";

let API = require('@/app/utils/API');

function Ask() {
    const searchParams = useSearchParams();
    let name = searchParams.get('name');

    const [loading, setLoading] = React.useState<boolean>(false);
    const [result, setResult] = React.useState<string>("");
    const [type, setType] = React.useState<string>("");
    const [position, setPosition] = React.useState<string>("");

    async function getResult() {
        const _postion = position === "" ? position : "方向为" + position + ",";
        const question = "你现在是一位算命先生, 当前为" + name + "卦, 事项为" + type + "," + _postion + "请问如何解答?(归纳为三点, 总字数不超过100字, 不要带有Markdown相关字符)";
        setLoading(true);
        const _result = await API.getQuestion(question);
        setResult(_result);
        setLoading(false);
    }

    return (
        <div className="bg-scroll w-full items-center justify-center text-white/90 min-h-1000 flex flex-col">
            <Header routeType={2} />
            <div className="flex-grow p-4 flex flex-col w-full">
                <p className="text-4xl">{name}卦</p>
                <input
                    className="w-full bg-gray-700 rounded-lg mt-4 p-4"
                    placeholder="事项~(出门/吃饭..)" value={type} onChange={(e) => {
                    setType(e.target.value);
                }}
                />
                <input
                    className="w-full bg-gray-700 rounded-lg mt-4 p-4"
                    placeholder="方向(东北/东...)" value={position} onChange={(e) => {
                    setPosition(e.target.value);
                }}
                />
                <Button
                    className={`w-full rounded-lg mt-4 p-4 font-bold ${!type ? 'bg-red-400' : 'bg-gray-800 hover:bg-gray-900'} text-white`}
                    onClick={getResult}
                    disabled={!type}
                >
                    {
                        !type ? "咋地有个事项才能问啊" : "问一问~"
                    }
                </Button>
                {
                    loading ? (
                        <p className="mt-4 bg-gray-800 p-4 rounded-lg" style={{ whiteSpace: 'pre-wrap' }}>
                            正在思考中... 有时候有点慢... 稍微等一下下...
                        </p>
                    ) : (
                        result && (
                            <div className="mt-4 h-64 overflow-y-auto bg-gray-800 p-4 rounded-lg" style={{ whiteSpace: 'pre-wrap' }}>
                                {result}
                            </div>
                        )
                    )
                }
            </div>
        </div>
    );
}

export default function AskPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Ask />
        </Suspense>
    );
}