import React, { useEffect } from 'react';
import { ModalOverlay, ModalContent } from './Styles.Styled';

const Modal = ({ imageUrl, onClose }) => {
  useEffect(() => {
    const handleKeyPress = e => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [onClose]);

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent>
        <img src={imageUrl} alt="" />
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
