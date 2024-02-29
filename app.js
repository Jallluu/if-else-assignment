var percentage = +prompt('Enter your percentage here!');

if (percentage > 100) {
    console.log('INVALID PERCENTAGE! Please enter correct percentage.');
}
else if (percentage < 40) {
    console.log('Not Eligible!')
}
else if (percentage >= 40 && percentage <= 49) {
    console.log('D Grade!')
} else if (percentage >= 50 && percentage <= 59) {
    console.log('C Grade!')
} else if(percentage >=60 && percentage <= 69){
    console.log('B Grade!')
}
 else if(percentage >=70 && percentage <= 79){
    console.log('B+ Grade!')
}
 else if(percentage >=80 && percentage <= 89){
    console.log('A Grade!')
}
 else if(percentage >=90 && percentage <= 100){
    console.log('A+ Grade!')
}
else {
    console.log(percentage);
}