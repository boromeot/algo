const quickSort = arr => {
    if (arr.length < 2)  {
        return arr;
    }
    let pivot = arr[0];
    let left = [];
    let right = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    let leftSorted = quickSort(left);
    let rightSorted = quickSort(right);
    return [...leftSorted, pivot, ...rightSorted];
}

let unsorted = [3, 5, 2, 4];
console.log(quickSort(unsorted));