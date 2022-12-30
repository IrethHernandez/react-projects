import React from 'react';
import { useGlobalContext } from './context';
import { FaTimes } from 'react-icons/fa';
const Modal = () => {
  const { isModalOpen, closeModal } = useGlobalContext();
  return (
    <div
      className={`modal-overlay ${
        isModalOpen ? 'show-modal' : null
      }`}
    >
      <div className='modal-container'>
        <h3>modal content</h3>
        <button className='close-modal-btn' onClick={closeModal}>
          <FaTimes></FaTimes>
        </button>
      </div>
    </div>
  );
};

export default Modal;
