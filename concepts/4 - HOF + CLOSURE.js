
function sum({ x, y }) { 
    return x + y
}

function sub({ x, y }) { 
    return x - y;
}

function res({ x, y, operation }) { 
    return operation({x: x, y: y})
}

console.log(res({x: 1, y: 2, operation: sum})); 
console.log(res({x: 1, y: 2, operation: sub})); 


//critério 2 
