//搜索-输入状态和按钮激活联动
//function amSearchBind() {
//    var searchInputField = document.querySelectorAll('.am-search');
//    if(searchInputField){
//        Array.prototype.forEach.call(searchInputField, function (elem) {
//            var searchwrap = elem.querySelector('.am-search-input'),
//                searchBtn = elem.querySelector('.am-search-button'),
//                searchInput = elem.querySelector('input.am-search-value'),
//                searchClear = elem.querySelector('.am-icon-clear'),
//                btnHideTimer;
//            if (searchBtn && searchInput) {
//                searchwrap.addEventListener('click',function(){
//                    searchwrap.className = 'am-search-input';
//                    searchBtn.style.display='block';
//                    searchInput.focus();
//                },false);
//                searchActive(searchInput,searchBtn);
//                searchInput.addEventListener('focus',function(){
//                    searchActive(searchInput,searchBtn);
//                    searchwrap.className = 'am-search-input';
//                    searchBtn.style.display='block';
//                },false);
//                searchInput.addEventListener('blur',function(){
//                    if(this.value ===''){
//                        searchwrap.className += ' search-start';
//                    }
//                    btnHideTimer=setTimeout(function(){
//                        searchBtn.style.display='none';
//                    },40);
//
//                },false);
//                searchBtn.addEventListener('click',function(){
//                    if(searchInput.value ===''){
//                        searchwrap.className += ' search-start';
//                    }
//                    searchBtn.style.display='none';
//                },false);
//                searchClear.addEventListener('click',function(){
//                    clearTimeout(btnHideTimer);
//                },false);
//                searchInput.addEventListener('input', function () {
//                    searchBtn.style.display='block';
//                    searchActive(searchInput,searchBtn);
//                }, false);
//
//
//                function searchActive(elem,trigger){
//                    if(elem.value.length > 0){
//                        trigger.removeAttribute('disabled');
//                    }else{
//                        trigger.setAttribute('disabled','disabled');
//                    }
//                }
//            }
//        });
//    }
//
//    var searchLink = document.querySelectorAll('.am-search-link');
//    Array.prototype.forEach.call(searchInputField, function (elem) {
//        elem.addEventListener('click', function(e) {
//            el.get
//        });
//    });
//}

//输入清除功能
function amAutoClear() {
    var autoClearFiled = document.querySelectorAll('.am-input-autoclear');
    if(autoClearFiled){
        Array.prototype.forEach.call(autoClearFiled, function (elem) {
            var clearTrigger = elem.querySelector('.am-icon-clear');
            var clearInput = elem.querySelector('input[type="text"],input[type="password"],input[type="number"],input[type="tel"],input[type="email"],input[type="url"],input[type="search"]');
            if (clearTrigger && clearInput) {
                clearTrigger.addEventListener('touchstart', function () {
                    clearInput.value = '';
                    clearInput.focus();
                    clearTrigger.style.visibility = 'hidden';
                }, false);
                clearTrigger.addEventListener('click', function () {
                    clearInput.value = '';
                    clearInput.focus();
                    clearTrigger.style.visibility = 'hidden';
                }, false);
                clearInput.addEventListener('focus', function () {
                    clearTrigger.style.visibility = (clearInput.value.length > 0) ? 'visible' : 'hidden';
                }, false);
                clearInput.addEventListener('input', function () {
                    clearTrigger.style.visibility = (clearInput.value.length > 0) ? 'visible' : 'hidden';
                }, false);
                clearInput.addEventListener('blur', function () {
                    setTimeout(function(){
                        clearTrigger.style.visibility = 'hidden';
                    },20);
                }, false);
            }
        });
    }
};

//文本框动态增高
function amTextareaAutoHeight() {
    var autoHeightTextarea = document.querySelectorAll('.am-textarea-autoheight');
    if(autoHeightTextarea){
        Array.prototype.forEach.call(autoHeightTextarea, function (elem) {
            var styleMap = elem.currentStyle || document.defaultView.getComputedStyle(elem,null);
            var height = Math.ceil(styleMap['height'].slice(0,-2));
            var cheight =elem.clientHeight;
            elem.style.resize='none';
            elem.addEventListener('input',function(){
                var rowResult=Math.floor((elem.scrollHeight-cheight+height)/height);
                elem.setAttribute('rows',rowResult);
            },false);
        });
    }
};

//input框输入之后才点亮下一步按钮
function amInputAutoLight() {
    var requiredField = document.querySelectorAll('[data-am-required-for]');

    function canEnable(btnId) {
        if (document.getElementById(btnId)) {
            var fields = document.querySelectorAll('[data-am-required-for=' + btnId + ']');
            var b = true;
            Array.prototype.forEach.call(fields, function (elem) {
                var minLen = Number(elem.getAttribute('data-am-required-length')) || 1;
                //b = b && !!elem.value;
                b = b && (elem.value.length >= minLen);
            });
            return b;
        }
        return true;
    }

    function handler(e) {
        var btnId = e.target.getAttribute('data-am-required-for');
        refreshBtn(btnId);
    }

    function refreshBtn(btnId) {
        var submitBtn = document.getElementById(btnId);
        if (submitBtn) {
            if (canEnable(btnId)) {
                submitBtn.removeAttribute('disabled');
            } else {
                submitBtn.setAttribute('disabled', 'disabled');
            }
        }
    }

    // 放重复判断
    var btnIds = {};
    Array.prototype.forEach.call(requiredField, function (elem) {
        elem.addEventListener('input', handler);
        elem.addEventListener('focus', handler);
        elem.addEventListener('blur', handler);
        var btnId = elem.getAttribute('data-am-required-for');
        if (!btnIds[btnId]) {
            refreshBtn(btnId);
            btnIds[btnId] = true;
        }
    });
}

function amTouchActive(els, option) {
    option = option || {};
    var endTime,
      moving = false,
      activeClass = option.activeClass || 'hover',
      lockTime = option.lockTime || 1000;

    var startFun = function (e) {
        var btn = e.currentTarget;

        if (!moving) {
            btn.className = btn.className + ' ' + activeClass;
            endTime = setTimeout(function () {
                btn.className = btn.className.replace(activeClass, '');
            }, lockTime);
        }
    };

    var movingFun = function (e) {
        moving = true;
        endFun(e);
    };

    var endFun = function (e) {
        var el = e.currentTarget;
        el.className = el.className.replace(activeClass, '');
        clearTimeout(endTime);
        moving = false;
    };

    els = typeof (els) == 'object' && els.length > 1 ? els : [els];

    for(var k=0; k <els.length; k++){

        var item = document.querySelectorAll(els[k]);

        for (var i = 0; i < item.length; i++) {
            var el = item[i];
            if (el && el.addEventListener) {
                el.addEventListener('touchstart', startFun, false);
                el.addEventListener('touchmove', movingFun, false);
                el.addEventListener('touchend', endFun, false);
                el.addEventListener('touchcancel', endFun, false);
            }
        }

    }
}


