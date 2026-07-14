//========================
// MATRIX
//========================

const canvas=document.getElementById("matrix");
const ctx=canvas.getContext("2d");

function resize(){

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

}

resize();

window.addEventListener("resize",resize);

const chars="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#$%&<>[]{}";
const size=16;

let columns=Math.floor(canvas.width/size);
let drops=Array(columns).fill(1);

function drawMatrix(){

ctx.fillStyle="rgba(0,0,0,.08)";
ctx.fillRect(0,0,canvas.width,canvas.height);

ctx.fillStyle="#ff0033";
ctx.font=size+"px monospace";

for(let i=0;i<drops.length;i++){

let text=chars[Math.floor(Math.random()*chars.length)];

ctx.fillText(text,i*size,drops[i]*size);

if(drops[i]*size>canvas.height&&Math.random()>0.98){

drops[i]=0;

}

drops[i]++;

}

}

setInterval(drawMatrix,35);

//========================
// RELÓGIO
//========================

function atualizarHora(){

document.getElementById("clock").innerHTML=
new Date().toLocaleTimeString();

}

setInterval(atualizarHora,1000);

atualizarHora();

//========================
// BOOT
//========================

const boot=document.getElementById("boot");
const barra=document.getElementById("progresso");
const logs=document.getElementById("logs");

const bootLogs=[

"Inicializando Kernel...",
"Carregando Interface...",
"Verificando Firewall...",
"Abrindo Terminal...",
"Conectando Ferramentas...",
"Sistema Online."

];

let progresso=0;
let linha=0;

const bootLoop=setInterval(()=>{

progresso+=2;

barra.style.width=progresso+"%";

if(linha<bootLogs.length&&progresso%15===0){

logs.innerHTML+=bootLogs[linha]+"<br>";

linha++;

}

if(progresso>=100){

clearInterval(bootLoop);

setTimeout(()=>{

boot.style.display="none";

},700);

}

},40);

//========================
// JANELAS
//========================

function abrirJanela(id){

document.querySelectorAll(".janela").forEach(j=>{

j.classList.remove("active");

});

document.getElementById(id).classList.add("active");

}

//========================
// TERMINAL
//========================

const saida=document.getElementById("saida");
const comando=document.getElementById("comando");

function print(text){

saida.innerHTML+="<div>"+text+"</div>";

saida.scrollTop=saida.scrollHeight;

}

print("𝙺.x Cyber OS iniciado.");
print("Digite HELP");

comando.addEventListener("keydown",e=>{

if(e.key!="Enter") return;

let cmd=comando.value.trim();

let low=cmd.toLowerCase();

print("> "+cmd);

switch(true){

case low=="help":

print("help");
print("about");
print("system");
print("version");
print("clear");
print("cls");
print("date");
print("time");
print("whoami");
print("echo");

break;

case low=="about":

print("𝙺.x Cyber OS");
print("Cyber Security Interface");

break;

case low=="system":

print("Status: ONLINE");
print("Firewall: ATIVO");
print("Terminal: OK");

break;

case low=="version":

print("Versão 2.0");

break;

case low=="date":

print(new Date().toLocaleDateString());

break;

case low=="time":

print(new Date().toLocaleTimeString());

break;

case low=="whoami":

print("K.x");

break;

case low=="clear":
case low=="cls":

saida.innerHTML="";

break;

default:

if(low.startsWith("echo ")){

print(cmd.substring(5));

}else{

print("Comando não encontrado.");

}

}

comando.value="";

// foco automático

comando.focus();

});

//========================
// FERRAMENTAS
//========================

function gerarSenha(tam=14){

const chars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&";

let senha="";

for(let i=0;i<tam;i++){

senha+=chars[Math.floor(Math.random()*chars.length)];

}

return senha;

}

function gerarNick(){

const inicio=[

"K.x",

"Ghost",

"Null",

"Shadow",

"Root",

"Zero"

];

const fim=[

"404",

"X",

".exe",

"HΞLL",

"777",

"999"

];

return inicio[Math.floor(Math.random()*inicio.length)]+"_"+fim[Math.floor(Math.random()*fim.length)];

}

function gerarBio(){

const bios=[

"Cyber Security",

"Always Learning",

"404 Not Found",

"Root Access",

"Think Different",

"Digital Ghost"

];

return bios[Math.floor(Math.random()*bios.length)];

}
