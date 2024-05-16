import './style.css'


export const add = (x: number, y: number): number => {
  return x + y;
};

// ------------------------ SEND MESSAGE ---------------------------- //

/*
export const sendMessage = (theMessage) {
  return theMessage;
  }
*/
export function sendMessage(message: any) {
  return message;
}

// ------------------------ MULTIPLY ---------------------------- //

export const multiply = (x: number, y: number): number => {
  return x * y;
}
// ------------------------ MINUS ---------------------------- //

export const subtract = (x: number, y: number): number => {
  return x - y;
}

// ------------------------ LÄNGD ---------------------------- //
export const stringLength = (str: any): any => {
  return str.length;
}



/*
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)

*/
