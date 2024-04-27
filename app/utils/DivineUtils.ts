import {maxHeaderSize} from "http";

const matrixSize = 9

const cardMatrix_1: CardArrayItem = {
    id: 1,
    matrix: [
        [-1, -2, -3],
    ],
    name: '三张牌/时间流'
}

const cardMatrix_2: CardArrayItem = {
    id: 2,
    matrix: [
        [-2, 0, -3],
        [0, -1, 0],
    ],
    name: '圣三角'
}

const cardMatrix_3: CardArrayItem = {
    id: 3,
    matrix: [
        [0, -4, 0],
        [-1, -2, -3],
    ],
    name: '身心灵'
}

const cardMatrix_4: CardArrayItem = {
    id: 4,
    matrix: [
        [-1, -4],
        [-2, -3],
    ],
    name: '四元素'
}

const cardMatrix_5: CardArrayItem = {
    id: 5,
    matrix: [
        [0, -4, 0],
        [-2, -1, -3],
    ],
    name: '金字塔'
}

const cardMatrix_6: CardArrayItem = {
    id: 6,
    matrix: [
        [0, -3, 0],
        [-1, -4, -2],
        [0, -5, 0],
    ],
    name: '大十字'
}

const cardMatrix_7: CardArrayItem = {
    id: 7,
    matrix: [
        [-4, 0, 0, 0, -5],
        [0, -2, 0, -3, 0],
        [0, 0, -1, 0, 0],
    ],
    name: '二选一'
}

const cardMatrix_8: CardArrayItem = {
    id: 6,
    matrix: [
        [-1, -3, -5],
        [-2, -4, -6],
    ],
    name: '灵感对应'
}

const cardMatrix_9: CardArrayItem = {
    id: 9,
    matrix: [
        [0, 0, -1, 0, 0],
        [-5,0 , 0, 0, -6],
        [0, 0, -7, 0, 0],
        [ -3, 0, 0, 0, -2],
        [0, 0, -4, 0, 0],
    ],
    name: '六芒星'
}

const cardMatrixs = [
    cardMatrix_1,
    cardMatrix_2,
    cardMatrix_3,
    cardMatrix_4,
    cardMatrix_5,
    cardMatrix_6,
    cardMatrix_7,
    cardMatrix_8,
    cardMatrix_9,
]

export function get(_index: string) {
    const index = parseInt(_index) - 1
    return cardMatrixs[index]
}

export function getMatrixs() {
    return cardMatrixs
}

// export  function get(type: string){
//
//     let matrix = type_0
//     switch (type){
//         case '0' : matrix = type_0; break
//         case '1' : matrix = type_1; break
//     }
//
//
//     let top = 0
//     let bottom = maxHeaderSize - 1
//     let left = 0
//     let right = maxHeaderSize - 1
//
//
//     for (let y = 0; y < matrixSize; y++){
//         let hasDate = false
//         for (let x = 0; x < matrixSize; x++){
//             if (matrix[y][x] === 1){
//                 hasDate = true
//                 break
//             }
//         }
//         if(hasDate){
//             top = y
//             break
//         }
//     }
//
//     for (let y = matrixSize - 1; y >= 0; y--){
//         let hasDate = false
//         for (let x = 0; x < matrixSize; x++){
//             if (matrix[y][x] === 1){
//                 hasDate = true
//                 break
//             }
//         }
//         if(hasDate){
//             bottom = y
//             break
//         }
//     }
//
//     for (let x = 0; x < matrixSize; x++){
//         let hasDate = false
//         for (let y = 0; y < matrixSize; y++){
//             if (matrix[y][x] === 1){
//                 hasDate = true
//                 break
//             }
//         }
//         if(hasDate){
//             left = x
//             break
//         }
//     }
//
//     for (let x = matrixSize - 1; x >= 0; x--){
//         let hasDate = false
//         for (let y = 0; y < matrixSize; y++){
//             if (matrix[y][x] === 1){
//                 hasDate = true
//                 break
//             }
//         }
//         if(hasDate){
//             right = x
//             break
//         }
//     }
//
//
//
//     let result = []
//     for (let y = top; y <= bottom; y++){
//         let row = []
//         for (let x = left; x <= right; x++){
//             row.push(matrix[y][x])
//         }
//         result.push(row)
//     }
//
//     return result
// }