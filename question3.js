const nums = [1, 2, 3, 4, 5, 6, 7];
let k = 3;

function rotateArray(nums, k) {
  k = k % nums.length;
  const removed = nums.splice(nums.length - k, k);
  nums.unshift(...removed);
  console.log(nums);
}
rotateArray(nums, k);

const nums2 = [-1, -100, 3, 99];
rotateArray(nums2, (k = 2));
