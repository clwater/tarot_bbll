import {promises as fs} from "fs";
import exp from "node:constants";

let file;
let data;
let cards: CardEntity[] = [];
let majors: CardEntity[] = [];
let minors: CardEntity[] = [];
let wands: CardEntity[] = [];
let pentacles: CardEntity[] = [];
let cups: CardEntity[] = [];
let swords: CardEntity[] = [];
let map: Map<number, CardEntity> = new Map();

export async function init(){
    if (cards.length > 0) return;
    file = await fs.readFile(process.cwd() + '/data/card_data.json', 'utf8');
    data = JSON.parse(file);
    cards = data.cards;

    cards.map((card: CardEntity) => {
        map.set(card.id, card);
    })

    majors = cards.filter(card => card.type === "major");
    minors = cards.filter(card => card.type === "minor");
    wands = cards.filter(card => card.suit === "wands");
    pentacles = cards.filter(card => card.suit === "pentacles");
    cups = cards.filter(card => card.suit === "cups");
    swords = cards.filter(card => card.suit === "swords");
}

export async function getTarotData(id: number) {
    await init();
    return map.get(id);
}



export async function getTarotDataMajor() {
    await init();

    return majors
}

export async function getTarotDataMinors(suit: string) {
    await init();

    switch (suit) {
        case "wands":
            return wands;
        case "pentacles":
            return pentacles;
        case "cups":
            return cups;
        case "swords":
            return swords;
        default:
            return minors;
    }
}