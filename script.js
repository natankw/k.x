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

// TERMINAL AUTO DIGITAÇÃO

let mensagensBoot = [
"K.x@cyber:~$ acesso iniciado...",
"K.x@cyber:~$ carregando ferramentas...",
"K.x@cyber:~$ sistema protegido...",
"K.x@cyber:~$ pronto para comandos."
];


let linha = 0;


function digitarTerminal(){

if(linha < mensagensBoot.length){

saida.innerHTML += "<br>" + mensagensBoot[linha];

linha++;

setTimeout(digitarTerminal,900);

}

}


setTimeout(digitarTerminal,1500);
