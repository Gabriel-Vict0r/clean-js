

const calcular = (precoUnitario, quantidade) => { 
    return precoUnitario * quantidade;
}

const totalPedido1 = calcular(1, 2);


const calcularTotal = ({precoUnitario, qtd}) => { 
    return precoUnitario * qtd;
}

const totalPedido2 = calcularTotal({
    precoUnitario: 20, 
    qtd: 3
});

const pedidoDto = {
    precoUnitario: 20, 
    qtd: 3
}
const totalPedido3 = calcularTotal(pedidoDto);
console.log(totalPedido1)
console.log(totalPedido2)
console.log(totalPedido3)