const profile = {
    username: "Jacob",
  playTime: 300,

  changeUsername (newName) {
    if (newName !== this.username) {
      this.username = newName;
  }
  },

  updatePlayTime(hours) {
    if (hours !== 0) {
      this.playTime = this.playTime + hours;
    }
  }, 

  getInfo() {
return (`${this.username} has ${this.playTime} active hours!`);
  },

};

profile.getInfo();
profile.changeUsername("Marco");
console.log(profile.getInfo());

profile.updatePlayTime(20);
console.log(profile.getInfo()); 