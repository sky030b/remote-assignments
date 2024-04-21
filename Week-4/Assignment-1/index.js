// A
function delayedResult(n1, n2, delayTime, callback) {
    // your code here
    setTimeout(() => { callback(n1 + n2) }, delayTime)
}

delayedResult(4, 5, 3000, function (result) {
    console.log(result);
}); // 9 (4+5) will be shown in the console after 3 seconds

delayedResult(-5, 10, 2000, function (result) {
    console.log(result);
}); // 5 (-5+10) will be shown in the console after 2 seconds


// B
function delayedResultPromise(n1, n2, delayTime) {
    // your code here
    return new Promise((resolve, reject) => {
        setTimeout(() => { resolve(n1 + n2) }, delayTime)
    })
}

delayedResultPromise(4, 5, 3000).then(console.log);
// 9 (4+5) will be shown in the console after 3 seconds


// C
async function main() {
    // your code here, you should call delayedResultPromise here and get the result using async/await.
    try {
        console.log(await delayedResultPromise(4, 5, 3000));
        // const res = await delayedResultPromise(4, 5, 3000);
        // console.log(res);
    } catch (error) {
        console.log(error);
    }
}
main(); // result will be shown in the console after <delayTime> seconds


// ==============================測試用==============================
// // C
// async function main() {
//     // your code here, you should call delayedResultPromise here and get the result using async/await.
//     try {
//         const res = await delayedResultPromise(4, 5, 3000);
//         console.log(2, res);
//     } catch (error) {
//         console.log(error);
//     }
// }
// main(); // result will be shown in the console after <delayTime> seconds


// // B
// function delayedResultPromise(n1, n2, delayTime) {
//     // your code here
//     return new Promise((resolve, reject) => {
//         setTimeout(() => { resolve(n1 + n2) }, delayTime)
//     })
// }

// delayedResultPromise(4, 5, 3000).then((res) => {console.log(1,res)});
// // 9 (4+5) will be shown in the console after 3 seconds


// // A
// function delayedResult(n1, n2, delayTime, callback) {
//     // your code here
//     setTimeout(() => { callback(n1 + n2) }, delayTime)
// }

// delayedResult(4, 5, 3000, function (result) {
//     console.log(0.1, result);
// }); // 9 (4+5) will be shown in the console after 3 seconds

// delayedResult(-5, 10, 2000, function (result) {
//     console.log(0.2, result);
// }); // 5 (-5+10) will be shown in the console after 2 seconds
