# 遇到了同名 css 怎么办

子组件 child.vue 有一个叫menu的样式
```html
<template>
    <div class="menu"></div>
</template>
<style>
    .menu: {
        background-color:red
    }
</style>
```

父组件parent.vue, 调用子组件child 并设置同样的class；

```html
<template>
    <child class="menu" />
</template>
<style>
    .menu: {
        background-color:blue
    }
</style>
```
此时，dom元素会这样渲染：

```html
<div class="menu menu"
```

## 那么问题来了，child会使用哪种样式?

经过验证，优先级排序如下：

__scoped>子组件>大于父组件__

且，scoped样式，会在渲染的时候添加额外信息，如:
```css
.menu[data-v-0da8b164]
```

# 功能权限

1. 与功能权限相关的组件需要封装成异步组件
2. 登录时获取权限列表，转成javascript对象之后执行object.freeze方法将其冻结，以防止恶意篡改。


