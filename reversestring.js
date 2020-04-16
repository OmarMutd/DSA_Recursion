const reverse = (string) => {
    if( string === '') {
        return ''
    } else {
        return reverse(string.slice(1)) + string.charAt(0)
    }
}

console.log(reverse('Omar'));