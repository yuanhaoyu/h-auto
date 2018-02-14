# h-auto

h-auto是一个初始化rem的js组件，仅仅2步就能上手使用👨‍🍳

## Quick start

- 请在css前引入h-auto.js
- 请手动为你的body设置一个合适的<code>font-size</code>默认值。

```javascript
<script src="https://ok15hqd91.bkt.clouddn.com/h-auto.js"></script>
```

## Usage

h-auto的核心是麻瓜化（引入立即生效），所以你可以clone这个项目然后用script标签的形式引入或直接使用用上面提供的cdn。

为你的body设置一个合适的默认字体大小。

在顺利完成2步操作后，你就可以愉快的使用rem进行布局了。

😁默认初始化配置如下：

- 设置1rem = 100px 
- 开启强制html的font-size强制为h-auto设置的值生效
- 开启旋转屏幕事件监听，rem动态变化




## More

h-auto也支持自定义指定参数，由于h-auto是直接执行的，所以你需要在h-auto引入前设置一个全局参数，如下：

```javascript
<script>
    window.H_AUTO_CONFIG = {
        "size": 100, // 1rem = 100px
        "important": false, // not use !improtant for style
        "max": 350, // max rem = 350px
        "rotate": false // if listen rotate screen
     }
 </script>
 <script src="xxx/h-auto.js"></script>
```

其中：

- **size**: 代表1rem 对应的px的值

- **important**: 代表html中设置font-size后是否用important 强制样式优先级

- **max**: 代表最大rem值，当屏幕变化计算的rem大于这个px时，自动变成这个px

- **rotate**: 代表是否监听屏幕旋转事件并使rem随之变化

## Other

- 由于h-auto是初始化rem的，所以一定要保证h-auto在你**css引入前使用**

- 由于rem设置后html的font-size会变化，所以默认字体大小会随之变化，**请务必在body里面设置一个合适的默认字体大小**，抵消html的font-size会的影响。

- 网上有很多把1rem设置成10px的情况，个人不推荐这种情况。首先pc端在不更改浏览器设置的情况下，chrome默认最小是12px，所以你设置10px会被浏览器强行改成12px。其次很多人认为手机上10px是没问题的，但是实测在某些手机的自带浏览器中，默认字体最小仍旧是12px（如某版的锤子手机）

## Preview

<a href="https://yuanhaoyu.github.io/h-auto/test/index.html"> show more in website </a>

