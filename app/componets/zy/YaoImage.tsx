import React from "react";
import {Image, Link} from "@nextui-org/react";

export const YaoImage = (props: { yang: boolean, index: number }) => {

    return (
        // <div className="f my-1">
        <div className={`${props.index === 3 ? "mt-3": "mt-1"} flex flex-row h-2 w-full`}>
            <div className="h-full basis-5/12  bg-white"></div>
            {
                props.yang ?
                    <div className="h-full basis-2/12  bg-white"></div>
                    :
                    <div className="h-full basis-2/12  bg-transparent"></div>
            }
            <div className="h-full basis-5/12  bg-white"></div>
        </div>
    )
}
