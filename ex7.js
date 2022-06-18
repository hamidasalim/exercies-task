let nums = [8, 7, 2, 5, 3, 1]
let target = 10;
let tre=false
let num=0;
for(let i = 0 ; i < nums.length ; i++)
{
    let sum = nums[i];
    for(let j=i+1 ; j<nums.length;j++)
    {
        
        if(sum+nums[j]==target)
        {
            if(num!=0)
                console.log("or")
            tre=true;
            console.log("Pair found (",sum,",", nums[j],")");
            num++;
        }
    }

    if(tre==false)
        console.log("Pair not found");
}

