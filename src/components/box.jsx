import React, { useState, useEffect } from 'react';

const Box = () => {
  const [color, setColor] = useState('rgb(0, 0, 0)');
  const [isHover, setIsHover] = useState(false);

  useEffect(() => {
    if (isHover) {
      const changeColor = setInterval(() => {
        setColor(`rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`);
      }, 100);

      return () => clearInterval(changeColor);
    }
  }, [isHover]);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const handleDoubleClick = () => {
    setIsHover(false);
  };

  return (
    <div
      style={{ width: '255px', height: '255px', backgroundColor: color }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onDoubleClick={handleDoubleClick}
    />
  );
};

export default Box;