const showName = (req, res) => {
    const name = req.cookies.name;

    // get 版本
    if (!name) {
        return res.send(`
        <form action="/trackName" method="GET">
            <label for="name">請輸入名稱：</label>
            <input type="text" id="name" name="name">
            <button type="submit">提交</button>
        </form>
      `);
        // return res.redirect("/");
    }

    // post 版本
    // if (!name) {
    //     return res.send(`
    //     <form action="/trackName" method="POST">
    //         <label for="name">請輸入名稱：</label>
    //         <input type="text" id="name" name="name">
    //         <button type="submit">提交</button>
    //     </form>
    //   `);
    // }

    return res.status(200).send(`我的名字是${name}。`);
}

module.exports = showName;
