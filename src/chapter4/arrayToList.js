const arrayToList = (array) => {
    let objList = {};
    for(let i = array.length - 1; i >= 0; i--) {
        let newObj = {}
        newObj.value = array[i];
        (i === array.length - 1) ? newObj.rest = null : newObj.rest = objList;
        objList = newObj;
    }

    return objList;
}