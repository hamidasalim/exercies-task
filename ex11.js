const t1 = [5, 6, 7]
const t2 = [3, 6, 10]
let n1=0;
let n2=0;
for (let i =0; i<t1.length;i++)
{
    if(t1[i]>t2[i])
        n1++;
    if(t1[i]<t2[i])
        n2++;
}
console.log("[",n1,",",n2,"]")