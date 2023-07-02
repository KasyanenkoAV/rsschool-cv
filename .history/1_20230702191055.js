const data = [1, -2, -2, -8, 17, 5];
let sum = 0;
function squareSum(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    let x = Math.pow(numbers[i], 2);
    sum = sum + x;
  }
}
squareSum(data);
console.log(sum);
