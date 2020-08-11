$(Document).ready(function(){
    $('.list-title').click(function (e) {
        e.preventDefault();
        $('.active').toggle()
        // 請使用 toggleClass 完成此作業
       })
})