'use client';

import React, { useRef, useEffect } from 'react';

const Breakout: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  let score = 0;
  let lives = 3;
  const rightPressedRef = useRef(false);
  let rightPressed = rightPressedRef.current;
  let leftPressed = false;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');

    // Event listeners for paddle movement
    const keyDownHandler = (e: KeyboardEvent) => {
      if (e.key === 'Right' || e.key === 'ArrowRight') {
        rightPressed = true;
      } else if (e.key === 'Left' || e.key === 'ArrowLeft') {
        leftPressed = true;
      }
    };

    const keyUpHandler = (e: KeyboardEvent) => {
      if (e.key === 'Right' || e.key === 'ArrowRight') {
        rightPressed = false;
      } else if (e.key === 'Left' || e.key === 'ArrowLeft') {
        leftPressed = false;
      }
    };

    document.addEventListener('keydown', keyDownHandler, false);
    document.addEventListener('keyup', keyUpHandler, false);

    // Cleanup event listeners on component unmount
    return () => {
      document.removeEventListener('keydown', keyDownHandler);
      document.removeEventListener('keyup', keyUpHandler);
    };
  }, []);

  // Collision detection and other game logic here...

  return <canvas ref={canvasRef} width="480" height="320"></canvas>;
};

export default Breakout;