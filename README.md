### MIX ###

Mix is a simple, lightweight utility to merge css classes when your doing responsive. Lazy to write lg: md: ? Mix is here to help you.

### Installation ###

```bash
$ npm install mix-css
```

### Usage ###

```tsx
import mix from 'mix-css';

...

<div className={mix('text-base p-2 m-2', {
  lg: 'p-4 m-4', 
  xl: 'p-8 m-8'
})}>
  Hello World
</div>
```

Will result in:

```tsx 
<div className="text-base p-2 m-2 lg:p-4 lg:m-4 xs:p-8 xs:m-8">
  Hello World
</div>
````

### License ###
MIT
```