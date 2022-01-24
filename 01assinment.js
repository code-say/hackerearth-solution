/* SAYAN MANDAL 
CAPG ASSINMENT
JavaScript Fundamentals – Part 1 */

/*=========================================================================================================== */

//LECTURE: Values and Variables

let country = 'India';
let continent = 'Asia';
let population = 140;

// log their values to the console
console.log(country);
console.log(continent);
console.log(population);

/*=========================================================================================================== */

//LECTURE: Data Types

let isIsland = false;
let language;

//Log the types of 'isIsland', 'population', 'country' and 'language' to the console

console.log(typeof Boolean);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

/*=========================================================================================================== */

//LECTURE: let, const and var

language = 'Hindi';

//Think about which variables should be const variables (which values will neverchange, and which might change?). Then, change these variables to const.
const country = 'India';
const continent = 'Asia';
const isIsland = false;


//Try to change one of the changed variables now, and observe what happens
isIsland = true;  // okey so its give error of assinment to constant variable.

/*=========================================================================================================== */

// LECTURE: Basic Operators

//If your country split in half, and each half would contain half the population,then how many people would live in each half?

console.log(population / 2);

//Increase the population of your country by 1 and log the result to the console
population++;
console.log(population);

// Finland has a population of 6 million. Does your country have more people thanFinland?
console.log(population < 6);

//The average population of a country is 33 million people. Does your country have less people than the average country?

console.log(population < 33 );

//Based on the variables you created, create a new variable 'description'which contains a string with this format: 'Portugal is in Europe, and its 11 million people speak portuguese

const description = country + 'is in ' + continent + ', and its ' + population + ' million people speak ' + language;

console.log(description);

/*=========================================================================================================== */

//LECTURE: Strings and Template Literals

//Recreate the 'description' variable from the last assignment, this timeusing the template literal syntax

const description1 = `${country} is in ${continent}, and its ${population} million people speak ${language}`;

console.log(description1);

/*=========================================================================================================== */

// LECTURE: Taking Decisions: if / else Statements

// If your country's population is greater that 33 million, log a string like this to the console: 'Portugal's population is above average'. Otherwise, log a string like 'Portugal's population is 22 million below average' (the 22 is the average of 33 minus the country's population)

if(country > 33 )
{
    console.log(`${country}'s population is above average `);
}
else{
    console.log(`${country}'s population is ${33 - population} million below average`);
}

// After checking the result, change the population temporarily to 13 and then to 130. See the different results, and set the population back to original


/*=========================================================================================================== */

//LECTURE: Type Conversion and Coercion

//1. Predict the result of these 5 operations without executing them: '9' - '5'; '19' - '13' + '17'; '19' - '13' + 17; '123' < 57; 5 + 6 + '4' + 9 - 4 - 2

/*
'9' - '5'
4
'19' - '13' + '17'
'617'
'19' - '13' + 17
23
'123' < 57
false
5 + 6 + '4' + 9 - 4 - 2
1143
*/


/*=========================================================================================================== */

// LECTURE: Equality Operators: == vs. ===

//Declare a variable 'numNeighbours' based on a prompt input like this:prompt('How many neighbour countries does your country have?');

let numNeighbours = Number(
    prompt('How many neighbour countries does your country have?')
)

//If there is only 1 neighbour, log to the console 'Only 1 border!' (use loose equality == for now)

if (numNeighbours === 1)
{
    console.log('Only 1 border!');
}
//Use an else-if block to log 'More than 1 border' in case 'numNeighbours' is greater than 
else if (numNeighbours > 1 ) {
    console.log('More than 1 border');
}
// Use an else block to log 'No borders' (this block will be executed when 'numNeighbours' is 0 or any other value)
else
{
    console.log('No borders');
}

/*=========================================================================================================== */

// LECTURE: Logical Operators

 /* Let's say Sarah is looking for a new country to live in.
 She wants to live in a country that speaks english, has less than 50 million people and is not an island.

Write an if statement to help Sarah figure out if your country is right for her.
You will need to write a condition that accounts for all of Sarah's criteria. 
Take your time with this, and check part of the solution if necessary

If yours is the right country, log a string like this: 
'You should live in Portugal :)'. If not, log 'Portugal does not meet your criteria :(' */

if (language === 'Hindi' && population < 150 && country !== isIsland)
{
    console.log(`you should live in ${country}`);
}
else {
    console.log(`${country} does not meet your criteria`);
}

/*=========================================================================================================== */

// LECTURE: The switch Statement

/*
Use a switch statement to log the following string for the given 'language':
chinese or mandarin: 'MOST number of native speakers!'
spanish: '2nd place in number of native speakers'
english: '3rd place'
hindi: 'Number 4'
arabic: '5th most spoken language'
for all other simply log 'Great language too :D' */


