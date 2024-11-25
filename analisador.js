let num = document.querySelector('input#numero-analisador'); // Selecionando o campo de número
let lista = document.querySelector('select#lista-analisador'); // Selecionando o select onde os números serão listados
let res = document.querySelector('div#resultado-analisador'); // Selecionando a área de resultados
let valores = []; // Array para armazenar os números adicionados

// Função para verificar se o número está entre 1 e 100
function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true;
    } else {
        return false;
    }
}

// Função para verificar se o número já está na lista
function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true;
    } else {
        return false;
    }
}

// Função para adicionar número na lista
function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value)); // Adiciona o número à lista de valores
        let item = document.createElement('option'); // Cria um novo item na lista
        item.text = `Valor ${num.value} foi adicionado.`;
        lista.appendChild(item); // Adiciona o item ao select
        res.innerHTML = ''; // Limpa qualquer mensagem anterior
    } else {
        window.alert('Valor inválido ou já incluso na lista!');
    }
    num.value = ''; // Limpa o campo de entrada
    num.focus(); // Coloca o foco novamente no campo de entrada
}

// Função para finalizar e exibir os resultados
function finalizar(){
    if(valores.length == 0){
        window.alert('Adicione valores antes de finalizar!');
    } else {
        let total = valores.length; // Total de números adicionados
        let maior = valores[0]; // Inicia o maior valor com o primeiro número
        let menor = valores[0]; // Inicia o menor valor com o primeiro número
        let soma = 0; // Variável para somar os valores
        let media = 0; // Variável para a média dos valores

        // Loop para calcular soma, maior, menor e média
        for(let pos in valores){
            soma += valores[pos]; // Soma os valores
            if(valores[pos] > maior){
                maior = valores[pos]; // Atualiza o maior valor
            }
            if(valores[pos] < menor){
                menor = valores[pos]; // Atualiza o menor valor
            }
        }
        media = soma / total; // Calcula a média

        // Exibe os resultados na tela
        res.innerHTML = ''; // Limpa a área de resultados
        res.innerHTML += `<p> Ao todo temos ${total} números cadastrados. </p>`;
        res.innerHTML += `<p> O maior valor informado foi ${maior}. </p>`;
        res.innerHTML += `<p> O menor valor informado foi ${menor}. </p>`;
        res.innerHTML += `<p> Somando todos os valores temos: ${soma}. </p>`;
        res.innerHTML += `<p> A média dos valores é: ${media}. </p>`;
    }
}
