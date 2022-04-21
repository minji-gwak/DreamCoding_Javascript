// let 재할당이 가능
let a = 1;
a = 2;

// const 재할당이 불가능
// 1. 상수
// 2. 상수변수 또는 변수
const text = 'hello';
// text = 'hi'; 이렇게 하면 안됨!

// 1. 상수
const MAX_FRUITS = 3;

// 2. 재할당 불가능한 상수변수 또는 변수
const apple = {
	name: 'apple',
	color: 'red',
	display: '🇺🍎',
};
// apple = {};
console.log(apple);
apple.name = 'orange';
console.log(apple);

// let    재할당 O 변경 O
// const  재할당 X 변경 O
