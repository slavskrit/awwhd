import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HeartBeatService {
  worker = new Worker(new URL('./app.worker', import.meta.url));
  constructor() {
    this.worker.onmessage = ({ data }) => {
      // console.log(`page got message: ${data}`);
    };
    setInterval(() => {
      if (Math.floor(Math.random() * 10 + 1) % 5 == 0) {
        let a = 0;
        while (a < 100000000) {
          a += 1;
        }
      }
      this.worker.postMessage(performance.now());
    }, 200);
  }
}
