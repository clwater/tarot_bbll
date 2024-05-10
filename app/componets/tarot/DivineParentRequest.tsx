'use client';
import React, {useEffect, useState} from "react";

import {Button, Image, Link} from "@nextui-org/react";

import {useRouter} from "next/navigation";
import cardBack from "@/app/assets/image/card_back.jpg";
import TarotLoading from "@/app/componets/TarotLoading";
import {DivineParent} from "@/app/componets/tarot/DivineParent";


let DivineUtils = require('@/app/utils/DivineUtils');
let API = require('@/app/utils/API');

export async function DivineParentRequest({type: id = '0', randomId: randomId = '0'}) {
    const router = useRouter()
    const url = `/tarot/divine/item?id=${id}&randomId=${Math.floor(Math.random() * 1000)}`;
    const _url = `/tarot/divine/item?id=${id}&randomId=${Math.floor(Math.random() * 1000)}`;
    if (randomId === '0') {
        router.push(url)
    }

    const matrixItem: CardArrayItem = DivineUtils.get(id)
    const matrix = matrixItem.matrix


    let seed = parseInt(randomId)

    function random() {
        const x = Math.sin(seed++) * 10000;
        return x - Math.floor(x);
    }

    const randomSet: Set<number> = new Set()
    const requestTarotIds: number[] = []

    function updateMatrix() {
        matrix.map((row: number[], rowIndex: number) => {
                row.map((element, columnIndex) => {
                    if (element === 0) return
                    let nextCard = Math.floor(random() * 78) + 1
                    while (randomSet.has(nextCard)) {
                        nextCard = Math.floor(random() * 78) + 1
                    }
                    randomSet.add(nextCard)
                    matrix[rowIndex][columnIndex] = nextCard
                    requestTarotIds.push(nextCard)

                    if (random() < 0.5) {
                        matrix[rowIndex][columnIndex] = -1 * matrix[rowIndex][columnIndex]
                    }
                })
            }
        )
    }

    updateMatrix()


    const tarots: TarotEntity[] = await API.getTarots(requestTarotIds)
    const tarotExplains: TarotExplainEntity[] = await API.getTarotExplains(requestTarotIds)


    return (
        <div
            className="w-full h-full"
        >
            <DivineParent matrix={matrix} tarots={tarots} tarotExplains={tarotExplains}/>

            <Link href={_url} className="w-full px-4">
                <Button onClick={() => {
                    // refresh()
                    updateMatrix()
                }}
                        className="w-full"
                >
                    <b>Divine</b>
                </Button>
            </Link>
        </div>

    )
}