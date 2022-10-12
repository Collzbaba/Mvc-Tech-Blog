const {format_date} = require('../utils/helpers');



test('format_date() returns a date string', () => {
    const date = new Date('2022-09-22 23:26:00');
  
    expect(format_date(date)).toBe('09/22/2022');
});