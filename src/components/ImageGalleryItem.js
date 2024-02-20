import React from 'react';
import { Li, Img } from './Styles.Styled';

const ImageGalleryItem = ({ imageUrl, onImageClick }) => {
  return (
    <Li className="gallery-item" onClick={onImageClick}>
      <Img src={imageUrl} alt="" />
    </Li>
  );
};

export default ImageGalleryItem;
