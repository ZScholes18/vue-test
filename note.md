## vue 组件中的 this
vue中data/computed/methods 中 this的上下文是vue实例,需注意。例如：
> 注意，不应该对 data 属性使用箭头函数 (例如data: () => { return { a: this.myProp }})。理由是箭头函数绑定了父级作用域的上下文，所以 this 将不会按照期望指向 Vue 实例，this.myProp 将是 undefined
>
> https://cn.vuejs.org/v2/api/#methods


## 父组件通过props向子组件传递方法
父组件调用子组件，通过绑定callback属性，将方法传给子组件：
``` html
App.vue 

<search-bar class="f-fr" placeholder="请输入名字" mutationName='resetListData' :callback="callback"/>
```

子组件通过props获取父组件传过来的callback方法：
``` javascript
SearchBar.vue

export default {
    name: 'SearchBar',
    data() {
        return {
            input: ''
        }
    },
    methods: {
        setName: function () {
            var input = this.input;
            if (input.trim() == '') {
                alert("empty");
            }
            else {
                Api.searchTest(this.input,this.success );
            }

        },
        success(responseData) {
            this.callback(responseData);
        },
    },
    props: ['placeholder', 'apiName', 'moduleName', 'mutationName','callback']
}
```


1. data
``` javascript
export default {
  ...
  data:function() {
    return {
      count:0,
      callback:function(responseData) {
        alert('after');
        this.$store.commit('resetListData', responseData);
      }
    }
  },
  ...
};
```
此处callback以函数对象的方式，传入子组件，子组件调用的时候，this指向子组件

2. methods
``` javascript
export default {
  ...
  methods: {
    callback(responseData) {
      alert("ggg");
      this.$store.commit('resetListData', responseData);
    }
  }
};
```
此处callback是父组件的一个方法，当子组件调用callback 方法时，this指向父组件。

* ~~若data中与methods中的函数同名，则props会从data中获取。~~（最新版的vuejs已经不允许data和methods中有相同名称的变量）