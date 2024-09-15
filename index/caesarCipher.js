function caesarCipher(str, shift) {
    return str.split('').map(char => {
        let code = char.charCodeAt();

        if (code >= 65 && code <= 90) {
            return String.fromCharCode(((code - 65 + shift) % 26) + 65);
        }

        if (code >= 97 && code <= 122) {
            return String.fromCharCode(((code - 97 + shift) % 26) + 97);
        }

        // Non-alphabetical characters remain unchanged
        return char;
    }).join('');
}

export { caesarCipher };