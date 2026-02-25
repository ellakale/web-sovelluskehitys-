import '../css/style.css';
import '../css/mobile.css';

let name = localStorage.getItem('name');
document.querySelector('.username').textContent = name ? name : 'vieras';
