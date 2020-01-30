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