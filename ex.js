const n1 = Number(prompt('Digite um número'));

const n2 = function(){
    if(n1 %2 == 0){
        return 'PAR';
    }else{
        return 'IMPAR';
    }
}

const n3 = function(){
    if(Number.isInteger(n1) === true ){
        return 'SIM'
    }else{
        return 'NÃO'
    }
}

const n4 = function(){
    if(isNaN(n1) === false ){
        return 'SIM'
    }else{
        return 'NÃO'
    }
}



document.body.innerHTML += `O numero digitado foi <strong>${n1} </strong> </br>`;
document.body.innerHTML += `A raiz quadrada de ${n1} e:<strong> ${(n1**0.5).toFixed(2)} </strong></br>`;
document.body.innerHTML += `O numero ${n1} é um nº intero:<strong> ${n3()}.</strong></br>`;
document.body.innerHTML += `O numero ${n1} é PAR ou IMPAR:<strong> ${n2()}.</strong></br>`;
document.body.innerHTML += `O numero ${n1} é um numero valido(NaN):<strong> ${n4()}.</strong></br>`;
document.body.innerHTML += `Arredondado para mais: <strong> ${Math.ceil(n1)}</strong></br>`;
document.body.innerHTML += `Arredondado para menos: <strong> ${Math.floor(n1)}</strong></br>`;
document.body.innerHTML += `Com duas casas decimais:<strong> "${n1.toFixed(2)}"</strong>`;