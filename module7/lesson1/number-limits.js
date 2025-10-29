
// Max and Min Safe Integers

/*
The maximum safe integer in JavaScript is 2^53 - 1
represented by Number.MAX_SAFE_INTEGER 
(that's 9,007,199,254,740,991 for non-scientists!)

and the minimum is -Number.MAX_SAFE_INTEGER. 
Numbers outside this range can cause overflow or underflow, 
leading to inaccurate calculations.
*/

let maxInt = Number.MAX_SAFE_INTEGER;
console.log(maxInt + 1 === maxInt + 2); // 🤯 Outputs: true


/* Max and Min Floating-Point Values
For floats, JavaScript defines the largest and smallest 
representable numbers using Number.MAX_VALUE and Number.MIN_VALUE

Number.MAX_VALUE: 1.7976931348623157e+308
Number.MIN_VALUE: 5e-324

Just so you get how large a number that is…

179,769,313,486,231,570,814,527,423,731,704,356,798,070,567,
525,844,996,598,917,476,803,157,260,780,028,538,760,589,558,
632,766,878,171,540,458,953,514,382,464,234,321,326,889,464,
182,768,467,546,703,537,516,986,049,910,576,551,282,076,245,
490,090,389,328,944,075,868,508,455,133,942,304,583,236,903,
222,948,165,808,559,332,123,348,274,797,826,204,144,723,168,
738,177,180,919,299,881,250,404,026,184,124,858,368

That's 10^308 or a 1 followed by 308 digits! 🤯 
Values larger than MAX_VALUE result in Infinity
Values smaller than MIN_VALUE underflow to 0.
*/
console.log(BigInt(Number.MAX_VALUE).toString());

// Anything past this value and you have Infinity
let bigFloat = Number.MAX_VALUE * 2;  // Infinity
console.log(bigFloat);


// Scientific Notation
let bigNum = 1.23e6;  // 1.23 * 10^6 or 1,230,000
let smallNum = 1.23e-4;  // 4.56 * 10^-4 or 0.000456
console.log(bigNum);
console.log(smallNum);


// BigInt for HUGE Numbers
let bigInteger = BigInt("9007199254740992");
console.log(bigInteger + 1n);
