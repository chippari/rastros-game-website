/*===============================*/
/* GENERAL CODE */
/*===============================*/

const overlay = document.getElementById('overlay');

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
overlay.addEventListener('click', closeSidebar);

/*===============================*/
/* BUTTONS HINT CODE */
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
overlay.addEventListener('click', closeHint);

/*===============================*/
/* BUTTONS SUSPECTS CODE */
/*===============================*/

const openSuspectsBtn = document.getElementById('open-suspects-btn');
const closeSuspectsBtn = document.getElementById('open-suspects-btn');
const suspectsContainer = document.getElementById('suspects-container');

function openSuspects() {
  suspectsContainer.classList.add('show');
  openSuspectsBtn.setAttribute('aria-expanded', 'true');
  suspectsContainer.removeAttribute('inert');
}

function closeSuspects() {
  suspectsContainer.classList.remove('show');
  openSuspectsBtn.setAttribute('aria-expanded', 'false');
  suspectsContainer.setAttribute('inert', '');
}

openSuspectsBtn.addEventListener('click', openSuspects);
// closeSuspectsBtn.addEventListener('click', closeSuspects);
