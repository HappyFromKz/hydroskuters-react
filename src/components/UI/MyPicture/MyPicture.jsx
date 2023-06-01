import React from 'react';
import cl from './MyPicture.module.css'

const MyPicture = ({...props}) => {
  return (
    <div {...props} className={cl.myPicture}></div>
  );
};

export default MyPicture;