export default function fetchBitcoin(url, target) {
  fetch(url)
    .then((response) => response.json())
    .then((json) => {
      const btcPrice = document.querySelector(target);
      const donate = 1000 / json.BRL.sell;
      btcPrice.innerText = donate.toFixed(4);
    })
    .catch((erro) => console.log(Error(erro)));
}
