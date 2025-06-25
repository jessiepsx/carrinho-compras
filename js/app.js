// Cria uma variável chamada totalGeral (fora das funções) para somar o valor total dos produtos no carrinho
let totalGeral

// Chama a função limpar() logo no início, para garantir que tudo comece zerado
limpar()

// Função que será chamada quando o usuário clicar em "Adicionar produto"
function adicionar () {
    
    // Pega o valor selecionado no campo "produto" (ex: "Arroz - R$5")
    let produto = document.getElementById('produto').value 

    // Separa o nome do produto da parte "Arroz - R$5"
    let nomeProduto = produto.split('-')[0]

    // Separa o valor do produto da parte "R$5"
    let valorUnitario = produto.split('R$')[1]

    // Pega a quantidade digitada pelo usuário no campo "quantidade"
    let quantidade = document.getElementById('quantidade').value

      // Verificar se o produto selecionado é válido
      //!produto: quer dizer "se a variável produto estiver vazia, nula ou indefinida
      //produto.trim() === "": verifica se o texto do produto está só com espaços em branco.
    if (!produto || produto.trim() === "") {
        alert("Selecione um produto válido.");
        return;
    }

    // Verificar se a quantidade inserida é válida
    //isNaN(quantidade): verifica se não é um número (NaN = Not a Number).
    //quantidade <= 0: verifica se a quantidade é menor ou igual a zero.
    if (isNaN(quantidade) || quantidade <= 0) {
        alert("Insira uma quantidade válida.");
        return;
    }

    // Calcula o preço total desse produto (quantidade x valor unitário)
    let preco = quantidade * valorUnitario

    // Pega o elemento onde os produtos do carrinho vão aparecer na tela
    let carrinho = document.getElementById('lista-produtos')

    // Adiciona esse novo produto no carrinho (HTML que será exibido na tela)
    carrinho.innerHTML = carrinho.innerHTML + `
        <section class="carrinho__produtos__produto">
            <span class="texto-azul">${quantidade}x</span> ${nomeProduto} 
            <span class="texto-azul">${preco}</span>
        </section>`

    // Atualiza o valor total da compra
    totalGeral = totalGeral + preco 

    // Mostra o valor total atualizado na tela
    let campoTotal = document.getElementById('valor-total')
    campoTotal.textContent = `R$ ${totalGeral}`

    // Limpa o campo de quantidade para o próximo item
    document.getElementById('quantidade').value = 0
}

// Função para limpar o carrinho e zerar o valor total
function limpar() {
    totalGeral = 0 // zera o total
    document.getElementById('lista-produtos').innerHTML = '' // limpa os produtos do carrinho
    document.getElementById('valor-total').textContent = 'R$ 0' // mostra R$ 0 na tela
}
