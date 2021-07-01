import React from 'react'

const MiTitulo = (props) => {
    return (
        <div>
            {props.valor && <h1>{props.valor}</h1>}
            {!props.valor && <h1>Título por defecto</h1>}
            {props.children}
        </div>
    )
}

const Ejemplo4 = () => {
    return (
        <div>
            <MiTitulo valor={'Titulo 1'}>
                <h2>Subtítulo</h2>
            </MiTitulo>
        </div>
    )
}

export default Ejemplo4