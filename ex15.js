const permute = function(nums){
    var result = [];
    let k=0;
    var backtrack = (i, nums) => {
      if(i===nums.length){
        result.push(nums.slice());
        return;
      }  
      for(let j = i; j < nums.length; j++){
        [nums[i],nums[j]] = [nums[j],nums[i]];
        backtrack(i+1, nums);
        [nums[i],nums[j]] = [nums[j],nums[i]];
      }
    }
    backtrack(0, nums);
 
    let tab=[result[0]];
    for (let k =1;k<result.length;k++){
        let a=true;
        for (let m=0;m<tab.length && a;m++){
            if(tab[m]===result[k])
                a=0;
                break;
        }
        if(a)
            tab.push(result[k]);     
    }
    for (let k =0;k<tab.length;k++)
    console.log(tab[k]);
  };
  permute([1,1,2]);