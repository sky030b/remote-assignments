const form = document.querySelector("form");
const btn = document.querySelector(".btn");
const result = document.querySelector(".result-value");

const getData = () => {
    const inputNumber = form[0].value;
    axios.get(`http://localhost:3000/data?number=${inputNumber}`)
    .then((res) => {
        result.textContent = res.data;
    })
}

btn.addEventListener("click", (e) => {
    e.preventDefault();
    getData();
})
