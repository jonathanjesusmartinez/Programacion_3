import React, {useState, useEffect} from 'react'

const MostrarNombre = () => {

    const [contador, setContador] = useState(0);

    useEffect(() => {
        console.info('Iniciando Nombre')

        return () => {
            console.info('Saliendo de Nombre')
        }

    }, []);

    useEffect(() => {
        console.info('Cambiando contador a' + contador);
    }, [contador]);

    return (
            <div>
                <h3>Mi nombre es Jose {contador}</h3>
                <button onClick={() => setContador(contador + 1)}>Incrementar</button>
       
            </div>
    )
}

const MostrarPais = () => {

    useEffect(() => {
        console.info('Iniciando País')

        return () => {
            console.info('Saliendo de País')
        }

    }, []);

    return (
        <>
            <h3>Argentina</h3>
        </>
    )
}

const Ejemplo = () => {

    const [esNombre, setEsNombre] = useState(true);

    useEffect(() => {
        console.info('Iniciando componente');

    }, []);

    const manejadorDeClick = () => {
        setEsNombre(!esNombre);
    }

    return (
        <>
            <h1>Ejemplo de UseEffect</h1>
            {esNombre ? <MostrarNombre /> : <MostrarPais />}
            <button onClick={manejadorDeClick}>Cambiar</button>
        </>
    )
};

export default Ejemplo