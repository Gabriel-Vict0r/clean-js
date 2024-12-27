

function somar({ x, y }) { 
    return x + y
}

function subtrair({x, y}) { 
    return x - y
}

function aplicarOperacao({ numero1, numero2, operacao }) { 
    return operacao({ x: numero1, y: numero2 });
}

const result = aplicarOperacao({ numero1: 1, numero2: 2, operacao: somar });
const result2 = aplicarOperacao({ numero1: 1, numero2: 2, operacao: subtrair });
console.log(result);
console.log(result2);

function criarMultiplicador(fator) { 
    return function (numero) { 
        return numero * fator;
    }
}

const multiplicador2 = criarMultiplicador(2); 
const multiplicador5 = criarMultiplicador(5); 
console.log(`Resultado de multiplicar por 2: `, multiplicador2(5))
console.log(`Resultado de multiplicar por 2: `, multiplicador5(6))