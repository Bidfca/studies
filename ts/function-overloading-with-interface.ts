interface Add {
  (a: number, b: number): number;
  (a: number, b: number, c: number): number;
}

// const add: Add = (a: number, b: number) => {
//   return a + b;
// };

const add: Add = (a: number, b: number, c?: number) => {
  return a + b;
};
