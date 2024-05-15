
// ------------------------------ Todo-lista ------------------------------------- //

import { Todo } from "./models/Todo";



//const todos: Todo[] = [];

 export const addTodo = (text: string, theList: Todo[]) => {
  theList.push(new Todo(text));
};

export const toggleTodo = (todo: Todo) => {
    todo.done = !todo.done; // om den är false, blir den true, om den är true blir den false.
}