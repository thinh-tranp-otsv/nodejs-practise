const EventEmitter = require("events");
class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

// myEmitter.on("event1", (e) => {
//   console.log(e);
// });
// myEmitter.emit("event1", {name:"Thinh"});

//////////////////////////////////

// myEmitter.on('event', function(a, b) {
//     console.log(a, b, this === myEmitter);
//   });

// myEmitter.on('event', (a, b) => {
//   console.log(a, b, this);
//   // Prints: a b {}
// });
// myEmitter.emit('event', 'a', 'b');

//////////////////////////////////

// let m = 0;
// myEmitter.on('event', () => {
//   console.log(++m);
// });
// myEmitter.emit('event'); // m = 1

// myEmitter.emit('event'); // m = 2

/////////////////////////////////////

// myEmitter.once('event', (e) => {
//   console.log(e);
// });
// myEmitter.emit('event', {name: 1});
// myEmitter.emit('event', {name: 2}); // Ignored

////////////////////////////////////
myEmitter.emit('error', new Error('whoops!'));




