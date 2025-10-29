// Test-Driven Development (TDD)


/// Write the test first BEFORE writing the reverse() function
test('Reverses a string', () => {
  const reversed = reverse('hello world');
  expect(reversed).toBe('dlrow olleh');
});

/// Bare minimum: reverse() must be a function
// let reverse = function() { };

/// Next step: reverse(string) must take a single string
// reverse = (string) => string;

/// Next step: reverse(string) must return 'dlorw olleh' when passed a string
// reverse = (string) => 'dlrow olleh';
// This *passes* (because we hard coded the expected result!)

/// BUT now any other test will fail 
// test('Reverses any string given', () => expect(reverse('earth')).toBe('htrae'));

/// Let's fix this by *actually* trying to reverse a string
/// Let's split it by letters and unshift them backwards into
/// an array and then join them back into a string!

// reverse = string => {
//   const letters = string.split('');
//   const reversed = [];

//   for (let i = 0; i < letters.length; i++) {
//     reversed.unshift(letters[i]);
//   }

//   const reversedString = reversed.join('');
//   return reversedString; 
// };

/// Now let's write a bunch of edge cases!
// test('reverses empty strings', () => expect(reverse('')).toBe(''));
// test('reverses blank strings', () => expect(reverse('     ')).toBe('     '));
// test('reverses text strings', () => expect(reverse('Hello, World!')).toBe('!dlroW ,olleH'));

/// Complex test for implementation
// const longString = `
// This is a really looooong string.
// Like really LOOONG! Seriously is this
// thing *still* going?! Oh, okay it's done
// now, thankfully.`;

// test(
//   'double reversed strings equals original', 
//   () => expect(reverse(reverse(longString))).toBe(longString)
// );

/// Now we can refactor and improve our algorithm
/// if we break something we'll know immediately because of
/// our previous passing tests! This is the power of TDD!

/// Let's take a more functional approach to reversal:
/// Let's split the string into letters and reduce them using
/// concatenation only in reverse!
// reverse = string => string.split('').reduce((a, b, s) => b + a, '');
/// All tests still pass which means our function still works the same way!

/// Now we can further refactor and refine our algorithm.
/// This is the simplest way to reverse a string in JS:
// reverse = string => string.split('').reverse().join('')
