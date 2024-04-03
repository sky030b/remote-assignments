function avg(data) {
    // your code here
    let total = 0;
    // for (product of data.products) total += product.price;

    // for (product of data.products) { total += product.price };

    for (product of data.products) {
        total += product.price
    };

    // data.products.forEach((product) => total += product.price);

    // const total = data.products.reduce((acc, cur) => acc + cur.price, 0);
    // console.log(total)

    const answer = total / data.size;
    return answer;
}
console.log(
    avg({
        size: 3,
        products: [
            {
                name: 'Product 1',
                price: 100,
            },
            {
                name: 'Product 2',
                price: 700,
            },
            {
                name: 'Product 3',
                price: 250,
            },
        ],
    })
); // should print the average price of all products