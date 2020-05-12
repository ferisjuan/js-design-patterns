// use this at www.google.com
const item = document.querySelector("#fakebox-input");

if (item) {
  item.addEventListener("click", e => {
    // Following code is very dificult to reason about
    // you can not guarantee what is going to fun first
    let a = 0;
    let b = 10;

    setTimeout(() => {
      a++;
      setTimeout(() => {
        a++;
        console.log(`1st attempt: ${a}`)
      }, 0);
    }, 0);

    setTimeout(() => { 
      console.log(`2nd attempt ${a}`);
    }, 0);
    a = b;
    console.log(a, b);
  })
}