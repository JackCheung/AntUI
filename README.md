# AntUI

---

antui 是蚂蚁金服无线H5样式库的开放版本，是对外开放的一套支付宝APP视觉交互规范。使用ANTUI，能够快速完成页面设计，并提供给用户在支付宝APP内的一致体验。

包含控件：`button`（按钮）, `list`（列表&表单）, `message`（提示）, `popmenu`（浮动菜单）, `notice`（公告） `process`（支付进度）, `card`（卡片）, `article`（常规文章）, `search`（搜索）, `tab`（选项卡）, `Dialog`(对话框), `page-result`(通用异常结果页)等

## 使用

#### 方式一：使用`tnpm`进行安装
```
tnpm install @alipay/antui
```
##### 安装后，只需要在页面中引入`style/antui.css`或者`dist/antui.min.css`其中之一即可,例如:

[单独使用某个控件(list控件)，引入`dist/widget/list.min.css` 或者 `style/widget/list.css`] 

```
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=0">
        <title>antui</title>
        <link rel="stylesheet" href="path/to/antui/dist/antui.min.css"/>
        <!-- <link rel="stylesheet" href="path/to/antui/dist/widget/list.min.css"/> -->
        <script src="path/to/antui/dist/antui.min.js"></script>
    </head>
    <body>

    </body>
</html>
```



