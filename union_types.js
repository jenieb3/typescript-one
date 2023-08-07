function unionoftype(myParam) {
    if (typeof (myParam) === 'number') {
        return myParam;
    }
    if (typeof (myParam) === 'string') {
        return myParam.length;
    }
    return 0;
}
console.log(unionoftype(6));
console.log(unionoftype('cirrus clouds wish'));
