const mix = require('./index').default;

describe('mix general use cases', () => {
  it('should render a simple string', () => {
    expect(mix('p-4')).toBe('p-4');
  });

  it('should render array of string', () => {
    expect(mix('p-4', 'm-2')).toBe('p-4 m-2');
  });

  it('should render simple object', () => {
    expect(mix({lg: 'py-4 px-3', md: 'py-2 px-1'})).toBe('lg:py-4 lg:px-3 md:py-2 md:px-1');
  });

  it('should render string and object', () => {
    expect(mix('p-4', {lg: 'py-4 px-3', md: 'py-2 px-1'})).toBe('p-4 lg:py-4 lg:px-3 md:py-2 md:px-1');
  });

  it('should render object plus string', () => {
    expect(mix({lg: 'py-4 px-3', md: 'py-2 px-1'}, 'm-2')).toBe('lg:py-4 lg:px-3 md:py-2 md:px-1 m-2');
  });

  it('should render object plus string plus object', () => {
    expect(mix({lg: 'py-4 px-3', md: 'py-2 px-1'}, 'm-2', {
      lg: 'py-4 px-3',
      md: 'py-2 px-1'
    })).toBe('lg:py-4 lg:px-3 md:py-2 md:px-1 m-2 lg:py-4 lg:px-3 md:py-2 md:px-1');
  });

  it('should render object plus string plus object plus string', () => {
    expect(mix({lg: 'py-4 px-3', md: 'py-2 px-1'}, 'm-2', {
      lg: 'py-4 px-3',
      md: 'py-2 px-1'
    }, 'm-2')).toBe('lg:py-4 lg:px-3 md:py-2 md:px-1 m-2 lg:py-4 lg:px-3 md:py-2 md:px-1 m-2');
  });
});


describe('mix nested use cases', () => {
  it('should render nested classes', () => {
    expect(mix('text-base', {
      "[&>.deep-class]": ['m-2', {
        lg: 'px-4 py-6',
        md: 'p-2'
      }]
    })).toBe('text-base [&>.deep-class]:m-2 [&>.deep-class]:lg:px-4 [&>.deep-class]:lg:py-6 [&>.deep-class]:md:p-2');
  });

  it('should render deep nested tree 😱', () => {
    expect(mix({
      "[&>.deep-class]": ['m-2 border-none',
        {
          lg: ['border border-gray bg-white', {
            hover: 'border-blue'
          }]
        }]
    })).toBe('[&>.deep-class]:m-2 [&>.deep-class]:border-none [&>.deep-class]:lg:border [&>.deep-class]:lg:border-gray [&>.deep-class]:lg:bg-white [&>.deep-class]:lg:hover:border-blue');
  });

});

describe('mix conditional use cases', () => {
  it('should render conditional object', () => {
    expect(mix({'text-red-500': true, 'text-blue-500': false})).toBe('text-red-500');
  });
})
