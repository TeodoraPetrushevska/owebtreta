var segashnaZ=1;
var prethodnaZ=1;
var segashnaZh=1;
var prethodnaZh=1;

var startButton=document.getElementById("startButton");

var intervalGame=setInterval(startGame,1000);

var slikaZ=document.createElement("img");
slikaZ.setAttribute("src","zajak.png");
var slikaZh=document.createElement("img");
slikaZh.setAttribute("src","zelka.png");


function generateNumber() {
    return Math.floor(Math.random() * 10);
}

function mrdajZajak()
{
    var brz=generateNumber();
    if(brz==1||2){
        segashnaZ=segashnaZ; 
    }
    if(brz==3||4){
        segashnaZ+=9;
    }
    if(brz==5){
        if(segashnaZ<=12){
            segashnaZ=1;
        }
        else{
            segashnaZ-=12;
        }
    }
    if(brz==6||7||8){
        segashnaZ+=1;
    }
    if(brz==9||10){
        if(segashnaZ<=2){
            segashnaZ=1;
        }
        else{
            segashnaZ-=2;
        }
    }
}

function mrdajZelka()
{
    var brze=generateNumber();
    if(brze==1||2||3||4||5){
        segashnaZh+=3;
    }
    if(brze==6||7)
    {
        if(segashnaZh<=6){
            segashnaZh=1;
        }
        else{
            segashnaZh-=6;
        }
    }
    if(brze==8||9||10){
        segashnaZh+=1;
    }
}

function smeniZajakiZhelka()
{
    if(segashnaZ<70)
    {
        var prom=document.getElementById("k"+segashnaZ);
        prom.removeChild(slikaZ);
        
    }
    if(segashnaZh<70)
    {
        var prom1=document.getElementById("k"+segashnaZh);
        prom1.removeChild(slikaZh);
    }
    mrdajZajak();
    mrdajZelka();
    if(brz==brze)
    {
        window.alert("OUCH");
    }
    var nova=document.getElementById("k"+brz);
    nova.appendChild(slikaZ);

    var nova=document.getElementById("k"+brze);
    nova.appendChild(slikaZh);
    if(brz==70||brze==70){
        pobednik();
    }
    else{
        var intervalGame=setInterval(smeniZajakiZhelka,1000);
    }  

    startButton.addEventListener('click', mrdajZajak, false);
    startButton.addEventListener('click', mrdajZelka, false);

   
}
function pobednik()
{
    clearInterval(intervalGame);
    tortoise_run();
    hare_run();

        if(brz>=70)
        {
            window.alert("The race is finished,the tortoise won");
        }
        else if(brze>=70)
        {
            window.alert("The race is finished, the hare won");
        }
    }
