# Programmation réactive

La programmation réactive est un paradigme de programmation visant à conserver une cohérence d'ensemble `Application State` en propageant les modifications d'une source réactive aux éléments dépendants de cette source ( eg. `Components`).

![](https://i.stack.imgur.com/44PVa.png)

# Utilisation

> Snippet

```ts

  constructor(
    public dispatcher:DispatcherService
  ){
    console.warn( this.dispatcher)
  }

```

<hr>

```ts
@Component({
  ...
})
export class MyComponent {

  constructor(
    public dispatcher:DispatcherService
  ){
    console.warn('MyComponent', this.dispatcher)
  }
}

```

```html
<h2> {{ (dispatcher.state$ | async )?.time }} </h2>
```
