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

### position fixed
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