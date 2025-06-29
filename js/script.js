const presidentes = [

    "Deodoro da Fonseca",
    "Floriano Peixoto",
    "Prudente de Morais",
    "Campos Sales",
    "Rodrigues Alves",
    "Afonso Pena",
    "Nilo Peçanha",
    "Hermes da Fonseca",
    "Venceslau Brás",
    "Delfim Moreira",
    "Epitácio Pessoa",
    "Artur Bernardes",
    "Washington Luís",
    "Getúlio Vargas (1930–1945)",
    "José Linhares",
    "Eurico Gaspar Dutra",
    "Getúlio Vargas (1951–1954)",
    "Café Filho",
    "Carlos Luz",
    "Nereu Ramos",

    "Juscelino Kubitschek",
    "Jânio Quadros",
    "Ranieri Mazzilli (1ª vez)",
    "João Goulart",
    "Ranieri Mazzilli (2ª vez)",

    "Castelo Branco",
    "Costa e Silva",
    "Emílio Garrastazu Médici",
    "Ernesto Geisel",
    "João Figueiredo",
    "José Sarney",
    "Fernando Collor",
    "Itamar Franco",
    "Fernando Henrique Cardoso",
    "Luiz Inácio Lula da Silva",
    "Dilma Rousseff",
    "Michel Temer",
    "Jair Bolsonaro",
    "Luiz Inácio Lula da Silva (Atual)"
  

];

const presidentesData = [
  
    { nome: "Deodoro da Fonseca", imagem: "imagens/1.png", inicio: "1889", fim: "1891" },
    { nome: "Floriano Peixoto", imagem: "imagens/2.png", inicio: "1891", fim: "1894" },
    { nome: "Prudente de Morais", imagem: "imagens/3.png", inicio: "1894", fim: "1898" },
    { nome: "Campos Sales", imagem: "imagens/4.png", inicio: "1898", fim: "1902" },
    { nome: "Rodrigues Alves", imagem: "imagens/5.png", inicio: "1902", fim: "1906" },
     
    
    { nome: "Afonso Pena", imagem: "imagens/6.png", inicio: "1906", fim: "1909" },
    { nome: "Nilo Peçanha", imagem: "imagens/7.png", inicio: "1909", fim: "1910" },
    { nome: "Hermes da Fonseca", imagem: "imagens/8.png", inicio: "1910", fim: "1914" },
    { nome: "Venceslau Brás", imagem: "imagens/9.png", inicio: "1914", fim: "1918" },
    { nome: "Delfim Moreira", imagem: "imagens/10.png", inicio: "1918", fim: "1919" },
    { nome: "Epitácio Pessoa", imagem: "imagens/11.png", inicio: "1919", fim: "1922" },
    { nome: "Artur Bernardes", imagem: "imagens/12.png", inicio: "1922", fim: "1926" },
    { nome: "Washington Luís", imagem: "imagens/13.png", inicio: "1926", fim: "1930" },
    { nome: "Getúlio Vargas (1930–1945)", imagem: "imagens/14.png", inicio: "1930", fim: "1945" },
    { nome: "José Linhares", imagem: "imagens/15.png", inicio: "1945", fim: "1946" },
    { nome: "Eurico Gaspar Dutra", imagem: "imagens/16.png", inicio: "1946", fim: "1951" },
    { nome: "Getúlio Vargas (1951–1954)", imagem: "imagens/17.png", inicio: "1951", fim: "1954" },
    { nome: "Café Filho", imagem: "imagens/18.png", inicio: "1954", fim: "1955" },
    { nome: "Carlos Luz", imagem: "imagens/19.png", inicio: "1955", fim: "1955" },
    { nome: "Nereu Ramos", imagem: "imagens/20.png", inicio: "1955", fim: "1956" },

    { nome: "Juscelino Kubitschek", imagem: "imagens/21.png", inicio: "1956", fim: "1961" },
    { nome: "Jânio Quadros", imagem: "imagens/22.png", inicio: "1961", fim: "1961" },
    { nome: "Ranieri Mazzilli (1ª vez)", imagem: "imagens/23.png", inicio: "1961", fim: "1961" },
    { nome: "João Goulart", imagem: "imagens/24.png", inicio: "1961", fim: "1964" },
    { nome: "Ranieri Mazzilli (2ª vez)", imagem: "imagens/25.png", inicio: "1964", fim: "1964" },


    { nome: "Castelo Branco", imagem: "imagens/26.png", inicio: "1964", fim: "1967" },
    { nome: "Costa e Silva", imagem: "imagens/27.png", inicio: "1967", fim: "1969" },
    { nome: "Emílio Garrastazu Médici", imagem: "imagens/28.png", inicio: "1969", fim: "1974" },
    { nome: "Ernesto Geisel", imagem: "imagens/29.png", inicio: "1974", fim: "1979" },
    { nome: "João Figueiredo", imagem: "imagens/30.png", inicio: "1979", fim: "1985" },
    { nome: "José Sarney", imagem: "imagens/31.png", inicio: "1985", fim: "1990" },
    { nome: "Fernando Collor", imagem: "imagens/32.png", inicio: "1990", fim: "1992" },
    { nome: "Itamar Franco", imagem: "imagens/33.png", inicio: "1992", fim: "1995" },
    { nome: "Fernando Henrique Cardoso", imagem: "imagens/34.png", inicio: "1995", fim: "2003" },
    { nome: "Luiz Inácio Lula da Silva", imagem: "imagens/35.png", inicio: "2003", fim: "2011" },
    { nome: "Dilma Rousseff", imagem: "imagens/36.png", inicio: "2011", fim: "2016" },
    { nome: "Michel Temer", imagem: "imagens/37.png", inicio: "2016", fim: "2019" },
    { nome: "Jair Bolsonaro", imagem: "imagens/38.png", inicio: "2019", fim: "2023" },
    { nome: "Luiz Inácio Lula da Silva (Atual)", imagem: "imagens/39.png", inicio: "2023", fim: "Atual" }
     
     
];

