import {Header} from "@/app/componets/header";
import React from "react";
import {Button, Card, CardBody, Link} from "@nextui-org/react";
import {CardItem} from "@/app/componets/CardArrayShowItem";


let DivineUtils = require('@/app/utils/DivineUtils');
export default function Tarot() {
    const matrixs = DivineUtils.getMatrixs()
    console.log(matrixs)

    return (
        <div>
            <Header routeType={1} />
            <div>

                {
                    matrixs.map((cardArrayItem: CardArrayItem, index: number) => (
                        <div key={cardArrayItem.id}>
                            <Link href={`/divine/${cardArrayItem.id}`}>
                                <CardItem card={cardArrayItem}/>
                            </Link>
                        </div>
                    ))
                }

               {/*divine*/}
               {/* <br/>*/}

               {/* <Link href="/divine/0">*/}
               {/*     <Button>type 0</Button>*/}
               {/* </Link>*/}

               {/* <br/>*/}
               {/* <Link href="/divine/1">*/}
               {/*     <Button>type 1</Button>*/}
               {/* </Link>*/}
            </div>
        </div>

  );
}
