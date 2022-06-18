
    const t = [ 1, 2, 3, 4, 5 ];
    console.log("T before:"); 
    console.log(t); 
    for (let i=0;i<2;i++){
    let temp = t.shift();
    t.push(temp);
    }
    console.log("T after:"); 
    console.log(t);