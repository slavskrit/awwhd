/// <reference lib="webworker" />

let lastTimestamp = performance.now();

addEventListener('message', ({ data }) => {
  const currentTimestamp = performance.now();
  // console.log(lastTimestamp);
  // console.log(currentTimestamp);
  // console.log(lastTimestamp < currentTimestamp - 2100);
  if (lastTimestamp < currentTimestamp - 1100) {
    console.error('OMG with lag: ' + (currentTimestamp - lastTimestamp));
  }
  lastTimestamp = currentTimestamp;

  const response = `worker response to ${data}`;
  postMessage(response);
});
