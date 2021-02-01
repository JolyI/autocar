baseUrl = 'http://127.0.0.1';
baseToken = "";

// 登录接口
loginUrl = './login'
    // 退出登录接口
loginOutUrl = './login'

// 个人信息接口
profileUrl = './login'

// 个人信息修改接口
editProfileUrl = './'

// 我的任务接口
taskMineUrl = './login'

// 任务进度修改接口
editTaskUrl = './login'

// ------------版主----------------
// 添加任务接口
adminAddTaskUrl = './login'

// 修改任务接口
adminEditTaskUrl = './login'

// 删除任务接口
adminDeleteTaskUrl = './delete'



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

function logOut() {
    $.ajax({
        type: 'post',
        url: baseUrl + "/api/v1/user/gw/logout",
        data: {},
        contentType: "application/json",
        dataType: "json",
        beforeSend: function(request) {
            request.setRequestHeader("token", localStorage.getItem("token"));
        },
        success: function(data) {
            if (data.success == true) {
                $(".isLogin").hide();
                $(".noLogin").show();
                deleteItem();
                window.location.href = "index.html";
            } else {
                tip(data.errmsg)
            }
        },
        error: function(data) {
            if (data.status == 403) {
                //合并操作后修改
                deleteItem();
                window.location.href = 'login.html';
            }
        }

    })
}

//去除url上的param参数
function clearUrl() {
    var url = window.location.href; //获取当前页面的url
    if (url.indexOf("?") != -1) { //判断是否存在参数
        url = url.replace(/(\?|#)[^'"]*/, ''); //去除参数
        window.history.pushState({}, 0, url);
    }
}