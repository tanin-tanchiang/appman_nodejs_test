const threeSum = (nums, target) => {
  // put your code here !!
  let results = [];
  for(let i = 0; i < nums.length; i++){
    for(let j = i+1; j < nums.length; j++){
      for(let k = j+1; k< nums.length; k++){
        if(nums[i] + nums[j] + nums[k] == target){
          results.push([i, j , k]);
        }
      }
    }
  }
  return results;
};

module.exports = { threeSum };
