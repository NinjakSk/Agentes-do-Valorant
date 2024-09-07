function pesquisar() {

    // Obtém a seção onde os resultados serão exibidos pelo ID "resultados-pesquisa"
    let section = document.getElementById("resultados-pesquisa"); 
    
    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    console.log(campoPesquisa);

    // Se campoPesquisa for igual a uma string vazia
    // Pare a funcao
    if (campoPesquisa.trim() === "") {
        section.innerHTML = "<p>Nenhum agente foi encontrado</p>"
        return
    };

    campoPesquisa = campoPesquisa.toLowerCase();
  
    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = ""; 
    let titulo = "";
    let descricao = "";
    let funcao = "";
    let tags = "";
  
    // Itera sobre cada dado na lista de dados (assumindo que 'dados' é um array de objetos)
    for (let dado of dados) { 

        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        funcao = dado.funcao.toLowerCase()
        tags = dado.tags.toLowerCase()

        // Se titulo includes campoPesquisa
        // Então, faça...
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || funcao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {

        // Constrói o HTML para cada resultado, formatando os dados do objeto
        resultados += `
        <div class="item-resultado">
          <h2>${dado.titulo}</h2>
          <p class="funcao-meta">
            ${dado.funcao}
          </p>
          <p class="descricao-meta">
            ${dado.descricao}
          </p>
          <a href="${dado.link}" target="_blank">Clique aqui para saber mais.</a>
        </div>
      `;
        };
    };

    if (!resultados) {
        resultados = "<p>Nenhum agente foi encontrado</p>"
    }

     // Atribui o HTML gerado ao conteúdo da seção, substituindo o conteúdo anterior
    section.innerHTML = resultados;

};