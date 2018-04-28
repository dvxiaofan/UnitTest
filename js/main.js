function add(x, y) {
    var result;

    if ((typeof x && typeof y) !== 'number') {
        throw new Error('Params must be a number.');
    }

    result = x + y;

    if (parseInt(result) !== result) {
        result = parseFloat(result.toFixed(1));
    }

    return result;
}
console.log(`Result is ${add(0.3, 6)}`);

