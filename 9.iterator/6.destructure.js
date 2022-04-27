// 구조 분해 할당 Destructuring Assignment
// 데이터 뭉치(그룹화)를 쉽게 만들 수 있다
const fruits = ['🍏', '🥝', '🍌', '🍓'];
const [first, second, ...others] = fruits;
console.log(first);
console.log(second);
console.log(others);

const point = [1, 2, 8];
const [x, y, z = 0] = point;
console.log(x);
console.log(y);
console.log(z);

function createEmoji() {
	return ['apple', '🍎'];
}
const [title, emoji] = createEmoji();
console.log(title);
console.log(emoji);

const minji = { name: 'minji', age: 20, job: 's/w engineer' };
function display({ name, age, job }) {
	console.log('이름', name);
	console.log('나이', age);
	console.log('직업', job);
}
display(minji);

const { name, age, job: occupation, pet = '강아지' } = minji;
console.log(name);
console.log(age);
console.log(occupation);
console.log(pet);

// Quiz
const prop = {
	name: 'Button',
	styles: {
		size: 20,
		color: 'black',
	},
};

function changeColor({ styles: { color } }) {
	// styles는 여기에서 구조분해할당에서만 사용될 뿐, 변수가 아님
	console.log(color);
}

changeColor(prop);
