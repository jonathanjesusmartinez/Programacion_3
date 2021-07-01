import React from 'react'

const Ejemplo8 = () => {

    const reducer = (state, accion) => {

        if(accion === "SUMAR") {
            return state + 1;
        }

        if(accion === "RESTAR") {
            return state - 1;
        }

        if(accion === "LIMPIAR") {
            return estadoInicial;
        }

        return state;
    }

    const estadoInicial = 0;
    const [state, dispatch] = React.useReducer(reducer, estadoInicial);


    return (
        <div>
            <div>Contador: {state}</div> 
            <button onClick={()=> dispatch('SUMAR')}>+</button>
            <button onClick={()=> dispatch('RESTAR')}>-</button>
            <button onClick={()=> dispatch('LIMPIAR')}>Limpiar</button>
        </div>
    )
}

export default Ejemplo8