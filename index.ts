
type Breakpoints = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

type MixClasses = (string | {[key: Breakpoints | string]: string});


/**
 * Mixes the given classes together.
 * for exemple: { lg: 'p-4', md: 'p-2' } => 'lg:p-4 md:p-2'
 *
 */
export default function mix(...classes: MixClasses[]): string {
  return classes
    .map((arg) => {
      if (typeof arg === 'string') {
        return arg;
      }
      return Object.keys(arg).map((key) => `${key}:${arg[key]}`).join(' ');
    })
    .join(' ');
}