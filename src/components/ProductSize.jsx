import React, { useState } from 'react';

export default function ProductSize({item}) {
  const styleMark = {
    backgroundColor: '#777777',
    borderRadius: '15px',
    marginLeft: '20px',
    cursor: 'pointer',
    color: '#ffffff'
  }
  const styleNotMark = {
    marginLeft: '20px',
    cursor: 'pointer',
  }
  
  const [ style, setStyle ] = useState(false);

  function markSize() {
    setStyle(!style);
    console.log('markSize', style);
  }

  return (
      
         <span onClick={markSize} style={ style ? styleMark : styleNotMark } className="catalog-item-size">{item}</span> 
      
      
    
  ) 
}