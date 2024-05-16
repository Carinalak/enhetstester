import { add, sendMessage } from "../main";
//import { sendMessage } from "../main";



describe("Main functions", () => {
    
    test("It should add correctly", () => {
        // Assign
        const x = 4;
        const y = 9;


        // Act
        let sum = add(x, y);

        // Assert
        expect(sum).toBe(13);
    });
});

// ------------------------ SEND MESSAGE ---------------------------- //

describe("sendMessage", () => {
    
    test("Should be what goes in", () => {
        // Assign
        const message = "Hello world";

        // Act
        const result = sendMessage(message);

        // Assert
        expect(result).toBe(message);
    });
});