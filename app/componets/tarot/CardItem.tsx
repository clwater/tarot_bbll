import React from "react";
import {Image, Link} from "@nextui-org/react";

export const CardItem = ({card}: { card: CardEntity }) => {
    const url = `/tarot/tarot/item?id=${card.id}`;

    let badgeColor = 'outline-gray-500'
    switch (card.suit) {
        case 'pentacles' :
            badgeColor = 'outline-orange-800';
            break
        case 'cups' :
            badgeColor = 'outline-blue-800';
            break
        case 'wands' :
            badgeColor = 'outline-red-800';
            break
        case 'swords' :
            badgeColor = 'outline-green-800';
            break
    }

    return (

        <Link href={url} key={card.id}>
            <div
                className="bg-scroll  w-full items-center justify-center text-white/90 min-h-1000"
                // className={` outline outline-offset-4 items-center justify-center text-white/90  ${badgeColor}`}
            >
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <Image
                        alt="Woman listing to music"
                        className="object-cover"
                        height={200}
                        src={card.image}
                        width={200}
                    />
                </div>
                <small>{card.name}</small>
            </div>
        </Link>
    )
}
