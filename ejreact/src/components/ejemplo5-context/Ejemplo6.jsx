import React from 'react'


const Store = React.createContext();

const App = (props) => {

    const estadoInicial = {
        productos: [{id: 1, nombre: 'Producto 1', precio: 33}, {id: 2, nombre: 'Producto 2', precio: 63}],
        prodSeleccionado: 2
    }

    return (
        <Store.Provider value={estadoInicial}>
            {props.children}
        </Store.Provider>
    )
}

const ListaProductos = () => {

    const ctx = React.useContext(Store);
    const {productos} = ctx;

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Precio</th>
                    </tr>
                </thead>
                <tbody>
                {productos.map(prod => {
                    return (
                        <tr key={prod.id}>
                            <td>{prod.nombre}</td>
                            <td>{prod.precio}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    )
}

const MostrarProducto = () => {

    const ctx = React.useContext(Store);
    const {productos, prodSeleccionado} = ctx;
    const producto = productos.find(p => p.id === prodSeleccionado);
    return (
        <div>
            <hr />
            <h3>Nombre: {producto.nombre}</h3>
            <h4>Precio: ${producto.precio}</h4>
        </div>
    )
}

const Ejemplo6 = () => {
    return (
        <App>
            <ListaProductos/>
            <MostrarProducto/>
        </App>
    )
}

export default Ejemplo6