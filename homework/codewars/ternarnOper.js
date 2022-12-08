function saleHotdogs(n){
    if (n < 5) {
        return 100*n;
    } else if ( n < 10 ) {
        return 95*n;
    } else  {
        return 90*n;
    }
}

console.log(saleHotdogs(10));