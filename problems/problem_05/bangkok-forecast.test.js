const { expect } = require('chai');
const { bangkokForecast } = require('./index');

describe('Problem 05 - bangkok-forecast', () => {
  const testcases = [
    {
      expected: [
        { date: "2019-09-12", minTemp: 26.97, maxTemp: 30 },
        { date: "2019-09-13", minTemp: 25.55, maxTemp: 32.75 },
        { date: "2019-09-14", minTemp: 25.16, maxTemp: 31.9 },
        { date: "2019-09-15", minTemp: 24.69, maxTemp: 30.85 },
        { date: "2019-09-16", minTemp: 24.98, maxTemp: 31.73 },
        { date: "2019-09-17", minTemp: 24.65, maxTemp: 30.25 },
        { date: "2019-09-18", minTemp: 25.25, maxTemp: 30.67 }
      ]
    },
  ];
  testcases.forEach(tc => {
    it(`${tc.expected}`, () => {
      console.log(tc.expected);
      const result = bangkokForecast();
      console.log(result);
      expect(result).to.be.eq(tc.expected);
    });
  });
});
