import Character from '../app';
import Daemon from '../daemon';
import Magician from '../magician';

describe('Character', () => {
  it('should set calcAttack to 0 when stoned and distance is negative', () => {
    const character = new Character('John');
    character.setStoned(-1);
    expect(character.getAttack()).toBe(0);
  });

  it('should set calcAttack to 0 when distance is negative', () => {
    const character = new Character('John');
    character.setAttack(-1);
    expect(character.getAttack()).toBe(0);
  });

  it('should initialize the name correctly', () => {
    const character = new Character('John');
    expect(character.name).toBe('John');
  });

  it('should return null for calcAttack when not set', () => {
    const character = new Character('John');
    expect(character.getAttack()).toBe(null);
  });

  it('should set and get the calcAttack correctly based on distance', () => {
    const character = new Character('John');
    character.setAttack(2);
    expect(character.getAttack()).toBe(8);
  });

  it('should set and get the calcAttack correctly when stoned', () => {
    const character = new Character('John');
    character.setStoned(3);
    expect(character.getStoned()).toBe(10 - 5 * Math.log2(3));
  });
});

describe('Daemon', () => {
  it('should have the correct type', () => {
    const daemon = new Daemon('Mike');
    expect(daemon.type).toBe('Daemon');
  });

  it('should have the correct initial attack value', () => {
    const daemon = new Daemon('Mike');
    expect(daemon.attack).toBe(10);
  });

  it('should have the correct initial defence value', () => {
    const daemon = new Daemon('Mike');
    expect(daemon.defence).toBe(40);
  });
});

describe('Magician', () => {
  it('should have the correct type', () => {
    const magician = new Magician('Alice');
    expect(magician.type).toBe('Magician');
  });

  it('should have the correct initial attack value', () => {
    const magician = new Magician('Alice');
    expect(magician.attack).toBe(10);
  });

  it('should have the correct initial defence value', () => {
    const magician = new Magician('Alice');
    expect(magician.defence).toBe(40);
  });
});
