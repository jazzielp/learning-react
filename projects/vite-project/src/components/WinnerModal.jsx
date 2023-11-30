import typeProps from 'prop-types'
import Square from "./Square";

function WinnerModal({ winner, resetGame }) {
    const winnerText = winner === false ? 'Empate' : 'Ganó'
    return (
        <section className='winner'>
            <div className='text'>
                <h2>
                    {winnerText}
                </h2>
                <header className='win'>
                    {winner && <Square>{winner}</Square>}
                </header>
                <footer>
                    <button onClick={resetGame}>Empezar de nuevo</button>
                </footer>
            </div>
        </section>
    );
}

WinnerModal.propTypes = {
    winner: typeProps.oneOf([false, 'X', 'O']),
    resetGame: typeProps.func,
}

export default WinnerModal