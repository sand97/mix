type Breakpoints = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

type Prefix = 'hover' | 'focus' | 'active' | 'group-hover' | 'group-focus' | 'group-active';

type MixClasses = string | { [key: Breakpoints | Prefix | string]: string | boolean | MixClasses[] };


/**
 * Mixes the given classes together.
 * for exemple: { lg: 'p-4', md: 'p-2' } => 'lg:p-4 md:p-2'
 * You can also enable or disable a class based on a condition:
 * for exemple: { 'text-red-500': true, 'text-blue-500': false } => 'text-red-500'
 * You can also use nested classes:
 * for exemple: { "[&>.deep-class]": ['m-2', { lg: 'p-4', md: 'p-2' }] } => '[&>.deep-class]:m-2 [&>.deep-class]:lg:p-4 [&>.deep-class]:md:p-2'
 */
export default function mix(...classes: MixClasses[]): string {

  const chain = (...strings: string[]) => {
    return strings.filter(Boolean).join(':').trim();
  }

  const mixer = (classes: MixClasses[], prefix?: string) => {
    return classes
        .map((c) => {
          if (typeof c === 'string') {
            return c.split(' ').map((v) => chain(prefix, v)).join(' ').trim();
          }
          return Object.entries(c)
              .map(([key, value]) => {
                if (typeof value === 'boolean') {
                  return value ? key : '';
                }
                if (Array.isArray(value)) {
                  return value.map((v) => mixer([v], chain(prefix, key))).join(' ');
                }
                return mixer([value], chain(prefix, key));
              })
              .join(' ');
        })
        .join(' ').trim();
  }

  return mixer(classes);
}