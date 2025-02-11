function zipList(list1: (string | number)[], list2: (string | number)[]) {
  const result = [];
  if (list1.length !== list2.length) {
    return 'Lists must be same length';
  }
  for (let i = 0; i < list1.length; i++) {
    result.push(list1[i], list2[i]);
  }
  return result;
}
function zipListTheFunctionalWay(list1: (string | number)[], list2: (string | number)[]) {
  return list1.reduce((acc, cur, index) => {
    acc.push(cur, list2[index]);
    return acc;
  }, [] as (string | number)[]);
}
console.log(zipList(['a', 'b', 'c'], [1, 2, 3]));
console.log(zipListTheFunctionalWay(['a', 'b', 'c'], [1, 2, 3]));
