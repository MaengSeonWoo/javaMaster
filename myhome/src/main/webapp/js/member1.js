/**
 * 
 */
document.querySelector('#addMember').addEventListener('click',
	addMemberFnc);
document.querySelector('#repeatMember').addEventListener('click',
	repeatMemberFnc);

function repeatMemberFnc(){
	let no = document.querySelector('#memberNo').value;
	let name = document.querySelector('#memberName').value;
	let point = document.querySelector('#memberPoint').value;
	const memb = {no, name, point};
	let tr = makeRow(memb);
	
	document.querySelector('table#List tbody').appendChild(tr)
}
	
function addMemberFnc(){
	let no = document.querySelector('#memberNo').value;
	let name = document.querySelector('#memberName').value;
	let point = document.querySelector('#memberPoint').value;
	const mem = {no, name, point};
	let tr = makeRow(mem);
	
	document.querySelector('table#List tbody').appendChild(tr);
}
// member 정보를 활용 tr 반환
function makeRow(member1 = {no, name, point}){
	// tr생성
	let tr = document.createElement('tr');
	// tr에 click이벤트 등록
	tr.addEventListener('click',function(e){
		e.stopPropagation();
		// tr(this)의 자식요소 children
		document.querySelector('#memberNo').value =
			tr.children[0].innerText;
		document.querySelector('#memberName').value =
			tr.children[1].innerText;
		document.querySelector('#memberPoint').value =
			tr.children[2].innerText;
	})
	for(let prop in member1){
		let td = document.createElement('td');
		td.innerText = member1[prop];
		tr.appendChild(td);
	}
	// <td><button>삭제</button></td>
	let td = document.createElement('td');
	let btn = document.createElement('button');
	btn.innerText = '삭제';
	btn.addEventListener('click', deleteRow, true);
	td.appendChild(btn);
	tr.appendChild(td);
	// 체크박스
	td = document.createElement('td');
	let chk = document.createElement('input');
	chk.setAttribute('type','checkbox');
	chk.addEventListener('change',changeRow);
	td.appendChild(chk);
	tr.appendChild(td);
	return tr;
	// end of makeRow
}
	
function deleteRow(event){
	e.stopPropagation();
	event.target.parentElement.parentElement.remove();
}
function changeRow(e){
	// this => <input type = 'checkbox'>
	console.log(this.checked); 
}

// members 배열의 갯수만큼 tr 생성
members.forEach(function(item, idx, ary) {
	let tr = makeRow(item);
	document.querySelector('table#List tbody').appendChild(tr);
});

// thead input[type = 'checkbox']
document.querySelector('thead input[type = "checkbox"]')
		.addEventListener('change', function() {
			// event 핸들러 => this
			// thead => tbody 적용
			let inp = this;
			document.querySelectorAll('tbody input[type = "checkbox"]')
					.forEach(function(item) {
						console.log(this.checked);
						item.checked = inp.checked;
					})
		});