// WAP that sorts an array descending or ascending

// Array.prototype.descending = function () {
//   descending.apply(this);
//   return this;
// }

// function descending() {
//   for (currentIndex = 0; currentIndex < this.length; currentIndex++) {
//     const currentElement = this[currentIndex];
//     secondIndex = currentIndex;
    
//     while (secondIndex > 0 && this[secondIndex - 1] > currentElement) {
//       this[secondIndex] = this[secondIndex - 1];
//       secondIndex--;
//     }
//     this[secondIndex] = currentElement;
//   }
// }

// Insertion sort

function ascending() {
  for (currentIndex = 0; currentIndex < this.length; currentIndex++) {
    const currentElement = this[currentIndex];
    let iterableIndex = currentIndex;

    let isSecondIndexGreaterThanZero = iterableIndex > 0;
    let isPreviusElementGreaterThanCurrent = this[iterableIndex - 1] > currentElement;

    while (isSecondIndexGreaterThanZero && isPreviusElementGreaterThanCurrent) {
      this[iterableIndex] = this[iterableIndex - 1];
      iterableIndex--;

      isSecondIndexGreaterThanZero = iterableIndex > 0;
      isPreviusElementGreaterThanCurrent = this[iterableIndex - 1] > currentElement;
    }
    this[iterableIndex] = currentElement;
  }
}

Array.prototype.ascending = function () {
  ascending.apply(this);
  return this;
}

var originalArray = [3, 9, 7, 5, 1, 6, 8, 2];
console.log(originalArray)

var ascendingArray = originalArray.ascending();
console.log(ascendingArray);