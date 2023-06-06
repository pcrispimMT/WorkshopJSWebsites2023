var destaque = document.getElementById('destaque');
var botao = document.getElementById('botao_show_hide');
destaque.className = "hide";

function toggleShowHide() {
    if(destaque.className == 'hide') {
        destaque.className = "show";
        botao.value = "Ocultar";
    } else {
        destaque.className = "hide";
        botao.value = "Mostrar";
    }
}
