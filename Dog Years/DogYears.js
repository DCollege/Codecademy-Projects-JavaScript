//line 2 is my age.
let myAge = 26;
//line 4 are the first two years of a dog's life that count as 10.5 dog years each
let earlyYears = 2;
earlyYears = earlyYears * 10.5;
//Since we already accounted for the first two years, we are subtracting 2 from age
let laterYears = myAge - 2;
laterYears *= 4;
//line 10 add earlyYears and laterYears together, and store that in a variable named myAgeInDogYears
let myAgeInDogYears = earlyYears + laterYears;
'Donna'.toLowerCase();
const myName = 'Donna'
//line 14 breaks it down.
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} in dog years.`);
