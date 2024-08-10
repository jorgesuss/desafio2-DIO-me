
function calcularNivelRankeadas(vitorias, derrotas) {
    // Variável para calcular o nível
    let saldoVitorias = vitorias - derrotas;
    let nivel = "";

    // Estrutura para determinar o nível
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else if (vitorias >= 101) {
        nivel = "Imortal";
    }

    // Saldo de vitórias e o nível
    return { saldoVitorias, nivel };
}

// Exemplo de uso da função
let vitorias = 52;
let derrotas = 30;

// Chama a função para calcular o saldo e o nível
let resultado = calcularNivelRankeadas(vitorias, derrotas);

// Exibe a mensagem com o saldo e o nível
console.log(`O Herói tem um saldo de ${resultado.saldoVitorias} vitórias e está no nível de ${resultado.nivel}`);
