/**
 * jsondata.js
 */

const employees = `[{"id":1,"first_name":"Wilmer","last_name":"Mistry","email":"wmistry0@about.me","gender":"Male","salary":4476},
{"id":2,"first_name":"Berk","last_name":"Bellward","email":"bbellward1@etsy.com","gender":"Male","salary":3541},
{"id":3,"first_name":"Danya","last_name":"Lynes","email":"dlynes2@liveinternet.ru","gender":"Male","salary":4874},
{"id":4,"first_name":"Bastien","last_name":"MacPherson","email":"bmacpherson3@cargocollective.com","gender":"Male","salary":3931},
{"id":5,"first_name":"Isiahi","last_name":"Forcade","email":"iforcade4@facebook.com","gender":"Bigender","salary":4547},
{"id":6,"first_name":"Tracie","last_name":"Jordon","email":"tjordon5@smh.com.au","gender":"Genderfluid","salary":3745},
{"id":7,"first_name":"Ivie","last_name":"Loffel","email":"iloffel6@uiuc.edu","gender":"Female","salary":3715},
{"id":8,"first_name":"Polly","last_name":"Yetton","email":"pyetton7@alibaba.com","gender":"Female","salary":3037},
{"id":9,"first_name":"Amos","last_name":"Blodget","email":"ablodget8@wordpress.org","gender":"Male","salary":3623},
{"id":10,"first_name":"Kristopher","last_name":"Sharpin","email":"ksharpin9@indiegogo.com","gender":"Male","salary":4914},
{"id":11,"first_name":"Lorilee","last_name":"Cuardall","email":"lcuardalla@china.com.cn","gender":"Female","salary":3066},
{"id":12,"first_name":"Filippo","last_name":"Coldbathe","email":"fcoldbatheb@vistaprint.com","gender":"Male","salary":3901},
{"id":13,"first_name":"Carlita","last_name":"Poundesford","email":"cpoundesfordc@slate.com","gender":"Female","salary":3837},
{"id":14,"first_name":"Lanny","last_name":"McClay","email":"lmcclayd@phpbb.com","gender":"Male","salary":4967},
{"id":15,"first_name":"Delmore","last_name":"Farrell","email":"dfarrelle@posterous.com","gender":"Male","salary":4734},
{"id":16,"first_name":"Bellanca","last_name":"Lambard","email":"blambardf@telegraph.co.uk","gender":"Bigender","salary":4380},
{"id":17,"first_name":"Amargo","last_name":"Kingswood","email":"akingswoodg@un.org","gender":"Female","salary":3526},
{"id":18,"first_name":"Clare","last_name":"Dwelly","email":"cdwellyh@time.com","gender":"Female","salary":3640},
{"id":19,"first_name":"Alvina","last_name":"MacCarroll","email":"amaccarrolli@reverbnation.com","gender":"Female","salary":3429},
{"id":20,"first_name":"Renate","last_name":"Burbury","email":"rburburyj@cloudflare.com","gender":"Female","salary":4105}]`;

//console.log(employees);
const empList = JSON.parse(employees); // 문자열 -> 객체.
//console.log(empList);
