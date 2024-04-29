import React from "react";
import {Card, CardHeader, CardBody, Image, Link, Button} from "@nextui-org/react";
import {CardFooter} from "@nextui-org/card";

import imageBack from '../assets/image/card_back.jpg'

export const CardItem = ({card}: { card: CardArrayItem }) => {
    return (

        <Link href={"/divine/item?id=" + card.id}>
            <Card className="w-full h-full content-center text-white items-center text-center px-4 py-4">
                <>
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
                </>
                <small>{card.name}</small>
            </Card>

        </Link>
    )
}
