const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const chars = "01ABCDEFGHIJKLMNOPQRSTUVWXYZ#$%&@";
const fontSize = 14;

let columns = canvas.width / fontSize;
let drops = [];

for(let i = 0; i < columns; i++){
    drops[i] = 1;
}

function drawMatrix(){

    ctx.fillStyle = "rgba(0,0,0,0.08)";
    ctx.fillRect(0,0,canvas.width,canvas.height);

    ctx.fillStyle = "#ff0000";
    ctx.font = fontSize+"px monospace";

    for(let i = 0; i < drops.length; i++){

        let text = chars[Math.floor(Math.random()*chars.length)];

        ctx.fillText(
            text,
            i * fontSize,
            drops[i] * fontSize
        );

        if(drops[i] * fontSize > canvas.height && Math.random() > 0.975){
            drops[i] = 0;
        }

        drops[i]++;
    }
}

setInterval(drawMatrix,50);


// Terminal digitando

const terminal = document.getElementById("terminal");

const lines = [
"K.x@cyber:~$ iniciando sistema...",
"[✓] Carregando módulos...",
"[✓] Verificando ambiente...",
"[✓] Segurança ativa",
"[✓] Cyber Lab online",
"K.x@cyber:~$ pronto..."
];

let index = 0;

function typeLine(){

    if(index < lines.length){

        terminal.innerHTML += "<br>" + lines[index];
        index++;

        setTimeout(typeLine,800);

    }

}

setTimeout(typeLine,1000);


// Ajustar tela

window.addEventListener("resize",()=>{
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
});
