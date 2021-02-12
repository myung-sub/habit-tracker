import React, { useCallback, useRef, useState, useEffect } from 'react';

const SimpleHabit = (props) => { 
  const [count, setCount] = useState(0);
  const spanRef = useRef();

  const handleIncreament = useCallback(() => {
    setCount(count + 1);
  })

  useEffect(() => {
    console.log(`mounted & updated ${count}`)
  })

  return (
      <li className="habit">
        <span className="habit-name">Reading</span>
        <span ref={spanRef} className="habit-count">{count}</span>
        <button 
          className="habit-button habit-increase" 
          onClick={handleIncreament}>
          <i className="fas fa-plus-square"></i>
        </button>
      </li>
    );
};

export default SimpleHabit;

