function getStockData() {
  const alpaHeader = new Headers({
    'Content-Type': 'application/x-www-form-urlencoded',
    'APCA-API-KEY-ID': 'PKN25EWOHIKOXKE93MQ9',
    'APCA-API-SECRET-KEY': '116hFxS4clN0p7fFqK1sFGKlByQc0kQE2ueTVzh3',
  });
  const alpaReq = new Request('https://paper-api.alpaca.markets/v2/account', {
    method: 'GET',
    headers: alpaHeader,
  });
  fetch(alpaReq)
    .then(res => res.json())
    .then(data => {
      console.log(data);
    })
    .catch(err => {
      console.error(err);
    });
}

export { getStockData };