switch (language)
{
    case 'chinese':
    case 'mandarin':
        console.log('MOST number of native speakers!');
        break;
    case 'spanish':
        console.log('2nd place in number of native speakers');
        break;
    case 'english':
        console.log('3rd place');
        break;
    case 'arabic':
        console.log('5th most spoken language');
        break;
    default:
        console.log('Great language too :D');
}

/*=========================================================================================================== */

// LECTURE: The Conditional (Ternary) Operator

/*
1. If your country's population is greater than 33 million, use the ternary operator
to log a string like this to the console: 'Portugal's population is above average'.
Otherwise, simply log 'Portugal's population is below average'. Notice how only
one word changes between these two sentences!
2. After checking the result, change the population temporarily to 13 and then to
130. See the different results, and set the population back to original
*/

population > 33 ? console.log(`${country}'s population is above average`) : console.log(`${country}'s population is below average`);

/*=========================================================================================================== */

/* SAYAN MANDAL 
CAPG ASSINMENT
JavaScript Fundamentals – Part 2 */

/*=========================================================================================================== */

//LECTURE: Functions

/* 1. Write a function called 'describeCountry' which takes three parameters:
'country', 'population' and 'capitalCity'. Based on this input, the
function returns a string with this format: 'Finland has 6 million people and its
capital city is Helsinki'
2. Call this function 3 times, with input data for 3 different countries. Store the
returned values in 3 different variables, and log them to the console */

function describeCountry(country, population, capitalcity)
{
    let string = `${country} has  ${population} million people and its capital city is ${capitalcity}`;
    return string;
}

console.log(describeCountry('India', 140, 'Delhi'));
console.log(describeCountry('India', 140, 'Delhi'));
console.log(describeCountry('India', 140, 'Delhi'));

/*=========================================================================================================== */

//LECTURE: Function Declarations vs. Expressions

/* 1. The world population is 7900 million people. Create a function declaration
called 'percentageOfWorld1' which receives a 'population' value, and
returns the percentage of the world population that the given population
represents. For example, China has 1441 million people, so it's about 18.2% of
the world population
2. To calculate the percentage, divide the given 'population' value by 7900
and then multiply by 100
3. Call 'percentageOfWorld1' for 3 populations of countries of your choice,
store the results into variables, and log them to the console
4. Create a function expression which does the exact same thing, called
'percentageOfWorld2', and also call it with 3 country populations (can be
the same populations) */

function percentageOfWorld1(population){
    let percentage = (population / 7900) * 100 ;
    return percentage.toFixed(1);
}

console.log(percentageOfWorld1(325))

const percentageOfWorld2 = (population) => {
  return (population / 7900) * 100
}

console.log(percentageOfWorld2(1441))

/*=========================================================================================================== */

// LECTURE: Arrow Functions

/* Recreate the last assignment, but this time create an arrow function called
'percentageOfWorld3' */

const percentageOfWorld2 = (population) => (population / 7900) * 100 ;
console.log(percentageOfWorld2(5000));

/*=========================================================================================================== */

// LECTURE: Functions Calling Other Functions

/*
1. Create a function called 'describePopulation'. Use the function type you
like the most. This function takes in two arguments: 'country' and
'population', and returns a string like this: 'China has 1441 million people,
which is about 18.2% of the world.'
2. To calculate the percentage, 'describePopulation' call the
'percentageOfWorld1' you created earlier
3. Call 'describePopulation' with data for 3 countries of your choice
*/

function describePopulation(country, population) {
    const percentage = percentageOfWorld1(population);
    return `${country} has ${population} million people, which is about ${percentage}% of the world`;
}

console.log(describePopulation('India', 140))


/*=========================================================================================================== */

// LECTURE: Introduction to Arrays

/* 1. Create an array containing 4 population values of 4 countries of your choice.
You may use the values you have been using previously. Store this array into a
variable called 'populations'
2. Log to the console whether the array has 4 elements or not (true or false)
3. Create an array called 'percentages' containing the percentages of the
world population for these 4 population values. Use the function
'percentageOfWorld1' that you created earlier to compute the 4
percentage values */

const populations = [140, 45, 128, 67]
console.log(populatios.length === 4);

const percentages = [4.2, 0.6, 1.6, 0.9]
console.log(percentageOfWorld1(populations[3]));

/*=========================================================================================================== */

//LECTURE: Basic Array Operations (Methods)

