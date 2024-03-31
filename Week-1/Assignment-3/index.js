function countAandB(input) {
    let count = 0;

    input.forEach((item) => {
        if (item === 'a' || item === 'b') {
            count++;
        }
    });

    return count;
}

function toNumber(input) {
    const letterToNumber = {
        'a': 1,
        'b': 2,
        'c': 3,
        'd': 4,
        'e': 5
    };

    let result = input.map((item) => letterToNumber[item])

    return result;
}
