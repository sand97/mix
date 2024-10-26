## MIX ##

Mix is a simple, lightweight utility to merge css classes when your doing responsive. Lazy to write lg: md: ? Mix is here to help you.

### DISCLAIMER ⚠️ ###
This package is still in development and may not be stable. Use at your own risk.

### Installation ###

```bash
$ npm install mix-css
```

### Import ###

```tsx
import mix from 'mix-css';
```

### Simple usage ###

```tsx

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


### Nested usage ###
This is particularly useful when you want to target a Element render by library

```tsx
<div className={mix('text-base', {
  "[&>.deep-class]": ['m-2', {
    lg: 'px-4 py-6',
    md: 'p-2'
  }]
})}>
  Hello World
</div>
```

Will result in:

```tsx
<div className="text-base">
  Hello World
  <div className="text-base [&>.deep-class]:m-2 [&>.deep-class]:lg:px-4 [&>.deep-class]:lg:py-6 [&>.deep-class]:md:p-2">
    Nested Hello World
  </div>
</div>
```

### Conditional usage ###
This is particularly useful when you want to conditionally add a class from state or props

```tsx
<div className={mix({'text-red-500': true, 'text-blue-500': false})}>
  Hello World
</div>
```

Will result in:

```tsx
<div className="text-red-500">
  Hello World
</div>
```


### License ###
MIT
```