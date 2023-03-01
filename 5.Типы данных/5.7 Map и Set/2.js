function aclean(arr) {
  let map = new Map();
  for (let item of arr) {
    let sortStr = item.toLowerCase().split("").sort().join(""); 
    map.set(sortStr, item);
  }
  return Array.from(map.values());
}