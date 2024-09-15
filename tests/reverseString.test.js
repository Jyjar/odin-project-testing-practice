import { reverseString } from "../index/reverseString.js";

test('reverseString "Hello world" to equal "dlrow olleH"', () => {
    expect(reverseString("Hello world")).toBe("dlrow olleH");
});