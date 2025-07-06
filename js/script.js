const presidentes = [

    "Deodoro da Fonseca",
    "Floriano Peixoto",
    "Prudente de Morais",
    "Campos Sales",
 /*
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
    "Lula da Silva (Atual)"

*/
];

const presidentesData = [

    { nome: "Deodoro da Fonseca", nomeCompleto: "Manuel Deodoro da Fonseca", imagem: "imagens/fotos/1.png", inicio: "1889", fim: "1891" },
    { nome: "Floriano Peixoto", nomeCompleto: "Floriano Vieira Peixoto", imagem: "imagens/fotos/2.png", inicio: "1891", fim: "1894" },
    { nome: "Prudente de Morais", nomeCompleto: "Prudente José de Morais Barros", imagem: "imagens/fotos/3.png", inicio: "1894", fim: "1898" },
    { nome: "Campos Sales", nomeCompleto: "Manuel Ferraz de Campos Sales", imagem: "imagens/fotos/4.png", inicio: "1898", fim: "1902" },
/*   
    { nome: "Rodrigues Alves", nomeCompleto: "Francisco de Paula Rodrigues Alves", imagem: "imagens/fotos/5.png", inicio: "1902", fim: "1906" },
    { nome: "Afonso Pena", nomeCompleto: "Afonso Augusto Moreira Pena", imagem: "imagens/fotos/6.png", inicio: "1906", fim: "1909" },
    { nome: "Nilo Peçanha", nomeCompleto: "Nilo Procópio Peçanha", imagem: "imagens/fotos/7.png", inicio: "1909", fim: "1910" },
    { nome: "Hermes da Fonseca", nomeCompleto: "Hermes Rodrigues da Fonseca", imagem: "imagens/fotos/8.png", inicio: "1910", fim: "1914" },
    { nome: "Venceslau Brás", nomeCompleto: "Venceslau Brás Pereira Gomes", imagem: "imagens/fotos/9.png", inicio: "1914", fim: "1918" },
    { nome: "Delfim Moreira", nomeCompleto: "Delfim Moreira da Costa Ribeiro", imagem: "imagens/fotos/10.png", inicio: "1918", fim: "1919" },
    { nome: "Epitácio Pessoa", nomeCompleto: "Epitácio Lindolfo da Silva Pessoa", imagem: "imagens/fotos/11.png", inicio: "1919", fim: "1922" },
    { nome: "Artur Bernardes", nomeCompleto: "Artur da Silva Bernardes", imagem: "imagens/fotos/12.png", inicio: "1922", fim: "1926" },
    { nome: "Washington Luís", nomeCompleto: "Washington Luís Pereira de Sousa", imagem: "imagens/fotos/13.png", inicio: "1926", fim: "1930" },
    { nome: "Getúlio Vargas (1930–1945)", nomeCompleto: "Getúlio Dornelles Vargas", imagem: "imagens/fotos/14.png", inicio: "1930", fim: "1945" },
    { nome: "José Linhares", nomeCompleto: "José Linhares", imagem: "imagens/fotos/15.png", inicio: "1945", fim: "1946" },
    { nome: "Eurico Gaspar Dutra", nomeCompleto: "Eurico Gaspar Dutra", imagem: "imagens/fotos/16.png", inicio: "1946", fim: "1951" },
    { nome: "Getúlio Vargas (1951–1954)", nomeCompleto: "Getúlio Dornelles Vargas", imagem: "imagens/fotos/17.png", inicio: "1951", fim: "1954" },
    { nome: "Café Filho", nomeCompleto: "João Fernandes Campos Café Filho", imagem: "imagens/fotos/18.png", inicio: "1954", fim: "1955" },
    { nome: "Carlos Luz", nomeCompleto: "Carlos Coimbra da Luz", imagem: "imagens/fotos/19.png", inicio: "1955", fim: "1955" },
    { nome: "Nereu Ramos", nomeCompleto: "Nereu de Oliveira Ramos", imagem: "imagens/fotos/20.png", inicio: "1955", fim: "1956" },
    { nome: "Juscelino Kubitschek", nomeCompleto: "Juscelino Kubitschek de Oliveira", imagem: "imagens/fotos/21.png", inicio: "1956", fim: "1961" },
    { nome: "Jânio Quadros", nomeCompleto: "Jânio da Silva Quadros", imagem: "imagens/fotos/22.png", inicio: "1961", fim: "1961" },
    { nome: "Ranieri Mazzilli (1ª vez)", nomeCompleto: "Pascoal Ranieri Mazzilli", imagem: "imagens/fotos/23.png", inicio: "1961", fim: "1961" },
    { nome: "João Goulart", nomeCompleto: "João Belchior Marques Goulart", imagem: "imagens/fotos/24.png", inicio: "1961", fim: "1964" },
    { nome: "Ranieri Mazzilli (2ª vez)", nomeCompleto: "Pascoal Ranieri Mazzilli", imagem: "imagens/fotos/25.png", inicio: "1964", fim: "1964" },
    { nome: "Castelo Branco", nomeCompleto: "Humberto de Alencar Castelo Branco", imagem: "imagens/fotos/26.png", inicio: "1964", fim: "1967" },
    { nome: "Costa e Silva", nomeCompleto: "Artur da Costa e Silva", imagem: "imagens/fotos/27.png", inicio: "1967", fim: "1969" },
    { nome: "Emílio Garrastazu Médici", nomeCompleto: "Emílio Garrastazu Médici", imagem: "imagens/fotos/28.png", inicio: "1969", fim: "1974" },
    { nome: "Ernesto Geisel", nomeCompleto: "Ernesto Beckmann Geisel", imagem: "imagens/fotos/29.png", inicio: "1974", fim: "1979" },
    { nome: "João Figueiredo", nomeCompleto: "João Baptista de Oliveira Figueiredo", imagem: "imagens/fotos/30.png", inicio: "1979", fim: "1985" },
    { nome: "José Sarney", nomeCompleto: "José Sarney de Araújo Costa", imagem: "imagens/fotos/31.png", inicio: "1985", fim: "1990" },
    { nome: "Fernando Collor", nomeCompleto: "Fernando Affonso Collor de Mello", imagem: "imagens/fotos/32.png", inicio: "1990", fim: "1992" },
    { nome: "Itamar Franco", nomeCompleto: "Itamar Augusto Cautiero Franco", imagem: "imagens/fotos/33.png", inicio: "1992", fim: "1995" },
    { nome: "Fernando Henrique Cardoso", nomeCompleto: "Fernando Henrique Cardoso", imagem: "imagens/fotos/34.png", inicio: "1995", fim: "2003" },
    { nome: "Luiz Inácio Lula da Silva", nomeCompleto: "Luiz Inácio Lula da Silva", imagem: "imagens/fotos/35.png", inicio: "2003", fim: "2011" },
    { nome: "Dilma Rousseff", nomeCompleto: "Dilma Vana Rousseff", imagem: "imagens/fotos/36.png", inicio: "2011", fim: "2016" },
    { nome: "Michel Temer", nomeCompleto: "Michel Miguel Elias Temer Lulia", imagem: "imagens/fotos/37.png", inicio: "2016", fim: "2019" },
    { nome: "Jair Bolsonaro", nomeCompleto: "Jair Messias Bolsonaro", imagem: "imagens/fotos/38.png", inicio: "2019", fim: "2023" },
    { nome: "Lula da Silva (Atual)", nomeCompleto: "Luiz Inácio Lula da Silva", imagem: "imagens/fotos/39.png", inicio: "2023", fim: "Atual" }
*/
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

function esconderTitulos() {
    const h1s = document.getElementsByTagName('h1');
    const h2s = document.getElementsByTagName('h2');

    for (let h1 of h1s) {
        h1.style.display = 'none';
    }

    for (let h2 of h2s) {
        h2.style.display = 'none';
    }
}

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
    presidentes.forEach((name) => {
        const div = document.createElement('div');
        div.className = 'item';
        div.setAttribute('data-name', name);
        div.setAttribute('data-hover', limparNome(name)); // Mantém compatibilidade, se necessário

        // Busca os dados corretos na lista de presidentesData
        const presidenteInfo = presidentesData.find(p => limparNome(p.nome) === limparNome(name));

        const img = document.createElement('img');
        img.src = presidenteInfo ? presidenteInfo.imagem : '';
        img.alt = name;

        const label = document.createElement('div');
        label.className = 'presidente-nome';
        label.textContent = limparNome(name);

        div.appendChild(img);
        div.appendChild(label);

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

    let shuffled;
do {
    shuffled = shuffle([...presidentes]);
} while (shuffled.every((nome, i) => limparNome(nome) === limparNome(ordem[i])));


    shuffled.forEach((name) => {
        const div = document.createElement('div');
        div.className = 'item';
        div.classList.add('noclick'); // Marca como "nunca clicado"
        div.setAttribute('data-name', name);
        div.setAttribute('data-hover', limparNome(name));

      const presidenteInfo = presidentesData.find(p => limparNome(p.nome) === limparNome(name));
if (!presidenteInfo) {
    console.warn('Presidente não encontrado:', name);
}

        const img = document.createElement('img');
        img.src = presidenteInfo ? presidenteInfo.imagem : '';
        img.alt = name;

        const label = document.createElement('div');
        label.className = 'presidente-nome';
        label.textContent = limparNome(name);

        div.appendChild(img);
        div.appendChild(label);

        div.addEventListener('click', () => {
            if (locked) return;
            handleStepClick(div, name);
        });

        gameContainer.appendChild(div);
    });

    checkOrder();
}



   function handleStepClick(item, name) {
    if (locked) return;

    item.classList.remove('noclick');

    // Atualiza o currentStep pulando itens já corretos
    while (
        currentStep < ordem.length &&
        gameContainer.children[currentStep]?.dataset.name &&
        limparNome(gameContainer.children[currentStep].dataset.name) === limparNome(ordem[currentStep])
    ) {
        currentStep++;
    }

    const esperado = limparNome(ordem[currentStep]);
    const clicado = limparNome(name);

    if (clicado === esperado) {
        const placeholder = gameContainer.children[currentStep];

        // Scroll suave até o lugar correto
        if (placeholder) {
            placeholder.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }

        // Cria novo elemento com classe .correct
const destino = document.createElement('div');
destino.className = 'item correct';
destino.setAttribute('data-name', name);
destino.setAttribute('data-hover', limparNome(name));

const img = document.createElement('img');
img.src = item.querySelector('img').src;
img.alt = name;

const label = document.createElement('div');
label.className = 'presidente-nome';
label.textContent = limparNome(name);

destino.appendChild(img);
destino.appendChild(label); // ✅ adiciona o nome também


        // Efeito de saída suave
        item.classList.add('fade-out');

        setTimeout(() => {
            // Remove a peça errada clicada
            gameContainer.removeChild(item);

            // Insere o item correto na posição
            gameContainer.insertBefore(destino, placeholder);
            currentStep++;

            // Limpa erros visuais anteriores
            const erros = document.querySelectorAll('.sutil-erro:not(.correct)');
            erros.forEach(el => el.classList.remove('sutil-erro'));

            // Marca próximos que já estão certos
            while (
                currentStep < presidentes.length &&
                limparNome(gameContainer.children[currentStep]?.getAttribute('data-name')) === limparNome(ordem[currentStep])
            ) {
                gameContainer.children[currentStep].classList.add('correct');
                currentStep++;
            }

            // Reaplica .noclick apenas nas peças ainda erradas
const todas = [...gameContainer.children];
todas.forEach(el => {
    el.classList.remove('noclick');
    if (!el.classList.contains('correct')) {
        el.classList.add('noclick');
    }
});


            checkOrder();

            if (currentStep === presidentes.length) {
                message.textContent = "🎉 Ordem e Progresso! Você concluiu com excelência!";
                animateSequenceBeforePresentation(startPresentation);
            }
        }, 300);
    } else {
        // Marca visualmente o erro clicado
        item.classList.add('sutil-erro');
    }
}


function checkOrder() {
    const items = [...gameContainer.children];
    const current = items.map(el => limparNome(el.getAttribute('data-name')));
    const correct = presidentes.map(limparNome);

    let tudoCertoAteAqui = true;

    items.forEach((el, i) => {
        const name = current[i];
        const esperado = correct[i];

        if (tudoCertoAteAqui && name === esperado) {
            el.classList.add('correct');
            el.classList.remove('incorrect');
        } else {
            tudoCertoAteAqui = false;
            el.classList.remove('correct');
            el.classList.add('incorrect');
        }
    });

    if (tudoCertoAteAqui) {
        message.textContent = "🎉 Ordem e Progresso! Você concluiu com excelência!";
        animateSequenceBeforePresentation(startPresentation);
    } else {
        message.textContent = "";
    }
}
function startGame() {
   
    esconderTitulos();
    startMusic();
    ordemContainer.style.display = 'none';
    startBtn.style.display = 'none';
    gameContainer.style.display = 'grid';
    restartBtn.style.display = 'inline-block';
    createGame();
}

function restartGame() {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    message.textContent = '';

    bgMusic.pause();          // ⏸ Garante que pare antes
    bgMusic.currentTime = 0;  // 🔁 Reinicia do começo
    musicStarted = false;     // 🔄 Permite tocar novamente
    startMusic();             // ▶️ Toca do início

    createGame();
}


showOrder();

function animateSequenceBeforePresentation(callback) {
     bgMusic.pause();
    endMusic.play();
    const correctItems = [...document.querySelectorAll('#game .item.correct')];
    let i = 0;

    function highlightNext() {
        if (i >= correctItems.length) {
            return callback();
        }

        const item = correctItems[i];
        
        // Faz o scroll até o item atual
        item.scrollIntoView({ behavior: 'smooth', block: 'center' });

        item.classList.add('hover-fake');

        setTimeout(() => {
            item.classList.remove('hover-fake');
            i++;
            setTimeout(highlightNext, 30); // tempo entre cada item
        }, 150); // tempo de destaque de cada item
    }

    highlightNext();
}

const presentation = document.getElementById('presentation');
const presentationImg = document.getElementById('presentation-img');
const presentationInfo = document.getElementById('presentation-info');
const endMusic = document.getElementById('endMusic');

function startPresentation() {
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
        const nomeApresentado = p.nomeCompleto || p.nome;
        presentationInfo.innerHTML = `<strong>${nomeApresentado}</strong><br>${p.inicio} - ${p.fim}`;

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

window.addEventListener('pagehide', () => {
  bgMusic.pause();
  bgMusic.currentTime = 0;
});

window.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'hidden') {
    bgMusic.pause();
    bgMusic.currentTime = 0;
  }
});





