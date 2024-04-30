'use client';
import React from "react";

import {
    Button,
    useDisclosure, Link
} from "@nextui-org/react";

import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter} from "@nextui-org/react";


import {DivineItem} from "@/app/componets/tarot/DivineItem";
import {useRouter} from "next/navigation";
import {SmallTarotItem} from "@/app/componets/tarot/SmallTarotItem";


let DivineUtils = require('@/app/utils/DivineUtils');

export const DivineParent = ({type: id = '0', randomId: randomId = '0'}) => {
    const router = useRouter()
    const url = `/tarot/divine/item?id=${id}&randomId=${ Math.floor(Math.random() * 1000)}`;
    const _url = `/tarot/divine/item?id=${id}&randomId=${ Math.floor(Math.random() * 1000)}`;
    if (randomId === '0'){
        router.push(url)
    }

    const matrixItem: CardArrayItem = DivineUtils.get(id)
    const matrix = matrixItem.matrix
    const {isOpen, onOpen, onClose} = useDisclosure();
    const [checkId, setCheckId] = React.useState(0);

    // let checkId = 0
    const handleOpen = (x: number, y: number) => {

        let _id = matrix[x][y]
        if (_id < 0) _id = -1 * _id
        setCheckId(_id)
        // checkId = _id
        onOpen();
    }

    let seed = parseInt(randomId)

    function random() {
        const x = Math.sin(seed++) * 10000;
        return x - Math.floor(x);
    }

    function updateMatrix() {
        matrix.map((row: number[], rowIndex: number) => {
                row.map((element, columnIndex) => {
                    if (element === 0) return
                    matrix[rowIndex][columnIndex] = Math.floor(random() * 78) + 1
                    if (random() < 0.5) {
                        matrix[rowIndex][columnIndex] = -1 * matrix[rowIndex][columnIndex]
                    }
                })
            }
        )
    }

    updateMatrix()

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
                                    <DivineItem cardId={element}/>
                                </div>
                            ))
                        }
                        </div>
                    ))
                }

            </div>

            <Link href={_url}>
                <Button onClick={() => {
                    // refresh()
                    updateMatrix()

                }}>
                    <b>Refresh</b>
                </Button>
            </Link>

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
                                <SmallTarotItem id={checkId.toString()}/>
                            </ModalBody>
                            <ModalFooter className="justify-between">
                                <Link href={`/tarot/tarot/item?id=${checkId}`} rel="noopener noreferrer"
                                      target="_blank">
                                    <Button color="secondary" onClick={onClose}>
                                        <p>Detail</p>
                                    </Button>
                                </Link>

                                <Button color="primary" onPress={onClose}>
                                    <p>Close</p>
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </div>

    )
}