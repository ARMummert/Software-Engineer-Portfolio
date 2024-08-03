"use client";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faFileCode } from '@fortawesome/free-solid-svg-icons';
import styles from './page.module.css';

const choices = ['Rock', 'Paper', 'Scissors'];

const RPS: React.FC = () => {
  const [userChoice, setUserChoice] = useState<string | null>(null);
  const [computerChoice, setComputerChoice] = useState<string | null>(null);
  const [result, setResult] = useState<string>('');

  
  const handleChoice = (choice: string) => {
    setUserChoice(choice);
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(computerChoice);
    calculateWinner(choice, computerChoice);
  };

  
  const calculateWinner = (userChoice: string, computerChoice: string) => {
    if (userChoice === computerChoice) {
      setResult('You Tied!');
    } else if (
      (userChoice === 'Rock' && computerChoice === 'Scissors') ||
      (userChoice === 'Paper' && computerChoice === 'Rock') ||
      (userChoice === 'Scissors' && computerChoice === 'Paper')
    ) {
      setResult('You win!');
    } else {
      setResult('You lost!');
    }
  };

  const handleReset = () => {
    setUserChoice(null);
    setComputerChoice(null);
    setResult('');
  };

return (
    <div>
        <h1>Rock Paper Scissors</h1>
        <h2>Unleash Your Inner Rock! </h2>
        <div>
            {choices.map(choice => (
                <button key={choice} onClick={() => handleChoice(choice)}>
                    {choice}
                </button>
            ))}
        </div>
        {userChoice && computerChoice && (
            <div>
                <p>Your choice: {userChoice}</p>
                <p>Computer&apos;s choice: {computerChoice}</p>
                <p>{result}</p>
                <button onClick={handleReset}>Reset</button>
            </div>
        )}
        <p>Built with:</p>
        <div>
            <FontAwesomeIcon className={styles.icon} icon={faReact}/>
            <FontAwesomeIcon className={styles.icon2} icon={faFileCode} />
        </div>
    </div>
);
};

export default RPS;