/* 1. Create an array containing all the neighbouring countries of a country of your
choice. Choose a country which has at least 2 or 3 neighbours. Store the array
into a variable called 'neighbours'
2. At some point, a new country called 'Utopia' is created in the neighbourhood of
your selected country. So add it to the end of the 'neighbours' array
3. Unfortunately, after some time, the new country is dissolved. So remove it from
the end of the array
4. If the 'neighbours' array does not include the country ‘Germany’, log to the
console: 'Probably not a central European country :D'
5. Change the name of one of your neighbouring countries. To do that, find the
index of the country in the 'neighbours' array, and then use that index to
change the array at that index position. For example, you can search for
'Sweden' in the array, and then replace it with 'Republic of Sweden'. */

const neighbours = ['Nepal', 'Afganistan', 'Bangladesh']
neighbours.push('PAK');
console.log(neighbours);

neighbours.pop()
console.log(neighbours);

if(!neighbours.includes('Germany'))
{
    console.log('Propably not a central European country :D');
}

neighbours[neighbours.indexOf('Bangladesh')] = 'Republic Bangladesh';
console.log(neighbours);

/*=========================================================================================================== */

// LECTURE: Introduction to Objects

/* 1. Create an object called 'myCountry' for a country of your choice, containing
properties 'country', 'capital', 'language', 'population' and
'neighbours' (an array like we used in previous assignments) */

const myCountry = {
    country: 'India',
    capital: 'Delhi',
    language: 'Hindi',
    population: 140,
    neighbours: ['Nepal', 'Afganistan', 'Bangladesh'],
}

console.log(myCountry.capital);
console.log(myCountry.country);
console.log(myCountry.language);
console.log(myCountry.population);
console.log(myCountry.neighbours);

/*=========================================================================================================== */

// LECTURE: Dot vs. Bracket Notation
/* 1. Using the object from the previous assignment, log a string like this to the
console: 'Finland has 6 million finnish-speaking people, 3 neighbouring countries
and a capital called Helsinki.'
2. Increase the country's population by two million using dot notation, and then
decrease it by two million using brackets notation */

console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language} speaking people, ${myCountry.neighbours} neighbouring countries
and a capital called ${myCountry.capital}. `
)

myCountry.population += 2;
myCountry['population'] -= 2;

/*=========================================================================================================== */

// LECTURE: Object Methods

/* 1. Add a method called 'describe' to the 'myCountry' object. This method
will log a string to the console, similar to the string logged in the previous
assignment, but this time using the 'this' keyword.
2. Call the 'describe' method
3. Add a method called 'checkIsland' to the 'myCountry' object. This
method will set a new property on the object, called 'isIsland'.
'isIsland' will be true if there are no neighbouring countries, and false if
there are. Use the ternary operator to set the property. */


/*=========================================================================================================== */

// LECTURE: Iteration: The for Loop

/* 1. There are elections in your country! In a small town, there are only 50 voters.
Use a for loop to simulate the 50 people voting, by logging a string like this to
the console (for numbers 1 to 50): 'Voter number 1 is currently voting' */

for(let i = 1; i <= 50; i++)
{
    console.log(`voter number ${i} is currently voting! `);
}

/*=========================================================================================================== */

// LECTURE: Looping Arrays, Breaking and Continuing

/* 1. Let's bring back the 'populations' array from a previous assignment
2. Use a for loop to compute an array called 'percentages2' containing the
percentages of the world population for the 4 population values. Use the
function 'percentageOfWorld1' that you created earlier
3. Confirm that 'percentages2' contains exactly the same values as the
'percentages' array that we created manually in the previous assignment,
and reflect on how much better this solution is */

const percentages2 = []

for (let i =0; i< population.length; i++)
{
    percentages2.push(percentageOfWorld1(population[i]));
}

console.log(percentages, percentages2);

/*=========================================================================================================== */

// LECTURE: Looping Backwards and Loops in Loops

/* 1. Store this array of arrays into a variable called 'listOfNeighbours'
[['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden',
'Russia']];
2. Log only the neighbouring countries to the console, one by one, not the entire
arrays. Log a string like 'Neighbour: Canada' for each country
3. You will need a loop inside a loop for this. This is actually a bit tricky, so don't
worry if it's too difficult for you! But you can still try to figure this out anyway😉 */

const listOfNeighbours = [ ['Canada', 'Mexico'],  ['Spain'], ['Norway', 'Sweden','Russia']];

for(let i = 0; i< listOfNeighbours.length; i++)
{
    for(let j =0; j<listOfNeighbours[i].length; j++)
    {
        console.log(`neighbors: ${listOfNeighbours[i][j]}`);
    }
}

/*=========================================================================================================== */

// LECTURE: The while Loop

/* 1. Recreate the challenge from the lecture 'Looping Arrays, Breaking and Continuing',
but this time using a while loop (call the array 'percentages3')
2. Reflect on what solution you like better for this task: the for loop or the while
loop? */

let rep = 1;
while(rep <= 10)
{
    console.log(`Lifting weights repitition ${rep} `);
    rep++;
}