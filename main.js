// task 17

let userNumber = prompt("Please, give a 4-digit number", 1234);
let sum = 0;
for (let i = 0; i < userNumber.length; i++) {
    let chosenNumber = +userNumber[i];
    sum += chosenNumber;
}

console.log(`This is a sum of a 4-digit number: ${sum}`);

// task 18

let userFullname = prompt("Please, give us your fullname", "Last name, First name");

let spaceIndex = userFullname.indexOf(" ");

console.log(`Salam, ${userFullname.slice(spaceIndex)}`);

// task 19

let userPrice = prompt("Please, give us a price", "530.90");

let pricePool = userPrice.split(".");

console.log(`${pricePool[0]} manat ${pricePool[1]} qapik`);


// task 20

let userSalary = +prompt("Please, can you tell us how much did you earn this month?");

let taxCut = Math.floor(userSalary * 13 / 100);

console.log(`You will need to pay $${taxCut} for tax`);

// task 21

let userAllname = prompt("Please, give your fullname completely", "Last name, First name, Father's name");

let userBoxName = userAllname.split(" ");

console.log(`${userBoxName[0]} ${userBoxName[1][0]}.${userBoxName[2][0]}.`);

// task 22

let userDepositAmount = +prompt("Please, give us the amount of your deposit that you would like to have in our bank?", 10000);

let userInterestRate = +prompt("Please, tell us at which interest rate you would put your money in our bank?", 10);

let userDepositTime = +prompt("Please, may you tell for how long(years) will you hold your money in the deposit?", 5);

for (let i = 0; i < userDepositTime; i++) {
    userDepositAmount = Math.floor(userDepositAmount * (1 + userInterestRate / 100));
}

console.log(`For ${userDepositTime} years with ${userInterestRate}% interest rate your future deposit pool will be $${userDepositAmount}`);

// task 23

let number1 = 20;

let number2 = 10;

console.log(number1 > 10);
console.log(number2 == 10);
console.log(number1 > number2);
console.log(number2 != 10);
console.log(number1 == 20);

// task 24

let userAge = +prompt("Please, may you tell how old are you?", 18);

let userAcess = userAge >= 18 ? "Access approved" : "Access denied";

console.log(userAcess);

// task 25

let userChosenNumbers = prompt("Please, give us three 2-digit numbers", "29 59 78");

let userBoxNumbers = userChosenNumbers.split(" ");

if (userBoxNumbers[0] > userBoxNumbers[1] && userBoxNumbers[0] < userBoxNumbers[2]
    || userBoxNumbers[0] < userBoxNumbers[1] && userBoxNumbers[0] > userBoxNumbers[2]) {
        console.log(userBoxNumbers[0]);
    } 
else if (userBoxNumbers[1] > userBoxNumbers[0] && userBoxNumbers[1] < userBoxNumbers[2]
    || userBoxNumbers[1] < userBoxNumbers[2] && userBoxNumbers[1] > userBoxNumbers[0]) {
        console.log(userBoxNumbers[1]);
    }
else {
    console.log(userBoxNumbers[2]);
}

// task 26

let userLeapYear = +prompt("Please, enter a date", 2020);

let leapYear = userLeapYear % 4 == 0 ? "The date is a leap year" : "The date is not a leap year";

console.log(leapYear);

// task 27

let userProductId = prompt("Please, enter your product id", "2");

switch(userProductId) {
    case "1":
        alert("Available 10 pcs.");
        break;

    case "2":
        alert("Available 256 pcs.");
        break;

    case "3":
        alert("Available 53 pcs.");
        break;

    case "4":
        alert("There are 3 variables.");
        break;

    default:
        alert("Out of Stock");
}

// task 28

let userGender = prompt("Please, may you tell us your gender", "M/F");

switch(userGender) {
    case "M":
        console.log("You are a male person");
        break;

    case "F":
        console.log("You are a female person");
        break;

    default:
        console.log("You have not chosen any gender");
}

// task 29

let userMonthNumber = prompt("Please, give a month number", "2");

switch(userMonthNumber) {
    case "1":
    case "01":
        console.log("January");
        break;

    case "2":
    case "02":
        console.log("February");
        break;

    case "3":
    case "03":
        console.log("March");
        break;

    case "4":
    case "04":
        console.log("April");
        break;

    case "5":
    case "05":
        console.log("May");
        break;

    case "6":
    case "06":
        console.log("June");
        break;

    case "7":
    case "07":
        console.log("July");
        break;

    case "8":
    case "08":
        console.log("August");
        break;
    
    case "9":
    case "09":
        console.log("September");
        break;

    case "10":
        console.log("October");
        break;

    case "11":
        console.log("November");
        break;

    case "12":
        console.log("December");
        break;

    default:
        console.log("You did not put a month number correctly");
}

// task 30

let userFullDate = prompt("Please, write a full date in the following manner: YYYY.MM.DD", "2019.12.19");

let userBoxDate = userFullDate.split(".");

let userYear = userBoxDate[0];
let userMonth = userBoxDate[1];
let userDay = userBoxDate[2];

switch(userMonth) {
    case "1":
    case "01":
        userMonth = "January";
        break;

    case "2":
    case "02":
        userMonth = "February";
        break;

    case "3":
    case "03":
        userMonth = "March";
        break;

    case "4":
    case "04":
        userMonth = "April";
        break;

    case "5":
    case "05":
        userMonth = "May";
        break;

    case "6":
    case "06":
        userMonth = "June";
        break;

    case "7":
    case "07":
        userMonth = "July";
        break;

    case "8":
    case "08":
        userMonth = "August";
        break;
    
    case "9":
    case "09":
        userMonth = "September";
        break;

    case "10":
        userMonth = "October";
        break;

    case "11":
        userMonth = "November";
        break;

    case "12":
        userMonth = "December";
        break;

    default:
        console.log("You did not put a month number correctly");
}

console.log(`${userDay} ${userMonth} ${userYear}-ci il`);