const e = 10;
export const sum = a => b => c => d => a + b + c + d + e;
export const sumV2 = a => {
  return function sum2(b) {
    return function sum3(c) {
      return function sum4(d) {
        return a + b + c + d + e;
      };
    };
  };
};
