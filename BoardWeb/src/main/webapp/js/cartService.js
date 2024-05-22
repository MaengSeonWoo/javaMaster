/**
 * cartService.js
 */

const svc = {
	// 장바구니 목록.
	cartList(successCall, errorCall) {
		fetch('cartList.do')
			.then(resolve => resolve.json()) // json문자->객체.
			.then(successCall)
			.catch(errorCall);
	},
	basketList(successCall, errorCall) {
		fetch('basketList.do')
			.then(resolve => resolve.json()) // json문자->객체.
			.then(successCall)
			.catch(errorCall);
	},
	cartUpdate(cvo = {}, successCall, errorCall) {
		fetch('editCart.do', {
			method: 'post',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: 'no=' + cvo.no + '&qty=' + cvo.qty
		})
			.then(resolve => resolve.json())
			.then(successCall)
			.catch(errorCall);
	},
	basketUpdate(bvo = {}, successCall, errorCall) {
		fetch('editBasket.do', {
			method: 'post',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: 'basketno=' + bvo.basketNo + '&cnt=' + bvo.basketCnt
		})
			.then(resolve => resolve.json())
			.then(successCall)
			.catch(errorCall);
	},
	cartRemove(no = 1, successCall, errorCall) {
		fetch('delCart.do', {
			method: 'post',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: 'no=' + no
		})
			.then(resolve => resolve.json())
			.then(successCall)
			.catch(errorCall);
	},
	basketRemove(basketNo = 1, successCall, errorCall) {
		fetch('delBasket.do', {
			method: 'post',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: 'basketNo=' + basketNo
		})
			.then(resolve => resolve.json())
			.then(successCall)
			.catch(errorCall);
	}
}