var ws = new WebSocket('ws://localhost:3200');

function openConn() {
  return new Promise(function(resolve, reject) {
    ws.onopen = event => {
      let sendData = { event: 'open' };
      ws.send(JSON.stringify(sendData));
      resolve();
    };
  });
}

function sendRequest() {
  return new Promise(function(resolve, reject) {
    let sendData = { event: 'req', data: '' };
    ws.send(JSON.stringify(sendData));
    resolve();
  });
}

function receiveData() {
  return new Promise(function(resolve, reject) {
    ws.onmessage = event => {
      let recData = JSON.parse(event.data);
      let data2String = recData.data;
      switch (recData.event) {
        case 'res':
          document.getElementById('content').innerHTML = JSON.stringify(
            data2String,
          );
          resolve('received');
          break;
        default:
      }
    };
  });
}

export { openConn, sendRequest, receiveData };
