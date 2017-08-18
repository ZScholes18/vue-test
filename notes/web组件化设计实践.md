# web 组件化设计实践
## 目前方案的问题，jsp的include和jquery的load

## 组件的拆分
 单一职责原则
## 组件状态管理


## 项目结构
### 单个组件
* mdm-button /
    * src /
    * mdm-button.vue
    * index.js
    * readme.md
```javascript
```
readme.md 主要记录一下组件的用法等信息，建议整理
### 组件文件夹
* components
    * component_1 /
        * src /
        * compoent_1.vue
        * index.js
        * readme.md
    * component_2 /
    * component_3 /
    * index.js
* page.vue

其中index.js用于集合组件
``` javascript
index.js

import component_1 from './component_1';
import component_2 from './component_2';
import component_3 from './component_3';

export const {
    component_1,
    component_2,
    component_3
};
```
在page.vue中以如下方式引入组件：
```html
<script>
    import {
        component_1,
        component_2,
        component_3
    } from 'components' // webpack配置中将compoents字段映射到src/components/文件夹上

    export default {
        ...
    }
</script>
```

# 约定（草案）

## 样式
1. 每个组件必须为块级元素，且没有脱离文档流，使之易于控制布局样式
2. 组件内部最外层不设margin，组件间间距在父组件中设置
3. 总的来说，组件只负责自身内部的样式，不应对外部及其他组件造成影响

## 数据
1. 与UI无关的跨组件方法，如数据操作，都通过action和mutaition来实现