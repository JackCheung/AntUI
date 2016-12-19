# AntUI

---

antui 是蚂蚁金服无线H5样式库的开放版本，是对外开放的一套支付宝APP视觉交互规范。使用AMUI，能够快速完成页面设计，并提供给用户在支付宝APP内的一致体验。

包含控件：`button`（按钮）, `list`（列表&表单）, `message`（提示）, `popmenu`（浮动菜单）, `announcement`（公告） `process`（支付进度）, `card`（卡片）, `article`（常规文章）, `search`（搜索）, `tab`（选项卡）, `dialog`(对话框)等

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



## 控件类型

控件可以单独使用，单独引入对应样式文件或控件的cdn链接即可

#### Button 按钮

###### 控件： widget/button

类型：主按钮(蓝底)，次按钮(白底)，警示按钮，不可用按钮，功能按钮和底部按钮。

class名称：`am-button {{type}}`。

{{type}} 分类说明：

	- blue，主按钮
	- white 此按钮
	- tiny 辅助按钮
	- warn 警示按钮
	- bottom 底部按钮

按钮可以使用 a 或 button 标签。wap上要触发按钮的 active 态，必须触发 ontouchstart 事件，可以在 body 上加上 ontouchstart="" 全局触发。

demo：
	
	<button class="am-button blue">主按钮</button>
	<a class="am-button white">次按钮</a>
	


#### List 列表 & 表单

###### 控件： widget/lists

List控件包含：单行或多行文字列表，表单，校验码，以及checkbox，radio, switch 等表单元素。

dev模拟， class名称组合：“am-list {{type}}”,"am-list-header"(表头),"am-list-body"（表体）,"am-list-item {{item-type}}"(列表行), "am-list-footer"（表尾辅助说明）；

列表样式`am-list {{type}}` 

"{{type}}" 分类说明：
	
	－ twoline： 双行列表
	－ sicon： 带小图标的单行列表
	－ form： 表单列表
	－ info： 纯文字列表（结果页面）
	

列表行样式：`am-list-item {{item-type}}`，

"{{item-type}}" 说明：

	－ check： 复选框 列表
	－ radio： 单选框 列表
	－ dropdown 下拉列表
	

demo(标准的list列表：包含表头、表体、表尾)：

	<div class="am-list">
		<div class="am-list-header">单行表头纯文字</div>
		<div class="am-list-body">
			<a class="am-list-item">
				<div class="am-list-content">标签文本</div>
				<div class="am-list-extra">辅助标签</div>
				<div class="am-list-arrow">
				<span class="am-icon arrow horizontal"></span>
				</div>
			</a>
			<a class="am-list-item">
				<div class="am-list-content">标签文本</div>
				<div class="am-list-extra">辅助标签三四五六七八九十</div>
				<div class="am-list-arrow">
				<span class="am-icon arrow horizontal"></span></div>
			</a>
		</div>
		<div class="am-list-footer">辅助说明文案</div>
	</div>

demo（只有表体的list列表，双行文字列表）:	

	<div class="am-list twoline">
		<a class="am-list-item">
			<div class="am-list-content">
				<div class="am-list-title">标签文本标签文本标签文本标签文本标签文本标签文本标签文本</div>
				<div class="am-list-brief">辅助标签辅助标签辅助标签辅助标签辅助标签辅助标签辅助标签</div>
			</div>
			<div class="am-list-arrow"><span class="am-icon arrow horizontal"></span></div>
		</a>
	</div>
		
	
demo(选择框列表)

	<div class="am-list">
		<div class="am-list-header">多项选择</div>
		<div class="am-list-body">
			<label class="am-list-item check" for="c1">
				<div class="am-list-content">表单项复选框——默认选中1</div>
				<div class="am-checkbox">
					<input type="checkbox" name="c1" checked="checked" id="c1">
					<span class="icon-check"></span>
				</div>
			</label>
			<label class="am-list-item check" for="c2">
				<div class="am-list-content">表单项复选框——默认未选中</div>
				<div class="am-checkbox">
					<input type="checkbox" name="c2" id="c2">
					<span class="icon-check"></span>
				</div>
			</label>
		</div>
	</div>


列表中的表单元素class：

	－ 选择框：am-checkbox {{type}} [type: 为空｜agreement tiny]
	－ switch： am-switch


其他说明：`表单行使用 a 标签，整行可点击，checkbox/radio 表单行建议使用label`


#### Message 提示

###### 控件： widget/message，widget/toast, widget/loading

###### 提示控件的集合，包含：结果页面，消息提示, toast提示 和 加载提示；

###### 结果页面和消息提示：widget/message, `class="am-message {{type}}"`， 内部icon `class="am-icon {{message-type}} {{icon-type}}"`

控件 “{{type}}” 说明：
	
		－ 为空： 默认提示（默认）
		－ week： 单行弱提示
		－ result： 结果页面提示
		
icon “{{message-type}}” 说明：
	
		－ message： 默认提示icon
		－ message-week： 单行弱提示icon
		－ result： 结果页面提示icon
		
icon "{{icon-type}}" 说明

		- success: 成功
		- pay: 支付成功态 
		- error: 失败态 
		- warn: 警示态 
		- info: 提示态 
		- wait: 等待态 