const ordemContainer = document.getElementById('ordem');
const gameContainer = document.getElementById('game');
const message = document.getElementById('message');
const startBtn = document.getElementById('startBtn');
const restartBtn = document.getElementById('restartBtn');
const bgMusic = document.getElementById('bgMusic');

let ordem = [...presidentes]; // ordem correta
let currentStep = 0;
let locked = false;

let musicStarted = false;

function limparNome(nome) {
    // Apenas Mazzilli deve ignorar o conteúdo entre parênteses
    if (nome.startsWith("Ranieri Mazzilli")) {
        return "Ranieri Mazzilli";
    }
    return nome.trim();
}


function startMusic() {
    if (!musicStarted) {
        bgMusic.volume = 0.4;
        bgMusic.play().catch(() => {
            console.log('Clique para iniciar a música.');
        });
        musicStarted = true;
    }
}

function showOrder() {
    ordemContainer.innerHTML = '';
    presidentes.forEach((name, index) => {
        const div = document.createElement('div');
        div.className = 'item';
        div.setAttribute('data-name', name);
        div.setAttribute('data-hover', limparNome(name)); // ✅ Aqui agora está certo!

        const img = document.createElement('img');
        img.src = `imagens/${index + 1}.png`;
        img.alt = name;

        div.appendChild(img);
        ordemContainer.appendChild(div);
    });
}


function shuffle(array) {
    return array.map(value => ({ value, sort: Math.random() }))
                .sort((a, b) => a.sort - b.sort)
                .map(({ value }) => value);
}

let selectedItem = null;


function createGame() {
    gameContainer.innerHTML = '';
    message.textContent = '';
    selectedItem = null;
    currentStep = 0;
    locked = false;

    const shuffled = shuffle([...presidentes]);

    shuffled.forEach((name) => {
        const div = document.createElement('div');
        div.className = 'item';
        div.setAttribute('data-name', name);
        div.setAttribute('data-hover', limparNome(name));

        const img = document.createElement('img');
        img.src = `imagens/${presidentes.indexOf(name) + 1}.png`;
        img.alt = name;

        div.appendChild(img);

        div.addEventListener('click', () => {
            if (locked) return;
            handleStepClick(div, name);
        });

        gameContainer.appendChild(div);
    });

    checkOrder();
}

