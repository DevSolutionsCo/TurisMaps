var btn_abrir_coyo = document.getElementById("btn_abrir_coyo"),
    overlay_coyo = document.getElementById("overlay_coyo"),
    popup_coyo = document.getElementById("popup_coyo"),
    cerrar_alca_coyo = document.getElementById("cerrar_alca_coyo");

btn_abrir_coyo.addEventListener('mousedown', function(){
    overlay_coyo.classList.add('active');
    popup_coyo.classList.add('active');
});

cerrar_alca_coyo.addEventListener('click' ,function(){
    overlay_coyo.classList.remove('active');
    popup_coyo.classList.remove('active');
});

var btn_abrir_mh = document.getElementById("btn_abrir_mh"),
    overlay_mh = document.getElementById("overlay_mh"),
    popup_mh = document.getElementById("popup_mh"),
    cerrar_alca_mh = document.getElementById("cerrar_alca_mh");

btn_abrir_mh.addEventListener('mousedown', function(){
    overlay_mh.classList.add('active');
    popup_mh.classList.add('active');
});

cerrar_alca_mh.addEventListener('click' ,function(){
    overlay_mh.classList.remove('active');
    popup_mh.classList.remove('active');
});