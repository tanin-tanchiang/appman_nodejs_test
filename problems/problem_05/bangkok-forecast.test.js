const { expect } = require('chai');
const { bangkokForecast } = require('./index');

describe('Problem 05 - bangkok-forecast', () => {
  const testcases = [
    {
      expected: [111]
    },
  ];
  testcases.forEach(tc => {
    it(`${tc.expected}`, () => {
      const result = bangkokForecast();
      expect(result).to.be.eq(tc.expected);
    });
  });
});
