/** js/array1.js
 * 
 */

 empList.forEach((item, idx) => {
	if(item.first_name.indexOf('c') >= 0){
		console.log(item);
	}
 });
 let newAry = empList.filter((item, idx, ary) => {
	return (idx+1) == ary.length;
 });
 
 // A -> A'
 newAry = empList.map((item, idx, ary) => {
	const obj = {
		no : item.id,
		name : item.first_name + "-" + item.last_name,
		email : item.email
	}
	return obj;
 });
 console.log(newAry);
 console.clear();
 
 let result = empList.reduce((acc, curVal) => {
	if(curVal.gender == 'Male'){
		acc.push(curVal);
	}
	return acc;
 }, []);
 console.log(result);
 
 const array1 = [1,7,2,9,3,4];
 
 const initialValue = 0;
 const sumWithInitial = array1.reduce(function(acc, currentValue){
	console.log(`acc => ${acc}, currentValue => ${currentValue}`)
	// 최댓값 return acc > currentValue ? acc : currentValue;
	// 최소값 return acc < currentValue ? acc : currentValue;
	return acc + currentValue
 }, initialValue);
 console.log(`최소값 : ${sumWithInitial}`);
 
 // String.prototype.indexOf(' ') => 찾는 값의 인덱스를 반환
 // Array.prototype.indexOf(' ') => 찾는 값의 인덱스를 반환
console.log("abcde".indexOf("c")); 
console.log([1,2,3,4,5].indexOf(3));

let genderAry = []; // gender를 종류별로 한가지만 담고 싶음

empList.forEach(emp => {
	if(genderAry.indexOf(emp.gender) == -1){
		genderAry.push(emp.gender);
	}
});
console.log(genderAry); // ['Male','Female','Bigender','Genderfluid']