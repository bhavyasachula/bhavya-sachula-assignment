function isValid(s) {
    // If the length is odd, it cannot be balanced
    if (s.length % 2 !== 0) return false;

    const stack = [];
    const map = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    for (let char of s) {
        // If it is a closing bracket
        if (map[char]) {
           
            // Pop the top element if stack is not empty, else use dummy value
            const topElement = stack.length > 0 ? stack.pop() : '#';
            
            // If the map value doesn't match the popped element, it is invalid
            if (map[char] !== topElement) {
                return false;
            }
        } else {
            // If it is an opening bracket, push it onto the stack
            stack.push(char);
        }
    }

    // If the stack is empty, all brackets were matched correctly
    return stack.length === 0;
}

console.log(isValid("()"));       // Output: true

