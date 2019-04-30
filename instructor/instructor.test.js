import { instructor } from './instructor';

describe('instructor', () => {
  test('should change this.firstName to Ram', () => {
    instructor.sayHi();
    setTimeout(() => {
      expect(instructor.firstName).toBe('Ram');
    }, 1000);
  });
});
