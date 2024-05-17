
// --------------------------------- todo-lista --------------------------------------------------- //

import { Todo } from "../models/Todo";
import { addTodo, removeTodo, toggleTodo } from "../todoApp";
import * as htmlFunctions from "./../htmlFunctions";

// Todolistan ska innehålla:
// 1. Kunna lägga till todos i listan
// 2. Kunna ändra status på en todo
// 3. Kunna ta bort en todo ur listan
// -------------------------------- TEST 1 GAMLA OCH NYA, UPPDATERADE ----------------------------------------//



describe("ToDo app", () => {
    let mockedCreateHtml: jest.SpyInstance<void>;
    // Before each görs på alla tester
    beforeEach(() => {
        mockedCreateHtml = jest.spyOn(htmlFunctions, "createHtml");
    });
    test("It should add a todo the list", () => {
        // Assign - vad behöver jag till min todolista - jo, en text!

        const todoText = "Lär dig testning";
        const todos: Todo[] = [];
        // Vi måste lägga till följande för att det ska finnas något i test-DOMEN (test-webbläsaren):
        document.body.innerHTML = `<ul id="todoList"></ul>`;
        

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

        // const liTags =  document.getElementsByTagName("li");
        // expect(liTags).toHaveLength(1);
        expect(mockedCreateHtml).toHaveBeenCalled();
    });
// ----------------------- Testet går in i else-satsen ---------------------- //
    test("It should not add a todo the list", () => {
        // Assign - texten ska vara en tom text!

        const todoText = "";
        const todos: Todo[] = [];

        // Act

        addTodo(todoText, todos);

        // Assert - vi kan förvänta oss att listan todos har längden 0
        // Jag har inget att kontrollera så de tre sista raderna från föregående exempel tas bort.

        expect(todos).toHaveLength(0);
        // Följande två rader behövs inte när jag använder en spion:
        // const liTags =  document.getElementsByTagName("li");
        // expect(liTags).toHaveLength(0);
        expect(mockedCreateHtml).toHaveBeenCalled();
    });

// -------------------------------- TEST 2 ----------------------------------------//

    test("It should toggle", ()=> {

        // Assign - Vi vill ändra dess egenskap till true eller false
        // Jag behöver ett todo-objekt. När jag skapar den kommer done att vara false.

        const todo: Todo = new Todo("Testing");

        // Act - jag vill anropa en funktion som heter toggleTodo och skicka in ett todoobjekt.
        // Den här funktionen komemr att ändra vårt todoobjekt

        toggleTodo(todo);

        // Assert - vi kan förvänta oss att todo.done är true.

        expect(todo.done).toBeTruthy();

         // Act - vi vill kunna toggla tillbaka till false, så vi inte fastnar i true.

        toggleTodo(todo);

        // Assert - vi kan förvänta oss att todo.done är false.

        expect(todo.done).toBeFalsy();
        expect(mockedCreateHtml).toHaveBeenCalled();
    });

// -------------------------------- TEST 3 ----------------------------------------//

    test("It should remove todo", () => {

        // Assign - vi behöver en lista för att kunna ta bort saker ur den.
        const todo = new Todo("Att ta bort");
        const todos: Todo[] = [todo];
       


        // Act - vad ska funktionen heta? Vad behöver den funktionen veta? - vad som ska tas bort.
        removeTodo(todo.id, todos);


        // Assert
        expect(todos).toHaveLength(0);

        // const liTags =  document.getElementsByTagName("li");
        //expect(liTags).toHaveLength(0);
        expect(mockedCreateHtml).toHaveBeenCalled();
        
    });
});


// --------------------------------GAMLA TESTER ----------------------------------------//
// -------------------------------- TEST 1 ----------------------------------------//
/*
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

// -------------------------------- TEST 2 ----------------------------------------//

    test("It should toggle", ()=> {

        // Assign - Vi vill ändra dess egenskap till true eller false
        // Jag behöver ett todo-objekt. När jag skapar den kommer done att vara false.

        const todo: Todo = new Todo("Testing");

        // Act - jag vill anropa en funktion som heter toggleTodo och skicka in ett todoobjekt.
        // Den här funktionen komemr att ändra vårt todoobjekt

        toggleTodo(todo);

        // Assert - vi kan förvänta oss att todo.done är true.

        expect(todo.done).toBeTruthy();

         // Act - vi vill kunna toggla tillbaka till false, så vi inte fastnar i true.

        toggleTodo(todo);

        // Assert - vi kan förvänta oss att todo.done är false.

        expect(todo.done).toBeFalsy();
    });

// -------------------------------- TEST 3 ----------------------------------------//

    test("It should remove todo", () => {

        // Assign - vi behöver en lista för att kunna ta bort saker ur den.
        const todo = new Todo("Att ta bort");
        const todos: Todo[] = [todo];
       


        // Act - vad ska funktionen heta? Vad behöver den funktionen veta? - vad som ska tas bort.
        removeTodo(todo.id, todos);


        // Assert
        expect(todos).toHaveLength(0);
    });
});

*/