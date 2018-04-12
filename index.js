

/**
DOMの準備が完了した時に、クエリパラメータを読込んでチェックボックスをオンにする

コードの参考：https://teratail.com/questions/43186

jQuery(function($) { の参考：http://w3q.jp/t/6021

*/
jQuery(function($) {

    var url = location.protocol + "//" + location.host + location.pathname + location.search;
    var params = url.split('?');
    var paramms = params.length>1&&params[1].split('&');
    var paramArray = [];
    for(var i = 0; i < paramms.length; i++) {
        var vl = paramms[i].split('=');
        paramArray.push(vl[0]);
        paramArray[vl[0]] = vl[1];

        var terms = decodeURIComponent(vl[1]);
        $('input').each(function(){
            var val = $(this).val();
            if(terms === val) {
                $(this).prop("checked",true);
            }
        });

    }

});

/**
クエリにpathを追加してフォームを送信

参考：https://qiita.com/cinnamon/items/68303c2d087c7d09e9e5

*/
function execRequest(action, method, data) {
    var form = document.createElement("form");
    form.setAttribute("action", action); // 投げたいURLを書く。
    form.setAttribute("method", method); // POSTリクエストもしくはGETリクエストを書く。
    form.style.display = "none"; // 画面に表示しないことを指定する
    document.body.appendChild(form);
    if (data !== undefined) {
        var input = document.createElement('input');
        input.setAttribute('type', 'hidden');
        input.setAttribute('name', 'name'); //「name」は適切な名前に変更する。
        input.setAttribute('value', data);
        form.appendChild(input);
    }
    form.submit();
}

/*
//URLの更新
//参考：http://cly7796.net/wp/javascript/location-url/

$(function() {
    // URLの変更(ページ遷移)
    $(document).on('click', '#sample', function() {
        location.href = 'http://cly7796.net/wp/';
    });
 
    // パラメータ追加
    $(document).on('click', '#sample2', function() {
        location.search = '?param=abc';
    });
 
    // ハッシュ追加
    $(document).on('click', '#sample3', function() {
        location.hash = '#hash';
    });
});
*/

