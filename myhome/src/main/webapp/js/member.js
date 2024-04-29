/**
 * 
 */
// 추가 클릭이벤트 등록
// 사용자의 입력값 3개 => tr > td * 3 => tbody 하위요소 추가
console.log(document.querySelector('button'));
document.querySelector('#addMember').addEventListener('click',function(){
	let no = document.querySelector('#memberNo').value;
	let name = document.querySelector('#memberName').value;
	let point = document.querySelector('#memberPoint').value;
	
	let td = document.createElement('td');
	let td1 = document.createElement('td');
	let td2 = document.createElement('td');
	td.innerText = no;
	td1.innerText = name;
	td2.innerText = point;
	
	let tr = document.createElement('tr');
	tr.appendChild(td);
})