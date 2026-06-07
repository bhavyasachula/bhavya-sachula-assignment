// const nums = [1, 2, 3, 4, 5, 6, 7];

// function rotateArray(nums, k) {
//   const newNum = nums.splice(nums.length - k, k);
//   nums.unshift(...newNum);
//   console.log(nums);
// }
// rotateArray(nums, k=3);

// const nums2 = [-1, -100, 3, 99];
// rotateArray(nums2, (k = 2));

// Designed by Me
const nums = [1,2,3,4,5,6,7];
const nums2 = [-1, -100, 3, 99];


const rotateArray = (nums,k)=>{
const arr = nums.map((value,index)=>{
    // index starts from  1
        return nums[((index-k)%nums.length+nums.length)%nums.length]
    })
    console.log(arr)
}

rotateArray(nums,k=3)
rotateArray(nums2,k=2)