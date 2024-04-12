const getData = (req, res) => {
    let number = req.query.number;
    if (!number) {
        return res.status(400).send("<h1>Lack of Parameter</h1>");
    } else if (isNaN(Number(number))) {
        return res.status(400).send("<h1>Wrong Parameter</h1>");
    } else {
        number = +number;
        const result = number * (number + 1) / 2;
        return res.status(200).send(`<h1>${result}</h1>`);
    }
}

module.exports = getData;