const getData = (req, res) => {
    let number = req.query.number;
    if (!number) {
        return res.status(400).send("Lack of Parameter");
    } else if (isNaN(Number(number))) {
        return res.status(400).send("Wrong Parameter");
    } else {
        number = +number;
        const result = number * (number + 1) / 2;
        return res.status(200).send(`${result}`);
    }
}

module.exports = getData;