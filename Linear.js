const ACTIVITIES = [
  {name: 'side-project', time: 10, xp: 20},
  {name: 'algorithms', time: 3, xp: 5},
  {name: 'networking', time: 1, xp: 0.5},
  {name: 'exercise', time: 2, xp: 1.5},
  {name: 'systems design', time: 4, xp: 4},
  {name: 'writing blog post', time: 3, xp: 4}
];

/**
* Returns array of type string with names of activites that maximize XP */
@param {number} time

const findJob = time => {
  let maxVal = -Infinity;
  let max = null;

  // recursively find all combinations of activites
  // if the total XP of any combination is greater than max, store in closure
  const findCombos = (items, prefix = []) => {
    for(let i = 0; i < items.length; i++) {
      const combo = [...prefix, items[i]];
      const xp = totalXp(combo);
      if(xp > maxVal && totalTime(combo) <= time) {
        maxVal = xp;
        max = combo;
      }
      findCombos(items.slice(i + 1), combo);
    }
  };

  const totalXp = acts => acts.reduce((total, act) => total + act.xp, 0);
  const totalTime = acts => acts.reduce((total, act)) => total + act.time, 0);

  findCombos(activites);
  return max.map(act => act.name);
};

// The time complexity of this solution is O(n! * n)
// The space complexity is O(n! * n)

console.log(findJob(10, ACTIVITIES));
// => [ 'algorithms', 'systems design', 'writing blog post']
