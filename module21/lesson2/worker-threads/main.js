// main.js

// Import worker_threads module and types
const { Worker, isMainThread } = require('worker_threads');

// Require join for some file path building
const { join } = require('path');

// Check to see if this is the main thread
if (isMainThread) {
  // Start a new worker passing some data
  console.log('Main thread: Starting worker...');

  // NOTE: __dirname a built in value in NodeJS holding the current directory
  const workerPath = join(__dirname, 'worker.js');
  console.log('Launching new worker from', workerPath);
  const worker = new Worker(workerPath, { workerData: 5 });

  // When a worker receives events handle results:
  worker.on('message', result => console.log(`Worker result: ${result}`));
  worker.on('error', err => console.error(`Worker error: ${err}`));
  worker.on('exit', code => console.log(`Worker exited with code: ${code}`));
}