'use strict';
const map = require("lodash/map");
const sum = require("lodash/sum");

const loss = 0;
const draw = 3;
const win = 6;
const rock = 1;
const paper = 2;
const scissors = 3;


// Part 1
// ======

const part1 = input => {
  let rounds = input.split(/\n/);

  let roundsScore = [];
  map(rounds, (round) => {
    switch (round) {
      case 'A X': // Rock x Rock
        roundsScore.push(rock + draw);
        break;
      case 'A Y': // Rock x Paper
        roundsScore.push(paper + win);
        break;
      case 'A Z': // Rock x Scissors
        roundsScore.push(scissors + loss);
        break;
      case 'B X': // Paper x Rock
        roundsScore.push(rock + loss);
        break;
      case 'B Y': // Paper x Paper
        roundsScore.push(paper + draw);
        break;
      case 'B Z': // Paper x Scissors
        roundsScore.push(scissors + win);
        break;
      case 'C X': // Scissors x Rock
        roundsScore.push(rock + win);
        break;
      case 'C Y': // Scissors x Paper
        roundsScore.push(paper + loss);
        break;
      case 'C Z': // Scissors x Scissors
        roundsScore.push(scissors + draw);
        break;
    }
  });

  return sum(roundsScore);
}

// Part 2
// ======

const part2 = input => {
  let rounds = input.split(/\n/);

  let roundsScore = [];
  map(rounds, (round) => {
    switch (round) {
      case 'A X': // Rock x ___ lose
        roundsScore.push(scissors + loss);
        break;
      case 'A Y': // Rock x ___ draw
        roundsScore.push(rock + draw);
        break;
      case 'A Z': // Rock x ___ win
        roundsScore.push(paper + win);
        break;
      case 'B X': // Paper x ___ lose
        roundsScore.push(rock + loss);
        break;
      case 'B Y': // Paper x ___ draw
        roundsScore.push(paper + draw);
        break;
      case 'B Z': // Paper x ___ win
        roundsScore.push(scissors + win);
        break;
      case 'C X': // Scissors ___ lose
        roundsScore.push(paper + loss);
        break;
      case 'C Y': // Scissors x ___ draw
        roundsScore.push(scissors + draw);
        break;
      case 'C Z': // Scissors x ___ win
        roundsScore.push(rock + win);
        break;
    }
  });

  return sum(roundsScore);
}

module.exports = { part1, part2 }
