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
  counter = 0;
  deadCounter = 0;

  constructor(private heroService: HeartBeatService) {}

  ngOnInit(): void {
    this.counter = 1;
  }
}
