# brainf
a brainfck interpreter written in javascript
https://en.wikipedia.org/wiki/Brainfuck

```js
//Usage:
let helloWorldNewWay = brainFuck({
  code: '+72.+29.+7..+3.-79.+55.+24.+3.-6.-8.-67.',
  memorySize: 1
});

console.log(helloWorldNewWay);
//output: Hello World!

let helloWorldNewWay2 = brainFuck({
  code: '+8[>+4[>++>+3>+3>+<4-]>+>+>->>+[<]<-]>>.>-3.+7..+3.>>.<-.<.+3.-6.-8.>>+.>++.',
});
console.log(helloWorldNewWay2);
//output: Hello World!

let helloWorldOldWay = brainFuck({
  code: '++++++++[>++++[>++>+++>+++>+<<<<-]>+>+>->>+[<]<-]>>.>---.+++++++..+++.>>.<-.<.+++.------.--------.>>+.>++.',
});
console.log(helloWorldOldWay);
//output: Hello World!
```
