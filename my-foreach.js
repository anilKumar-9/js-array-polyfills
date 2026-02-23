const orginalArray=[1,2,3,4,5];

Array.prototype.myForEach= function (fn){
    
    for(let i=0;i<this.length;i++)
    {
        fn(this[i]);
    }
}

   let consoleFunction=(ele)=>console.log(ele);
   
   let multiplyByTwoAndPrint=(ele)=>console.log(ele*2);

   orginalArray.myForEach(consoleFunction);
   console.log();

   orginalArray.myForEach(multiplyByTwoAndPrint);
   