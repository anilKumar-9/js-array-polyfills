const orginalArray = [1, 2, 3, 4, 5];

console.log(orginalArray);

Array.prototype.myMap = function(fn) {
  const mappedArray = [];
  console.log(this); // this points to original array 
  for (let i = 0; i < this.length; i++) {
    mappedArray.push(fn(this[i]));
  }
  return mappedArray;
};

function multiplyByTwo(ele) {
  return ele * 2;
}

function addByTwo(ele)
{
    return ele+2;
}

function subByTwo(ele)
{
    return ele-2;
}

function divByTwo(ele)
{
    return ele/2;
}

let result = orginalArray.myMap(multiplyByTwo);
// this line internally calls *** Array.prototype.myMap.call(originalArray, fun); ***

console.log(result);


/* Expected Output

node my-map.js
[ 1, 2, 3, 4, 5 ]
[ 1, 2, 3, 4, 5 ]
[ 2, 4, 6, 8, 10 ]

*/