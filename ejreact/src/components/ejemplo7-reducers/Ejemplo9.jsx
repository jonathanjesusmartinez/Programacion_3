import React from 'react'

const Ejemplo9 = () => {

    const estadoInicial = 0;

    const reducer = (state, action) => {

        switch(action.type) {
            case "SUMAR":
                return state + action.payload;
            case "RESTAR":
                return state - action.payload;
            case "LIMPIAR":
                return estadoInicial;
                dafault:
                return state;

        }

        if(action.type === "SUMAR") {
            return state + action.payload;
        }

        if(action.type === "RESTAR") {
            return state - action.payload;
        }

        if(action.type === "LIMPIAR") {
            return estadoInicial;
        }

        return state;
    }
    
    const [state, dispatch] = React.useReducer(reducer, estadoInicial);

    return (
        <div>
            <div>Contador: {state}</div> 
            <button onClick={()=> dispatch({type:'SUMAR', payload: 2})}>+</button>
            <button onClick={()=> dispatch({type:'RESTAR', payload: 1})}>-</button>
            <button onClick={()=> dispatch({type:'LIMPIAR', payload: estadoInicial})}>Limpiar</button>
        </div>
    )
}

export default Ejemplo9