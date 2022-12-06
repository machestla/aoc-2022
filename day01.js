'use strict';
const map = require("lodash/map");
const remove = require("lodash/remove");

// Part 1
// ======

const part1 = input => {
  let allCalories = input.split(/\n/);

  let caloriesPerElves = [];
  let totalCaloriesOfNewElf = 0;
  map(allCalories, (calories) => {
    if (calories === '') {
      caloriesPerElves.push(totalCaloriesOfNewElf);
      totalCaloriesOfNewElf = 0;
    } else {
      totalCaloriesOfNewElf = totalCaloriesOfNewElf + parseFloat(calories);
    }

  })
  const ElfWithTheMostOfCalories = Math.max.apply(Math, caloriesPerElves);

  return ElfWithTheMostOfCalories;
}

// Part 2
// ======

const part2 = input => {
  let allCalories = input.split(/\n/);

  let caloriesPerElves = [];
  let totalCaloriesOfNewElf = 0;
  map(allCalories, (calories) => {
    if (calories === '') {
      caloriesPerElves.push(totalCaloriesOfNewElf);
      totalCaloriesOfNewElf = 0;
    } else {
      totalCaloriesOfNewElf = totalCaloriesOfNewElf + parseFloat(calories);
    }

  })

  let totalCaloriesFromTopThree = 0;
  for (let i = 0; i < 3; i++) {
    let caloriesFromTheNewTopOne = Math.max.apply(Math, caloriesPerElves);
    totalCaloriesFromTopThree = totalCaloriesFromTopThree + caloriesFromTheNewTopOne;
    caloriesPerElves = remove(caloriesPerElves, (calories) => { return calories != caloriesFromTheNewTopOne });
  };
  return totalCaloriesFromTopThree;
}

module.exports = { part1, part2 }
