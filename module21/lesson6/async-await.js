// ⏰ Async / Await 


// Promise-based Code:
//#region 
const url = 'https://jsonplaceholder.typicode.com/todos/1';
const fetchData = async () => (await fetch(url)).json();
const processData = async data => JSON.stringify(data, null, 4);
const displayResult = result => console.log('Result:', result);
//#endregion

fetchData()
  .then(data => processData(data))
  .then(result => displayResult(result))
  .catch(error => console.error(error));


// Async/Await Code:

async function handleData() {
  try {
    const data = await fetchData();
    const result = await processData(data);
    displayResult(result);
  } catch (error) {
    console.error(error);
  }
}

// handleData();


// Generator functions (how async/await works under the hood)

// NOTE: the star after function (function*) that shows it's a generator!
function* generator() {

  // Yield control and "suspend" the generator's execution
  // yield is like return but it returns back to the last line yielded from later
  const data = yield fetchData();
  const result = yield processData(data);
  yield displayResult(result);
}

// Manually executing our awaitable sections using generator!
const program = generator();
program.next({ });
program.next({ });
program.next("{...}");


// A More Complex Async/Await Example 📡

//#region 
const fetchData1 = async () => (await fetch(url)).json()
const fetchData2 = async () => (await fetch(url)).json()
const displayResults = (...results) => results.forEach(displayResult);
//#endregion

async function fetchAndProcessMultipleData() {
  try {
    const [data1, data2] = await Promise.all([
      fetchData1(),
      fetchData2()
    ]);

    const result1 = await processData(data1);
    const result2 = await processData(data2);
    displayResults(result1, result2);

  } catch (error) {
    console.error('Error fetching or processing data:', error);
  }
}

fetchAndProcessMultipleData();
