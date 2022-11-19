import React from 'react';
import logo from './logo.svg';
import './App.css';

interface NAME { 
  first: string;
  last?: string | null;
}

let nameObj: NAME = {
  first: 'YAMADA',
  last: null,
}

const func1 = (x: number, y: number): number => {
  return x + y;

}

function App() {
  return (
    <div className="App">
      <header className="App-header">
       
      </header>
    </div>
  );
}

export default App;
