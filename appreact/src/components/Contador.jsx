import { useState } from "react";


const Contador = () => {
    
    
    const [nombre, setNombre] = useState("Juan Perez");

    const [contador, setContador] = useState(10);

    const decrementar = () => {
        setContador(contador - 1);
    }

    const cambiarNombre = () => {
        setNombre("Pablo Gomez"); 
    }

    const multiplicar2 = () => {
        setContador(contador * 2);
    }

    const dividir2 = () => {
        setContador(contador / 2);
    }

    return (
        <>
            <h1>App React</h1>
            <h2>Bienvenido {nombre}</h2>
            <h2>Cantidad: {contador}</h2>
            <button onClick={() => setContador(contador + 1)}>+</button> 
            <button onClick={decrementar}>-</button>
            <button onClick={multiplicar2}>X2</button>
            <button onClick={dividir2}>/2</button>
            <button onClick={cambiarNombre}>Cambiar nombre</button>
        
        </>
    );
}


export default Contador;