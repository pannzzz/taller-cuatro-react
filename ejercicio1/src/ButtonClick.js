import React, { useState } from 'react';
    import 'bootstrap/dist/css/bootstrap.min.css';
    import { Modal, Button } from 'react-bootstrap';

    const ButtonClick = () => {
    const [showModal, setShowModal] = useState(false);

    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    return (
        <div className="d-flex flex-column align-items-center justify-content-center vh-100">
        <h1 className="text-center mb-4">Ejercicio 1: Manejo de eventos</h1>

        <button className="btn btn-primary mb-3" onClick={handleShow}>
            Haz clic aquí
        </button>

        <Modal show={showModal} onHide={handleClose} centered>
            <Modal.Header closeButton>
            <Modal.Title>¡Botón clickeado!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            holiii has clickeado el botón ahora vez este mensaje uwu 
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Cerrar
            </Button>
            </Modal.Footer>
        </Modal>
        </div>
    );
    };

    export default ButtonClick;