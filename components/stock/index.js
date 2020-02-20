const alpaHeader = new Headers({
  'Content-Type': 'application/x-www-form-urlencoded',
  'APCA-API-KEY-ID': 'PKN25EWOHIKOXKE93MQ9',
  'APCA-API-SECRET-KEY': '116hFxS4clN0p7fFqK1sFGKlByQc0kQE2ueTVzh3',
});
const alpaReq = new Request('https://paper-api.alpaca.markets/v2/account', {
  method: 'GET',
  headers: alpaHeader,
});
let INFINITE_NUM = 1000;
onload = spreadStockData();

function spreadStockData() {
  for (let i = 0; i < INFINITE_NUM; i++) {
    setTimeout(() => {
      fetch(alpaReq)
        .then(res => res.json())
        .then(data => {
          document.getElementById('content').innerHTML = JSON.stringify(data);
        })
        .catch(err => {
          console.error(err);
        });
    }, 1000 * i);
  }
}
