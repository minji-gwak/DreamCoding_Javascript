// 조건문 Conditional Statement
// if(조건) { }
// if(조건) { } else {}
// if(조건1) { } else if(조건2) {} else {}
let fruit = 'orange';
if (fruit === 'apple') {
  console.log('🍎');
} else if (fruit === 'orange') {
  console.log('🍊');
} else {
  console.log('😜');
}

if (2 < 1) {
  console.log('출력되면 안됨!');
}

console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

console.log(!'text');
console.log(!!'text');
