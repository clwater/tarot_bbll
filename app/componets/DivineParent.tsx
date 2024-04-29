'use client';
import React from "react";

import {
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
    Button,
    useDisclosure, Link
} from "@nextui-org/react";

import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter} from "@nextui-org/react";


import {DivineItem} from "@/app/componets/DivineItem";
import {useRouter} from "next/navigation";
import commonBack from '../assets/image/common_back.jpg'
import {SmallTarotItem} from "@/app/componets/SmallTarotItem";

let DivineUtils = require('@/app/utils/DivineUtils');


export const DivineParent = ({type: id = '0'}) => {
    const router = useRouter()


    const matrixItem: CardArrayItem = DivineUtils.get(id)
    const matrix = matrixItem.matrix

    const {isOpen, onOpen, onClose} = useDisclosure();

    const [checkId, setCheckId] = React.useState(0);

    let init = false
    const handleOpen = (x: number, y: number) => {

        let _id = matrix[x][y]
        if (_id < 0) _id = -1 * _id
        setCheckId(_id)
        onOpen();
    }


    function updateMatrix() {
        matrix.map((row: number[], rowIndex: number) => {
                row.map((element, columnIndex) => {
                    if (element === 0) return
                    matrix[rowIndex][columnIndex] = Math.floor(Math.random() * 78) + 1
                    if (Math.random() < 0.5) {
                        matrix[rowIndex][columnIndex] = -1 * matrix[rowIndex][columnIndex]
                    }
                })
            }
        )
    }


    return (
        <div
            className="bg-opacity-75 text-white/90 bg-scroll hover:bg-fixed bg-cover bg-center w-full items-center justify-center backdrop-blur-lg "
            style={{
                backgroundImage: `url(${commonBack.src})`,
            }}
        >
            <Table hideHeader aria-label="Tarot">
                <TableHeader>
                    {
                        matrix[0].map((index: number) => (
                            <TableColumn key={index}>index</TableColumn>
                        ))
                    }
                </TableHeader>
                <TableBody>
                    {
                        matrix.map((row: number[], rowIndex: number) => (
                            <TableRow key={rowIndex}>
                                {row.map((element, columnIndex) => (
                                    <TableCell key={row.length * 10 + rowIndex}>
                                        <div
                                            onClick={() => {
                                                handleOpen(rowIndex, columnIndex)
                                            }}
                                        >
                                            <DivineItem cardId={element}/>
                                        </div>

                                    </TableCell>
                                ))}
                            </TableRow>
                        ))
                    }
                </TableBody>

            </Table>
            <Button
                onClick={() => {
                    updateMatrix()
                    router.refresh()
                }}
            >
                <b>Refresh</b>
            </Button>
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
                                <Link href={`/tarot/item?id=${checkId}`} rel="noopener noreferrer" target="_blank">
                                    <Button  color="secondary" onClick={onClose}>
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
