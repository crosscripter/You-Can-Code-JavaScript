// 🐛 Intro to Debugging


let variable = 'value';
let anotherVariable = 1234;

if (true) {
  console.log("This branch should execute.");
} else {
  console.log("This branch should NOT!")
}

switch (variable) {
  case "value":
    console.log("This case should execute");
    break;
  default:
    console.log("The default case should NOT!");
}

let x = 3;

while (x) {
  console.log("X is now", x);
  x--;
}

let fruits = ['apple', 'banana', 'orange'];

for (let fruit of fruits) {
  console.log(`I love ${fruit}s!`);
}

let friends = { Bob: 52, Sally: 39 }

Object.entries(friends).map(([name, age]) => {
  console.log(`My friend ${name} is ${age} years old!`);
});


function average(nums) {
    let total = 0;

    for (let i = 0; i <= nums.length; i++) {
        const num = nums[i];
        total += num;
    }

    return total / nums.length;
}

const avg = average([1, 2, 3, 4, 5]);
console.log(avg);
