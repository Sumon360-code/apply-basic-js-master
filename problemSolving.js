// change value of a defind variables 
let s = 10; 
let k = 12;
[s, k] = [k, s];
console.log('after changing the value: s = ', s, 'k = ', k); //maneh first e s er man chilo 10 r k er man chilo 12, but change er pore s r k er man change hoye geche

// Math.floor mane point er por ja e thakuk point er ager songkha tar output dekhabe 
let number = 2.94334;
let result = Math.floor(number);
console.log(result);

// Math.ceil mane point er por ja e thakuk point er porer songkha tar output dekhabe 

let n = 2.543444;
let result2 = Math.ceil(n);
console.log(result2);
// Math.round mane point er por jodi .5 bar tar beshi thake taile er uporer man dekhabe ar .5 er niche hole nicher man ta dekhabe 
let n2 = 2.500000;
let result3 = Math.round(n2);
console.log(result3);

// max value easy way to find
let advocate = 250;
let baristar = 330;
let webDeveloper = 550;
let maxValue = Math.max(advocate, baristar, webDeveloper);
console.log(maxValue);

//max value find out by conditionals

let firstPerson = 230;
let lastPerson = 224;
if(firstPerson < lastPerson){
 console.log('he is right');
}
else{
    console.log('he\'s wrong');
}

let firstPerson = 230;
let lastPerson = 240;
let thirdPerson = 260;
if(firstPerson < lastPerson){
if(thirdPerson > firstPerson){
    console.log('he\'s good');
}
else{
    console.log('he\'s wrong');
}
}
else{
    if(thirdPerson > firstPerson){
        console.log('he\'s good');
    }
    else{
        console.log('he\'s wrong');
    }

}

// find out max number from array

let marks = [43, 54, 65, 99,87, 23, 33, 56, 76, 87];
let max = marks[0]; // marks[0] hocche arrayr man 0 theke suru hoi tai
for(let i = 0; i < marks.length; i++){
    let element = marks[i];
    if(element > max){
        max = element;
    }
}
console.log(max);


// array sum maneh arayr vitore songkha gulake jug kora 
let numebrs = [23, 32,54, 65, 76, 46, 56, 56,54];
let sum = 0;
for(let i = 0; i <numebrs.length; i++){
    let element = numebrs[i];
    sum = sum + element;
}
console.log(sum);

// jugfol be kora function use kore 
let numbers = [23, 32,59, 65, 76, 46, 56, 56,54];
function getArraysum(numbers){
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        let element = numbers[i];
        sum = sum + element;
    }
    return sum;
}
let result = getArraysum(numbers);
console.log(result);

// duplicate find out 

let allName = [23, 6,23, 67, 65, 6, 7, 8, 56, 56,8];
let uniqName = [];

for(let i = 0; i < allName.length; i++){
    let element = allName[i];
    let index = uniqName.indexOf(element);
    if(index == -1){
        uniqName.push(element);
    }
}
console.log(uniqName);

// word count 

let words = "i'm a good boy";
let count = 0;
for(let i = 0; i < words.length; i++){
    let element = words[i];
    if(element == " "){
        count++;
    }
}
console.log(count);


// reverse string

function reverseString(str){
    let reverse = "";
    for(let i = 0; i < str.length; i++){
        let element = str[i];
        reverse = element + reverse;
    }
    return reverse;
}
let main = 'i m a bad boy';
let result = reverseString(main);
console.log(result);
