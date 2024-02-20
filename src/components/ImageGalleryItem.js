import React from 'react';
import { Li } from './Styles.Styled';

const ImageGalleryItem = ({ imageUrl, onImageClick }) => {
  return (
    <Li className="gallery-item" onClick={onImageClick}>
      <img src={imageUrl} alt="" />
    </Li>
  );
};

export default ImageGalleryItem;
