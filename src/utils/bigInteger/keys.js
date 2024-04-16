const bigInt = require('big-integer')

const findPrimeWithLength = (n) => {

}

const genNumWithLength = (n) => {
    return bigInt.randBetween(bigInt(10 ** n), bigInt(10 ** (n + 1) - 1))
}

module.exports = {
    genNumWithLength: function (n) {
        return genNumWithLength(n);
    }
}
