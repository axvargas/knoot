import React from 'react';
import useStyles from '../styles';
import btnAbrirPopup from '@material-ui/core';
import overlay from '@material-ui/core';
import popup from '@material-ui/core';
import btnCerrarPopup from '@material-ui/core';
const Popup = () => {
     return (
    btnAbrirPopup = document.getElementById('btn-abrir-popup'),
    overlay = document.getElementById('overlay'),
    popup = document.getElementById('popup'),
    btnCerrarPopup = document.getElementById('btn-cerrar-popup'),

btnAbrirPopup.addEventListener('click', function(){
    overlay.classList.add('active')
    popup.classList.add('active')
}),

btnCerrarPopup.addEventListener('click', function(e){
    e.preventDefault();
    overlay.classList.remove('active')
    popup.classList.remove('active')
})
)
}

export default Popup;
