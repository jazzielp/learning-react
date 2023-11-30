export const TURNS = {
    X: 'X',
    O: 'O',
}

//Tenemos la combinaciones de ganadores
export const WINNER_COMBINATIONS = [
    [0, 1, 2], // top
    [3, 4, 5], // middle
    [6, 7, 8], // bottom
    [0, 3, 6], // left
    [1, 4, 7], // center
    [2, 5, 8], // right
    [0, 4, 8], // diagonal
    [2, 4, 6], // diagonal
]