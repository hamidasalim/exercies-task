var ex8 =function (arr, n){
    let count = 0; 
    for (let i = 0; i < n; i++)
        if (arr[i] != 0)
            arr[count++] = arr[i];
    while (count < n)
        arr[count++] = 0;
}

    let arr = [ 6, 0, 8, 2, 3, 0, 4, 0, 1 ]
    let n = arr.length;
    console.log("before");
    console.log(arr); 
    ex8(arr, n);
    console.log("after");
    console.log(arr); 