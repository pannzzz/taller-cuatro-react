import React from "react";

const ButtonClick = () => {
    const handleClick = () => { 
        alert('Boton clikeado')
    };

    return (
        <div className="d-flex justify-content-center mt-5">
            <button onClick={handleClick} className="btn btn-primary">Haz click en mi!!
            </button>
        </div>
    );
};

export default ButtonClick;