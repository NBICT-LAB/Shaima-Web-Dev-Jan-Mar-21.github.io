//This is NBICT LAB's code

/*let js = "I'm awesome";
console.log(js);
console.log(7-11+19*2);

let firstName = 'sohana ';
let lastName ='shaima';

console.log(firstName +  '+ lastName + ' is a computer engineer.'
 + lastName +' is a beautiful girl');

let x;
console.log(typeof(x));

let country ="Bangladesh";
let continent ="asia ";
let population = " twenty core";
console.log(country + ' ' + continent + population);


let isIsland = true;
let language;

console.log(typeof(isIsland));
console.log(typeof(population));
console.log(typeof(country));
console.log(typeof(language));
*/
/*
let age=30;
console.log(age);

const birthYear = 1990;
// birthYear = 1994;
console.log(birthYear);

let myName;
// const yourName;
 var mySubject ='CSE';
 console.log(mySubject);
 myName ='Shaima';
 console.log(myName);
 */
//mathmatical operators

/*
const now = 2021;
const ShaimaAge = now - 1993;
const royAge = now - 2005;

console.log(ShaimaAge, royAge);
console.log(ShaimaAge * 2 , ShaimaAge / 10 ,  2 ** 3);

const firstName = 'NBICT';
const lastName = 'LAB';
console.log(firstName + ' ' + lastName);

// assignment operators
let x = 7+11;
x += 3; //x = x +3;
x -= 4; // x = x-4;
x++; //x = x+1;
x--; //x = x-1;
x--; //x = x-1;
console.log(x);

//comparison operators
console.log(ShaimaAge > royAge);
console.log(royAge>= 18);
*/

/*
const country = 'Bangladesh';
const continent ='asia';
let population = 180;
console.log(country , cntinent , population);


const isIsland = true;
const language = 'Bangla';


console.log(isIsland , language);
console.log(typeof(isIsland));
console.log(typeof(population));
console.log(typeof(country));
console.log(typeof(language));

 const firstHalf = population / 2;
 const secondHalf = population / 2;
 console.log(firstHalf , secondHalf);
 console.log(++population);

 let finpopulation = 6;
 console.log(population > finpopulation);


 let averagepopulation = 33; 
 console.log(averagepopulation > population);


let description = country + ' ' +' is in ' + ' ' + continent + ', and it  is ' + population + ' ' + ' people speak ' + language + '.';
console.log(description);
*/


// operator precedence

/*
const now = 2037;
const ageJonus = now  - 1992;
const ageSara = now - 1998;

const averageAge = (ageJonus + ageSara) / 2;

console.log(ageJonus, ageSara , averageAge);


console.log(now - 1992 > 
    now - 1998);

const x = y = 25 - 10 + 5;
console.log(x);
*/

/*
const massMark = 78;
const massJohn = 92;
const heightMark = 1.69;
const heightJohn = 1.95;
 console.log(massMark, massJohn , heightMark , heightJohn);


 const Markbmi = massMark / (heightMark * heightMark);
 const Johnbmi = massJohn / (heightJohn * heightJohn);

let markHigherBMI = Markbmi > Johnbmi;

 console.log(Markbmi , Johnbmi ,markHigherBMI);
 */

/*
const massMark = 95;
const massJohn = 85;
const heightMark = 1.88;
const heightJohn = 1.76;
console.log(massMark, massJohn, heightMark, heightJohn);


const MarkBMI = massMark / (heightMark * heightMark);
const JohnBMI = massJohn / (heightJohn * heightJohn);
let markHigherBMI = MarkBMI > JohnBMI;
console.log(MarkBMI , JohnBMI , markHigherBMI);

*/


// Strings and Template Literals
/*

const firstName = ' Jonas';
const job = ' Teacher';
const birthYear = 1993;
const currentYear = 2037;

// I'm Jonas, a 44 years old teacher!

const jonas = " I'm " + firstName + ', a ' + (currentYear - birthYear) + ' years old'+ job + '!';

const jonasNew = ` I'm ${firstName}, a ${currentYear - birthYear} years old${job}!`;
console.log(jonas);
console.log(jonasNew);

console.log(' I am \n\ a multiline \n\ string');

console.log(`I am 
a multiline 
string....`);

console.log(`This is a new line in back tick.`);

*/
/*


const firstName = 'Abu Shaid';
const lastName = 'Sabbir';
const topics = 'Javascript';
const institute = 'NBICT LAB';
const startYear = 2016;
const endYear = 2021;

const result = " I'm " + firstName +' ' + lastName + '. I am learning ' + topics + ' at ' + institute + ' for ' + (endYear -startYear) + ' years!';
console.log(result);


console.log(`I'm ${firstName} ${lastName}.I am learning ${topics} at ${institute} for ${endYear - startYear} years!`)

console.log(`i am ${firstName} ${lastName}.
I am learning ${topics} at
${institute} for ${endYear -startYear} years!`);

console.log("I am Abu shaid Sabbir.\n\
I am learning Javascript \n\
NBICT LAB for 5 years");

*/

const myName = "Sohana";
const lastName ="Shaima.";
const result = myName + lastName;

console.log(result);


const country = 'Bangladesh';
const continent = 'Asia';
const population =  180;

console.log(country , continent , population);

const isIsland = 'true';
const language = 'Bangla';

console.log(`typeof Country is ${typeof(country)}.`);

console.log(`typeof Continent is ${typeof(continent)}.`);

console.log(`typeof Population is ${typeof(population)}.`);

console.log(`typeof isIsland is ${typeof(isIsland)}.`);

console.log(`typeof Language is ${typeof(language)}.`);


const firstHalf = population / 2;
const secondHalf = population - firstHalf;

console.log(`Each half will contain ${secondHalf} million people.`);
 

const newpopulation = population + 1;

console.log(`If we add 1 to ${population} then we get ${newpopulation}.`);

let finpopulation = 6;
let condition = population > finpopulation;

if(condition){
    console.log(`Our population is greater than finland's population.`);
}
 else{
    console.log(`Our population is less than finland's population.`);
}

let averagepopulation = 33;
let condition1 = population > averagepopulation;

if(condition){
    console.log(`Our Population is greater than average population.`);
}else{
    console.log(`Our Population is less than average population.`);
}

console.log(`${country} is in ${continent}, and its ${population} million people speak ${language}.`);

let condition2 = population > averagepopulation;

if(condition2){
    console.log(`${country}es population is above average.`);
}else{
    console.log(`${country}es population is below average.`);
}
