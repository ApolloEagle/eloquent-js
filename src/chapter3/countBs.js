const countBs = x => {
    let count = 0;
    for(let i = 0; i < x.length; i++) {
        if(x.charAt(i).toUpperCase() === 'B') {
            count += 1;
        }
    }

    return count;
}