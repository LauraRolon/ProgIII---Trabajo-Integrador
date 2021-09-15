import React, { Component } from 'react'
import Tarjetas from './Tarjetas/Tarjetas';
import '../Main/MainContent.css';
import Loader from '../Loader/Loader';

function MainContent() {
    
  return (
    <div className="containerMain">
      
      <Loader />

    </div>
  );
}

export default MainContent;