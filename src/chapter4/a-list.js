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

const listToArray = list => {
    let arr = [];
    arr.push(list.value);
    while (list.hasOwnProperty('rest') && list.rest !== null) {
      list = list.rest;
      if (list.hasOwnProperty('value')) {
      	arr.push(list.value);
      }
    }

    return arr;
}
