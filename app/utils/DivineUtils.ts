import {maxHeaderSize} from "http";

const matrixSize = 9

const type_0 = [
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,1,1,1,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0]
    ]


const type_1 = [
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,1,0,0,0,0],
    [0,0,0,1,1,1,0,0,0],
    [0,0,1,1,1,1,1,0,0],
    [0,0,0,1,1,1,0,0,0],
    [0,0,0,0,1,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0]
]



export  function get(type: string){

    let matrix = type_0
    switch (type){
        case '0' : matrix = type_0; break
        case '1' : matrix = type_1; break
    }


    let top = 0
    let bottom = maxHeaderSize - 1
    let left = 0
    let right = maxHeaderSize - 1


    for (let y = 0; y < matrixSize; y++){
        let hasDate = false
        for (let x = 0; x < matrixSize; x++){
            if (matrix[y][x] === 1){
                hasDate = true
                break
            }
        }
        if(hasDate){
            top = y
            break
        }
    }

    for (let y = matrixSize - 1; y >= 0; y--){
        let hasDate = false
        for (let x = 0; x < matrixSize; x++){
            if (matrix[y][x] === 1){
                hasDate = true
                break
            }
        }
        if(hasDate){
            bottom = y
            break
        }
    }

    for (let x = 0; x < matrixSize; x++){
        let hasDate = false
        for (let y = 0; y < matrixSize; y++){
            if (matrix[y][x] === 1){
                hasDate = true
                break
            }
        }
        if(hasDate){
            left = x
            break
        }
    }

    for (let x = matrixSize - 1; x >= 0; x--){
        let hasDate = false
        for (let y = 0; y < matrixSize; y++){
            if (matrix[y][x] === 1){
                hasDate = true
                break
            }
        }
        if(hasDate){
            right = x
            break
        }
    }



    let result = []
    for (let y = top; y <= bottom; y++){
        let row = []
        for (let x = left; x <= right; x++){
            row.push(matrix[y][x])
        }
        result.push(row)
    }

    return result
}