import React, { useState } from 'react';
import Formulario from './Formulario';
import Resultado from './Resultado';

const App = () => {
  const [numero, setNumero] = useState('');

  const manejarCambioNumero = (nuevoNumero) => {
    setNumero(nuevoNumero);
  };

  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100">
      <h1 className="text-center mb-4">Ejercicio 3 Lifting State Up</h1>

      <Formulario numero={numero} onNumeroChange={manejarCambioNumero} />

      <Resultado numero={numero} />
    </div>
  );
};

export default App;