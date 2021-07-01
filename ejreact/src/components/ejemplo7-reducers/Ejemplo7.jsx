import React from 'react'

const Ejemplo7 = () => {

    const arr = [1, 2, 3, 4, 5];
    const reductora = (estado, valor) => {
        const res = estado + valor;
        return res;
    }

    const estadoInicial = 0;
    const resultadoFinal = arr.reduce(reductora, estadoInicial);


    return (
        <div>
            Función reduce es: {resultadoFinal}
        </div>
    )
}

export default Ejemplo7