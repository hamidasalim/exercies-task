let t1 = [2,5,6]
let t2 = [5,6,4]
let t3=[];

for (let i =0; i<t1.length-1;i++)
{
    if(t1[i]+t2[i]>9){
       t1[i+1]++;
       t3.push((t1[i]+t2[i])%10);
    }
    else
    t3.push(t1[i]+t2[i]);
}
let i =t1.length-1;
if(t1[i]+t2[i]>9){
    t3.push((t1[i]+t2[i])%10);
    t3.push(1);
 }
 else 
 t3.push((t1[i]+t2[i]));
 console.log(t3)
