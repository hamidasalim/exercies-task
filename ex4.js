const t = [1, 2, 3, 4, 4];

const set = new Set(t);

const dup = t.filter(item => {
    if (set.has(item)) 
    {
        set.delete(item);
    }
    else 
    {
        console.log("the duplicate element is",item);
    }
});
