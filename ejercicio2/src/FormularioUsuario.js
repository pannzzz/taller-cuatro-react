    import React, { useState } from 'react';
    import 'bootstrap/dist/css/bootstrap.min.css';

    const FormularioUsuario = () => {
    // Estado para manejar el valor ingresado por el usuario
    const [nombre, setNombre] = useState('');
    const [nombreMostrado, setNombreMostrado] = useState('');

    // Función para manejar el cambio en el campo de texto
    const handleInputChange = (e) => {
        setNombre(e.target.value); // Actualiza el estado con el valor ingresado
    };

    // Función para manejar el envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault(); // Evita que se recargue la página
        setNombreMostrado(nombre); // Actualiza el estado con el nombre que se va a mostrar
    };

    return (
        <div className="d-flex flex-column align-items-center justify-content-center vh-100">
        <h1 className="text-center mb-4">Formulario de Usuario</h1>

        {/* Formulario */}
        <form onSubmit={handleSubmit} className="w-50">
            <div className="form-group mb-3">
            <label htmlFor="nombreUsuario" className="form-label">Nombre de Usuario:</label>
            <input
                type="text"
                className="form-control"
                id="nombreUsuario"
                placeholder="Ingresa tu nombre"
                value={nombre}
                onChange={handleInputChange}
            />
            </div>
            <button type="submit" className="btn btn-primary">Enviar</button>
        </form>

        {/* Mostrar el nombre ingresado */}
        {nombreMostrado && (
            <div className="alert alert-success mt-4">
            <h4>Hola, {nombreMostrado}! ¿como estas? uwu</h4>
            </div>
        )}
        </div>
    );
    };

    export default FormularioUsuario;
