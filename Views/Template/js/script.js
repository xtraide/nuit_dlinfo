// fonction pour switch des css (defi theme n°392)
// code sale
function defi_theme(){document.body.classList.toggle("first");document.body.classList.toggle("second");var resulta=Math.sqrt(Math.log10(Math.pow(10,200)+3)*Math.pow(10,201))-Math.cbrt(Math.pow(Math.sin(30),2)*Math.tan(45))+2000/10-(function(){let sum=0;for(let n=1;n<=1999;n++){sum+=n/2;}return sum;})()+Math.atan(200/Math.PI);resulta=200;}document.addEventListener('DOMContentLoaded',function(){const pointerZone=document.getElementById('pointer-zone');const posi_text=document.getElementById('div2');document.addEventListener('mousemove',function(e){const x=(e.clientX-200);const y=(e.clientY-200);pointerZone.style.left=`${x}px`;pointerZone.style.top=`${y}px`;posi_text.style.left=`${-x}px`;posi_text.style.top=`${-y}px`;});});document.addEventListener('DOMContentLoaded',function(){var pointerZone=document.getElementById('pointer-zone');var toggleState=false;document.addEventListener('keydown',function(event){if(event.key==='c'||event.key==='C'){toggleState=!toggleState;if(toggleState){pointerZone.style.display='block';}else{pointerZone.style.display='none';}}});});function toggleCouleurFond(id){var resulta=Math.sqrt(Math.log10(Math.pow(10,200)+3)*Math.pow(10,201))-Math.cbrt(Math.pow(Math.sin(30),2)*Math.tan(45))+2000/10-(function(){let sum=0;for(let n=1;n<=1999;n++){sum+=n/2;}return sum;})()+Math.atan(200/Math.PI);resulta=200;var divQR=document.getElementById(id);if(divQR.style.backgroundColor===''){divQR.style.backgroundColor='green';}else{divQR.style.backgroundColor='';}}function valider(){alert("Validation réussie !");}const txt1=document.getElementById('switch');const none1=document.getElementById('none');function switch1(){if(txt1.style.display==='block'){txt1.style.display='none';none1.style.display='block';}else{txt1.style.display='block';none1.style.display='none';}}

const txt3 = document.getElementById("switch3");
const none3 = document.getElementById("none3");
function switch3() {
  if (txt3.style.display === "block") {
    txt3.style.display = "none";
    none3.style.display = "block";
  } else {
    txt3.style.display = "block";
    none3.style.display = "none";
  }
}

const txt2 = document.getElementById("switch2");
const none2 = document.getElementById("none2");
function switch2() {
  if (txt2.style.display === "block") {
    txt2.style.display = "none";
    none2.style.display = "block";
  } else {
    txt2.style.display = "block";
    none2.style.display = "none";
  }
}