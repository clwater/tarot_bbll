import {Header} from "@/app/componets/Header";
import {Button, Card, Image, Link} from "@nextui-org/react";
import React from "react";
import {ArrowRight} from "@/app/componets/Icons/ArrowRight";

let TarotManager = require('@/app/utils/TarotManager');

const Home = () => {

    let seed = Math.floor(Date.now())

    function random() {
        const x = Math.sin(seed++) * 10000;
        return x - Math.floor(x);
    }

    const randomTaro = Math.floor(random() * 78) + 1
    const cardImage = TarotManager.getTarotData(randomTaro).image


    return (
        <div

        >
            <Header routeType={0}/>
            <article className="text-wrap px-2 py-2">
                <p className="text-2xl">包包和蓝蓝教你</p>
            </article>


            <Card className="col-span-12 p-4 flex-row">

                <Image
                    removeWrapper
                    alt="Card background"
                    className="z-0 row-span-6 w-1/2"
                    src={cardImage}
                />

                <div className="row-span-6 flex-col w-full flex">
                    <p className="text-3xl text-end items-center w-full  flex-1">
                        Tarot
                    </p>
                    <Link href={"/tarot"}>
                        <div
                            className="text-2xl text-end align-text-bottom w-full flex-none text-gray-400">
                            <Button>
                                Divine
                            </Button>
                        </div>

                    </Link>
                </div>
            </Card>

            <Card className="col-span-12 p-4 flex-row mt-10">

                <div className="w-full">
                    <div className="bg-white w-full">&nbsp;</div>
                    <div className="bg-white w-full my-2">&nbsp;</div>
                    <div className="bg-white w-full ">&nbsp;</div>
                    <div className="bg-white w-full mt-4">&nbsp;</div>
                    <div className="bg-white w-full my-2">&nbsp;</div>
                    <div className="bg-white w-full">&nbsp;</div>
                </div>

                <div className="row-span-6 flex-col w-full flex">
                    <p className="text-3xl text-end items-center w-full  flex-1">
                        周易
                    </p>
                    <Link href={"/zy"}>
                        <div
                            className="text-2xl text-end align-text-bottom w-full flex-none text-gray-400">
                            <Button>
                                启卦
                            </Button>
                        </div>
                    </Link>
                </div>
            </Card>
        </div>

    );
}
export default Home;