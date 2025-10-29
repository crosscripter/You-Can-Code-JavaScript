// worker.js (Worker Thread) 
const { parentPort, workerData } = require('worker_threads');

// We are in a worker thread not the main one here

// Get the worker data from the main thread (ie. shared thread-safe data)
const number = workerData;

// Do some work and calculate the result
const result = number * number; // Simple CPU-intensive operation

// Result is then posted as a message on the parent thread's port
parentPort.postMessage(result); // Send result back to main thread
