const orginalArray = [1, 2, 3, 4, 5, 6];

Array.prototype.myEvery = function (fn) {
  for (let i = 0; i < this.length; i++) {
    if (!fn(this[i])) {
      return false;
    }
  }

  return true;
};

const isEven = (ele) => ele % 2 == 0;
const isGreaterThanZero=(ele)=>ele>0;

const hasEven = orginalArray.myEvery(isEven);
const greaterThanZero=orginalArray.myEvery(isGreaterThanZero);

console.log(hasEven);

console.log(greaterThanZero);

