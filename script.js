
// Identifica a seção que está sendo visualizada
const secoes = document.querySelectorAll("main section");
const linksMenu = document.querySelectorAll("nav ul a");

function atualizarMenu() {
    let secaoAtual = "";

    secoes.forEach((secao) => {
        const posicao = secao.offsetTop - 150;

        if (window.scrollY >= posicao) {
            secaoAtual = secao.getAttribute("id");
        }
    });

    linksMenu.forEach((link) => {
        link.classList.remove("ativo");

        if (link.getAttribute("href") === `#${secaoAtual}`) {
            link.classList.add("ativo");
        }
    });
}

window.addEventListener("scroll", atualizarMenu);
