// 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
// 你可以假设数组中无重复元素。
// 示例 1:
// 输入: [1,3,5,6], 5
// 输出: 2
// 示例 2:

// 输入: [1,3,5,6], 2
// 输出: 1
// 示例 3:

// 输入: [1,3,5,6], 7
// 输出: 4
// 示例 4:

// 输入: [1,3,5,6], 0
// 输出: 0

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 方案1
// var searchInsert = function(nums, target) {
//     let val = null;
//     let leng = nums.length;
//     for(let i=0; i<leng; i++){
//         if( nums[i] === target ){
//             val = i; break;
//         }
//         if( nums[i] > target ){
//             val = i;
//             nums.splice(i,0,target);
//             break
//         }
//     }
//     return val !== null ? val : leng;
// };
// // 方案2
// var searchInsert = function(nums, target) {
//     let val = null;
//     let leng = nums.length;
//     let sum = 0;
//     while ( sum < leng ) {
//         if( nums[sum] === target ) return val = sum;
//         if( nums[sum] > target ){
//             nums.splice(sum,0,target);
//             return val = sum;
//         }
//         if(sum === leng - 1 && !val){ 
//             nums.push(target) 
//             return leng + 1;
//         }
//         sum ++
//     }
// };

// 方案三
var searchInsert = function(list, target, num=0) {
    if( list[num] === target ) return num;
    if( list[num] > target ){
        list.splice(num,0,target);
        return num;
    }
    if( num === list.length -1 ){
        list.push(target) 
        return list.length -1;
    }
    if( num < list.length){
        return searchInsert(list,target,++num)
    }
};


console.log( searchInsert( [1,3,5,6],7 ) )
