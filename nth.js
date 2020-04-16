const nthtri = (n) => {
    if( n <= 1 ) {
        return 1
    } else {
        return n + nthtri(n -1)
    }
}

console.log(nthtri(3));