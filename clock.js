class Clock {
  constructor() {
    const date = new Date();
    this.hours = date.getHours();
    this.minutes = date.getMinutes();
    this.seconds = date.getSeconds();
    this.printTime();
    setInterval(this._tick.bind(this),1000);
  }

  printTime() {
    let [seconds, minutes, hours] = [this.seconds, this.minutes, this.hours];
    if (this.seconds < 10) {
      seconds = "0" + this.seconds;
    }
    if (this.minutes < 10) {
      minutes = "0" + this.minutes;
    }
    if (this.hours < 10) {
      hours = "0" + this.hours;
    }
    console.log(`${hours}:${minutes}:${seconds}`);
  }

  _tick() {
    this.seconds += 1;
    if (this.seconds >= 60) {
      this.minutes += 1;
      this.seconds = 0;
    }
    
    if (this.minutes >= 60) {
      this.hours += 1;
      this.minutes = 0;
    }
    
    if (this.hours >= 24) {
      this.hours = 0;
    }
    this.printTime();
  }
}

const clock = new Clock();