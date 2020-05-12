# Asyncronism in JS
>Javascript is a single threaded asyncronus programing language so most things you do in the browser or in Nodejs blocks the excecution of the app.

## Event Loop
>It's an endless loop, it's jobs is to monitor the Call Stack and the Callback Queue . If the stack is empty, it will take the first event from the queue and will push it to the Call Stack wich runs it. This iteration is called a tick in the event loop. Each event is a functoin callback. In a first tick the event loop runs the syncronus code and clues the asyncronus events that are going to be called later.
>Consider that you are going to run som tasks and get data from the internet, the event loop will tell you that it's going to do stuff untill the data come, then you let it know that data is ready, the event loop is now ready to be called back.

- Macro Tasks: like setTimeout and setInterval are going to be resolved in the next tick
- Micro Tasks: like resolved promises are going to be excecutes in the tick they are called.

## Callback
> Is a function that is called or excecuted after something else has happened, this is posible because JS supports higer order functions.

**Callback problems**
- Callback hell (lots of callbacks)
- Hard to get (anidated callbacks is hadr to understand and determine the excecution order)
- Lack of Invertion of control (makes the code really coupled, hard to maintain and scale)
