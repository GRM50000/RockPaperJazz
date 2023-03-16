//Simple Do-While Loop Example
/*
Do { code to execute at least once}while(condition);

compare to a while loop: 

*/

let number;
do {
    number = parseInt(prompt('Please enter a number between 1 and 5'));
} while (isNaN(number) || number < 1 || number > 5);
console.log('You entered ${number}');
