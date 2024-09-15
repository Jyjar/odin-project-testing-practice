import { sum } from "../index/capitalize.js";

test('capitalize hello world to equal Hello world', () => {
    expect(sum("hello world")).toBe("Hello world");
});