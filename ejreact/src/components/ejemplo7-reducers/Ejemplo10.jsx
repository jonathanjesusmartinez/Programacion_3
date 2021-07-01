import React from 'react'

const fecha = new Date().toString();

const Ejemplo10 = () => {

    const estadoInicial = {
        resultado: 0,
        tiempo: fecha
    };

    const reducer = (state, action) => {

        switch(action.type) {
            case "SUMAR":
                return {...state, resultado: state.resultado + action.payload};
            case "RESTAR":
                return {...state, resultado: state.resultado - action.payload};
            case "LIMPIAR":
                return estadoInicial;
            case "FECHA":
                return {...state, tiempo: action.payload};
            default:
                return state;
        }
    }
    
    const [state, dispatch] = React.useReducer(reducer, estadoInicial);

    return (
        <div>
            <div>Contador: {state.resultado}</div> 
            <button onClick={()=> dispatch({type:'SUMAR', payload: 2})}>+</button>
            <button onClick={()=> dispatch({type:'RESTAR', payload: 1})}>-</button>
            <button onClick={()=> dispatch({type:'LIMPIAR'})}>Limpiar</button>
            <div>Fecha: {state.tiempo}</div>
            <button onClick={()=> dispatch({type:'FECHA', payload: new Date().toString()})}>Actualizar</button>
        </div>
    )
}

export default Ejemplo10