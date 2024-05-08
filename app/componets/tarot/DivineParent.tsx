'use client';
import React, {useState} from "react";

import {
    Button,
    useDisclosure, Link, Image
} from "@nextui-org/react";

import {useRouter} from "next/navigation";
import cardBack from "@/app/assets/image/card_back.jpg";
import {getTarotSimple} from "@/app/utils/API";


let DivineUtils = require('@/app/utils/DivineUtils');
let API = require('@/app/utils/API');


// export const DivineItem = ({isOpen, isDown}:{isOpen: boolean, isDown: boolean}) => {
//
//
//
//     // let card = TarotManager.getTarotData(cardId)
//
//     // card = isRev ? TarotManager.getTarotData(-1 * cardId) : card
//
//     const _revClass = isDown ? "rotate-180" : ""
//
//
//     return (
//         <div className="text-white">
//             {
//                 <div>
//                     <Image
//                         removeWrapper
//                         alt="Card background"
//                         className={isOpen ? `${_revClass} bg-cover` : "bg-cover"}
//                         src={isOpen ? "https://clwater-halo.oss-cn-shanghai.aliyuncs.com/tarot/major-02.jpg" : cardBack.src}
//                         // src={isOpen ? tarot.image : cardBack.src}
//                     />
//                     <p className=" text-center max">
//                         <small>
//                             {
//                                 // isOpen ? `${tarot.name}` : ""
//                                 isOpen ? "name" : ""
//                             }
//                         </small>
//                     </p>
//
//                 </div>
//             }
//
//         </div>
//     )
// }





export  async function  DivineParent({type: id = '0', randomId: randomId = '0'}) {
    const router = useRouter()
    const url = `/tarot/divine/item?id=${id}&randomId=${Math.floor(Math.random() * 1000)}`;
    const _url = `/tarot/divine/item?id=${id}&randomId=${Math.floor(Math.random() * 1000)}`;
    if (randomId === '0') {
        router.push(url)
    }

    const matrixItem: CardArrayItem = DivineUtils.get(id)
    const matrix = matrixItem.matrix
    await API.getTarotSimple();
// const [open, setOpen] = useAsyncState(false)


    // let _openMap = new Map()
    //
    // matrix.map((row: number[], rowIndex: number) => {
    //         row.map((element, columnIndex) => {
    //             if (element === 0) return
    //             _openMap.set(rowIndex * 10 + columnIndex, false)
    //         })
    //     }
    // )
    //
    // const [open, setOpen] = React.useState(_openMap)
    // const handleOpen = (x: number, y: number) => {
    //
    //
    //     if (open.get(x * 10 + y)) {
    //         // onOpen()
    //         return
    //     } else {
    //         setOpen(prevState => {
    //             prevState.set(x * 10 + y, true)
    //             return prevState
    //         })
    //     }
    // }


    return (
        <div
            className="bg-opacity-75 text-white/90 bg-scroll hover:bg-fixed bg-cover bg-center w-full items-center justify-center backdrop-blur-lg "
        >
            <div className="p-4 flex flex-col">
                {

                    matrix.map((row: number[], rowIndex: number) => (
                        <div className="flex flex-row flex-1" key={rowIndex}>{
                            row.map((element, columnIndex) => (
                                <div key={rowIndex * 10 + columnIndex}
                                     className="flex-1"
                                     // onClick={() => handleOpen(rowIndex, columnIndex)}
                                >
                                    1
                                    {/*<DivineItem cardId={element} isOpen={open.get(rowIndex * 10 + columnIndex)} tarot={getTarot(rowIndex * 10 + columnIndex)}/>*/}
                                    {/*<DivineItem  isOpen={true} isDown={true}/>*/}
                                </div>
                            ))
                        }
                        </div>
                    ))
                }

            </div>


        </div>

    )
}