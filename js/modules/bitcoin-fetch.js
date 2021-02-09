export default function initFetchBitcoin() {
  fetch('https://blockchain.info/ticker')
    .then((response) => response.json())
    .then((json) => {
      const btcPrice = document.querySelector('.btc-preco');
      const donate = 1000 / json.BRL.sell;
      btcPrice.innerText = donate.toFixed(4);
    })
    .catch((erro) => console.log(Error(erro)));
}
