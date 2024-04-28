'use client';
import React from "react";

import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Button} from "@nextui-org/react";
import {DivineItem} from "@/app/componets/DivineItem";
import {useRouter} from "next/navigation";

let DivineUtils = require('@/app/utils/DivineUtils');




export const DivineParent = ({type: id = '0'}) => {
    const matrixItem: CardArrayItem = DivineUtils.get(id)
    const matrix = matrixItem.matrix
    const router = useRouter()

    function updateMatrix() {
        matrix.map((row: number[], rowIndex: number) => {
                row.map((element, columnIndex) => {
                    if (element === 0) return
                    matrix[rowIndex][columnIndex] = Math.floor(Math.random() * 78) + 1
                    if (Math.random() < 0.5){
                        matrix[rowIndex][columnIndex] = -1 * matrix[rowIndex][columnIndex]
                    }
                })
            }
        )
    }

    updateMatrix()

    return (
        <div>

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
                                        <DivineItem cardId={element}/>
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))
                    }
                </TableBody>

            </Table>
            <Button
                onClick={() => {
                    router.refresh()
                }}
                // onClick={updateMatrix()}
            >
                <b>Refresh</b>
            </Button>
        </div>

    )
}
