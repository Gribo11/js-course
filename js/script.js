let money, time;

function start (){
        money = +prompt("Ваш бюджет на месяц?", '');
        time = prompt('Введите дату в формате YYYY-MM-DD', '');

        while (isNaN(money) || money == '' || money == null){
            money = +prompt("Ваш бюджет на месяц?", '');
        }
}

start();


    
let appData = { 
    budget:money,
    timeData:time,
    expenses : {},
    optionalExpenses: {},
    income : [],
    savings : true


};

function chooseExpenses() {
    for (let i = 0; i < 2; i++){
        let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
            b = prompt("Во сколько обойдется?", '');

        if (typeof (a) === "string" && (typeof (a)) != null && (typeof (b)) != null
            && a !="" && b !="" && a.length < 50){

            console.log('done');
            appData.expenses[a] = b;
        } else {
            console.log ("Упс что-то пошло не так");
            i--;
        }

    };
}

chooseExpenses();



// while do

// let i = 0;
//
// while (i < 2){
//
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
//         b = prompt("Во сколько обойдется?", '');
//
//     if ((typeof (a)) === "string" && (typeof (a)) != null && (typeof (b)) != null
//         && a !="" && b !="" && a.length < 50){
//         console.log('done');
//         appData.expenses[a] = b;
//     } else {
//         console.log ("Упс что-то пошло не так");
//         i--;
//     }
//    i++
// }


//do while
//
// let i = 0;
// do {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
//         b = prompt("Во сколько обойдется?", '');
//
//     if ((typeof (a)) === "string" && (typeof (a)) != null && (typeof (b)) != null
//         && a !="" && b !="" && a.length < 50){
//         console.log('done');
//         appData.expenses[a] = b;
//     } else {
//         console.log ("Упс что-то пошло не так");
//         i--;
//     }
//     i++
// } while (i < 2);

appData.moneyPerDay = (appData.budget / 30).toFixed();

function detectDayBudget(){
    alert("Ежедневный буджет: " + appData.moneyPerDay);

    if (appData.moneyPerDay < 100){
        console.log("Минимальный уровен достатка")
    } else if(appData.moneyPerDay < 100 && appData.moneyPerDay < 2000){
        console.log("Средний уровен достатка")
    } else if (appData.moneyPerDay < 2000){
        console.log("Высокий уровен достатка")
    } else {
        console.log("Произошла ошибка")
    }
}

detectDayBudget();



function checkSavings() {
if (appData.savings == true){
    let save = +prompt("Какова сумма накоплений?"),
        persent = +prompt("Под какой процент");

    appData.monthIncome = save /100/12 *persent;
    alert("Доход в месяц с вашего депозита :" + appData.moneyPerDay);
}
}

checkSavings();

function chooseOptExpenses(){
for(let i = 1; i <= 3; i++){
let questionOptExpenses = prompt("Статья необязательных расходов?");
appData.optionalExpenses[i] = questionOptExpenses;
console.log(appData.optionalExpenses);
}
}
chooseOptExpenses();