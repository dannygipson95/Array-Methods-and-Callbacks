import { fifaData } from './fifa.js';
console.log(fifaData);


// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */
const final2014 = fifaData.filter((game) =>{
     return game.Stage === 'Final' && game.Year === 2014;
 })
//  //a)
//  console.log(final2014[0]['Home Team Name']);

//  //b) 
//  console.log(final2014[0]['Away Team Name']);
//  //c)
// console.log(final2014[0]['Home Team Goals']);
// //d)
// console.log(final2014[0]['Away Team Goals']);
// //e)
// console.log(final2014[0]['Winner']);

/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {
const finalsGames = data.filter((games)=>{
    return games.Stage === 'Final';
})
return finalsGames;
};
//  console.log(getFinals(fifaData));

/* Task 3: Impliment a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(cb, data) {    
const finalYears = cb(data).map((item)=>{
    return item.Year;
});
return finalYears;
};

// console.log(getYears(getFinals, fifaData));

/* Task 5: Impliment a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(cb, data) {
    const winners = [];
    cb(data).map((item)=>{
        if (item['Home Team Goals'] > item['Away Team Goals']){
            winners.push(item['Home Team Name'])
        } else {
            winners.push(item['Away Team Name'])
        };
    });
    return winners;
};

console.log(getWinners(getFinals, fifaData));

/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getAllWinners(cbWinners, cbYears) {
    const champions = [];
    const championYear = [];
    cbWinners(getFinals, fifaData).filter((item)=>{
        champions.push(item.Stage === 'Final');
    });
    cbYears(getFinals, fifaData).filter((item)=>{
        championYear.push(item.Stage === 'Final');
    });
    champions.forEach((item) =>{
        return `In ${championYear[item]}, ${champions} won the world cup!`;
    })
};

// console.log(getAllWinners(getWinners, getYears));

/* Task 7: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(data, teamInitials) {
    const wins = [];
    

};

getCountryWins();


/* Task 8: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Task 9: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();


/* Task 10: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(/* code here */) {

    /* code here */

};

getAverageGoals();


/// STRETCH 🥅 //

/* Use the space below to work on any stretch goals of your chosing as listed in the README file. */