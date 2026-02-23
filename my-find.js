const orginalArray=[1,2,3,4,5,6,7,8,9];

Array.prototype.myFind =function(fn){

    for(let i=0;i<this.length;i++)
    {
        if(fn(this[i]))
        {
            return this[i];
        }
    }
    return undefined;
}

const findElement= (ele)=> ele>5

console.log(orginalArray.myFind(findElement));

console.log(orginalArray.myFind(findElement));

