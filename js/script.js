/*===============================*/
/* GENERAL CODE */
/*===============================*/

const overlayHeader = document.getElementById('overlay-header');
const overlayFooter = document.getElementById('overlay-footer');

/*===============================*/
/* BUTTONS NAVBAR HEADER CODE */
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
overlayHeader.addEventListener('click', closeSidebar);

/*===============================*/
/* BUTTONS HINT HEADER CODE */
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
overlayHeader.addEventListener('click', closeHint);

//
//

const iconStates = [
  '', // empty
  '<ion-icon name="close-outline"></ion-icon>', // X
  '<ion-icon name="checkmark-outline"></ion-icon>', // Check
];

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.board-grid .cell').forEach((cell) => {
    cell.dataset.state = '0';
    cell.addEventListener('click', function () {
      let state = parseInt(this.dataset.state) || 0;
      state = (state + 1) % 3;
      this.dataset.state = state.toString();
      this.innerHTML = iconStates[state];
    });
  });
});

/*===============================*/
/* BUTTONS FOOTER CODE */
/*===============================*/

const openSuspectsBtn = document.getElementById('open-suspects-btn');
const suspectsContainer = document.getElementById('suspects-container');

const openLocalsBtn = document.getElementById('open-locals-btn');
const localsContainer = document.getElementById('locals-container');

const openWeaponsBtn = document.getElementById('open-weapons-btn');
const weaponsContainer = document.getElementById('weapons-container');

const closeFactorsBtn = document.getElementById('close-factors-btn');

// Função para fechar qualquer container aberto
function closeAnyOpenContainer() {
  if (suspectsContainer.classList.contains('show')) {
    suspectsContainer.classList.remove('show');
    suspectsContainer.setAttribute('inert', '');
    openSuspectsBtn.style.display = 'flex';
    openSuspectsBtn.setAttribute('aria-expanded', 'false');
  }
  if (localsContainer.classList.contains('show')) {
    localsContainer.classList.remove('show');
    localsContainer.setAttribute('inert', '');
    openLocalsBtn.style.display = 'flex';
    openLocalsBtn.setAttribute('aria-expanded', 'false');
  }
  if (weaponsContainer.classList.contains('show')) {
    weaponsContainer.classList.remove('show');
    weaponsContainer.setAttribute('inert', '');
    openWeaponsBtn.style.display = 'flex';
    openWeaponsBtn.setAttribute('aria-expanded', 'false');
  }
}

// Função para redefinir a ordem padrão dos botões
function resetButtonsOrder() {
  openSuspectsBtn.style.order = '1';
  openLocalsBtn.style.order = '2';
  openWeaponsBtn.style.order = '3';
  closeFactorsBtn.style.order = '4';
}

// Função para abrir Suspeitos
function openSuspects() {
  closeAnyOpenContainer(); // Fecha qualquer container aberto antes
  suspectsContainer.classList.add('show');
  suspectsContainer.removeAttribute('inert');
  openSuspectsBtn.style.display = 'none';
  openSuspectsBtn.setAttribute('aria-expanded', 'true');

  openSuspectsBtn.style.order = '4';
  openLocalsBtn.style.order = '2';
  openWeaponsBtn.style.order = '3';
  closeFactorsBtn.style.order = '1';

  closeFactorsBtn.style.display = 'flex';
}

// Função para abrir Locais
function openLocals() {
  closeAnyOpenContainer(); // Fecha qualquer container aberto antes
  localsContainer.classList.add('show');
  localsContainer.removeAttribute('inert');
  openLocalsBtn.style.display = 'none';
  openLocalsBtn.setAttribute('aria-expanded', 'true');

  openSuspectsBtn.style.order = '1';
  openLocalsBtn.style.order = '4';
  openWeaponsBtn.style.order = '3';
  closeFactorsBtn.style.order = '2';

  closeFactorsBtn.style.display = 'flex';
}

// Função para abrir Armas
function openWeapons() {
  closeAnyOpenContainer(); // Fecha qualquer container aberto antes
  weaponsContainer.classList.add('show');
  weaponsContainer.removeAttribute('inert');
  openWeaponsBtn.style.display = 'none';
  openWeaponsBtn.setAttribute('aria-expanded', 'true');

  openSuspectsBtn.style.order = '1';
  openLocalsBtn.style.order = '2';
  openWeaponsBtn.style.order = '4';
  closeFactorsBtn.style.order = '3';

  closeFactorsBtn.style.display = 'flex';
}

// Função para fechar tudo
function closeFactors() {
  closeAnyOpenContainer();
  resetButtonsOrder();
  closeFactorsBtn.style.display = 'none';
}

// Event Listeners
openSuspectsBtn.addEventListener('click', openSuspects);
openLocalsBtn.addEventListener('click', openLocals);
openWeaponsBtn.addEventListener('click', openWeapons);
closeFactorsBtn.addEventListener('click', closeFactors);
overlayFooter.addEventListener('click', closeFactors);
