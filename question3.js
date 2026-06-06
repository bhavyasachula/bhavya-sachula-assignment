const nums = [1, 2, 3, 4, 5, 6, 7];
;

function rotateArray(nums, k) {
  const newNum = nums.splice(nums.length - k, k);
  nums.unshift(...newNum);
  console.log(nums);
}
rotateArray(nums, k=3);

const nums2 = [-1, -100, 3, 99];
rotateArray(nums2, (k = 2));
