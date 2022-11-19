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

//Inter sction Type
type PROFILE = {
  age: number;
  city: string;
};

type LOGIN = {
  username: string;
  password: string;
};

// &(アンド)で型を繋げられる
type USER = PROFILE & LOGIN;
const userA: USER = {
  age: 30,
  city: 'Tokyo',
  username: 'xxx',
  password: 'yyy'
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
