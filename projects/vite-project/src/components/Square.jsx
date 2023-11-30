import typeProps from 'prop-types'
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

//Validamos los props del componente Square
Square.propTypes = {
    children: typeProps.node,
    isSelected: typeProps.bool,
    updateBorad: typeProps.func,
    index: typeProps.number,
}

export default Square