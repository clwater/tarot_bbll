"use client";

import React from "react";
import {Header} from "@/app/componets/Header";
import {YaoImage} from "@/app/componets/zy/YaoImage";

let API = require('@/app/utils/API');


export default function ZhouYi() {
    const [yaos, setYaos] = React.useState([true, true, true, true, true, true]);
    const [checkYao, setCheckYao] = React.useState("111111");

    const guas = API.getGuas()

    const guasMap = {};



    function setYao(index: number) {
        setYaos(prevYaos => {
            const newYaos = [...prevYaos];
            newYaos[index] = !newYaos[index];
            return newYaos;
        });


        let checkYao = "";
        for (let i = yaos.length - 1; i >= 0 ; i--) {
            if (i === index){
                checkYao += yaos[i] ? "0" : "1";
            }else {
                checkYao += yaos[i] ? "1" : "0";
            }
        }
        setCheckYao(checkYao);
    }

    return (
        <div
            className="bg-scroll  w-full items-center justify-center text-white/90 min-h-1000"
        >
            <Header routeType={2}/>

            <div>

                {/*{checkYao}*/}
                <div className="flex flex-col gap-2">

                    {
                        yaos.map((yao, index) => (
                            <div onClick={() => {
                                setYao(index)
                            }}
                                 key={index}
                            >
                                <YaoImage yang={yao} index={index} size={3}/>
                                {index === 2 ? <br/>: ""}
                            </div>

                        ))
                    }


                </div>

            </div>

        </div>
    );
}
