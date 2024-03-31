import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeartBeatService } from './heartbeatservice';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'awwhd';
  worker = new Worker(new URL('./app.worker', import.meta.url));
  counter = 0;
  deadCounter = 0;

  constructor(private heroService: HeartBeatService) {
    this.heroService.startBeat().subscribe((val) => {
      if (val % 5 == 0) {
        // console.log('Playing dead');
        while (this.deadCounter < 1000000000) {
          this.deadCounter += 1;
        }
        this.deadCounter = 0;
        // console.log('End playing dead');
      }
      this.counter += 1;
      this.worker.onmessage = ({ data }) => {
        console.log(`page got message: ${data}`);
      };
      this.worker.postMessage(val);
    });
  }

  ngOnInit(): void {
    this.counter = 1;
  }
}
