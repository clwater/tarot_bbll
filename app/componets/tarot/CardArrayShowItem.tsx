import React from "react";
import {Card, CardHeader, CardBody, Image, Link, Button} from "@nextui-org/react";
import {CardFooter} from "@nextui-org/card";

import imageBack from '../../assets/image/card_back.jpg'

export const CardItem = ({card}: { card: CardArrayItem }) => {
    return (

        <Link href={"/tarot/divine/item?id=" + card.id} className="w-full py-2">
            <Card className="w-full content-center text-white items-center text-center bg-gray-800 pt-2">
                    {
                        card.matrix.map((row: number[], rowIndex: number) => (
                            <div key={rowIndex} className="flex justify-center">
                                {
                                    row.map((element, columnIndex) => (
                                        <div key={row.length * 10 + rowIndex + columnIndex}
                                             className="flex justify-center"
                                             style={{
                                                 width: 25,
                                                 height: 40
                                             }}>
                                            {row[columnIndex] === 0 ?
                                                <Image src=''/>
                                                :
                                                <Image className="" src={imageBack.src}/>
                                            }
                                        </div>

                                    ))
                                }
                            </div>
                        ))
                    }
                <small className="py-1">{card.name}</small>
            </Card>

        </Link>
    )
}
