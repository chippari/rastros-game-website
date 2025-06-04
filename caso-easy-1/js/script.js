/*===============================*/
/* GENERAL CODE */
/*===============================*/

const overlayHeader = document.getElementById('overlay-header');
const overlayFooter = document.getElementById('overlay-footer');

/*===============================*/
/* NAVBAR HEADER BUTTONS CODE */
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
/* HINT HEADER BUTTONS CODE */
/*===============================*/

const openHintBtn = document.getElementById('open-hint-btn');
const closeHintBtn = document.getElementById('close-hint-btn');
const hintContainer = document.getElementById('hint-container');

// Overlay elements
const overlayHint = document.getElementById('overlay-hint');
const confirmHintBtn = document.getElementById('confirm-hint-btn');
const cancelHintBtn = document.getElementById('cancel-hint-btn');

function showHint() {
  hintContainer.classList.add('show');
  openHintBtn.setAttribute('aria-expanded', 'true');
  hintContainer.removeAttribute('inert');
}

function hideHint() {
  hintContainer.classList.remove('show');
  openHintBtn.setAttribute('aria-expanded', 'false');
  hintContainer.setAttribute('inert', '');
}

function openHintOverlay() {
  overlayHint.style.display = 'flex';
}

function closeHintOverlay() {
  overlayHint.style.display = 'none';
}

// Ao clicar no botão de abrir dica, mostra o overlay de confirmação
openHintBtn.addEventListener('click', function (e) {
  e.preventDefault();
  openHintOverlay();
});

// Ao confirmar, mostra a dica e fecha o overlay
confirmHintBtn.addEventListener('click', function () {
  closeHintOverlay();
  showHint();
});

// Ao cancelar, apenas fecha o overlay
cancelHintBtn.addEventListener('click', function () {
  closeHintOverlay();
});

closeHintBtn.addEventListener('click', hideHint);
overlayHeader.addEventListener('click', hideHint);

/*===============================*/
/* GAME GRID ICONS CODE */
/*===============================*/

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
/* FOOTER BUTTONS CODE */
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

/*===============================*/
/* GAME WIN OR LOST BUTTON CODE */
/*===============================*/

// Defina a combinação correta aqui
const correctAnswer = {
  suspect: 'aurelion',
  weapon: 'vela',
  location: 'banheiro',
};

document.querySelector('.confirm-btn').addEventListener('click', function (e) {
  e.preventDefault();

  // Obtenha os valores do formulário
  const suspect = document.getElementById('select-suspect').value;
  const weapon = document.getElementById('select-weapons').value;
  const location = document.getElementById('select-locals').value;

  // Overlay elements
  const overlay = document.getElementById('overlay-result');
  const title = document.getElementById('result-title');
  const message = document.getElementById('result-message');
  const btns = document.getElementById('overlay-buttons');

  // Verifica se todos campos foram preenchidos
  if (!suspect || !weapon || !location) {
    title.textContent = 'Complete tudo!';
    message.textContent =
      'Você precisa preencher todas as opções antes de confirmar.';
    btns.innerHTML = `<button onclick="document.getElementById('overlay-result').style.display='none'">OK</button>`;
    overlay.style.display = 'flex';
    return;
  }

  // Verificar combinação
  if (
    suspect === correctAnswer.suspect &&
    weapon === correctAnswer.weapon &&
    location === correctAnswer.location
  ) {
    title.textContent = 'Parabéns!';
    message.textContent = 'Você acertou o caso!';
    btns.innerHTML = `
      <button onclick="window.location.href='/index.html'">Menu</button>
      <button onclick="proximoCaso()">Jogar Próximo</button>
    `;
    overlay.style.display = 'flex';
  } else {
    title.textContent = 'Que pena!';
    message.textContent = 'Você errou o caso. Tente novamente.';
    btns.innerHTML = `
      <button onclick="window.location.href='/index.html'">Menu</button>
      <button onclick="jogarNovamente()">Jogar Novamente</button>
    `;
    overlay.style.display = 'flex';
  }
});

// Funções para "Jogar Próximo" e "Jogar Novamente"
function proximoCaso() {
  // Troque pelo link da próxima fase ou recarregue a página/novo caso
  window.location.href = 'proximo.html'; // ajuste o link!
}

function jogarNovamente() {
  document.getElementById('overlay-result').style.display = 'none';
  document.getElementById('select-suspect').value = '';
  document.getElementById('select-weapons').value = '';
  document.getElementById('select-locals').value = '';
}
