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


function merge2(larr, rarr) {
    let arr = [];

    while (larr.length, rarr.length) {
        if (larr[0] <= rarr[0]) {
            arr.push(larr.shift());
        } else {
            arr.push(rarr.shift());
        }
    } 

    return [...arr, ...larr, ...rarr];

}

function mergeSort2(arr) {
    if (arr.length < 2) {
        return arr;
    }

    let mid = arr.length / 2;

    let larr = arr.splice(0, mid);

    return merge2(mergeSort2(larr), mergeSort2(arr));

}

let unsorted2 = [6, 3, 2, 5];
console.log(mergeSort2(unsorted2));

function merge3(larr, rarr) {
    let arr = [];
    while (larr.length && rarr.length) {
        if (larr[0] <= rarr[0]) {
            arr.push(larr.shift());
        } else {
            arr.push(rarr.shift());
        }
    }
    return [...arr, ...larr, ...rarr];
}

function mergeSort3(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    
    let mid = arr.length / 2;

    let larr = arr.splice(0, mid);

    return merge3(mergeSort3(larr), mergeSort3(arr));
}

let unsorted3 = [];
for (let i = 0; i < 100; i++) {
    let num = Math.floor(Math.random() * 10);
    unsorted3.push(num);
}
console.log(unsorted3);
console.log(mergeSort3(unsorted3));
