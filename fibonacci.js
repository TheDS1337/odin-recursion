function fibs(n)
{
    if( n < 1 )
        return [];
    else if( n == 1 )
        return [0];

    let arr = [0, 1];

    for( let i = 2; i < n; i++ )
        arr.push(arr[i - 1] + arr[i - 2]);

    return arr;
}

function fibsRec(n)
{
    console.log("This was printed recursively");

    if( n == 2 )
        return [0, 1];
    else if( n == 1 )
        return [0];
    else if( n < 1 )
        return [];
    
    let arr = fibsRec(n - 1);
    arr.push(arr.at(-1) + arr.at(-2));

    return arr;
}

console.log(fibsRec(8));