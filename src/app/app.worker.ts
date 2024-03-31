/// <reference lib="webworker" />

let lastTimestamp = performance.now();

addEventListener('message', ({ data }) => {
  // setInterval(() => {
  // console.log(lastTimestamp, data, lastTimestamp < data - 1100);
  if (lastTimestamp < data - 220) {
    console.error('OMG with lag: ' + (data - lastTimestamp));
  } else {
    console.info('OK');
  }
  lastTimestamp = data;
  //   postMessage('tick' + data);
  // }, 200);
  // const currentTimestamp = performance.now();
  // // console.log(lastTimestamp);
  // // console.log(currentTimestamp);
  // // console.log(lastTimestamp < currentTimestamp - 2100);
  // if (lastTimestamp < currentTimestamp - 1100) {
  //   console.error('OMG with lag: ' + (currentTimestamp - lastTimestamp));
  // }
  // lastTimestamp = currentTimestamp;

  // const response = `worker response to ${data}`;
});
