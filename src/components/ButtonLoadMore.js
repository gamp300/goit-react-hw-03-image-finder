import React from 'react';
import { ButtonSearchMore } from './Styles.Styled';

const Button = ({ onClick }) => {
  return (
    <ButtonSearchMore className="button" onClick={onClick}>
      Load more
    </ButtonSearchMore>
  );
};

export default Button;
