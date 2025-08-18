// Create a program that asks a user for their birthdate (YYYY-MM-DD) and
// calculates their exact age in years, months, and days.

let birthdate=new Date(prompt("Enter your birthdate (YYYY-MM-DD):"));
let todaydate=new Date();
//Extract,year,month,day
let birthyear=birthdate.getFullYear();
let birthmonth=birthdate.getMonth()+1;//0-11
let birthday=birthdate.getDate();

let todayyear=todaydate.getFullYear();
let todaymonth=todaydate.getMonth()+1;//0-11
let todayday=todaydate.getDate();
//years
years =todayyear-birthyear;
months=todaymonth-birthmonth;
days=todayday-birthday;
// Adjust for negative months values
if(months<0){
    years--;
    months +=12;
}
//Adjust for negative days value
if(days<0){
    months--;
    let prevmonth=new Date(todayyear,todaymonth - 1, 0).getDate();
    days += prevmonth;
    if(months<0){
        months +=12;
        years--;
    }
}

console.log(`You are ${years} years, ${months} months, and ${days} days old.`);