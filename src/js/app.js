// TODO: write your code here
export default class Character {
  constructor(name) {
    this.name = name;
    this.attack = 10;
    this.defence = 40;
    this.calcAttack = null;
    this.stoned = false;
  }

  getAttack() {
    return this.calcAttack;
  }

  setAttack(distance) {
    this.calcAttack = (1 - distance / 10) * this.attack;
    if (this.calcAttack < 0 || distance < 0) {
      this.calcAttack = 0;
    }
  }

  getStoned() {
    return this.calcAttack;
  }

  setStoned(distance) {
    this.calcAttack = this.attack - 5 * Math.log2(distance);
    if (this.calcAttack < 0 || distance < 0) {
      this.calcAttack = 0;
    }
  }
}
