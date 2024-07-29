module.exports = function reverse (n) {
    const newN = Math.abs(n)
    const elem = newN.toString().split('');
    return (elem.reverse().join(''));
}
