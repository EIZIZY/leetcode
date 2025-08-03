import React from "react";

const NumberOne = () => {
  function twoSum(nums: number[], target: number): number[] {
    for (let i = 0; i < nums.length; i++) {
      for (let j = 0; j < nums.length; j++) {
        if (nums[i] + nums[j] === target && i != j) {
          return [i, j];
        }
      }
    }

  }
  const result = twoSum([2, 7, 11, 15], 10);
  console.log(result);
  

  return <>
  
  <div>hello</div>
  </>;
};

export default NumberOne;
