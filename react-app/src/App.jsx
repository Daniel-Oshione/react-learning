import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const count = document.getElementById("count");
const countBtn = document.getElementById("countBtn");

function MyButton(){
  return <>
  <button id='countBtn'>Click me</button>
  </>
}

export default function MyApp(){
  return(
    <div>
      <h1 id='count'>0</h1>
      <MyButton/>
    </div>
  );
}