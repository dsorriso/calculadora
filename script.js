// Função principal chamada quando o botão "Calcular" é clicado
function main() {
    // Obtém o elemento onde o resultado será exibido
    var resp = document.getElementById('resp');

    // Obtém e converte os valores dos campos de entrada para números de ponto flutuante
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);

    // Verifica se ambos os números foram inseridos
    if (isNaN(num1) || isNaN(num2)) {
        resp.innerHTML = "Por favor, insira ambos os números.";
        return;
    }

    // Obtém a operação selecionada
    var operacao = document.getElementById('operacao').value;

    // Variável para armazenar o resultado da operação
    var texto = "";

    // Verifica qual operação matemática foi selecionada e executa a função correspondente
    if (operacao === "+") {
        texto = adicao(num1, num2);
    } else if (operacao === "-"){
        texto = subtracao(num1, num2);
    } else if (operacao === "/") {
        if (num2 === 0) {
            texto = "Não é possível dividir por zero.";
        } else {
            texto = divisao(num1, num2);
        }
    } else if (operacao === "*") {
        texto = multiplicacao(num1, num2);
    } else {
        texto = "Por favor, selecione uma operação.";
    }

    // Exibe o resultado da operação no elemento 'resp'
    resp.innerHTML = texto;

    historico.innerHTML += `${num1} ${operacao} ${num2} = ${texto}<br>`;
}

// Função para realizar a adição
function adicao(x, y) {
    return (x + y).toFixed(3) ; // Retorna a soma de x e y com 3 casas decimais
}

// Função para realizar a subtração
function subtracao(x, y) {
    return (x - y).toFixed(3); // Retorna a diferença entre x e y com 3 casas decimais
}

// Função para realizar a divisão
function divisao(x, y) {
    return (x / y).toFixed(3); // Retorna o quociente de x dividido por y com 3 casas decimais
}

// Função para realizar a multiplicação
function multiplicacao(x, y) {
    return (x * y).toFixed(3); // Retorna o produto de x e y com 3 casas decimais
}

// Função para resetar os campos e o resultado
function resetar() {
    // Limpa os campos de entrada
    document.getElementById('num1').value = "";
    document.getElementById('num2').value = "";
    
    // Reseta o campo de seleção da operação para o valor padrão
    document.getElementById('operacao').selectedIndex = 0;
    
    // Limpa o resultado exibido
    document.getElementById('resp').innerHTML = "";
}





// Função para mostrar ou esconder o histórico
function toggleHistorico() {
    var historicoContainer = document.getElementById('historico-container');
    var toggleButton = document.getElementById('toggle-historico');
    
    if (historicoContainer.style.display === "none") {
        historicoContainer.style.display = "block";
        toggleButton.innerHTML = '<i class="fas fa-clock"></i>';
    } else {
        historicoContainer.style.display = "none";
        toggleButton.innerHTML = '<i class="fas fa-clock"></i>';
    }
}
