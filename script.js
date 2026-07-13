// MATRIX

const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;


const letras="01ABCDEFGHIJKLMNOPQRSTUVWXYZ#$%&";

const tamanho=14;

let colunas=canvas.width/tamanho;

let gotas=[];


for(let i=0;i<colunas;i++){
gotas[i]=1;
}


function matrix(){

ctx.fillStyle="rgba(0,0,0,0.08)";
ctx.fillRect(0,0,canvas.width,canvas.height);

ctx.fillStyle="red";

ctx.font=tamanho+"px monospace";


gotas.forEach((y,i)=>{

let texto=letras[Math.floor(Math.random()*letras.length)];

ctx.fillText(texto,i*tamanho,y*tamanho);


if(y*tamanho>canvas.height && Math.random()>0.975){
gotas[i]=0;
}

gotas[i]++;

});

}


setInterval(matrix,50);




// TERMINAL

const comando=document.getElementById("comando");
const saida=document.getElementById("saida");


comando.addEventListener("keydown",e=>{


if(e.key==="Enter"){


let cmd=comando.value.toLowerCase();


saida.innerHTML += 
"<br>K.x@cyber:~$ "+cmd;



if(cmd==="help"){

saida.innerHTML +=
"<br>Comandos: help | about | tools | clear";

}



else if(cmd==="about"){

saida.innerHTML +=
"<br>𝙺.x Cyber Lab.exe - Training System";

}



else if(cmd==="tools"){

saida.innerHTML +=
"<br>Ferramentas carregadas.";

}



else if(cmd==="clear"){

saida.innerHTML="";

}



else{

saida.innerHTML +=
"<br>Comando não encontrado.";

}


comando.value="";

}

});




// FERRAMENTAS


function abrirFerramenta(tipo){


let painel=document.getElementById("painel");



if(tipo==="senha"){

painel.innerHTML=`

<h2>🔐 Gerador de Senha</h2>

<button onclick="gerarSenha()">
Gerar
</button>

<p id="resultado"></p>

`;

}



if(tipo==="nick"){

painel.innerHTML=`

<h2>⚡ Gerador de Nick</h2>

<button onclick="gerarNick()">
Criar
</button>

<p id="resultado"></p>

`;

}



if(tipo==="info"){

painel.innerHTML=`

<h2>💻 Sistema</h2>

<p>𝙺.x Cyber Lab online</p>

`;

}



}



function gerarSenha(){

let senha=Math.random()
.toString(36)
.substring(2,12);


document.getElementById("resultado").innerHTML=senha;

}



function gerarNick(){

let lista=[

"𝙺.x_HΞLL",

"404_Shadow",

"CyberGhost",

"Root_Kx",

"Null.exe"

];


let nick=lista[Math.floor(Math.random()*lista.length)];


document.getElementById("resultado").innerHTML=nick;

}

// BOOT SYSTEM

let carga = 0;

let barra = document.getElementById("progresso");

let boot = document.getElementById("boot");

let logs = document.getElementById("logs");


let mensagens = [
"[✓] Carregando núcleo...",
"[✓] Iniciando módulos...",
"[✓] Verificando sistema...",
"[✓] Conectando ferramentas...",
"[✓] Segurança ativa...",
"[✓] Sistema online..."
];


let i = 0;


let carregando = setInterval(()=>{


carga += 2;


barra.style.width = carga + "%";


if(i < mensagens.length && carga % 15 === 0){

logs.innerHTML += mensagens[i] + "<br>";

i++;

}


if(carga >= 100){

clearInterval(carregando);


setTimeout(()=>{

boot.style.display="none";

},500);


}


},50);
