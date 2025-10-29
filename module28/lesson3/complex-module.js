// Module to mock implementation of

const complexFunction = (a, b, c) => {
    // Some intense operation
    for (let i = 0; i < 1_000_000; i++) {
        a = b * c + a;
    }
    return a ** b + c;
}

module.exports = { complexFunction };
