import React from "react";
import {Image, Link} from "@nextui-org/react";

export const YaoImage = (props: { yang: boolean, index: number, size: number }) => {
    // const mb =  "mb-"  + (props.h * 1.5);
    // const ms =  "mb-"  + (props.h - 0.5);
    let mb =  props.index === 3 ? "mt-3": "mt-1";

    let h  = "h-1"
    switch (props.size) {
        case 1:
            h  = "h-2"
            mb =  props.index === 3 ? "mt-3": "mt-1";
            break
        case 2:
            h  = "h-3"
            mb =  props.index === 3 ? "mt-4": "mt-2";
            break
        case 3:
            h  = "h-8"
            mb =  props.index === 3 ? "mt-8": "mt-4";
            break
    }

    return (
        // <div className="f my-1">
        <div className={`${h} mt-4 flex flex-row w-full `}>
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
