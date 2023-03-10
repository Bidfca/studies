const array = [
  [0, 1],
  [2, 3],
  [4, 5],
];

const reduceRight = array.reduceRight((accumulator, currentValue) => {
  return accumulator.concat(currentValue);
});

console.log(reduceRight);
//[ 4, 5, 2, 3, 0, 1 ]

const reduce = array.reduce((accumulator, currentValue) => {
  return accumulator.concat(currentValue);
});

console.log(reduce);
//[ 0, 1, 2, 3, 4, 5 ]
