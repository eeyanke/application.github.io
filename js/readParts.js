function header() {
    alert('JavaScript�̃A���[�g');
    $.ajax({
        url: "./parts/head.html", // �ǂݍ���HTML�t�@�C��
        cache: false,
        success: function (html) {
            document.write(html);
        }
    });
}