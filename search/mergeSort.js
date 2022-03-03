function merge(larr, rarr) {
    let arr = [];
    while (larr.length && rarr.length) {
        if (larr[0] <= rarr[0]) {
            arr.push(larr.shift())
        } else {
            arr.push(rarr.shift());
        }
    }
    return [...arr, ...larr, ...rarr];

}

function mergeSort(arr) {   
    if (arr.length < 2) {
        return arr;
    }

    let mid = arr.length / 2;
    let larr = arr.splice(0, mid);

    return merge(mergeSort(larr), mergeSort(arr));

}

let unsorted = [5, 2, 3, 7, 9];
console.log(mergeSort(unsorted));