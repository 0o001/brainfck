const brainFuck = ({
                    code = '',
                    input = '',
                    memorySize = 100
                  }) => {  
  let memory  = new Uint8Array(memorySize);
  let output = '';
  let outputPointer = 0;
  let inputPointer = 0;
  let stack = [];

  code = code.replace(/[\n\r\s\t]+/g, '');
  code = code.replace(/[\d]+/g, function(match, offset, string) {
    return string[offset - 1].repeat(match - 1)
  });

  for (let index = 0; index < code.length; index++) {
    switch (code[index]) {
      case '+':
        memory[outputPointer]++;
      break;
      case '-':
        memory[outputPointer]--;
      break;
      case '>':
        outputPointer++;
      break;
      case '<':
        outputPointer--;
      break;
      case '.':
        output += String.fromCharCode(memory[outputPointer]);
      break;
      case ',':
        memory[outputPointer] = input.charCodeAt(inputPointer++);
      break;
      case '[':
        if (memory[outputPointer] === 0) {
          let bracketCount = 0;
          for (let bracketIndex = index + 1; bracketIndex < code.length; bracketIndex++) {
            if (code[bracketIndex] === "[") {
              bracketCount++;
            } else if (code[bracketIndex] === "]") {
              if (bracketCount === 0) {
                index = bracketIndex;
                break;
              } else {
                bracketCount--;
              }
            }
          }
        } else {
          stack.push(index);
        }
      break;
      case ']':
        if (memory[outputPointer] !== 0) {
          index = stack[stack.length - 1];
        } else {
          stack.pop();
        }
      break;
      default:
        throw new SyntaxError(`Character: '${code[index]}'`);
    }
  }

  return output;
}