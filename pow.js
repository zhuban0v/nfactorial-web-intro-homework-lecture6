function pow(x,n) {
    let some = 1;
    for(let i = 0; i < n; i++) {
        some*=x;
    }
    return some
}

console.log(pow(3,3));