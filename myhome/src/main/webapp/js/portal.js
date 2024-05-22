/*
* portal.js
*/
const showTitles = ['id', 'centerName', 'sido', 'phoneNumber'];
let url = 'https://api.odcloud.kr/api/15077586/v1/centers?page=1&perPage=284&serviceKey=qCwQYxNXeK%2FaB1Ngf9oNZDttjmjQ6ku1OdR6%2Fd0Jj5EIdqOxMXolplih%2BYjTqB4uxCuK636co3tf9T5%2Fr9OLvw%3D%3D';

let totalData = [];

// api호출.
fetch(url)
	.then(result => result.json())
	.then(data => {
		console.log(data)
		totalData = data.data;
		/*data.data.forEach(center => {
			let tr = makeRow(center);
			document.querySelector('#list').appendChild(tr);
		})*/
		showPaging(2);
		//pagingList();
	})
	.catch(console.log);

// 링크 클릭하면 페이지 호출.
document.querySelectorAll('.pagination a').forEach(aTag => {
	console.log(aTag);
	aTag.addEventListener('click', function(e) {
		e.preventDefault(); // a 페이지이동 차단.
		let page = this.innerText;
		showPaging(page);
	})
})

// pagingList: 전체건수를 계산해서 284건 29페이지.
let totalCnt = 284;
function pagingList(page = 1) {
	let pagination = document.querySelector('.pagination');
	pagination.innerHTML = '';

	let endPage, startPage;
	let prev, next;
	let realEnd = Math.ceil(totalCnt / 10); // 29page
	endPage = Math.ceil(page / 10) * 10; // 
	startPage = endPage - 9;
	endPage = endPage > realEnd ? realEnd : endPage;
	next = endPage < realEnd ? true : false;
	prev = startPage > 1;

	// aTag 생성. 이벤트 추가.
	if (prev) {
		let aTag = document.createElement('a');
		aTag.setAttribute('href', '#');
		aTag.setAttribute('data-page', startPage - 1);
		aTag.innerHTML = '&laquo;';
		aTag.addEventListener('click', function(e) {
			let page = e.target.dataset.page;
			showPaging(page);
		})
		pagination.appendChild(aTag);
	}
	for (let n = startPage; n <= endPage; n++) {
		let aTag = document.createElement('a');
		aTag.setAttribute('href', '#');
		aTag.innerHTML = n;
		if (page == n) {
			aTag.className = 'active'; // class속성 지정.
		}
		aTag.addEventListener('click', function(e) {
			let page = e.target.innerHTML;
			showPaging(page);
		})
		pagination.appendChild(aTag);
	}// end of for.
	if (next) {
		let aTag = document.createElement('a');
		aTag.setAttribute('href', '#');
		aTag.setAttribute('data-page', endPage + 1);
		aTag.innerHTML = '&raquo;';
		aTag.addEventListener('click', function(e) {
			let page = e.target.dataset.page;
			showPaging(page);
		})
		pagination.appendChild(aTag);
	}
}

// 페이지 -> 10개씩 출력.
function showPaging(page = 1) { // 0 ~ 9: 1page, 10 ~ 19: 2page
	let startNo = (page - 1) * 10;
	let endNo = page * 10;
	let fAry = totalData.filter((center, idx) => {
		if (idx >= startNo && idx < endNo) {
			return true;
		}
	});
	// 목록 삭제.
	document.querySelector('#list').innerHTML = '';

	fAry.forEach(center => {
		let tr = makeRow(center);
		document.querySelector('#list').appendChild(tr);
	})
	console.log(fAry);
	pagingList(page); // 페이지목록 생성.
}


// 데이터(센터) tr 함수.
function makeRow(center = {}) {
	// 한건에 대한 처리.
	let tr = document.createElement('tr');
	tr.addEventListener('click', function(e) {
		window.open('daum.html?x=' + center.lat + '&y=' + center.lng + '&name=' + center.centerName.replace('코로나19 ', ''));
	})
	showTitles.forEach(title => {
		let td = document.createElement('td');
		let name = center[title];
		td.innerHTML = (name + '').replace('코로나19 ', '');
		tr.appendChild(td);
	});

	return tr;
} // end of makeRow.	