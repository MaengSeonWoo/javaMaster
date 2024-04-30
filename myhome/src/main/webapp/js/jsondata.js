/**
 * jsondata.js
 */

 const employees = `[{"id":1,"first_name":"Rory","last_name":"Huttley","email":"rhuttley0@de.vu","gender":"Female","salary":4215},
{"id":2,"first_name":"Tucky","last_name":"McCrossan","email":"tmccrossan1@barnesandnoble.com","gender":"Male","salary":4745},
{"id":3,"first_name":"Kahaleel","last_name":"Schruyer","email":"kschruyer2@ibm.com","gender":"Male","salary":4080},
{"id":4,"first_name":"Riccardo","last_name":"Seppey","email":"rseppey3@fda.gov","gender":"Male","salary":4126},
{"id":5,"first_name":"Melloney","last_name":"Bodycote","email":"mbodycote4@people.com.cn","gender":"Female","salary":3826},
{"id":6,"first_name":"Pam","last_name":"Stinchcombe","email":"pstinchcombe5@gmpg.org","gender":"Female","salary":4103},
{"id":7,"first_name":"Angy","last_name":"De Brett","email":"adebrett6@webeden.co.uk","gender":"Female","salary":4851},
{"id":8,"first_name":"Obediah","last_name":"Mack","email":"omack7@state.gov","gender":"Male","salary":3776},
{"id":9,"first_name":"Jeane","last_name":"Cawdell","email":"jcawdell8@eepurl.com","gender":"Non-binary","salary":4114},
{"id":10,"first_name":"Arlie","last_name":"Pover","email":"apover9@goo.ne.jp","gender":"Female","salary":4679},
{"id":11,"first_name":"Maddalena","last_name":"Clynter","email":"mclyntera@meetup.com","gender":"Female","salary":4537},
{"id":12,"first_name":"Cull","last_name":"McNaught","email":"cmcnaughtb@technorati.com","gender":"Male","salary":4910},
{"id":13,"first_name":"Roarke","last_name":"Loveridge","email":"rloveridgec@hubpages.com","gender":"Male","salary":3321},
{"id":14,"first_name":"Shandie","last_name":"Morrel","email":"smorreld@bluehost.com","gender":"Female","salary":3235},
{"id":15,"first_name":"Brice","last_name":"Galvin","email":"bgalvine@macromedia.com","gender":"Male","salary":3014},
{"id":16,"first_name":"Freida","last_name":"Moorton","email":"fmoortonf@msu.edu","gender":"Female","salary":4275},
{"id":17,"first_name":"Garrott","last_name":"Gyngyll","email":"ggyngyllg@elpais.com","gender":"Male","salary":3828},
{"id":18,"first_name":"Rebeka","last_name":"Dabnor","email":"rdabnorh@usda.gov","gender":"Female","salary":3479},
{"id":19,"first_name":"Elroy","last_name":"Catherall","email":"ecatheralli@answers.com","gender":"Male","salary":4790},
{"id":20,"first_name":"Royall","last_name":"Bagnell","email":"rbagnellj@hexun.com","gender":"Male","salary":4322}]`;

console.log(employees);
const empList = JSON.parse(employees); // 문자열 -> 객체
console.log(empList);