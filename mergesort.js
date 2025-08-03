function mergeSort(arr)
{
    let len = arr.length;

    if( len < 2 )
        return arr;

    let leftLen = len / 2;
    let rightLen = len - leftLen;

    let leftSort = mergeSort(arr.slice(0, leftLen));
    let rightSort = mergeSort(arr.slice(leftLen));

    let sorted = [];
    let i = 0;
    let j = 0;

    while( i + j < len ) {
        if( i >= leftLen )
            sorted.push(rightSort[j++]);
        else if( j >= rightLen )
            sorted.push(leftSort[i++]);
        else if( leftSort[i] < rightSort[j] )
            sorted.push(leftSort[i++]);
        else
            sorted.push(rightSort[j++]);
    }

    return sorted;
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));