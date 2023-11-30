import './App.css';
import { useState } from 'react'
import confetti from 'canvas-confetti';
import Square from './components/Square'
import WinnerModal from './components/WinnerModal'
import { TURNS } from './constants'
import { checkWinner } from './logic/board.js'

function App() {
    const [board, setBoard] = useState(Array(9).fill(null)) //Estado inicial del tablero
    const [turn, setTurn] = useState(TURNS.X) //Estado inicial del turno
    const [winner, setWinner] = useState(null) //Estado inicial del ganador
    
    const resetGame = () => {
        setBoard(Array(9).fill(null)) //Reseteamos el tablero
        setTurn(TURNS.X) //Reseteamos el turno
        setWinner(null) //Reseteamos el ganador
    }

    const checkEndGame = (newBoard) => {
        return newBoard.every((square) => square !== null)
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
            confetti();
            setWinner(newWinner)
        } else if(checkEndGame(newBoard)) { //Si no hay un ganador, verificamos si hay un empate
            setWinner(false)
        }
    }
    return (
        <main className='board'>
            <h1>Gato!</h1>
            {/* Dibujamos el tablero */}
            <button onClick={resetGame}>Resetear el juego</button>
            <section className='game'>
                {
                    board.map((_, index) => {
                        return (
                            //Dibujamos el cuadrado
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
                    <WinnerModal resetGame={resetGame} winner={winner} />
                )
            }
        </main>
    );
}

export default App