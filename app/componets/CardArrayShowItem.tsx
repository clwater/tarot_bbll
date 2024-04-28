import React from "react";
import {Card, CardHeader, CardBody, Image, Link, Button} from "@nextui-org/react";
import {CardFooter} from "@nextui-org/card";

import imageBack from '../assets/image/card_back.jpg'

export const CardItem = ({card}: { card: CardArrayItem }) => {
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
                {/*<small>{card.name}</small> <Button as={Link} href={"/divine/" + card.id} className="">开始</Button>*/}
                <small>{card.name}</small> <Button as={Link} href={"/divine/item?id=" + card.id} className="">开始</Button>
            </CardFooter>
        </Card>
    )
}
