
// --------------------------------- todo-lista --------------------------------------------------- //

import { Todo } from "../models/Todo";
import { addTodo } from "../todoApp";

// Todolistan ska innehålla:
// 1. Kunna lägga till todos i listan
// 2. Kunna ändra status på en todo
// 3. Kunna ta bort en todo ur listan

describe("ToDo app", () => {
    test("It should add a todo the list", () => {
        // Assign - vad behöver jag till min todolista - jo, en text!

        const todoText = "Lär dig testning";
        const todos: Todo[] = [];

        // Act - jag behöver anropa en funktion! Vad ska min funktion heta?
        // Behöver funktionen addTodo ta emot något för att göra sin grej? Ja, texten som vi vill lägga till i todon.
        // Jag vill också säga vilken lista jag lägger in texten i - "todos"

        addTodo(todoText, todos);

        // Assert - vi kan förvänta oss att listan todos har längden 1
        // Sen kan vi förvänta att positionen 0 i todos ska innehålla den texten vi lade in i todoText.

        expect(todos).toHaveLength(1);
        expect(todos[0].text).toBe(todoText);
        expect(todos[0].done).toBeFalsy(); // den ska vara false, underfined eller null.
        expect(todos[0].id).toBeGreaterThan(0);
    });

    test("It should toggle", ()=> {

    });

    test("It should be removed from list", ()=> {

    });
});