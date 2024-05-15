
// ------------------------------ Todo-lista ------------------------------------- //

import { Todo } from "./models/Todo";



//const todos: Todo[] = [];

 export const addTodo = (text: string, theList: Todo[]) => {
  theList.push(new Todo(text));
};