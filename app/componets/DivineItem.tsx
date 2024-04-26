'use client';
import React from "react";

import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@nextui-org/react";
import {CardItem} from "@/app/componets/CardItem";


let DivineUtils = require('@/app/utils/DivineUtils');


export const DivineItem = ({type = '0'}) =>{
    const matrix = DivineUtils.get(type)
    console.log(matrix)

    return (
        <div>
            <Table hideHeader aria-label="Tarot">
                <TableHeader>
                    {
                        matrix[0].map( (index: number) => (
                            <TableColumn>index</TableColumn>
                        ))
                    }
                </TableHeader>
                <TableBody>
                    {
                        matrix.map((line: number[], y: number) => (
                            <TableRow key={y}>
                                {
                                    line.map( (x: number) => (
                                        <TableCell>{
                                            matrix[x][y]
                                        }</TableCell>
                                    ))
                                }
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </div>

    )
}
