'use client';
import React from "react";

import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Button} from "@nextui-org/react";
import {DivineItem} from "@/app/componets/DivineItem";


let DivineUtils = require('@/app/utils/DivineUtils');




export const DivineParent = ({type = '0'}) => {
    const matrixItem: CardArrayItem = DivineUtils.get(type)
    const matrix = matrixItem.matrix
    

    matrix.map((row: number[], rowIndex: number) => {
            row.map((element, columnIndex) => {
                if (element === 0) return
                matrix[rowIndex][columnIndex] = Math.floor(Math.random() * 78) + 1
            })
        }
    )

    

    function updateMatrix() {
        

        matrix.map((row: number[], rowIndex: number) => {
                row.map((element, columnIndex) => {
                    if (element === 0) return
                    matrix[rowIndex][columnIndex] = Math.floor(Math.random() * 78) + 1
                })
            }
        )

        
    }


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
                // onClick={updateMatrix()}
            >
                onCreate
            </Button>
        </div>

    )
}
