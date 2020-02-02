'use strict'

let money = prompt("Ваш бюджет на месяц?" , "");
let time = prompt("Введите дату в формате YYYY-MM-DD" , "");
let appData = {
    budget: money ,
    timeData : time,
    expenses : {},
    optionalExpenses: {},
    income : [],
    saving: false
};

let first = prompt("“Введите обязательную статью расходов в этом месяце”" , "");
let second = prompt("“Во сколько обойдется?”" , "");
let three = prompt("“Введите обязательную статью расходов в этом месяце”" , "");
let four = prompt("“Во сколько обойдется?”" , "");
appData.expenses.first=three;
appData.expenses.second=four;
alert(appData.budget/30);

// 'use strict'

// let money = prompt("Ваш бюджет на месяц?" , "");
// let time = prompt("Введите дату в формате YYYY-MM-DD" , "");
// let appData = {
//     budget: money ,
//     timeData : time,
//     expenses : {},
//     optionalExpenses: {},
//     income : [],
//     saving: false
// };


// for(let i = 0; i < 2; i++) {
//     let a = +prompt("“Введите обязательную статью расходов в этом месяце”" , "");
// 	let b = prompt("“Во сколько обойдется?”" , "");
	
// 	if( (typeof(a))==="string" &&(typeof(a)) != null && (typeof(b) != null) &&
// 	a != 'null' && b !='null' && a.length < 50) {
// 		appData.expenses[a]=b;
// 		console.log('done');
// 	} 
// 		else {

// 		}
// };
// 	appData.moneyPerDay = appData.budget/30;


// 	alert("Ежедневный бюджет: " + appData.moneyPerDay);

// 	if(appData.moneyPerDay <100) {
// 		console.log("минимальный уровень достатка");
// 	}
// 	else if(appData.moneyPerDay > 100 && appData.moneyPerDay <2000) {
// 		console.log("средний уровень достатка");
// 	} 
// 	else if(appData.moneyPerDay > 2000) {
// 		console.log('высокий уровень достатка');
// 	} else {
// 		console.log('произошла ошибка');
// 	}
