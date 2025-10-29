// ⚓ AMD Modules


// 🎯 Defining a Module in AMD
// To define a module with AMD, you can use define() 
// and pass in the module’s dependencies and a factory 
// function that returns an object with the module’s exports:

// Defining a module with dependencies
define(['dependency1', 'dependency2'], function(dep1, dep2) {
  return {
    functionName: function() {
      console.log('This is an AMD module');
    }
  };
});

require(['myModule'], function (myModule) {
  myModule.functionName(); // Output: "This is an AMD module"
});
