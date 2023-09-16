btn = document.getElementById('button_mobile');
menuNav = document.querySelector('.lista');

btnSwitchColor = document.getElementById('modoEscuro');
btnSwitchColorMobile = document.getElementById('modoEscuroMobile');
const root = document.documentElement;

btn.onclick = function(){
    if(menuNav.style.transform=="translateX(0%)"){
        menuNav.style.transform = "translateX(-110%)";
    }else{
        menuNav.style.transform = "translateX(0%)";
    }
} 

switchTheme = function(){
    if (root.style.getPropertyValue('--cor-fundo') === '' || root.style.getPropertyValue('--cor-fundo') === '#ffffff') {
        //ativar modo escuro
        root.style.setProperty('--cor-fundo', '#0a0a0a');
        root.style.setProperty('--cor-texto', '#fefefe');
        root.style.setProperty('--cor-textoTitulo', '##f8f8f2');
        root.style.setProperty('--cor-textoTituloOpaco', '#ffffff');
        btnSwitchColor.children[0].src = "../assets/icons/sun.svg";
        btnSwitchColorMobile.children[0].src = "../assets/icons/sun.svg";
    } else {
        //ativar modo claro
        root.style.setProperty('--cor-fundo', '#ffffff');
        root.style.setProperty('--cor-texto', '#ffffff');
        root.style.setProperty('--cor-textoTitulo', 'rgb(15, 15, 15)');
        root.style.setProperty('--cor-textoTituloOpaco', 'rgb(61, 61, 61)');
        btnSwitchColor.children[0].src = "../assets/icons/moon.svg";
        btnSwitchColorMobile.children[0].src = "../assets/icons/moon.svg";
    }
}

btnSwitchColor.addEventListener("click", switchTheme);
btnSwitchColorMobile.addEventListener("click", switchTheme);

