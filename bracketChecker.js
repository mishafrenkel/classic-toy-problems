/*
O(n) time (one iteration through the string),
and O(n) space (in the worst case, all of our characters are openers,
so we push them all onto the stack).

Two common uses for stacks are:

parsing (like in this problem)
tree or graph traversal (like depth-first traversal)
*/

function isValid(code) {
  const openersToClosers = {
    '(': ')',
    '[': ']',
    '{': '}'
  };

  const openers = new Set(['(', '[', '{']);
  const closers = new Set([')', ']', '}']);

  const openersStack = [];

  for (let i = 0; i < code.length; i++) {
    const char = code.charAt(i);

    if (openers.has(char)) {
      openersStack.push(char);
    } else if (closers.has(char)) {
      if (!openersStack.length) {
        return false;
      }

      const lastUnclosedOpener = openersStack.pop();

      /*
         If this closer doesn't correspond to the most recently
         seen unclosed opener, short-circuit, returning false
      */
      if (openersToClosers[lastUnclosedOpener] !== char) {
        return false;
      }
    }
  }
  return openersStack.length === 0;
}
console.log(isValid('[code is typing]'));