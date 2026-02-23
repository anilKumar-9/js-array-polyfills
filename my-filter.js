const orginalArray=[1,2,3,4,5,6];

Array.prototype.myFilter= function(fn){
    
    const filteredArray=[];

    for(let i=0;i<this.length;i++)
    {
        if(fn(this[i]))
        {
            filteredArray.push(this[i]);
        }
    }
    return filteredArray;
}

let evenNumbers=(ele)=>ele%2===0;

let oddNumbers=(ele)=>ele%2!==0;

const evenFilteredArray=orginalArray.myFilter(evenNumbers);

const oddFilteredArray=orginalArray.myFilter(oddNumbers);

console.log(`Original Array: `,orginalArray);
console.log(`Even numbers : `,evenFilteredArray);
console.log(`Odd numbers  : `, oddFilteredArray);
