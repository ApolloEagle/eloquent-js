const countChar = (x, y) => {
    let count = 0;
    for(let i = 0; i < x.length; i++) {
        if(x.charAt(i) === y) {
            count += 1;
        }
    }

    return count;
}