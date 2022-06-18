let nums = [2,3,1,1,4]
let jumps = 0;
let curr = 0;
let prev = 0;
for(let i = 0 ; i < nums.length ; i++)
{
    if(i > prev)
    {
        jumps++;
        prev = curr;
    }
    curr = Math.max(nums[i]+i, curr);
    
}
console.log(jumps)
