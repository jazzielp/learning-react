import { WINNER_COMBINATIONS } from '../constants'

//Función para verificar si hay un ganador
export const checkWinner = (boardToCheck) => {
    for (const combo of WINNER_COMBINATIONS) { //Recorremos las combinaciones ganadoras
        const [a, b, c] = combo //Desestructuramos el array de la combinación ganadora
        if (
            boardToCheck[a] &&
            boardToCheck[a] === boardToCheck[b] &&
            boardToCheck[a] === boardToCheck[c]
        ) {
            return boardToCheck[a]
        }
    }
    return null
}