Array.prototype.myReduce = function(callback, initialValue) {
    if (typeof callback !== "function") {
        throw new TypeError(callback + " is not a function");
    }

    if (this.length === 0 && initialValue === undefined) {
        throw new TypeError("Reduce of empty array with no initial value");
    }
    let acc;
    let startIndex;

    if (initialValue !== undefined)
    {
        acc = initialValue;
        startIndex = 0;
    } else
    {
        acc = this[0];
        startIndex = 1;
    }

    for (let i = startIndex; i < this.length; i++)
    {
        acc = callback(acc, this[i], i, this);
    }

    return acc;

}
