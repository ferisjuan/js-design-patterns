// Will excecute right away
console.log('Syncronus 1');

// Will excecute next event loop
setTimeout(() => console.log('Timeout 2'), 0);

// Will excecute on present event loop
Promise.resolve().then(() => console.log('Promise 3'));

// Will excecute after the console.log on line 2
console.log('Syncronus 4')