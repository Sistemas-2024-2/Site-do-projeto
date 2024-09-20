
if (window.innerWidth <= 768) {

const botoescarrossel = document.querySelectorAll(".botao");
const imagens = document.querySelectorAll(".imagem");

//- dar um jeito de identificar o clique do usuario no botao
botoescarrossel.forEach((botao, indice) => {
  botao.addEventListener("click", () => {
    console, console.log("clicou no botao");
    //-passo 3 - desmarcar o botao selecionado anterior
    const botaoSelecionado = document.querySelector(".selecionado");

    botaoSelecionado.classList.remove("selecionado");

    //passo 4 -marcar o botao clicado como se estivesse selecionado
    botao.classList.add("selecionado");

    //- passo 5 - esconder a imagem anteriormente selecionada
    const imagemAtiva = document.querySelector(".ativa");
    imagemAtiva.classList.remove("ativa");

    //- passo 6 -fazer aparecer a imagem correspondente ao botao clicado
    imagens[indice].classList.add("ativa");

    //- passo 7 -esconder informacao do dragao anteriormente selecionado
    const informacoesAtiva = document.querySelector(".informacoes.ativa");
    informacoesAtiva.classList.remove("ativa");

    // - passo 8 - mostrar a informacao do dragao referente ao botao clicado
    informacoes[indice].classList.add("ativa");
  });
});

}
