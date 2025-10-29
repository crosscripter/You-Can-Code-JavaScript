// Bitwise Expressions

//#region 
const bits = n => (n).toString(2).padStart(4, '0');
console.logBits = (t, a, b, o, x) => console.log(`${t}:
${(o == '~' ? `~  ${bits(a)} (${a})` : '')}
${(o !== '~' && a ? `${' '.repeat(o.length + 1)}${bits(a)} (${a})` : '')}
${(o !== '~' && b ? `${o} ${bits(b)} (${b})` : '')}
${'='.repeat(7)}
${' '.repeat(o.length + 1)}${bits(x)} (${x})
`)
//#endregion


// Bitwise AND (&) and Bitwise OR (|)
const a = 5; // Binary: 0101
const b = 3; // Binary: 0011

// Bitwise AND
const andResult = a & b;

// 0101 & 0011 = 0001 (1 in decimal)
console.log(`Bitwise AND result: ${andResult}`);
console.logBits('5 & 3', 5, 3, '&', andResult);

// Bitwise OR
const orResult = a | b;

// 0101 | 0011 = 0111 (7 in decimal)
console.log(`Bitwise OR result: ${orResult}`);
console.logBits('5 | 3', 5, 3, '|', orResult);


// Left Shift (<<) and Right Shift (>>)
const num = 5; // Binary: 0101

// Left Shift: Shifts bits to the left by 1 position
const leftShift = num << 1;

// 0101 << 1 = 1010 (10 in decimal)
console.log(`Left Shift result: ${leftShift}`);
console.logBits('5 << 1', 5, 1, '<<', leftShift);

// Right Shift: Shifts bits to the right by 1 position
const rightShift = num >> 1;

// 0101 >> 1 = 0010 (2 in decimal)
console.log(`Right Shift result: ${rightShift}`);
console.logBits('5 >> 1', 5, 1, '>>', rightShift);


// Bitwise NOT (~) and XOR (^)

const x = 5; // Binary: 0101

// Bitwise NOT: Inverts each bit
const notResult = ~x;

// ~0101 = 1010 (two's complement gives -6 in decimal)
console.log(`Bitwise NOT result: ${notResult}`);
console.logBits('~5', 5, null, '~', notResult);
/*  ~  0101 (5)
    =======
       -110 (-6) */

// Bitwise XOR: Compares bits and returns 1 if bits are different
const y = 3; // Binary: 0011
const xorResult = x ^ y;

// 0101 ^ 0011 = 0110 (6 in decimal)
console.log(`Bitwise XOR result: ${xorResult}`);
console.logBits('5 ^ 3', 5, 3, '^', xorResult);
/*  0101 (5)
  ^ 0011 (3)
  =======
    0110 (6) */
