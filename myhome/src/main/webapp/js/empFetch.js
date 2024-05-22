/*
* empFetch.js Ajax기능을 fetch함수 활용.
* empSvc 객체에 기능을 구현. 메소드를 호출.
*/

document.addEventListener("DOMContentLoaded", initForm);

function initForm() {
	// Ajax 호출. 목록출력.
	fetch('../empJson.json') // 반환결과값이 promise객체.
		.then(result => result.json()) // 출력스트림(json) -> 객체변환.
		.then(data => {
			data.forEach(emp => {
				let tr = makeRow(emp);
				document.querySelector('#elist').appendChild(tr);
			})
		})
		.catch(err => console.log(err));


	// 등록이벤트.
	document.querySelector('#addBtn').addEventListener('click', addRow);

} // end of initForm.

function makeRow(emp = {}) {
	let props = ['empNo', 'empName', 'email', 'salary'];
	// 한건에 대한 처리.
	let tr = document.createElement('tr');
	tr.setAttribute('data-no', emp.empNo);
	tr.addEventListener('dblclick', modifyRow);
	props.forEach(prop => {
		let td = document.createElement('td');
		td.innerHTML = emp[prop];
		tr.appendChild(td);
	});
	let td = document.createElement('td');
	let btn = document.createElement('button');
	btn.innerHTML = '삭제';
	btn.addEventListener('click', deleteRow);
	td.appendChild(btn);
	tr.appendChild(td);

	return tr;
} // end of makeRow.

// 삭제이벤트.
function deleteRow() {
	let eno = this.parentElement.parentElement.dataset.no;
	let tr = this.parentElement.parentElement;

	fetch('../empsave.json?job=delete&empNo=' + eno)
		.then(result => result.json())
		.then(data => {
			if (data.retCode == 'OK') {
				tr.remove();
			} else if (data.retCode == 'NG') {
				alert('처리 실패!');
			}
		})
		.catch(err => console.log(err));

} // end of deleteRow.

// 등록이벤트.
function addRow() {
	// db insert & 화면출력.
	// 사원이름(ename),연락처(phone),급여(salary),입사일자(hire),이메일(email)
	let ename = document.querySelector('#ename').value;
	let ephone = document.querySelector('#ephone').value;
	let ehire = document.querySelector('#edate').value;
	let esalary = document.querySelector('#esalary').value;
	let email = document.querySelector('#email').value;
	let param = 'job=add&name=' + ename + '&phone=' + ephone//
		+ '&salary=' + esalary + '&hire=' + ehire + '&email=' + email;

	fetch('../empsave.json', {
		method: 'post',
		headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
		body: param
	})
		.then(result => result.json())
		.then(data => {
			if (data.retCode == 'OK') {
				let tr = makeRow(data.retVal);
				document.querySelector('#elist').appendChild(tr);
			}
		})
		.catch(console.log);

} // end of addRow.

// 화면수정함수.
function modifyRow() {
	let originMail = this.children[2].innerText;
	let originSalary = this.children[3].innerText;
	let oldTr = this;
	let newTr = this.cloneNode(true); // 복제.
	newTr.querySelector('td:nth-of-type(3)').innerHTML//
		= '<input value="' + originMail + '">';
	newTr.querySelector('td:nth-of-type(4)').innerHTML//
		= '<input value="' + originSalary + '">';
	newTr.querySelector('button').innerText = '수정';
	newTr.querySelector('button').addEventListener('click', updateRow);

	oldTr.parentElement.replaceChild(newTr, oldTr);
} // end of modifyRow().

// updateRow 
function updateRow() {
	let oldTr = this.parentElement.parentElement;

	let empNo = this.parentElement.parentElement.dataset.no; // data-no => dataset.no
	let email = this.parentElement.parentElement.children[2].children[0].value;
	let salary = this.parentElement.parentElement.children[3].children[0].value;
	let param = 'job=edit&empNo=' + empNo + '&salary=' + salary + '&email=' + email;

	fetch('../empsave.json', {
		method: 'post',
		headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
		body: param
	})
		.then(result => result.json())
		.then(data => {
			if (data.retCode == 'OK') {
				let newTr = makeRow(data.retVal);
				oldTr.parentElement.replaceChild(newTr, oldTr);
			}
		})
		.catch(console.log);

}// end of updateRow.
