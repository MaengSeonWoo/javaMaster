/*
* empFetch.js Ajax기능을 fetch함수 활용.
* empSvc 객체에 기능을 구현. 메소드를 호출.
*/

document.addEventListener("DOMContentLoaded", initForm); //최초로 실행

// 화면로딩 후 처음 실행할 함수
function initForm() {
	// Ajax 호출.
	fetch('../empJson.json') // 반환결과 값이 promise 객체
		.then(result => result.json()) // 출력스트림(json) -> 객체변환
		.then((data) => {
			data.forEach(emp => {
				let tr = makeRow(emp);
				document.querySelector('#elist').appendChild(tr);
			})
		})
		.catch((err) => console.log(err));
}// end of initForm

function makeRow(emp = {}) {
	let props = ['empNO', 'empName', 'email', 'salary'];
	// 한건에 대한 처리
	let tr = document.createElement('tr');
	tr.setAttribute('data-no', emp.empNO);
	//tr.addEventListener('dblclick', modifyRow);
	props.forEach(prop => {
		let td = document.createElement('td');
		td.innerHTML = emp[prop];
		tr.appendChild(td);
	})
	let td = document.createElement('td');
	let btn = document.createElement('button');
	btn.innerHTML = '삭제';
	btn.addEventListener('click', deleteRow);
	td.appendChild(btn);
	tr.appendChild(td);

	return tr;
}// end of makeRow

function deleteRow() {
	let eno = this.parentElement.parentElement.dataset.no;
	let tr = this.parentElement.parentElement;
	
	fetch(`../empsave.json?job=delete&empNo=${eno}`)
		.then(result => result.json())
		.then(data => {
			if (data.retCode == 'OK') {
				tr.remove();
			} else if (data.retCode == 'NG') {
				alert('처리중 에러발생.');
			} else {
				alert('처리코드 확인하세요.');
			}
		})
		.catch(err => console.log(err))
}// end of deleteRow

// 등록이벤트.
function addRow() {
	// db insert & 화면출력.
	const addHtp = new XMLHttpRequest();
	// 사원이름(ename),연락처(phone),급여(salary),입사일자(hire),이메일(email)
	let ename = document.querySelector('#ename').value;
	let ephone = document.querySelector('#ephone').value;
	let ehire = document.querySelector('#edate').value;
	let esalary = document.querySelector('#esalary').value;
	let email = document.querySelector('#email').value;
	let param = 'job=add&name=' + ename + '&phone=' + ephone//
		+ '&salary=' + esalary + '&hire=' + ehire + '&email=' + email;
	
	let paramObj = {
		job : 'add',
		name : ename,
		phone : ephone,
		salary : esalary,
		hire : ehire, 
		mail : email
	} // 등록 param
	
	svc.addEmp(paramObj, 
	data => {
		if (data.retCode == 'OK') {
			let tr = makeRow(data.retVal);
			document.querySelector('#elist').appendChild(tr);
		}
	  },
	  err => console.log(err)
	)
	fetch('../empsave.json', {
		method : 'post',
		headers : {'Content-type' : 'application/x-www-form-urlencoded'},
		body : param
	})
	  .then(result => result.json())
	  .then(data => {
		if (data.retCode == 'OK') {
			let tr = makeRow(data.retVal);
			document.querySelector('#elist').appendChild(tr);
		}
	  })
	  .catch(console.log);

	addHtp.open('post', '../empsave.json');
	addHtp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	addHtp.send(param);
	addHtp.onload = function() {
		let result = JSON.parse(addHtp.responseText);
		console.log(result);
		if (result.retCode == 'OK') {
			let tr = makeRow(result.retVal);
			document.querySelector('#elist').appendChild(tr);
		}
	}
} // end of addRow.

function updateRow() {
	let oldTr = this.parentElement.parentElement;
	let empNo = this.parentElement.parentElement.dataset.no; // data-no => dataset.no
	let email = this.parentElement.parentElement.children[2].children[0].value;
	let salary = this.parentElement.parentElement.children[3].children[0].value;
	
	fetch('../save,json',{
		method : 'post',
		headers : {'Content-type' : 'application/x-www-form-urlencoded'},
		body : param
	})
		.then(result => result.json())
		 .then(data => {
		if (data.retCode == 'OK') {
			let tr = makeRow(data.retVal);
			document.querySelector('#elist').appendChild(tr);
		}
	  })
	  .catch(console.log);
	console.log(empNo, email, salary);
	const editHtp = new XMLHttpRequest();
	editHtp.open('get', '../empsave.json?job=edit&empNo=' //
		+ empNo + '&salary=' + salary + '&email=' + email);
	editHtp.send();
	editHtp.onload = function() {
		let result = JSON.parse(editHtp.responseText);
		console.log(result);
		if (result.retCode == 'OK') {
			let newTr = makeRow(result.retVal);
			oldTr.parentElement.replaceChild(newTr, oldTr);
		}
	}// end of onload.

}// end of updateRow.