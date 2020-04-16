const countingSheep = function(number) {
    if (number === 0) {
        console.log('All sheep jumped over the fence') 
    }
    else {
        
        console.log(`${number}: Another sheep jumps over the fence`)
        countingSheep(number - 1)
    }
}

countingSheep(4);