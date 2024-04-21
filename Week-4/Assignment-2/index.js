function ajax(src, callback) {
    // your code here
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            callback(xhr.responseText);
        }
    };
    xhr.open("GET", src);
    xhr.send();
}

function render(data) {
    // your code here
    // document.createElement() and appendChild() methods are preferred.

    const products = document.querySelector(".products");
    data = JSON.parse(data);

    data.forEach((item) => {
        const newUl = document.createElement("ul");
        for (key in item) {
            console.log(key)
            const newLi = document.createElement("li");
            const newContent = document.createTextNode(`${key}: ${item[key]}`);
            newLi.appendChild(newContent);
            newUl.appendChild(newLi);
        }
        products.appendChild(newUl);
        const newHr = document.createElement("hr");
        products.appendChild(newHr);
    })


    // const products = document.querySelector(".products");
    // data = JSON.parse(data);

    // let ulsStr = data.map((item) => {
    //     let lisStr = Object.keys(item).map((key) => `<li>${key}: ${item[key]}</li>`).join("");
    //     return `<ul>${lisStr}</ul>`
    // }).join("<hr>");

    // products.innerHTML = ulsStr;
}

ajax(
    'https://remote-assignment.s3.ap-northeast-1.amazonaws.com/products',
    function (response) {
        render(response);
    }
); // you should get product information in JSON format and render data in the page

