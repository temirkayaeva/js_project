'use strict';

let money =  prompt("Ваш бюджет на месяц?", ''),
    time = prompt("Введите дату в формате YYYY-MM-DD", '');

let appData = {
    money: money,
    timeData: time,
    expenses: {},  
    optionalExpenses: {},
    icnome: [],
    savings: false,
};

let expense = prompt("Введите обязательную статью расходов в этом месяце", ''),
    moneyToSpend = +prompt('Во сколько обойдется?', '');

appData.expenses = {
    [expense]: moneyToSpend,
};

alert(appData.money/30);