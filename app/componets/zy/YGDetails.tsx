"use client";

import React from "react";
import { YaoImage } from "@/app/componets/zy/YaoImage";
import { Button, Link } from "@nextui-org/react";

export default function YGDetails({ guas, randomIndex }: { guas: GuaSimpleEntity[], randomIndex: number }) {
    // Ensure `guas[randomIndex]` and `guas[randomIndex].image` are defined
    const c = guas[randomIndex] || {};
    const image = c.image || "000000"; // Provide a default fallback value for `image`

    const [yaos, setYaos] = React.useState([
        image[0] === "1",
        image[1] === "1",
        image[2] === "1",
        image[3] === "1",
        image[4] === "1",
        image[5] === "1"
    ]);
    const [checkYao, setCheckYao] = React.useState(image);
    const [gua, setGua] = React.useState(c);

    const guasMap: Map<string, number> = new Map<string, number>();

    guas.forEach((gua, index) => {
        guasMap.set(gua.image, index);
    });

    function setYao(index: number) {
        setYaos((prevYaos) => {
            const newYaos = [...prevYaos];
            newYaos[index] = !newYaos[index];
            return newYaos;
        });

        let newCheckYao = "";
        for (let i = 0; i < yaos.length; i++) {
            if (i === index) {
                newCheckYao += yaos[i] ? "0" : "1";
            } else {
                newCheckYao += yaos[i] ? "1" : "0";
            }
        }
        setCheckYao(newCheckYao);

        const showGua = guasMap.get(newCheckYao);
        if (showGua !== undefined) {
            setGua(guas[showGua]);
        }
    }

    return (
        <div className="bg-scroll w-full items-center justify-center text-white/90 min-h-1000 px-4">
            <div>
                <div className="flex flex-col gap-2">
                    {yaos.map((yao, index) => (
                        <div
                            onClick={() => setYao(index)}
                            key={index}
                        >
                            <YaoImage yang={yao} index={index} size={3} />
                            {index === 2 ? <br /> : ""}
                        </div>
                    ))}
                </div>
                <div className="mt-12">
                    <p className="text-4xl">{gua?.name}<small> ({gua?.name_detail})</small></p>
                    <p className="text-2xl">{gua?.desc_detail}</p>
                </div>
                <div className="mt-12 w-full">
                    <Link href={`/zy/zy/item?id=${gua?.index}`} rel="noopener noreferrer" className="w-full">
                        <Button className="w-full">详情</Button>
                    </Link>
                    <Link href={`/ask?name=${gua?.name}`} rel="noopener noreferrer" className="w-full pt-4">
                        <Button className="w-full">答疑解惑~</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}