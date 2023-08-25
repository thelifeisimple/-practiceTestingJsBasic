const Person = require('./06-person');

describe('Test for person', () => {
  let person;
  // arrange
  beforeEach(() => {
    person = new Person('Ana', 45, 1.7);
  });

  test('should return down', () => {
    /// AAA
    // Arrange /Given
    person.weight = 45;
    // ACT /When
    const imc = person.calcIMC();
    // Assaert /Them
    expect(imc).toBe('down');
  });

  test('should return normal', () => {
    person.weight = 59;
    const imc = person.calcIMC();
    expect(imc).toBe('normal');
  });
});
