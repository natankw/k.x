// ===== MATRIX =====

const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

function resize(){
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
}

resize();

window.onresize=resize;

const letras="01ABCDEFGHIJKLMNOPQRSTUVWXYZ<>[]{}#$%&";
const fonte=16;

let colunas=Math.floor(canvas.width/fonte);
let gotas=Array(colunas).fill(1);

function matrix(){

ctx.fillStyle="rgba(0,0,0,.08)";
ctx.fillRect(0,0,canvas.width,canvas.height);

ctx.fillStyle="#ff0000";
ctx.font=fonte+"px monospace";

for(let i=0;i<gotas.length;i++){

let txt=letras[Math.floor(Math.random()*letras.length)];

ctx.fillText(txt,i*fonte,gotas[i]*fonte);

if(gotas[i]*fonte>canvas.height && Math.random()>0.98){

gotas[i]=0;

}

gotas[i]++;

}

}

setInterval(matrix,35);


// ===== RELÓGIO =====

function atualizarHora(){

let d=new Date();

document.getElementById("clock").innerHTML=
d.toLocaleTimeString();

}

setInterval(atualizarHora,1000);

atualizarHora();


// ===== JANELAS =====

function abrirJanela(id){

document.querySelectorAll(".janela").forEach(j=>{

j.classList.remove("active");

});

document.getElementById(id).classList.add("active");

}


// ===== TERMINAL =====

const saida=document.getElementById("saida");
const comando=document.getElementById("comando");

function print(txt){

saida.innerHTML+="<div>"+txt+"</div>";

saida.scrollTop=saida.scrollHeight;

}

print("K.x Cyber Lab v2 iniciado.");
print("Digite HELP para listar comandos.");

comando.addEventListener("keydown",e=>{

if(e.key!="Enter") return;

let cmd=comando.value.trim();

let low=cmd.toLowerCase();

print("> "+cmd);

switch(low){

case "help":

print("help");
print("about");
print("clear");
print("date");
print("time");
print("system");
print("version");
print("whoami");

break;

case "about":

print("Cyber Security Interface");

break;

case "system":

print("Status: ONLINE");
print("Firewall: ATIVO");
print("Memória: OK");

break;

case "version":

print("Cyber Lab v2.0");

break;

case "whoami":

print("K.x");

break;

case "date":

print(new Date().toLocaleDateString());

break;

case "time":

print(new Date().toLocaleTimeString());

break;

case "clear":

saida.innerHTML="";

break;

default:

if(low.startsWith("echo ")){

print(cmd.substring(5));

}else{

print("Comando desconhecido.");

}

}

comando.value="";

});


// ===== BOOT =====

const boot=document.getElementById("boot");
const progresso=document.getElementById("progresso");
const logs=document.getElementById("logs");

let msgs=[
"Iniciando Kernel...",
"Verificando módulos...",
"Inicializando Firewall...",
"Carregando Interface...",
"Conectando Terminal...",
"Cyber Lab Online."
];

let p=0;
let l=0;

let bootLoop=setInterval(()=>{

p+=2;

progresso.style.width=p+"%";

if(l<msgs.length && p%15==0){

logs.innerHTML+=msgs[l]+"<br>";

l++;

}

if(p>=100){

clearInterval(bootLoop);

setTimeout(()=>{

boot.style.display="none";

},700);

}

},40);
