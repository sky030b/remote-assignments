function count(input) {
    // your code here
    const data = {};
    input.forEach((item) => {
        // if (data[item]) {
        //     data[item] += 1;
        // } else {
        //     data[item] = 1;
        // }

        data[item] ? data[item] += 1 : data[item] = 1;
    })
    return data;
}

let input1 = ["a", "b", "c", "a", "c", "a", "x"];
console.log(count(input1));
// should print {a:3, b:1, c:2, x:1}


function groupByKey(input) {
    // your code here
    const data = {};
    input2.forEach((item) => {
        // if (data[item.key]) {
        //     data[item.key] += item.value;
        // } else {
        //     data[item.key] = item.value;
        // }

        data[item.key] ? data[item.key] += item.value : data[item.key] = item.value;
    })
    return data;
}

let input2 = [
    { key: "a", value: 3 },
    { key: "b", value: 1 },
    { key: "c", value: 2 },
    { key: "a", value: 3 },
    { key: "c", value: 5 },
];
console.log(groupByKey(input2));
// should print {a:6, b:1, c:7}
