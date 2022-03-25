var arr1 = [1,2,3],arr2=[7,8,9]
// 1、concat
var result = arr1.concat(arr2)
console.log("不修改原数组",result)

// 2、for循环
// 3、apply
arr1.push.apply(arr1,arr2) || Array.prototype.push.apply(arr1,arr2)
console.log('push改变原属组',arr1)