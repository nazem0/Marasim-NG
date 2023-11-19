import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  @Input() date: string = '';
  timeUntil: { days: number, hours: number, minutes: number, seconds: number } = { days: 0, hours: 0, minutes: 0, seconds: 0 };

  ngOnInit() {
    this.updateCounter();
    setInterval(() => this.updateCounter(), 1000);
  }

  private updateCounter() {
    this.timeUntil = this.calculateTimeUntil(this.date);
  }

  calculateTimeUntil(targetDateTimeString: string): { days: number, hours: number, minutes: number, seconds: number } {
    const targetDateTime = new Date(targetDateTimeString);

    if (isNaN(targetDateTime.getTime())) {
      throw new Error("Invalid date-time string");
    }

    const currentTime = new Date();
    const timeDifference = Math.max(targetDateTime.getTime() - currentTime.getTime(), 0) / 1000;

    const days = Math.floor(timeDifference / (24 * 3600));
    const hours = Math.floor((timeDifference % (24 * 3600)) / 3600);
    const minutes = Math.floor((timeDifference % 3600) / 60);
    const seconds = Math.floor(timeDifference % 60);

    return {
      days,
      hours,
      minutes,
      seconds
    };
  }





}
