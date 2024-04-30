/**
 * object.js (객체, 함수)
 * 객체(속성, 메소드)
 */
const obj = {
	name : "홍길동", 
	age : 20,
	showInfo : function(){
		return `이름은 ${this.name} 이고 나이는 ${this.age}입니다`
	}, // 메소드
	empList : function(){
		// Ajax
		fetch('../empList.json')
		.then(function(result) {
			return result.json(); // json문자열 -> 객체 변환
		})
		.then(function(result) {
			console.log(result); // DOM 활용
			result.forEach(function(member){
				let tr = document.createElement('tr');
				for(let prop in member){
					let td = document.createElement('td');
					td.innerText = member[prop];
					tr.appendChild(td);
				}
				document.querySelector('tbody').appendChild(tr);
			});
		})
	}
} //객체 생성(new Object);

obj.name = "Honggildong";
console.log(`이름 : ${obj.name}, 나이 : ${obj["age"]}`); // 최근 방식
// console.log('이름 : ' + obj.name); // 옛날 방식
console.log(obj.showInfo());
console.log(window);
// window.alert('확인!!');
// 속성 확인
for(let prop in obj){
	console.log(`속성 : ${prop}, 값 : ${obj[prop]}`)
}
console.clear();
obj.empList();
