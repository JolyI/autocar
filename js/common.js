baseUrl = 'http://127.0.0.1:8080/';


/**
 * 提示弹窗
 * @param {*} content 弹窗内容 暂时不支持富文本
 * @param {*} title 弹窗标题
 * @param {*} time 弹窗展示的时间 0 则永久展示
 * @param {*} callBack  确定事件点击重新绑定事件
 */
var _message_timer

function messageBox(content, title, time, callBack) {
    // 先关闭之前的
    if (_message_timer) {
        // $(".el-message-box__wrapper").fadeOut()
        clearTimeout(_message_timer)
        _message_timer = null
    }
    if (!title) {
        title = '提示'
    }
    if (!time && time != 0) {
        time = 2000
    }
    $('.el-message-box__wrapper #el_message_title').html(title)
    $('.el-message-box__wrapper #el_message_content').html(content)
    $('.el-message-box__wrapper').fadeIn()
    if (time != 0) {
        console.log('开始延时')
        _message_timer = setTimeout(function() {
            console.log('执行')
            $('.el-message-box__wrapper').fadeOut()
        }, time)
        console.log('延时对象', _message_timer)
    }
    // 点击确定事件监听
    if (callBack) {
        $(".el-message-box__wrapper #el_message_closebtn").off('click')
        $(".el-message-box__wrapper #el_message_closebtn").click(function(e) {
            callBack()
            $(".el-message-box__wrapper").fadeOut()
        })
    }
}



function deleteItem() {
    //合并操作后修改
    window.localStorage.clear()
}


// 检测是否登录 header栏的变化
function isLogin() {
    if (localStorage.getItem('userid')) {
        $('nav .login-no').hide()
        $('nav .login-ok').show()

        const id = localStorage.getItem('userid')
        $.ajax({
            type: 'get',
            url: baseUrl + '/user/' + id,
            contentType: "application/json",
            dataType: 'json',
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            success: function(data) {
                localStorage.setItem('userInfo', data)
                $('nav #name').html(data.username)
            },
            error: function() {

            }
        })

    } else {
        $('nav .login-no').show()
        $('nav .login-ok').hide()
        window.location.href = './login.html'
    }
}

function logOut() {
    deleteItem();
    window.location.href = "./login.html";
}

//去除url上的param参数
function clearUrl() {
    var url = window.location.href; //获取当前页面的url
    if (url.indexOf("?") != -1) { //判断是否存在参数
        url = url.replace(/(\?|#)[^'"]*/, ''); //去除参数
        window.history.pushState({}, 0, url);
    }
}

var Toast = null

function showToast(data) {
    if (Toast) {
        Toast.destroy()
    }
    Toast = new $.zui.Messager(data.msg, {
        placement: 'center',
        type: data.type ? data.type : 'default',
        icon: data.icon ? data.icon : '',
        close: false
    }).show();
}