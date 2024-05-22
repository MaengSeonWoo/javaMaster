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
	cartCount: 0, // 전체수량.
	cartTotal: 0, // 전체금액.

	list: function() {
		// 목록.
		svc.cartList(
			result => {
				console.log(result);
				result.forEach(cart => {
					basket.cartCount += cart.qty;
					basket.cartTotal += (cart.qty * cart.price);
					
					const rowDiv = document.querySelector('div[data-id="0"]').cloneNode(true);
					rowDiv.style.display = 'block';
					rowDiv.setAttribute('data-id', cart.no);
					rowDiv.querySelector('div.img>img').setAttribute('src', 'images/' + cart.productNm + '.jpg');
					rowDiv.querySelector('div.pname>span').innerText = cart.productNm;
					rowDiv.querySelector('div.basketprice').childNodes[2].textContent = cart.price.numberFormat() + "원";
					// let children = rowDiv.querySelector('div.basketprice').childNodes;
					// console.log(children);
					rowDiv.querySelector('div.basketprice input').value = cart.price;
					rowDiv.querySelector('div.basketprice input').setAttribute('id', 'p_price' + cart.no);
					
					rowDiv.querySelector('div.updown input').value = cart.qty;
					rowDiv.querySelector('div.updown input').setAttribute('id', 'p_num' + cart.no);
					// event
					rowDiv.querySelector('div.updown input').onkeyup = () => basket.changePNum(cart.no);
					rowDiv.querySelector('div.updown span').onclick = () => basket.changePNum(cart.no);
					rowDiv.querySelector('div.updown span:nth-of-type(2)').onclick = () => basket.changePNum(cart.no);
					// 개별합계
					rowDiv.querySelector('div.sum').textContent = (cart.qty * cart.price).numberFormat() + "원";
					rowDiv.querySelector('div.sum').setAttribute('id', 'p_sum' + cart.no);
					document.querySelector('#basket').append(rowDiv);
				});
				basket.reCalc();
			},
			err => {
				console.log(err);
			}
		) // end of cartList
	}, // end of list

	delItem: function() {
		 // 
		 console.log();
		let no = event.target.parentElement.parentElement.parentElement.dataset.id;
		console.log(no);
		
		svc.cartRemove(no,
		result => {
			if(result.retCode == 'OK'){
			console.log(result);
			let price = document.querySelector('#p_price' + no).value; // 단가
			let qty = document.querySelector('#p_num' + no).value; // 현재수량
			// 합계반영
			basket.cartCount -= qty;
			basket.cartTotal -= (price * qty);
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
		 document.querySelector('#sum_p_num span').textContent = basket.cartCount;
		 document.querySelector('#sum_p_price span').textContent 
		 	= basket.cartTotal.numberFormat();
	},

	changePNum: function(no) { 
  		console.log(event);
  		let qty = -1;
  		if(event.target.nodeName == "I"){
			if(event.target.className.indexOf("up") !=-1){
				qty = 1;
			}
		}else if(event.target.nodeName == "INPUT") {
			if(event.key == "ArrowUp"){
				qty = 1;
			}
		}
		let price = document.querySelector('#p_price' + no).value; // 금액
		let qtyElem = document.querySelector('#p_num' + no);
		let sumElem = document.querySelector('#p_sum' + no);
		
		let cvo = {no, qty}
		svc.cartUpdate(cvo, //
		result => {
			console.log(result);
			qtyElem.value = parseInt(qtyElem.value) + qty; // 수량변경
			sumElem.innerText = (price * qtyElem.value).numberFormat() + "원";
			// 전체수량, 금액
			basket.cartCount += qty;
			basket.cartTotal += (price * qty);
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
		 		svc.cartRemove(no,
				result => {
				if(result.retCode == 'OK'){
				console.log(result);
				let price = document.querySelector('#p_price' + no).value; // 단가
				let qty = document.querySelector('#p_num' + no).value; // 현재수량
				// 합계반영
				basket.cartCount -= qty;
				basket.cartTotal -= (price * qty);
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
