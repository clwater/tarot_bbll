import React from "react";
import {Card, CardHeader, CardBody, Image, Link} from "@nextui-org/react";
import {CardFooter} from "@nextui-org/card";

import imageBack from '../assets/image/back.jpg'

export const CardItem = ({card}: {card:CardArrayItem}) =>{
    return (

            <Card className="content-center">
                <CardBody>
                    {
                        card.matrix.map((row: number[], rowIndex: number) => (
                            <div key={rowIndex} className="flex justify-center">
                                {
                                    row.map((element, columnIndex) => (
                                        <div key={row.length * 10 + rowIndex + columnIndex}
                                             className="flex justify-center">
                                            {row[columnIndex] === 0 ?
                                                <Image src='' width={50} height={100}/>
                                                :
                                                <Image src={imageBack.src} width={50} height={100}/>
                                            }
                                        </div>

                                    ))
                                }
                            </div>
                        ))
                    }
                </CardBody>
                <CardFooter className="content-center">
                <small>{card.name}</small>
                </CardFooter>
            </Card>
    )
}
