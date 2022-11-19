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

//Union type
let value: boolean | number;
value = true
value = 10;

let arrayUni: (number | string)[];
arrayUni = [0, 1, 2, 'hello']

//Literal type
let company: 'Facebook' | 'Google' | 'Amazon'
company = 'Amazon'

let memory: 2576 | 512;
memory = 2576;

//typeof
let msg: string = 'Hi';
let msg2: typeof msg;
msg2 = 'Hi'

let animal = {
  cat: 'small cat',
};
let newAnimal: typeof animal = {
  cat: 'big cat'
}

//keyof
type KEYS = {
  primary: string;
  secondary: string;
}

let key: keyof KEYS
key = 'primary'

//typeof keyofの組み合わせ
const SPORTS = {
  soccer: 'Soccer',
  baseball: 'baseball'
};

let keySports: keyof typeof SPORTS;
keySports = 'baseball';

// enum(列挙型)
enum OS { 
  Windows,
  Mac,
  Linux,
}
interface PC { 
  id: number;
  OSType: OS;
}
const PC1: PC = {
  id: 1,
  OSType: OS.Windows,
};
const PC2: PC = {
  id: 1,
  OSType: OS.Mac,
};

//型の互換性(型指定ができる)
const comp1 = 'test';
let comp2: string = comp1;

let funcComp1 = (x: number) => {}
let funcComp2 = (x: string) => { }

//GENERICS
interface GEN<T> { 
  item: T;
}
const gen0: GEN<string> = {
  item: 'hello'
}
const gen1: GEN<number> = {
  item: 1
}

interface GEN1<T = string> { 
  item: T;
}
const gen3: GEN1= {
  item: 'string'
}

interface GEN2<T extends string | number> { 
  item: T;
}
const gen4: GEN2<number>= {
  item: 2,
}

//関数のジェネリクス
function funcGEN<T> (props: T) { 
  return {
    item: props
  }
}
const GEN6 = funcGEN<string | null>('test');

function funcGEN1<T extends string | null> (props: T) { 
  return {
    value: props
  }
}
const GEN8 = funcGEN1('hello');


interface Props { 
  price: number;
}

function GEN3<T extends Props>(props: T) { 
  return {value: props.price}
}
const GEN9 = GEN3({
  price: 1,
})



function App() {
  return (
    <div className="App">
      <header className="App-header">
       
      </header>
    </div>
  );
}

export default App;
