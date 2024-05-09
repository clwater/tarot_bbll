'use client';
import React from "react";

import {Image, useDisclosure} from "@nextui-org/react";

import cardBack from "@/app/assets/image/card_back.jpg";
import {Modal, ModalBody, ModalContent} from "@nextui-org/modal";


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


export function DivineParent({matrix, tarots, tarotExplains}: { matrix: number[][], tarots: TarotEntity[], tarotExplains: TarotExplainEntity[]}) {

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
             onOpen()
            return
        } else {
            setOpen(prevState => {
                const updatedState = new Map(prevState);
                updatedState.set(x * 10 + y, true);
                return updatedState;
            })
        }
    }


    const {isOpen, onOpen, onClose} = useDisclosure();


    function getTarot(rowIndex: number, columnIndex: number) {
        let positionCardId = matrix[rowIndex][columnIndex]
        if (positionCardId < 0) positionCardId = -1 * positionCardId
        // @ts-ignore
        let tarot: TarotEntity = tarots.find((tarot: TarotEntity) => tarot.index === positionCardId)
        return tarot;
    }

    // function getExplain(rowIndex: number, columnIndex: number) {
    //     let positionCardId = matrix[rowIndex][columnIndex]
    //     if (positionCardId < 0) positionCardId = -1 * positionCardId
    //     // @ts-ignore
    //     let explain: TarotExplainEntity = tarotExplains.find((explain: TarotExplainEntity) => explain.tarot_index === positionCardId)
    //     return explain;
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

                         <Modal
                             isOpen={isOpen}
                             onClose={onClose}
                             hideCloseButton={true}
                             className="bg-gray-900 text-white/90 "
                         >
                             <ModalContent>
                                 {(onClose) => (
                                     <>
                                         <ModalBody>
                                             111
                                             {/*<SmallTarotItem id={checkId.toString()}/>*/}
                                         </ModalBody>
                                         {/*<ModalFooter className="justify-between">*/}
                                         {/*    <Link href={`/tarot/tarot/item?id=${checkId}`} rel="noopener noreferrer"*/}
                                         {/*          target="_blank">*/}
                                         {/*        <Button color="secondary" onClick={onClose}>*/}
                                         {/*            <p>Detail</p>*/}
                                         {/*        </Button>*/}
                                         {/*    </Link>*/}
            
                                         {/*    <Button color="primary" onPress={onClose}>*/}
                                         {/*        <p>Close</p>*/}
                                         {/*    </Button>*/}
                                         {/*</ModalFooter>*/}
                                     </>
                                 )}
                             </ModalContent>
                         </Modal>
        </div>

    )
}