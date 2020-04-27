# js-t1

## [DEMO](https://bobbyliu117.github.io/js-t1)

### [Fontawesome 5 CDN](https://cdnjs.com/libraries/font-awesome)
Search `fontawesome 5 cdn` -> css -> copy script tag
```js
<script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/js/all.min.js" integrity="sha256-KzZiKy0DWYsnwMF+X1DvQngQ2/FxF7MF3Ff72XcpuPs=" crossorigin="anonymous"></script>
```

### [Random User](https://randomuser.me)
```
https://randomuser.me/api/portraits/women/17.jpg
```

### `position: fixed`
fixed to viewport

### css attribute selector
```css
button, input[type='submit'] {}
```

### Handle scroll to end
```js
window.addEventListener('scroll', () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

  if (scrollTop + clientHeight >= scrollHeight - 5) {
    showLoading();
  }
});
```

### check if dom in viewport
```js
const items = document.querySelectorAll('#timeline li');
const isInViewport = el => {
  // ***
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

const run = () =>
  items.forEach(item => {
    if (isInViewport(item)) {
      item.classList.add('show');
    }
  });

// Window Events
window.addEventListener('load', run);
window.addEventListener('resize', run);
window.addEventListener('scroll', run);
```

## [REF1 Traversy WebComponent](https://www.youtube.com/watch?v=PCWaFLy3VUo)

### 4 LifeCycle
1. constructor
2. connectedCallback
3. disconnectedCallback
4. attributeChangedCallback(attrName,oldV,newV)

### HTML Template

### Define and use
userCard.js
```js
// 继承一个HTMLElement或子类
class UserCard extends HTMLElement {
  // call super
  constructor() { super(); }
}
// 导出
window.customElements.define('user-card', UserCard);
```
index.html
```html
<user-card></user-card>
<script src="userCard.js"></script>
```

### Get Attribute
```js
<user-card name="John Doe"></user-card>
this.getAttribute('name') // John Doe
```

### Shadow DOM and template
使WebComponent的CSS不受外部影响
```js
// mode -> 对debug开放（chrome devtools，etc）
this.attachShadow({mode:open});
// create template
const template = document.createElement('template');
template.innerHTML = `<style>..</style><div></div>`

// shadowRoot与div相同使用
this.shadowRoot.appendChild(template.content.cloneNode(true))
```

### Multiple Slots
index.html
```html
<user-card>
  <div slot="email"></div>
```
userCard.js
```js
<p><slot name="email" /></p>
```

### Change CSS in JS
```js
dom.style.display = 'block' // or 'none' to hide
```