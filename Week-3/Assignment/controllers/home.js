const sayHello = (req, res) => {
    return res.status(200).send('<h1>Hello, My Server!</h1>');
}

module.exports = sayHello;