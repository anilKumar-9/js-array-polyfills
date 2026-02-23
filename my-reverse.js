const orginalArray=[1,2,3,4,5,6,7,8,9];

console.log(orginalArray);


Array.prototype.reverse =function(){
    let low=0;
    let high=this.length-1;
    while(low<high)
    {
        let temp=this[low];
        this[low]=this[high];
        this[high]=temp;
        low++;
        high--;
    }
}

orginalArray.reverse();

console.log(orginalArray);
