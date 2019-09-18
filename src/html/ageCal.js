let today = new Date;

console.log("day",today.getDay()+1)
console.log('year', today.getFullYear());
console.log("month", today.getMonth() + 1);
console.log('date', today.getDate())

// console.log(today)
// console.log( today.getDay());
// let myDOB = new Date('oct 19 1997');
// console.log(myDOB)
// console.log( today.getFullYear())
// let pyear = today.getFullYear();
// let age = Math.abs(myDOB - today);
// console.log(age) 

var dob = '19970510';
var year = Number(dob.substr(0, 4));
var month = Number(dob.substr(4, 2));
var day = Number(dob.substr(6, 2));
// var today = new Date;
// console.log('today',today)
// console.log(today)
// console.log( today.getDay(), today.getMonth()+1, today.getFullYear())
// console.log( today.getMonth());
var age = today.getFullYear() - year;
var monage = today.getMonth() - month;
// var dayage = today.getDay() - day;
var dateage = today.getDate() - day;

if (today.getMonth() < month || (today.getMonth() == month && today.getDate() < day)) {
  age--;
}
console.log('----------------')
console.log('year',age);
console.log('month',Math.abs(monage + 1))
console.log('day',dateage)

console.log('----------------')
console.log('year',year);
console.log('month',Math.abs(month))
console.log('date',day)


var date1 = new Date('09/11/2019');
var date2 = new Date('09/17/2019');
var dating =  date2.getDate() - date1.getDate();

console.log('month------',date2.getMonth(),'year',date2.getFullYear() % 4)
// [0,2,4,6,7,9,11]
if(date2.getMonth() == 3 || 5 || 8 || 10 ){
    console.log("30 days")
}else
if( date2.getMonth() == 0 || 2 || 4 || 6 || 7 || 9 || 11 ){
    console.log("31 days")
}else if( date2.getMonth() == 1 && date2.getFullYear() % 4 == 0 ){
    console.log("29 days")
}else{
    console.log("28 days")
}

var diffDays = 31 - dating;
console.log(diffDays)
// console.log('diffdays',diffDays, '1',date1, '------',date2)
//5555555555555555555555555555555555555555555555555555