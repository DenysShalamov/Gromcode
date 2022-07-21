const timer = {
  minsPassed: 0,
  secondsPassed: 0,
  startTimer() {
    const intervalId = setInterval(() => {
      if (this.secondsPassed === 60) {
        this.minsPassed += 1;
        this.secondsPassed = 0;
      }
      this.secondsPassed += 1;
    }, 1000);
    this.inetvalId = intervalId;
  },
  getTime() {
    return this.secondsPassed < 10
      ? `${this.minsPassed}:0${this.secondsPassed}`
      : `${this.minsPassed}:${this.secondsPassed}`;
  },

  stopTimer() {
    clearInterval(this.inetvalId);
  },
  resetTimer() {
    this.minsPassed = 0;
    this.secondsPassed = 0;
  },
};
