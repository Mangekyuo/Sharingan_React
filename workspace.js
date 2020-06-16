function Creature() {
    const Eyes=(
        <div className="Elish" id="Iei"></div>
    );
    ReactDOM.render(Eyes,document.getElementById('Eye'));
}
Creature();
let Image=document.getElementById('Iei');
let a=0;
function Rotate() {
    if (a>=3600 && a<=7200){
        Image.style.backgroundImage="url('2.jpg')";
    }
    if(a>=7200 && a<=10800){
        Image.style.backgroundImage="url('3.jpg')";
    }
    if(a>=10800 && a<=14400){
        Image.style.backgroundImage="url('4.jpg')";
    }
    if(a>=14400 && a<=18000){
        Image.style.backgroundImage="url('5.jpg')";
    }
    if(a>=18000 && a<=21600){
        Image.style.backgroundImage="url('6.jpg')";
    }
    if(a>=21600 && a<=25200){
        Image.style.backgroundImage="url('7.jpg')";
    }
    if(a>=25200 && a<=28800){
        Image.style.backgroundImage="url('8.jpg')";
    }
    Image.style.transform='rotate('+a+'deg)';
    a=a+5;
}
setInterval(Rotate,10);