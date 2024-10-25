const mix = require('./index').default;

describe('mix', () => {
  it('should render a simple string', () => {
    expect(mix('p-4')).toBe('p-4');
  });

  it('should render array of string', () => {
    expect(mix('p-4', 'm-2')).toBe('p-4 m-2');
  });

  it('should render simple object', () => {
    expect(mix({ lg: 'p-4', md: 'p-2' })).toBe('lg:p-4 md:p-2');
  });

  it('should render string ans object', () => {
    expect(mix('p-4', { lg: 'p-4', md: 'p-2' })).toBe('p-4 lg:p-4 md:p-2');
  });

  it('should render object plus string', () => {
    expect(mix({ lg: 'p-4', md: 'p-2' }, 'm-2')).toBe('lg:p-4 md:p-2 m-2');
  });

  it('should render object plus string plus object', () => {
    expect(mix({ lg: 'p-4', md: 'p-2' }, 'm-2', { lg: 'p-4', md: 'p-2' })).toBe('lg:p-4 md:p-2 m-2 lg:p-4 md:p-2');
  });

  it('should render object plus string plus object plus string', () => {
    expect(mix({ lg: 'p-4', md: 'p-2' }, 'm-2', { lg: 'p-4', md: 'p-2' }, 'm-2')).toBe('lg:p-4 md:p-2 m-2 lg:p-4 md:p-2 m-2');
  });

});