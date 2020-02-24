import { openConn, sendRequest, receiveData } from './stockAPI';
const INFINITE_NUM = 100;

onload = spreadStockData();

function spreadStockData() {
  openConn()
    .then(sendRequest)
    .then(receiveData)
    .then(msg => {
      console.log(msg);
    })
    .catch(err => {
      console.error(err);
    });

  for (let i = 0; i < INFINITE_NUM; i++) {
    setTimeout(() => {
      sendRequest()
        .then(receiveData)
        .then(msg => {
          console.log(`${i}번째 ${msg}`);
        })
        .catch(err => {
          console.error(err);
        });
    }, 1000);
  }
}
