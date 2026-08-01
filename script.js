for (keys in curr) {
    let x = `<option class = "${keys}" value = ${keys} >${curr[keys]} ( ${keys} )</option>`
    document.querySelector("#From").insertAdjacentHTML("beforeend", x)
    document.querySelector("#To").insertAdjacentHTML("beforeend", x)
}
document.querySelector(".convert").addEventListener("click", () => {
    let from = document.querySelector("#From").value;
    let to = document.querySelector("#To").value;
    let am = document.querySelector("#Ammount").value;
    let a = fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${from}.json`).then((data) => data.text()).then((res) => {
        let y = JSON.parse(res);
        let z = y[from]
        let k = z[to] * am
        
        let html = `${am} ${from} = ${k} ${to}`
      document.querySelector(".result").innerHTML = html;
    })
})

document.querySelector(".swapbtn").addEventListener("click", () => {
    const fromSelect = document.querySelector("#From");
    const toSelect = document.querySelector("#To");

    const temp = fromSelect.value;
    fromSelect.value = toSelect.value;
    toSelect.value = temp;
});