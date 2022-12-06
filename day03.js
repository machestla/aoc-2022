'use strict'

const map = require("lodash/map");
const chunk = require("lodash/chunk");
const intersection = require("lodash/intersection");
const flatten = require("lodash/flatten");
const sum = require("lodash/sum");

const getLettersCorrespondingNumberFromArray = (array) => {
  return map(array, (letter) => {
    if (letter === letter.toLowerCase()) {
      return letter.charCodeAt(0) - ('a'.charCodeAt(0) - 1);
    }
    return letter.charCodeAt(0) - ('A'.charCodeAt(0) - 27);
  })
}

const isMultipleOfThree = (number) => {
  const div = parseInt(number / 3);

  return number === div * 3;
};

// Part 1
// ======

const part1 = input => {
  let backpacks = input.split(/\n/);

  backpacks = map(backpacks, (backpack) => {
    return chunk(backpack, backpack.length / 2);

  })

  let errors = flatten(map(backpacks, (backpack) => {
    return intersection(backpack[0], backpack[1])
  }))

  return sum(getLettersCorrespondingNumberFromArray(errors));
}

// Part 2
// ======

const part2 = input => {
  let backpacks = input.split(/\n/);
  let badges = [];

  for (let i = 3; i <= backpacks.length; i++) {
    if (isMultipleOfThree(i)) {
      let firstBackpack = flatten(chunk(backpacks[i - 3]));
      let secondBackpack = flatten(chunk(backpacks[i - 2]));
      let thirdBackpack = flatten(chunk(backpacks[i - 1]));
      badges = [...badges, intersection(firstBackpack, secondBackpack, thirdBackpack)[0]];
    }
  }

  return sum(getLettersCorrespondingNumberFromArray(badges));
}

module.exports = { part1, part2 }
