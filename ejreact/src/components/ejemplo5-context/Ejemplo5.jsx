import React from 'react'

const Store = React.createContext();

const Padre = (props) => {
    const nombre = 'Juan';
    return (
        <Store.Provider value={nombre}>
            {props.children}
        </Store.Provider>
    )
}

const Hijo1 = (props) => {
    const value = React.useContext(Store);
    return (
        <>
            <div>Hijo 1 - Mi papá se llama {value}</div>
            {props.children}
        </>
    )
}

const Nieto = () => {
    const value = React.useContext(Store);
    return (
        <div>Nieto - Mi abuelo se llama {value}</div>
    )
}


const Hijo2 = (props) => {
    const value = React.useContext(Store);
    return (
        <>
            <div>Hijo 2 - Mi papá se llama {value}</div>
            {props.children}
        </>
    )
}

const Ejemplo5 = () => {
    return (
        
        <Padre>
            <Hijo1>
                <Nieto/>
            </Hijo1>
            <Hijo2>
                <p>Hola</p>
            </Hijo2>
        </Padre>
        
    )
}

export default Ejemplo5