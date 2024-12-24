// ModalPopup.js
import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const ModalPopup = ({ buttonText, handleCancel_new, showModal, handleModalClose, tittle, childrens, handleSubmitData , msgPopup, handleOk}) => {
    // if (!isOpen) return null; 

    return (
        <Modal show={showModal}  onHide={handleCancel_new} centered backdrop="static" keyboard={false} size="lg">
            <Modal.Header closeButton className="border-0 d-flex justify-content-center">
                <Modal.Title> <span className='modal_title'>{tittle}</span> </Modal.Title> 
            </Modal.Header>
            <Modal.Body className='pl-md-5 pr-md-5 pt-0' >

                {childrens}

                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                    {
                        msgPopup ? (<Button variant="primary" className='btnn' onClick={handleOk}   >
                            {"OK"}
                        </Button>) : (
                             <>
                              <Button variant="primary" className='btnn' onClick={handleSubmitData} >
                              {buttonText}
                          </Button>
                          <div style={{ width: '20px' }}></div>
                          <Button variant="danger" className='btnn' onClick={handleCancel_new} >Cancel</Button></>
                        )
                    }
                  
                </div>
            </Modal.Body>
        </Modal>
    );
};

export default ModalPopup;