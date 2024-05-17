import { Todo } from "./models/Todo";

// Följande funktion loopar igenom listan [] däruppe.
export const createHtml = (theList: Todo[]) => {
    // Rensa en ul på innehåll. Om todoLsit finns då - skriv ut en tom.
    const todoList = document.getElementById("todoList");
    if (todoList) todoList.innerHTML = "";

    // Loopa theList
    for(let i = 0; i < theList.length; i++) {
        //skapa li-taggar
        const listItem = document.createElement("li");
        listItem.innerHTML = theList[i].text;

        todoList?.appendChild(listItem);
    }
};