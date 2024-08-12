import React from 'react';
import { useOutletContext } from 'react-router-dom';

import imgLightmode from './imgSrc/img-lightmode.png';
import imgDarkmode from './imgSrc/img-darkmode.png';

function Introduction() {
  const { mode } = useOutletContext();

  return (
    <>{mode? <img src={imgLightmode}/> : <img src={imgDarkmode}/>}</>
  );
}

export default Introduction;
