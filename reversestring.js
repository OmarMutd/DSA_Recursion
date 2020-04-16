const reversStr = (str) => {
    if( str === '') {
        return ''
    } else {
        return reversStr(str.slice(1)) + str.charAt(0)
    }
}

console.log(reversStr('Hello'))