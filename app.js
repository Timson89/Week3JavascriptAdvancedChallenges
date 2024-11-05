/*
Timothy Olofson
Frontend Simplified(FES)
Week3: Javascript
Lesson: Problem Solving - Advanced Challenges
*/



// P.E.M.D.A.S.



// Q1. Display A Star(*) for Each Full Star And A Full-Stop(.) for Each Half-Star Rating.

function showRating(rating) {

  // * initialize An empty string

  let ratings = "";

  // * Loop through the rounded down rating

  for (let i = 0; i < Math.floor(rating); ++i) {

    // * Add A Star(*) for every iteration

    ratings = ratings + "*";

    // * Add A space if not the last iteration

    if (i !== Math.floor(rating) - 1) {

      ratings = ratings + " ";
    }
  }

  // * Add A Full-Stop(.) if not An integer

  if (!Number.isInteger(rating)) {

    ratings += " .";
  }

  // * return it

  return ratings;
}
console.log(showRating(2.5)); // -> "* * ."


// --------------------------------------------------------------------------------------------------------------


// Q2. Sort by Lowest to Hightest price.

function sortLowToHigh(arr) {

  // *** 'reverse' Array ***

  // return arr.reverse()

   // *** 'sort' Array ***

   return arr.sort((a, b) => a - b);
}
console.log(sortLowToHigh([4, 3, 2, 1, 0])); // -> [0, 1, 2, 3, 4]


// Q3. Sort by Highest To Lowest price.

function HighToLow(arr) {

  return arr.sort((a, b) => b.price - a.price);
}
console.log(HighToLow([
  
  {id: 1, price: 50},
  {id: 2, price: 30},
  {id: 3, price: 60},
  {id: 4, price: 10}])); // -> [{id: 3, price: 60}, {id: 1, price: 50}, {id: 2, price: 30}, {id: 4, price: 10}]


// --------------------------------------------------------------------------------------------------------------


  // Q4. Promises / API's / Fetch / Async / Await

  async function postsByUser(userId) {

    // fetch("https://jsonplaceholder.typicode.com/posts").then(response => console.log(response))

    const promise = await fetch("https://jsonplaceholder.typicode.com/posts");

    const result = await promise.json();

    const posts = result.filter(element => element.userId === userId);

    console.log(posts);
  }
  postsByUser(4);


// --------------------------------------------------------------------------------------------------------------


// Q5. Return the First 6 Incomplete todo's from the API's List.

async function firstSixIncomplete(completed) {

  const promise = await fetch("https://jsonplaceholder.typicode.com/todos");

  const result = await promise.json();

  const incompleteTasks = result.filter(elem => !elem.completed).slice(0, 6);

  console.log(incompleteTasks);
}
firstSixIncomplete(6);