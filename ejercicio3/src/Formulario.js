    import React from 'react';
    import 'bootstrap/dist/css/bootstrap.min.css';

    const Formulario = ({ numero, onNumeroChange }) => {
        const handleInputChange = (e) => {
        onNumeroChange(e.target.value);
    };

    return (
        <div className="w-50">
        <div className="form-group mb-3">
            <label htmlFor="numeroInput" className="form-label">Ingresa un número:</label>
            <input
            type="number"
            className="form-control"
            id="numeroInput"
            placeholder="Escribe un número"
            value={numero}
            onChange={handleInputChange}
            />
        </div>
        </div>
    );
    };

    export default Formulario;