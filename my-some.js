const orginalArray=[1,2,3,4,5,6];

Array.prototype.mySome=function(fn){

    for(let i=0;i<this.length;i++)
    {
        if(fn(this[i]))
        {
            return true;
        }
    }
    return false;
}

const isEven=(ele)=>ele%2==0;


const hasEven=orginalArray.mySome(isEven);

console.log(hasEven);
