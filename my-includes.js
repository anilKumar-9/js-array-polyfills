const orginalArray=[1,2,3,4,5,6,7,8,9];

Array.prototype.myIncludes= function(ele){

    for(let i=0;i<this.length;i++)
    {
        if(this[i]===ele)
        {
            return true;
        }

    }
    return false;
}

console.log(orginalArray.myIncludes(10));
console.log(orginalArray.myIncludes(2));

