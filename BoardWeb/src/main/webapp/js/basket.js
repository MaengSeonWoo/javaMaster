// 숫자 3자리 콤마찍기
Number.prototype.numberFormat = function() {
	if (this == 0)
		return 0;
	let regex = /(^[+-]?\d+)(\d{3})/;
	let nstr = (this + '');
	while (regex.test(nstr)) {
		nstr = nstr.replace(regex, '$1' + ',' + '$2');
	}
	return nstr;
};

let basket = {
	basketCount: 0, // 전체수량.
	basketTotal: 0, // 전체금액.

	list: function() {
		// 목록.
		svc.basketList(
			result => {
				console.log(result);
				result.forEach(basket => {
					console.log(basket.basketNo);
					basket.basketCount += basket.productCnt;
					basket.basketTotal += (basket.productCnt * basket.productPrice);
					
					const rowDiv = document.querySelector('div[data-id="0"]').cloneNode(true);
					rowDiv.style.display = 'block';
					rowDiv.setAttribute('data-id', basket.productNo);
					rowDiv.querySelector('div.img>img').setAttribute('src', 'images/' + basket.productName + '.jpg');
					rowDiv.querySelector('div.pname>span').innerText = basket.productName;
					rowDiv.querySelector('div.basketprice').childNodes[2].textContent = basket.productPrice.numberFormat() + "원";
					// let children = rowDiv.querySelector('div.basketprice').childNodes;
					// console.log(children);
					rowDiv.querySelector('div.basketprice input').value = basket.productPrice;
					rowDiv.querySelector('div.basketprice input').setAttribute('id', 'p_price' + basket.basketNo);
					
					rowDiv.querySelector('div.updown input').value = basket.productCnt;
					rowDiv.querySelector('div.updown input').setAttribute('id', 'p_num'+ basket.basketNo);
					// event
					rowDiv.querySelector('div.updown input').onkeyup = () => basket.changePNum(basket.basketNo);
					rowDiv.querySelector('div.updown span').onclick = () => basket.changePNum(basket.basketNo);
					rowDiv.querySelector('div.updown span:nth-of-type(2)').onclick = () => basket.changePNum(basket.basketNo);
					// 개별합계
					rowDiv.querySelector('div.sum').textContent = (basket.productCnt * basket.productPrice).numberFormat() + "원";
					rowDiv.querySelector('div.sum').setAttribute('id', 'p_sum' + basket.basketNo);
					document.querySelector('#basket').append(rowDiv);
				});
				basket.reCalc();
			},
			err => {
				console.log(err);
			}
		) // end of basketList
	}, // end of list

	delItem: function() {
		 // 
		 console.log();
		let no = event.target.parentElement.parentElement.parentElement.dataset.id;
		console.log(no);
		
		svc.basketRemove(no,
		result => {
			if(result.retCode == 'OK'){
			console.log(result);
			let price = document.querySelector('#p_price' + no).value; // 단가
			let cnt = document.querySelector('#p_num' + no).value; // 현재수량
			console.log(price);
			console.log(cnt);
			// 합계반영
			basket.basketCount -= cnt;
			basket.basketTotal -= (price * cnt);
			basket.reCalc();
			// 화면에서 지우기
			document.querySelector('div[data-id="' + no + '"]').remove();
			}
		},
		err => {
			console.log(err);
		});
		
	},

	reCalc: function() {
		//수량, 금액 합계 계산
		//합계 자리에 출력
		 document.querySelector('#sum_p_num span').textContent = basket.basketCount;
		 document.querySelector('#sum_p_price span').textContent 
		 	= basket.basketTotal.numberFormat();
	},

	changePNum: function(no) { 
  		console.log(event);
  		let cnt = -1;
  		if(event.target.nodeName == "I"){
			if(event.target.className.indexOf("up") !=-1){
				cnt = 1;
			}
		}else if(event.target.nodeName == "INPUT") {
			if(event.key == "ArrowUp"){
				cnt = 1;
			}
		}
		let price = document.querySelector('#p_price' + no).value; // 금액
		let cntElem = document.querySelector('#p_num' + no);
		let sumElem = document.querySelector('#p_sum' + no);
		
		let bvo = {no, cnt}
		svc.basketUpdate(bvo, //
		result => {
			console.log(result);
			cntElem.value = parseInt(cntElem.value) + cnt; // 수량변경
			sumElem.innerText = (price * cntElem.value).numberFormat() + "원";
			// 전체수량, 금액
			basket.basketCount += cnt;
			basket.basketTotal += (price * cnt);
			basket.reCalc();
		},
		err => {
			console.log(err);
		})
	},

	delCheckedItem: function() {
		 document.querySelectorAll('input:checked').forEach((item, idx) => {
			if(idx > 0){
				let no = item.parentElement.parentElement.parentElement.dataset.id;
		 		svc.basketRemove(no,
				result => {
				if(result.retCode == 'OK'){
				console.log(result);
				let price = document.querySelector('#p_price' + no).value; // 단가
				let cnt = document.querySelector('#p_num' + no).value; // 현재수량
				// 합계반영
				basket.basketCount -= cnt;
				basket.basketTotal -= (price * cnt);
				basket.reCalc();
				// 화면에서 지우기
				document.querySelector('div[data-id="' + no + '"]').remove();
			}
		 },
		 err =>{
			console.log(err);		
		 });
	   }
	   })
	},

	delAllItem: function() {
		 
	},
};

basket.list();
