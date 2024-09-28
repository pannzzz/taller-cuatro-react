import React from 'react';

const Resultado = ({ numero}) => {
    return (
        <div className='mt4'>
            <h2>
                El numero que ingresaste es: {numero}
            </h2>
        </div>
    );
};

export default Resultado;