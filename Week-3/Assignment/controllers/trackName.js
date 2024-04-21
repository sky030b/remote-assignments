const trackName = (req, res) => {
    const name = req.query.name; // get 版本
    // const name = req.body.name;  // post版本

    if (name) {
        res.cookie("name", name);
    }

    return res.redirect("/myName");
}

module.exports = trackName;
