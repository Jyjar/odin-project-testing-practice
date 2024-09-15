import { caesarCipher } from "../index/caesarCipher.js";

test('caesarCipher "Secret message." with shift 4 to equal "Wigvix qiwweki."', () => {
    expect(caesarCipher("secret message", 4)).toBe("wigvix qiwweki");
});