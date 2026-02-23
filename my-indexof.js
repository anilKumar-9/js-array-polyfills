const orginalArray=[1,2,3,4,5,6,7,8,9];

Array.prototype.myIndexOf=function(ele,index=0){
    for(let i=index;i<this.length;i++)
    {
        if(this[i]===ele)
        {
            return i;
        }
    }
    return -1;
}

console.log(orginalArray.myIndexOf((8)));

console.log(orginalArray.myIndexOf(8,8));
console.log(orginalArray.myIndexOf(10));
