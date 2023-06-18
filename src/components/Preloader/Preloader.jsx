import React from 'react';
import './Preloader.css';

const textContent=['it connects to the backend','try to reload the page']

export default function Preloader() {
  const [count, setCount] = React.useState(0);
  
  React.useEffect(() => {
  
        //Implementing the setInterval method
        const interval = setInterval(() => {
           count? setCount(0):setCount(1);
        }, 4000);
  
        //Clearing the interval
        return () => clearInterval(interval);
    }, [count]);
  return (
    <div className='body'>
      
      <h3 className='pre-header head2'>{textContent[count]}</h3>
      <div className='light x1'></div>
      <div className='light x2'></div>
      <div className='light x3'></div>
      <div className='light x4'></div>
      <div className='light x5'></div>
      <div className='light x6'></div>
      <div className='light x7'></div>
      <div className='light x8'></div>
      <div className='light x9'></div>
    </div>
  );
}
