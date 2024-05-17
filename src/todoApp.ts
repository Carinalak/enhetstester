
// ------------------------------ Todo-lista Omgjord------------------------------------- //

import { createHtml } from "./htmlFunctions";
import { Todo } from "./models/Todo";

const todos: Todo[] = [];

 export const addTodo = (text: string, theList: Todo[]) => {
    // om texten är skilt ifrån en tom text, då får vi lägga till todon i listan. Annars vill vi 
    if(text !== "") {
        theList.push(new Todo(text));
    } else {
        console.log("Ingenting läggs till");
    }
    createHtml(theList);
};

export const toggleTodo = (todo: Todo) => {
    todo.done = !todo.done; // om den är false, blir den true, om den är true blir den false.
    createHtml(todos);
};

export const removeTodo = (id: number, theList: Todo[]) => {
    const i = theList.findIndex(todo => todo.id === id);
    theList.splice(i, 1);
    createHtml(theList);
}

// Här fanns funktionen createHtml, den flyttades till htmlFunctions.ts, pga spioner.

createHtml(todos);



// ------------------------------ Todo-lista början - gammal ------------------------------------- //
/*
import { Todo } from "./models/Todo";


//const todos: Todo[] = [];

 export const addTodo = (text: string, theList: Todo[]) => {
  theList.push(new Todo(text));
};

export const toggleTodo = (todo: Todo) => {
    todo.done = !todo.done; // om den är false, blir den true, om den är true blir den false.
}

export const removeTodo = (id: number, theList: Todo[]) => {
    const i = theList.findIndex(todo => todo.id === id);
    theList.splice(i, 1);
}

*/