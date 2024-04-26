import React from "react";
import {Card, CardHeader, CardBody, Image, Link} from "@nextui-org/react";
import {CardFooter} from "@nextui-org/card";

export const CardItem = ({card}: {card:CardEntity}) =>{
    const url = `/tarot/item?id=${card.id}`;
    return (

        <Link href={url} key={card.id}>
            <Card>
                <CardBody>
                    <Image
                        alt="CardEntity background"
                        src={card.image}
                    />
                </CardBody>
                <CardFooter>
                    <small>{card.name}</small>
                </CardFooter>
            </Card>
        </Link>
    )
}
