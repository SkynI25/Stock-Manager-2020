import { openConn, sendRequest, receiveData } from "./stockAPI";

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
    })
  
}