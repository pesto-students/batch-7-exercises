import { truthCheck } from './truthCheck';

describe('truthCheck', () => {
  test('should return the correct boolean', () => {
    expect(truthCheck([{
      user: 'Tinky-Winky',
      sex: 'male',
    }, {
      user: 'Dipsy',
      sex: 'male',
    }, {
      user: 'Laa-Laa',
      sex: 'female',
    }, {
      user: 'Po',
      sex: 'female',
    }], 'sex')).toBe(true);

    expect(truthCheck([{
      user: 'Tinky-Winky',
      sex: 'male',
    }, {
      user: 'Dipsy',
    }, {
      user: 'Laa-Laa',
      sex: 'female',
    }, {
      user: 'Po',
      sex: 'female',
    }], 'sex')).toBe(false);

    expect(truthCheck([{
      user: 'Tinky-Winky',
      sex: 'male',
      age: 0,
    }, {
      user: 'Dipsy',
      sex: 'male',
      age: 3,
    }, {
      user: 'Laa-Laa',
      sex: 'female',
      age: 5,
    }, {
      user: 'Po',
      sex: 'female',
      age: 4,
    }], 'age')).toBe(false);

    expect(truthCheck([{
      name: 'Pete',
      onBoat: true,
    }, {
      name: 'Repeat',
      onBoat: true,
    }, {
      name: 'FastFoward',
      onBoat: null,
    }], 'onBoat')).toBe(false);

    expect(truthCheck([{
      name: 'Pete',
      onBoat: true,
    }, {
      name: 'Repeat',
      onBoat: true,
      alias: 'Repete',
    }, {
      name: 'FastFoward',
      onBoat: true,
    }], 'onBoat')).toBe(true);

    expect(truthCheck([{
      single: 'yes',
    }], 'single')).toBe(true);

    expect(truthCheck([{
      single: '',
    }, {
      single: 'double',
    }], 'single')).toBe(false);
  });
});
