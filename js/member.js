function onclick_opendetail(QAQ){
    document.getElementsByClassName('white_content')[QAQ].style.display='block';
    document.getElementsByClassName('black_overlay')[QAQ].style.display='block';
}
function onclick_opencomment(QAQ){
    document.getElementsByClassName('comment')[QAQ].style.display='block';
}
function onclick_closecomment(QAQ){
    document.getElementsByClassName('comment')[QAQ].style.display='none';
}
function onclick_closedetail(QAQ){
    document.getElementsByClassName('white_content')[QAQ].style.display='none';
    document.getElementsByClassName('black_overlay')[QAQ].style.display='none';
}