import React from 'react';
import ReactModal from 'react-modal';

ReactModal.setAppElement('#root');

const Popup = ({ isOpen, closeModal, children }) => {
    
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Modal"
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          zIndex: 1000,
        },
        content: {
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          maxWidth: '500px',
          maxHeight: '90%',
          borderRadius: '8px',
          padding: '20px',
        },
      }}
    >
      {children}
    </ReactModal>
  );
};

export default Popup;
