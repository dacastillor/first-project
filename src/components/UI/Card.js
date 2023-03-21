import React from 'react';
import cardclasses from './Card.module.css';

const Card = (props) => {
  return (
    <div className={`${cardclasses.card} ${props.className}`}>
      {/* esto anterior permite tanto usar las clases propias de Card como las que provienen de AddUser para este caso en específico, si ponemos props.cssClass por ejemplo, habria que cambiarlo en el Card que se agregó en AddUser */}
      {props.children}
      {/* con esto se accede a lo contenido dentro del componente Card.js */}
    </div>
  );
};

export default Card;
