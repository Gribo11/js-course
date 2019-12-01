let money = prompt("Ваш бюджет на месяц?", ''),
    time = prompt('Введите дату в формате YYYY-MM-DD', '');
    
let appData = { 
    budget:money,
    timeData:time,
    expenses : {},
    optionalExpenses: {},
    income : [],
    savings : false


};

let q1 = prompt("Введите обязательную статью расходов в этом месяце", ''),
	q2 = prompt("Во сколько обойдется?", ''),
	q3 = prompt("Введите обязательную статью расходов в этом месяце", ''),
    q4 = prompt("Во сколько обойдется?", '');
    
    alert(appData.budget / 30);


    appData.expenses.q1 = q2;
    appData.expenses.q3 = q4;