'use client';

import React from "react";
import {Image, Link} from "@nextui-org/react";
import {YaoImage} from "@/app/componets/zy/YaoImage";

export const GuaImage = (props: { images: string, size: number }) => {

    let yaoList: number[] = []
    for (let i = 0; i < props.images.length; i++) {
        yaoList[i] = parseInt(props.images[i])
    }
    return (

        <>
            {
                yaoList.map((yao, index) => (
                    <YaoImage yang={yao === 1} index={index} key={index} size={props.size}/>
                ))
            }
        </>
    )
}
