const getData = (req, res) => {
    let number = req.query.number;
    if (!number) {
        return res.status(400).send("Lack of Parameter");
    } else if (isNaN(Number(number)) || Number(number) < 0) {
        return res.status(400).send("Wrong Parameter");
    } else {
        number = +number;
        const result = (Math.abs(number) + 1) * number / 2;
        return res.status(200).send(`${result}`);

        // Think about what will happen when N is very large.
        // 如果使用迴圈來計算等差級數的話，執行程式的時間會隨著指定數字變大而變大，時間複雜度為 O(N)；
        // 但如果使用等差級數的數學公式的話，執行程式的時間就會是 O(1)
    }
}

module.exports = getData;