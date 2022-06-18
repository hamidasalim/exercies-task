function ex2(n) {
    let t = new Array(n).fill(' ');
    while (t.indexOf(' ') !== -1) {
        t.shift();
        t.push('#');
        console.log(t.join(""));
        n--;
    }
}
ex2(4);