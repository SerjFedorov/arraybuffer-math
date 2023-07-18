import Character from './app';

class Daemon extends Character {
  constructor(name) {
    super(name);
    this.type = 'Daemon';
  }
}

export default Daemon;
