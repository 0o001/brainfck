const brainFuck = ( code ) => {

  code = code.replace(/[\n\r\s\t]+/g, '')

  let memory  = new Uint8Array( 100 ),
      pointer = 0

  for ( let index = 0; index < code.length; index++ ) {

    switch ( code[index] ) {

      case '+':
        memory[pointer]++
      break

      case '-':
        memory[pointer]--
      break

      case '>':
        pointer++
      break

      case '<':
        pointer--
      break

      case '.':
        const outputCharacter = String.fromCharCode( memory[pointer] )

        console.log( outputCharacter )
      break

      case ',':
        const inputCharacter = prompt('Please enter value').charCodeAt(0)
        
        memory[pointer] = inputCharacter
      break

      case '[':
        if ( memory[pointer] === 0 ) {

          let bracketCount = 1

          do {

            index++

            if ( code[index] === '[' ) {

              bracketCount++

            }

            if ( code[index] === ']' ) {

              bracketCount--

            }

          } while ( bracketCount )
            
        }
      break

      case ']':
        if ( memory[pointer] !== 0 ) {

          let bracketCount = 1

          do {

            index--

            if ( code[index] === '[' ) {

              bracketCount--

            }

            if ( code[index] === ']' ) {

              bracketCount++

            }

          } while ( bracketCount )

        }
      break

      default:
        throw new Error('Syntax Error')
      
    }

  }

}

brainFuck('>++++++++[-<+++++++++>]<.>>+>-[+]++>++>+++[>[->+++<<+++>]<<]>-----.>->+++..+++.>-.<<+[>[+>+]>>]<--------------.>>.+++.------.--------.>+.>+.')