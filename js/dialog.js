// 提示 升级版本
document.writeln('<div tabindex="-1" role="dialog" aria-modal="true" aria-label="dialog" class="el-message-box__wrapper">')
document.writeln('<div class="el-message-box">')
document.writeln('<div class="el-message-box__header">')
document.writeln('<div class="el-message-box__title">')
document.writeln('<span id="el_message_title"></span>')
document.writeln('</div>')
document.writeln('<button id="el_message_close" type="button" aria-label="Close" aria-hidden="true" class="el-message-box__headerbtn">')
document.writeln('<span aria-hidden="true">&times;</span>')
document.writeln('</button>')
document.writeln('</div>')
document.writeln('<div class="el-message-box__content">')
document.writeln('<div class="el-message-box__container">')
document.writeln('<div class="el-message-box__message">')
document.writeln('<p id="el_message_content"></p>')
document.writeln('</div>')
document.writeln('</div>')
document.writeln('</div>')
document.writeln('<div class="el-message-box__btns">')
document.writeln('<button id="el_message_closebtn" class="el-btn">确定</button>')
document.writeln('</div>')
document.writeln('</div>')
document.writeln('</div>')


// 添加弹窗事件监听
$(".el-message-box__wrapper").click(function(e) {
    if (e.target.className == 'el-message-box__wrapper') {
        $(".el-message-box__wrapper").fadeOut()
    }
})

$(".el-message-box__wrapper #el_message_close").click(function(e) {
    $(".el-message-box__wrapper").fadeOut()
})

$(".el-message-box__wrapper #el_message_closebtn").click(function(e) {
    $(".el-message-box__wrapper").fadeOut()
})