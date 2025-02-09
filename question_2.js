/** 
      Problem - DSA Given an array of integers nums and an integer target, return the indices of the two
    numbers such that they add up to target. You may assume that each input would have exactly one
    solution, and you may not use the same element twice. You can return the answer in any order.
  */ 


function twoSumIndices(nums, target) {
    // Create a map to store the index of the element
    let map = new Map();

    // Iterate through the array
    for (let i = 0; i < nums.length; i++) {
        // Calculate the difference between the target and the current element
        let diff = target - nums[i];

        // Check if the difference is present in the map
        if (map.has(diff)) {
            return [map.get(diff), i];
        }

        // If the difference is not present in the map, add the current element to the map
        map.set(nums[i], i);
    }
    return [];
}