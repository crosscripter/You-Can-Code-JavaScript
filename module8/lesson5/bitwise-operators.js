/* Bitwise Operators
=====================================================================
Operator Description    Example     Binary Operation       Result
&        AND            5 & 3       0101 & 0011 = 0001     1
|        OR             5 | 3       0101 | 0011 = 0111     7
^        XOR            5 ^ 3       0101 ^ 0011 = 0110     6
~        NOT           ~5           ~0101 = 1010 (2comp)   -6
<<       SHL            5 << 1      0101 << 1 = 1010       10
>>       SHR            5 >> 1      0101 >> 1 = 0010       2
>>>      SHR Unsigned  -5 >>> 1     (1111...1011) >>> 1    2147483645 
=====================================================================
*/

// AND (&) - Sets each bit to 1 if both are 1
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

let x;
x = 5 & 3; // 1
console.logBits('5 & 3', 5, 3, '&', x);

// OR (|) - Sets each bit to 1 if one is 1
x = 5 | 3; // 7
console.logBits('5 | 3', 5, 3, '|', x);

// XOR (^) - Sets bit to 1 if only one is 1
x = 5 ^ 3; // 6
console.logBits('5 ^ 3', 5, 3, '^', x);

// NOT (~) - Inverts all the bits
x = ~5; // -6
console.logBits('~5', 5, null, '~', x);

// SHL (<<) - Shifts bits to the left
x = 5 << 1; // 10
console.logBits('5 << 1', 5, 1, '<<', x);

// SHR (>>) - Shifts bits to the right 
x = 5 >> 1; // 2
console.logBits('5 >> 1', 5, 1, '>>', x);

// SHR (Unsigned) (>>>) - Shifts bits to the right (disregards sign bit) 
x = -5 >>> 1; // 2147483645
console.logBits('-5 >>> 1', -5, 1, '>>>', x);