demo：
				
	<div class="am-message">
		<i class="am-icon message error"></i>
		<div class="am-message-main">失败</div>
	</div>
	
	<div class="am-message">
		<i class="am-icon message error"></i>
		<div class="am-message-main">主提示</div>
		<div class="am-message-sub">副提示</div>
	</div>
	
	<div class="am-message week">
		<i class="am-icon message-week error"></i>
		<div class="am-message-main">文字提示</div>
	</div>

	<div class="am-message result">
		<i class="am-icon result error"></i>
		<div class="am-message-main">失败</div>
		<div class="am-message-sub">所选银行卡余额不足</div>
	</div>
	
	
###### toast提示：widget/toast, `class="am-toast {{type}}"`, 内部icon `class＝"am-icon toast {{icon-type}}"`

“{{type}}” 说明

	－ 默认 带icon 的toast提示
	－ text 纯文字 toast提示

“{{icon-type}}” 说明

	- loading 载入中
	- warn 警示
	- success 成功
	- network 网络错误
	- fail 失败

demo:

	<div class="am-toast">
		<div class="am-toast-text">
			<span class="am-icon toast network"></span> 网络不给力
		</div>
	</div>
	
	<div class="am-toast text">
		<div class="am-toast-text">
			自定义业务文案最多14个字符
		</div>
	</div>

###### 加载提示: widget/loading, `class="am-loading {{type}}" `
	
	- 默认 局部的小loading， 用于顶部刷新，底部上拉刷新
	- page 页面中大loading

demo: 
	
	<div class="am-loading page">
		<i class="am-icon loading"></i>
		<div class="am-loading-text">加载中</div>
	</div>


#### Process 支付流程

###### 控件： widget/process

支付流程表示支付各个进度状态；class: `am-process`

[后续会增加页面内进度]

demo:

	<div class="am-process">
		<div class="am-process-item pay">
			<i class="am-icon process success"></i>
			<div class="am-process-content">
				<div class="am-process-main">转入成功</div>
				<div class="am-process-brief">手机号码:18938754456</div>
			</div>
			<div class="am-process-down-border"></div>
		</div>
		<div class="am-process-item unpay">
			<i class="am-icon process unpay"></i>
			<div class="am-process-content">
				<div class="am-process-main">未支付</div>
				<div class="am-process-brief">手机号码:18938754456</div>
			</div>
			<div class="am-process-up-border"></div>
			<div class="am-process-down-border"></div>
		</div>
		<div class="am-process-item unpay">
			<i class="am-icon process unpay"></i>
			<div class="am-process-content">
				<div class="am-process-main">未支付</div>
				<div class="am-process-brief">手机号码:18938754456</div>
			</div>
			<div class="am-process-up-border"></div>
		</div>
	</div>



#### Announcement 公告

###### 控件： widget/announcement

顶部公告样式 `am-notice` 

临时通知样式 `am-inform`

demo:
	
	<div class="am-notice">
		<div class="am-notice-content">因全国公民身份系统升级，添加银行卡银行卡银行卡银行卡银</div>
		<div class="am-notice-operation"><a class="am-notice-go" href="#"></a></div>
	</div>
	
	<div class="am-inform">
		<div class="am-inform-content">防欺诈盗号，请勿泄露支付密码</div>
		<div class="am-inform-operation"><a class="am-inform-button">知道了</a></div>
	</div>



#### Popmenu 浮动菜单

###### 控件： widget/popmenu

样式：`am-popmenu`



#### Card 卡片列表

###### 控件： widget/card

文本样式，class: `am-card`；

若用 a 标签模拟，整条卡片可点击



#### Article 常规文章

###### 控件： widget/article

图文样式，class: `am-article`



#### Search 搜索

###### 控件： widget/search

搜索条样式 class: `am-search`；

`输入清除逻辑控制，需单独引入 dist/antui.min.js`



#### Tab 选项卡

###### 控件： widget/tab

主要用于同一个页面多个场景的切换。

class: `am-tab`

#### Dialog 对话框

###### 控件： widget/dialog

对话框，提示框，确认框等，通过div模拟, 包含：标题，内容，行动按钮三部分，demo中示范比较多

class: `am-dialog {{type}}`

"{{type}}" 说明

	－ 默认 文字对话框
	－ image 文字＋插图对话框
	－ simage 文字＋小插图对话框
	
demo

		<div class="am-dialog-mask hide"></div>
		<div class="am-dialog image show">
			<div class="am-dialog-wrap">
				<div class="am-dialog-header">
						<h3>标题文字</h3>
				</div>
				<div class="am-dialog-img">
					<img src="https://os.alipayobjects.com/rmsportal/QnFHZkFYDZUJqBD.png">
				</div>
				<div class="am-dialog-body">
					<p class="am-dialog-brief">辅助说明文字辅助说明文字辅助说明文字辅助说明文字</p>
				</div>
				<div class="am-dialog-footer">
					<a class="am-button blue">行动按钮</a>
				</div>
				<a class="am-dialog-close"></a>
			</div>
		</div>


更多控件demo请安装amui包，查看包内demo文件。


## 技术支持与反馈

欢迎前往 <a href="http://gitlab.alipay-inc.com/antui/antui">http://gitlab.alipay-inc.com/antui/antui</a> 留言或反馈。