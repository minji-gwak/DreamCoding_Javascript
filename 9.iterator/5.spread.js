// Spread 연산자, 전개구문
// 모든 Iterable은 Spread 될 수 있다.
// 순회가 가능한 모든 것들은 촤르르르륵 펼쳐질 수 있다.
// func(...iterable)
// [...iterable]
// { ...obj }
// EcmaScript 2018
function add(a, b, c) {
	return a + b + c;
}
nums = [1, 2, 3];
console.log(add(nums[0], nums[1], nums[2])); // ❌
console.log(add(...nums)); // ✅

// Rest parameters
function sum(first, second, ...nums) {
	console.log(nums);
}
sum(1, 2, 0, 1, 2, 4);

// Array Concat
const fruits1 = ['🍌', '🍓'];
const fruits2 = ['🍏', '🥝'];
let arr = fruits1.concat(fruits2);
console.log(arr);
arr = [...fruits1, '🍓', ...fruits2];
console.log(arr);

// Object
const minji = { name: 'Minji', age: 20, home: { address: 'home' } };
const updated = {
	...minji,
	job: 's/w engineer',
};
minji.name = 'Minji Gwak';
minji.home.address = 'My Home'; // object 안에 있는 object는 shallow copy 됨. why? > 객체는 메모리 주소 전달하기 때문
console.log(updated);
