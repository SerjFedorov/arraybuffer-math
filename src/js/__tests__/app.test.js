import Daemon from '../daemon';
import Magician from '../magician';

test('Атака мага без дурмана', () => {
  const mag = new Magician('Mag');
  mag.attack = 100;
  const result = mag.attack;
  expect(result(2)).toEqual(90);
});

test('Атака демона под дурманом', () => {
  const dem = new Daemon('Demon');
  dem.attack = 100;
  dem.stoned = true;
  const result = dem.attack;
  expect(result(2)).toEqual(85);
});
