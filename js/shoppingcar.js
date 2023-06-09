function minus(QAQ) {
    var num = Number(document.getElementsByClassName("input_num")[QAQ].value);
    num = isNaN(num);
    const carmoney = document.getElementsByClassName("money")[QAQ];
    if (num > 1) {
        document.getElementsByClassName("input_num")[QAQ].value = num - 1;
        carmoney.innerHTML = (num - 1) * 30;
    }
    totalmoney();
}
function add(QAQ) {
    var num = Number(document.getElementsByClassName("input_num")[QAQ].value);
    num = isNaN(num);
    const carmoney = document.getElementsByClassName("money")[QAQ];
    if (num < 10000) {
        document.getElementsByClassName("input_num")[QAQ].value = num + 1;
        carmoney.innerHTML = (num + 1) * 30;
    }
    totalmoney();
}
function isNaN(QAQ) {
    if (((Number.isNaN(QAQ))) || QAQ < 0 || (!(Number.isInteger(QAQ)))) {
        QAQ = 1;
    }
    return QAQ;
}
function numbertext(e, AQA) {
    if (e.code === 'Enter') {
        var num = Number(document.getElementsByClassName("input_num")[AQA].value);
        const carmoney = document.getElementsByClassName("money")[AQA];
        num = isNaN(num);
        document.getElementsByClassName("input_num")[AQA].value = num;
        carmoney.innerHTML = (num) * 30;
        totalmoney();
    }
}
function totalmoney() {
    var carmoney = document.getElementsByClassName("money");
    var carmoneyle = carmoney.length;
    var totalmoneynu = 0;
    var totalmoneyp = document.getElementsByClassName("tomoney")[0];
    if (carmoney != null) {
        for (var i = 0; i < carmoneyle; i++) {
            var eachmoney = Number(carmoney[i].innerHTML);
            totalmoneynu += eachmoney;
            totalmoneyp.innerHTML = totalmoneynu;
        }
    }
}
if (window.name == "") {
    totalmoney();
}
function disa(QAQ) {
    if (QAQ != null) {
        for (var i = 0; i < QAQ.length; i++) {
            QAQ[i].disabled = true;

        }
    }
}
function visi(QAQ) {
    if (QAQ != null) {
        for (var i = 0; i < QAQ.length; i++) {
            QAQ[i].disabled = false;

        }
    }
}
function checkclick() {
    document.getElementsByClassName("checkout")[0].style.visibility = "visible";
    var inputnum = document.getElementsByClassName("input_num");
    var btn = document.getElementsByClassName("btn");
    var byebye = document.getElementsByClassName("byebye");
    var comment_click = document.getElementsByClassName("comment_click");
    disa(byebye);
    disa(btn);
    disa(inputnum);
    disa(comment_click);

}
function backcar() {
    document.getElementsByClassName("checkout")[0].style.visibility = "hidden";
    var inputnum = document.getElementsByClassName("input_num");
    var btn = document.getElementsByClassName("btn");
    var byebye = document.getElementsByClassName("byebye");
    var comment_click = document.getElementsByClassName("comment_click");

    visi(byebye);
    visi(btn);
    visi(inputnum);
    disa(comment_click);
}