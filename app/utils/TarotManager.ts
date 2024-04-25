import {promises as fs} from "fs";
import exp from "node:constants";

let file;
let data;
let cards: Card[] = [];
export async function init(){
    file = await fs.readFile(process.cwd() + '/data/card_data.json', 'utf8');
    data = JSON.parse(file);
    cards = data.cards;
}

export async function getTarotData() {
    await init();
    return cards;

}