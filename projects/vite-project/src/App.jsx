import './App.css';
import { useState } from 'react'


const TURNS = {
    X: 'X',
    O: 'O',
}

//Este es un componente para dibujar el cuadrado
const Square = ({ children, isSelected, updateBorad, index }) => {
    const className = ` square ${isSelected ? 'is-selected' : ''}` //Si isSelected es true, entonces se agrega la clase is-selected
    
    const handleClick = () => {
        updateBorad(index)
    }

    return (
        <div onClick={handleClick} className={className}>
            {children}
        </div>
    )
}

//Tenemos la combinaciones de ganadores
const WINNER_COMBINATIONS = [
    [0, 1, 2], // top
    [3, 4, 5], // middle
    [6, 7, 8], // bottom
    [0, 3, 6], // left
    [1, 4, 7], // center
    [2, 5, 8], // right
    [0, 4, 8], // diagonal
    [2, 4, 6], // diagonal
]

function App() {
    const [board, setBoard] = useState(Array(9).fill(null)) //Estado inicial del tablero
    const [turn, setTurn] = useState(TURNS.X) //Estado inicial del turno
    const [winner, setWinner] = useState(null) //Estado inicial del ganador

    //Función para verificar si hay un ganador
    const checkWinner = (boardToCheck) => {
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
    
    //Función para actualizar el tablero
    const updateBorad = (index) => {
        // Si el cuadrado ya está ocupado o si ya hay un ganador, no hacemos nada
        if (board[index] || winner) {
            return
        }

        const newBoard = [...board] //Creamos un nuevo tablero
        newBoard[index] = turn //Actualizamos el tablero con el turno
        setBoard(newBoard) //Actualizamos el estado del tablero
        const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X //Actualizamos el turno
        setTurn(newTurn) //Actualizamos el estado del turno
        const newWinner = checkWinner(newBoard) //Verificamos si hay un ganador
        if (newWinner) { //Si hay un ganador, actualizamos el estado del ganador
            setWinner(newWinner)
        }
    }
    return (
        <main className='board'>
            <h1>Gato!</h1>
            {/* Dibujamos el tablero */}
            <section className='game'>
                {
                    board.map((_, index) => {
                        return (
                            <Square
                                key={index}
                                index={index}
                                updateBorad={updateBorad}
                            >
                                {board[index]}
                            </Square>
                        )
                    })
                }
            </section>
            {/* Dibujamos el turno */}
            <section className='turn'>
                <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
                <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
            </section>
            {/* Dibujamos el ganador */}
            {
                winner !== null && (
                    <section className='winner'>
                        <div className='text'>
                            <h2>
                                {
                                    winner === false
                                        ? 'Empate'
                                        : 'Ganó'
                                }
                            </h2>
                            <header className='win'>
                                { winner && <Square>{winner}</Square>}
                            </header>
                            <footer>
                                <button>Empezar de nuevo</button>
                            </footer>
                        </div>
                    </section>
                )
            }
        </main>
    );
}

export default App