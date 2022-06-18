let height = [1,8,6,2,5,4,8,3,7]
let i = 0
let j = height.length-1
let max = 0
let area
while(i < j){
    area = (j-i) * Math.min(height[i], height[j])

    max = Math.max(area, max)
    if(height[i] < height[j])
        i++ ;
    else
        j--;
    }
console.log(max) 