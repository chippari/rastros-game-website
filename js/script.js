/*===============================*/
/* BUTTONS NAVBAR CODE */
/*===============================*/

const openBtn = document.getElementById('open-sidebar-btn');
const closeBtn = document.getElementById('close-sidebar-btn');
const navbar = document.getElementById('navbar');

function openSidebar() {
  navbar.classList.add('show');
  openBtn.setAttribute('aria-expanded', 'true');
  navbar.removeAttribute('inert');
}

function closeSidebar() {
  navbar.classList.remove('show');
  openBtn.setAttribute('aria-expanded', 'false');
  navbar.setAttribute('inert', '');
}

openBtn.addEventListener('click', openSidebar);
closeBtn.addEventListener('click', closeSidebar);

/*===============================*/
/* BUTTONS Hint CODE */
/*===============================*/

const openHintBtn = document.getElementById('open-hint-btn');
const closeHintBtn = document.getElementById('close-hint-btn');
const hintContainer = document.getElementById('hint-container');

function openHint() {
  hintContainer.classList.add('show');
  openHintBtn.setAttribute('aria-expanded', 'true');
  hintContainer.removeAttribute('inert');
}

function closeHint() {
  hintContainer.classList.remove('show');
  openHintBtn.setAttribute('aria-expanded', 'false');
  hintContainer.setAttribute('inert', '');
}

openHintBtn.addEventListener('click', openHint);
closeHintBtn.addEventListener('click', closeHint);