function handleStepClick(item, name) {
    const esperado = limparNome(ordem[currentStep]);
    const clicado = limparNome(name);

    if (clicado === esperado) {
        // move para posição correta
        const destino = document.createElement('div');
        destino.className = 'item correct';
        destino.setAttribute('data-name', name);
        destino.setAttribute('data-hover', limparNome(name));

        const img = document.createElement('img');
        img.src = item.querySelector('img').src;
        img.alt = name;
        destino.appendChild(img);

        const oldItem = item;
        oldItem.classList.add('fade-out');

        setTimeout(() => {
            gameContainer.removeChild(oldItem);
            gameContainer.insertBefore(destino, gameContainer.children[currentStep]);
            currentStep++;

            // 👉 Verifica se as próximas peças já estão corretas e avança automaticamente
            while (
                currentStep < presidentes.length &&
                limparNome(gameContainer.children[currentStep]?.getAttribute('data-name')) === limparNome(ordem[currentStep])
            ) {
                gameContainer.children[currentStep].classList.add('correct');
                currentStep++;
            }

            checkOrder();

            if (currentStep === presidentes.length) {
                message.textContent = "🎉 Ordem e Progresso! Você concluiu com excelência!";
                startPresentation();
            }
        }, 300);
    } else {
        item.classList.add('sutil-erro');
        setTimeout(() => {
            item.classList.remove('sutil-erro');
        }, 600);
    }
}





   function handleStepClick(item, name) {
    const esperado = limparNome(ordem[currentStep]);
    const clicado = limparNome(name);

    if (clicado === esperado) {
        // Elemento de destino ainda vazio no DOM
        const placeholder = gameContainer.children[currentStep];

        // 👉 Faz a rolagem até a casa de destino
        if (placeholder) {
            placeholder.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }

        // move para posição correta
        const destino = document.createElement('div');
        destino.className = 'item correct';
        destino.setAttribute('data-name', name);
        destino.setAttribute('data-hover', limparNome(name));

        const img = document.createElement('img');
        img.src = item.querySelector('img').src;
        img.alt = name;
        destino.appendChild(img);

        const oldItem = item;
        oldItem.classList.add('fade-out');

        setTimeout(() => {
            gameContainer.removeChild(oldItem);
            gameContainer.insertBefore(destino, placeholder);
            currentStep++;

            // 👉 Pula próximos já corretos
            while (
                currentStep < presidentes.length &&
                limparNome(gameContainer.children[currentStep]?.getAttribute('data-name')) === limparNome(ordem[currentStep])
            ) {
                gameContainer.children[currentStep].classList.add('correct');
                currentStep++;
            }

            checkOrder();

            if (currentStep === presidentes.length) {
                message.textContent = "🎉 Ordem e Progresso! Você concluiu com excelência!";
                startPresentation();
            }
        }, 300);
    } else {
        item.classList.add('sutil-erro');
        setTimeout(() => {
            item.classList.remove('sutil-erro');
        }, 600);
    }
}




function checkOrder() {
    const items = [...gameContainer.children];
    const current = items.map(el => limparNome(el.getAttribute('data-name')));
    const correct = presidentes.map(limparNome);

    let isCorrect = true;

    items.forEach((el, i) => {
        const name = current[i];
        if (name === correct[i]) {
            el.classList.add('correct');
            el.classList.remove('incorrect');
        } else {
            el.classList.remove('correct');
            el.classList.add('incorrect');
            isCorrect = false;
        }
    });

    if (isCorrect) {
        message.textContent = "🎉 Ordem e Progresso! Você concluiu com excelência!";
        startPresentation();
    } else {
        message.textContent = "";
    }
}




function startGame() {
    startMusic();
    ordemContainer.style.display = 'none';
    startBtn.style.display = 'none';
    gameContainer.style.display = 'grid';
    restartBtn.style.display = 'inline-block';
    createGame();
}

function restartGame() {
    message.textContent = '';
    createGame();
}

showOrder();

const presentation = document.getElementById('presentation');
const presentationImg = document.getElementById('presentation-img');
const presentationInfo = document.getElementById('presentation-info');
const endMusic = document.getElementById('endMusic');

function startPresentation() {
    bgMusic.pause();
    endMusic.play();
    presentation.style.display = 'flex';
    let index = 0;

    function showNext() {
        if (index >= presidentesData.length) {
            presentationInfo.innerHTML = "🎉 Parabéns! Você completou a ordem dos Presidentes do Brasil!";
            presentationImg.style.display = 'none';
            return;
        }

        const p = presidentesData[index];
        presentationImg.src = p.imagem;
        presentationImg.style.display = 'block';
        presentationInfo.innerHTML = `<strong>${p.nome}</strong><br>${p.inicio} - ${p.fim}`;
        index++;

        setTimeout(showNext, 4000);
    }

    showNext();
}

function exitPresentation() {
    presentation.style.display = 'none';
    endMusic.pause();
    endMusic.currentTime = 0;
    restartGame();
}




