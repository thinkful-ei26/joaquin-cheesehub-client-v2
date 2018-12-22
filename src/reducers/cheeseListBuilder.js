

const testArray = {cheeses:[{ alopha: 'hanga' }, { bravo: 'bar' }, { bam: 'bam' }]};
let cheeseList =[];
export function cheeseListBuilder(array) {
  const firstArr = array.cheeses  
  for(let i =0 ; i < firstArr.length; i ++){
      cheeseList.push(Object.keys(firstArr[i]))
  }
  return cheeseList = cheeseList.join(' ').split(' ');
}
// cheeseListBuilder(testArray)
// console.log(cheeseList)
