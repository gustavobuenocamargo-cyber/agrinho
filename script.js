// Função para rolar a página até o simulador de forma suave
function scrollToSimulador() {
    const simuladorSection = document.getElementById('simulador');
    if (simuladorSection) {
        simuladorSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// Função interativa para mudar o texto dinamicamente baseado na escolha do usuário
function calcularImpacto() {
    const select = document.getElementById('pratica');
    const resultado = document.getElementById('resultado');
    
    if (!select || !resultado) return;

    const valor = select.value;
    let mensagem = "";

    switch(valor) {
        case 'direto':
            mensagem = "🌱 **Impacto:** Evita a erosão do solo, retém mais água na terra e reduz a emissão de CO₂ ao não revirar o solo.";
            break;
        case 'gotejamento':
            mensagem = "💧 **Impacto:** Economiza até 50% de água em comparação com a irrigação comum, levando a umidade direto à raiz.";
            break;
        case 'rotacao':
            mensagem = "🌽 **Impacto:** Quebra o ciclo de pragas naturalmente, enriquece o solo com diferentes nutrientes e diminui o uso de defensivos químicos.";
            break;
        default:
            mensagem = "Selecione uma prática acima para ver o resultado.";
    }

    resultado.innerHTML = mensagem;
}