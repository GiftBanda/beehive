import Highway from '@dogstudio/highway';
import Fade from './transition';

const H = new Highway.Core({
    transitions: {
        default: Fade
    }
});

const active = document.querySelectorAll('.nav-links');

active.forEach(link => {
    link.addEventListener('click', changeActive)
});

 function changeActive(e) {
     removeBorder();
        this.classList.add('link-border');
}

function removeBorder(){
    active.forEach(link => link.classList.remove('link-border'));
}



