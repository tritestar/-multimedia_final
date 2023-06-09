function birthdayclick(QAQ){ 
    const birthdayclick=document.getElementsByClassName("birthdayclick")[QAQ];
    const birthdayclicksolemn=document.getElementsByClassName("greettype")[0];
    const greetarea=document.getElementById("greetarea");
    var birtext="";
    if (Number(QAQ)==0){
        greetarea.value='(想訴說的人)\n　　在新的一年里，祝願你身體健康、事業騰飛、家庭幸福，萬事如意，福氣滿滿！\n\n衷心祝福';
        birtext='祝福-新年';
    }
    if (Number(QAQ)==1){
        greetarea.value='(想訴說的人)\n　　踏上畢業的風采，學識與智慧的光芒閃耀，願你憑藉這份堅持與努力，創造無限的可能！\n\n衷心祝福';
        birtext='祝福-畢業';
    }
    if (Number(QAQ)==2){
        greetarea.value='(想訴說的人)\n　　愛的承諾如同繁星閃耀，祝福你們的婚姻猶如流星般閃爍，照亮一生的每一天！\n\n衷心祝福';
        birtext='祝福-結婚';
    }
    if (Number(QAQ)==3){
        greetarea.value='(想訴說的人)\n　　在這個傳統的節日，願你們品嚐到美味的粽子，感受到濃濃的家的溫馨和親情的濃郁！\n衷心祝福';
        birtext='祝福-端午節';
    }
    clearing();
    birthdayclicksolemn.textContent=birtext;
    birthdayclicksolemn.style.color="white";
    birthdayclicksolemn.style.backgroundColor="#054564";
    birthdayclicksolemn.style.border="white solid 1px";
    birthdayclick.style.backgroundColor="#054564";
    birthdayclick.style.color="white";
}
function encourageclick(QAQ){ 
    const encourageclick=document.getElementsByClassName("encourageclick")[QAQ];
    const encourageclicksolemn=document.getElementsByClassName("greettype")[1];
    const greetarea=document.getElementById("greetarea");
    var enctext="";
    if (Number(QAQ)==0){
        greetarea.value='親愛的朋友\n　　人生的道路並不總是一帆風順，但請記住，每一次困難都是你成長的機會，勇敢面對，你可以戰勝一切。\n\n衷心祝福';
        enctext='關心-鼓勵';
    }
    if (Number(QAQ)==1){
        greetarea.value='親愛的朋友\n　　請記住，你不是一個人在戰鬥，你有家人和朋友的支持，我們會一起陪伴你，讓你感到溫暖和安心。\n\n衷心祝福';
        enctext='關心-安慰';
    }
    if (Number(QAQ)==2){
        greetarea.value='親愛的朋友\n　　把思念編織成了一把蒲扇，在炎熱的夏日裡為你扇去清新一片，用牽掛冷藏了一塊寒冰，在火熱的季節里為你送去清涼無限，夏日炎炎，願你清清爽爽過夏日，開開心心一整夏！\n\n衷心祝福';
        enctext='關心-日常';
    }
    if (Number(QAQ)==3){
        greetarea.value='親愛的朋友\n　　平安報到！一切安好。想你們，祝福你們。保重身體，期待下次相聚。\n\n衷心祝福';
        enctext='關心-報平安';
    }
    
    clearing();
    encourageclicksolemn.textContent=enctext;
    encourageclicksolemn.style.color="white";
    encourageclicksolemn.style.backgroundColor="#054564";
    encourageclicksolemn.style.border="white solid 1px";
    encourageclick.style.backgroundColor="#054564";
    encourageclick.style.color="white";
}
function confessclick(QAQ){ 
    const confessclick=document.getElementsByClassName("confessclick")[QAQ];
    const confessclicksolemn=document.getElementsByClassName("greettype")[2];
    const greetarea=document.getElementById("greetarea"); 
    var conftext="";
    if (Number(QAQ)==0){
        greetarea.value='親愛的長輩\n　　祝您生日快樂！願您福如東海，壽比南山，心想事成，笑口常開。願您的生活風光無限，健康幸福永遠相伴。感謝您的慈愛與智慧，您是我們永遠的榜樣。祝福您的新歲充滿喜悅和美好！\n\n衷心祝福';
        conftext='生日快樂-長輩';
    }
    if (Number(QAQ)==1){
        greetarea.value='親愛的朋友，\n　　生日快樂！願你的新歲充滿喜悅和幸福。祝福你的夢想成真，每天都充滿笑聲和溫馨。永遠支持你，無論遇到什麼困難。\n祝福你的生日和整年都充滿祝福和快樂！\n\n（你的名字）';
        conftext='生日快樂-朋友';
    }
    if (Number(QAQ)==2){
        greetarea.value='親愛的（情人的名字），\n　　生日快樂！在這特別的日子裡，我想對你說一聲：你是我生命中最重要的人，我的愛永遠屬於你。願你的生日充滿愛意和喜悅，讓我們一起度過美好時光。\n\n（你的名字）';
        conftext='生日快樂-情人';
    }
    if (Number(QAQ)==3){
        greetarea.value='親愛的(親人名字)，\n　　生日快樂！願你的生日充滿快樂和祝福。感謝你的存在，你是我生命中最珍貴的人。願你的未來充滿幸福和健康。\n\n愛你的\n（你的名字）';
        conftext='生日快樂-親人';
    }
    clearing();
    confessclicksolemn.textContent=conftext;
    confessclicksolemn.style.color="white";
    confessclicksolemn.style.backgroundColor="#054564";
    confessclicksolemn.style.border="white solid 1px";
    confessclick.style.backgroundColor="#054564";
    confessclick.style.color="white";
}
function clearing(){
    for(var i=0;i<=3;i++){
        const encourageclickclear=document.getElementsByClassName("encourageclick")[i];
        const birthdayclickclear=document.getElementsByClassName("birthdayclick")[i];
        const confessclickclear=document.getElementsByClassName("confessclick")[i];
        birthdayclickclear.style.backgroundColor="#efefef";
        birthdayclickclear.style.color="black";
        encourageclickclear.style.backgroundColor="#efefef";
        encourageclickclear.style.color="black";
        confessclickclear.style.backgroundColor="#efefef";
        confessclickclear.style.color="black";
    }
    for(var i=0;i<=2;i++){
        const greettypeclear=document.getElementsByClassName("greettype")[i];
        greettypeclear.style.color="black";
        greettypeclear.style.backgroundColor="#efefef";
        greettypeclear.style.border="none";
    }
    const encouragegreettypeclear=document.getElementsByClassName("greettype")[1];
    const birthdaygreettypeclear=document.getElementsByClassName("greettype")[0];
    const confessgreettypeclear=document.getElementsByClassName("greettype")[2];
    encouragegreettypeclear.textContent="關心";
    birthdaygreettypeclear.textContent="祝福";
    confessgreettypeclear.textContent="生日快樂";
}
function minus(QAQ){
    var num=Number(document.getElementsByClassName("input_num")[QAQ].value);
    num=isNaN(num);
    if(num>1){
        document.getElementsByClassName("input_num")[QAQ].value=num-1;
    }
}
function add(QAQ){
    var num=Number(document.getElementsByClassName("input_num")[QAQ].value);
    num=isNaN(num);
    if(num<10000){
        document.getElementsByClassName("input_num")[QAQ].value=num+1;
    }
}
function isNaN(QAQ){
    if(((Number.isNaN(QAQ))) || QAQ<0|| (!(Number.isInteger(QAQ)))){
                QAQ=1;
    }
    return QAQ;
}
function numbertext(e,AQA){
    if (e.code === 'Enter') {
        var num=Number(document.getElementsByClassName("input_num")[AQA].value);
        const carmoney=document.getElementsByClassName("money")[AQA];
        num=isNaN(num);
        document.getElementsByClassName("input_num")[AQA].value=num;
        carmoney.textContent=(num)*30;
        totalmoney();
    }
}