import cardsFood from "./menu.json"

import toggleTheme from "./createTheme"
import createMurkupList from "./createMurkup"


const listFoodEl = document.querySelector('.js-menu');


const createMurkup = createMurkupList(cardsFood);
listFoodEl.insertAdjacentHTML('afterbegin', createMurkup);

const savedTheme = localStorage.getItem('createTheme');

document.body.classList.add(savedTheme);

const toggleSwitchTheme = document.querySelector('#theme-switch-toggle')

toggleSwitchTheme.addEventListener('click', toggleTheme);
