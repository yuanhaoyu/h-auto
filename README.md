# h-auto

h-auto是一个初始化rem的js组件，仅仅2步就能开心使用👨‍🍳

## Quick start

1. 引入在css前script标签引入h-auto.js
2. 请手动在css中给你的body设置一个你认为合适的默认值。

## How to use

h-auto的核心是麻瓜化，即直接引入立刻生效，所以你可以clone 这个项目然后用script标签的形式引入（**由于h-auto是初始化rem的，所以一定要保证h-auto在你css引入前使用**）

⚠️然后注意，rem设置后html的font-size会变化，所以默认字体大小会随之变化，**请务必在body里面设置一个合适的默认字体大小**，抵消html的font-size会的影响。

在顺利完成2步操作后，你就可以愉快的使用rem进行布局了，为了让你极速上手这里h-auto已经默认为你配置了一个比较完美的初始值😁。

默认配置如下：

1. 1rem = 100px
2. 开启强制html的font-size强制为h-auto设置的值生效
3. 旋转屏幕事件监听，rem设置动态变化



## Do more

当然h-auto也可以指定一些参数，由于h-auto是直接执行的所以你需要在h-auto引入前执行一段参数赋值的操作，如下：

```javascript
    <script>
        window.H_AUTO_CONFIG = {
            "size": 100, // 1rem = 100px
            "important": false, // not use !improtant for style
            "max": 350, // max rem = 350px
            "rotate": false // if listen rotate screen
        }
    </script>
    <script src="xxx/xx/h-auto.js"></script>
```

其中：

​	size: 代表1rem 对应的px的值

​	important: 代表html中设置font-size后是否用important 强制样式优先级

​	max: 代表最大rem值，当屏幕变化计算的rem大于这个px时，自动变成这个px

​	rotate: 代表是否监听屏幕旋转事件并使rem随之变化

