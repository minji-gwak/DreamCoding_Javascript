// 퀴즈!
// 1. 문자열의 모든 캐릭터를 하나씩 출력하라
const text = 'Hello World!';
// H
// e
// l
// l
// ..
// !
for (i = 0; i < text.length; i++) {
	console.log(text[i]);
}

// 2. 사용자들의 id를 잘라내어 각각의 id를 배열로 보관
const ids = 'user1, user2, user3, user4';
// ['user1', 'user2', 'user3', 'user4']
const id = ids.split(', ');
console.log(id);

// 3. 1초에 한번씩 시계를 (날짜포함) 출력해보자
function showTime() {
	const now = new Date();
	console.log(
		now.getFullYear() + '년',
		now.getMonth() + 1 + '월',
		now.getDate() + '일',
		now.getHours() + '시',
		now.getMinutes() + '분',
		now.getSeconds() + '초'
	);
	// console.log(now.toLocaleString('ko-KR'));
}
setInterval(showTime, 1000);
