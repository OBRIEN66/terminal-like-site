$.ajax({
    url: 'typeTXT.html',
    type: 'get',
    async: false,
    success: function(html) {
        var text = html;
    }
});

$(function(){
    $(".txt").typed({
        strings: text,
        typeSpeed: 0,
        contentType: "html",
        cursorChar: "",

    })
})
