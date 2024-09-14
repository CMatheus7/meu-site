// Seleciona o carrossel e seus itens
const carousel = document.getElementById("homeCarroce");
const items = carousel.querySelectorAll(".carousel-item");
const prevButton = document.querySelector(".carousel-control-prev");
const nextButton = document.querySelector(".carousel-control-next");

let currentItem = 0; // Índice do item atual
let intervalId; // ID do intervalo para rotação automática

// Função para exibir o item no índice fornecido
function showItem(index) {
  items.forEach((item, i) => {
    item.classList.remove("active"); // Remove a classe 'active' de todos os itens
  });
  items[index].classList.add("active"); // Adiciona a classe 'active' ao item atual
}

// Função para rotação automática dos itens
function autoSlide() {
  currentItem = (currentItem + 1) % items.length; // Avança para o próximo item
  showItem(currentItem);
}

// Adiciona o evento de clique ao botão 'anterior'
prevButton.addEventListener("click", () => {
  currentItem = (currentItem - 1 + items.length) % items.length; // Volta para o item anterior
  showItem(currentItem);
  clearInterval(intervalId); // Pausa a rolagem automática ao clicar nos botões
});

// Adiciona o evento de clique ao botão 'próximo'
nextButton.addEventListener("click", () => {
  currentItem = (currentItem + 1) % items.length; // Avança para o próximo item
  showItem(currentItem);
  clearInterval(intervalId); // Pausa a rolagem automática ao clicar nos botões
});

// Inicia a rolagem automática a cada 2,5 segundos (ajuste o valor conforme necessário)
intervalId = setInterval(autoSlide, 2500);

// script.js

// Aguarda o carregamento do conteúdo da página
document.addEventListener("DOMContentLoaded", () => {
  const carrinhoButton = document.querySelector("header .meu-carrinho");
  const carrinhoSection = document.querySelector("header #carrinho-side");
  const fecharCarrinhoButton = document.querySelector("header .fecharCarrinho");

  // Função para abrir o carrinho
  function abrirCarrinho() {
    carrinhoSection.style.display = "block"; // Mostra a seção do carrinho
    document.querySelector("header #menu-carrinho").style.display = "block"; // Mostra a sobreposição
  }

  // Função para fechar o carrinho
  function fecharCarrinho() {
    carrinhoSection.style.display = "none"; // Oculta a seção do carrinho
    document.querySelector("header #menu-carrinho").style.display = "none"; // Oculta a sobreposição
  }

  // Adiciona o evento de clique ao botão do carrinho
  carrinhoButton.addEventListener("click", () => {
    // Alterna a visibilidade do carrinho
    if (carrinhoSection.style.display === "block") {
      fecharCarrinho();
    } else {
      abrirCarrinho();
    }
  });

  // Adiciona o evento de clique ao botão de fechar
  fecharCarrinhoButton.addEventListener("click", fecharCarrinho);

  // Garantir que o carrinho esteja oculto ao carregar a página
  carrinhoSection.style.display = "none";
  document.querySelector("header #menu-carrinho").style.display = "none";
});

// script.js

// Aguarda o carregamento do conteúdo da página
document.addEventListener("DOMContentLoaded", () => {
  const iconeCadastro = document.getElementById("icone-cadastro");
  const abaCadastro = document.getElementById("cadastro-aba");
  const fecharCadastro = document.getElementById("fechar-cadastro");

  // Função para alternar a visibilidade da aba de cadastro
  const alternarCadastro = () => {
    abaCadastro.classList.toggle("ativo"); // Alterna a classe 'ativo' na aba de cadastro
  };

  // Mostrar a aba de cadastro ao clicar no ícone
  iconeCadastro.addEventListener("click", alternarCadastro);

  // Fechar a aba de cadastro ao clicar no botão de fechar
  fecharCadastro.addEventListener("click", () => {
    abaCadastro.classList.remove("ativo"); // Remove a classe 'ativo' da aba de cadastro
  });

  // Esconder a aba de cadastro quando a página é carregada
  abaCadastro.classList.remove("ativo");
});
