import { add, multiply, sendMessage, stringLength, subtract } from "../main";
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

// ------------------------ MULTIPLY ---------------------------- //


describe("Main functions", () => {
    
    test("It should multiply correctly", () => {
        // Assign
        const x = 3;
        const y = 4;

        // Act
        let product = multiply(x, y);

        // Assert

        expect(product).toBe(12);
    });
});

// ------------------------ MINUS ---------------------------- //


describe("Main functions", () => {
    
    test("It should minus correctly", () => {
        // Assign
        const x = 10;
        const y = 5;

        // Act
        let difference = subtract(x, y);

        // Assert
        expect(difference).toBe(5);

    });
});

// ------------------------ LÄNGD ---------------------------- //


describe("Main functions", () => {
    
    test("Calculate the length", () => {
        // Assign
       const str = "Hello";

        // Act
       const length = stringLength(str);

        // Assert
        expect(length).toBe(5);

    });
});
