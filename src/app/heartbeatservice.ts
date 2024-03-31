import { Injectable } from '@angular/core';
import { timer } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeartBeatService {
  source = timer(1000, 200);
  constructor() {
    console.log('HB service created');
  }

  startBeat() {
    console.log('Start');
    return this.source;
  }
}
