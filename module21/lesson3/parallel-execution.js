// Parallel Data Fetching 🐕

// In the example below, we use async.parallel 
// to simulate parallel execution, processing 
// multiple URLs without waiting for each task 
// to finish before moving to the next.

// import the async package to use the parallel() function later
const async = require('async');


const urls = [
  'https://jsonplaceholder.typicode.com/todos/1',
  'https://jsonplaceholder.typicode.com/todos/2'
];

// Fetch data in parallel at the same time!
async.parallel(
  // NOTE: We have to map our urls to async tasks to do in parallel!
  urls.map(url => async () => {
    const response = await fetch(url);
    return await response.json();
  }),
  // Handle error and results
  (err, results) => console.log('Data fetched in parallel:', results)
);

// Output:
// Data fetched in parallel: [
//   { userId: 1, id: 1, title: 'delectus aut autem', completed: false },
//   { userId: 1, id: 2, title: 'quis ut nam facilis et officia qui', completed: false }
// ]
