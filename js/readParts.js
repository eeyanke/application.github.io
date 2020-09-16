function header() {
    alert('JavaScriptのアラート');
    $.ajax({
        url: "./parts/head.html", // 読み込むHTMLファイル
        cache: false,
        success: function (html) {
            document.write(html);
        }
    });
}