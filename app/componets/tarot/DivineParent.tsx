'use client';
import React from "react";

import {Image} from "@nextui-org/react";

import cardBack from "@/app/assets/image/card_back.jpg";


export const DivineItem = ({matrixId, isOpen, isDown, tarot}: {
    matrixId: number,
    isOpen: boolean,
    isDown: boolean,
    tarot: TarotEntity
}) => {
    if (matrixId === 0) {
        return <div></div>
    }

    const _revClass = isDown ? "rotate-180" : ""


    return (
        <div className="text-white">
            {
                <div>
                    <Image
                        removeWrapper
                        alt="Card background"
                        className={isOpen ? `${_revClass} bg-cover` : "bg-cover"}
                        // src={isOpen ? "https://clwater-halo.oss-cn-shanghai.aliyuncs.com/tarot/major-02.jpg" : cardBack.src}
                        src={isOpen ? tarot.image : cardBack.src}
                    />
                    <p className=" text-center max">
                        <small>
                            {
                                isOpen ? `${tarot.name}` : ""
                            }
                        </small>
                    </p>

                </div>
            }

        </div>
    )
}


export function DivineParent({matrix, tarots}: { matrix: number[][], tarots: TarotEntity[] }) {

    let _openMap = new Map()

    matrix.map((row: number[], rowIndex: number) => {
            row.map((element, columnIndex) => {
                if (element === 0) return
                _openMap.set(rowIndex * 10 + columnIndex, false)
            })
        }
    )

    // tarot open state map
    const [open, setOpen] = React.useState(_openMap);
    const handleOpen = (x: number, y: number) => {
        if (open.get(x * 10 + y)) {
            // onOpen()
            return
        } else {
            setOpen(prevState => {
                const updatedState = new Map(prevState);
                updatedState.set(x * 10 + y, true);
                return updatedState;
            })
        }
    }


    function getTarot(rowIndex: number, columnIndex: number) {
        let positionCardId = matrix[rowIndex][columnIndex]
        if (positionCardId < 0) positionCardId = -1 * positionCardId
        // @ts-ignore
        let tarot: TarotEntity = tarots.find((tarot: TarotEntity) => tarot.index === positionCardId)
        return tarot;
    }

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
                                     onClick={() => handleOpen(rowIndex, columnIndex)}
                                >
                                    <DivineItem matrixId={element} isOpen={open.get(rowIndex * 10 + columnIndex)}
                                                isDown={true} tarot={getTarot(rowIndex, columnIndex)}/>
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