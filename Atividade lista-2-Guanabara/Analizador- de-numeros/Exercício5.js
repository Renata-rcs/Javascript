let num = document.querySelector('input#fnum');
let lista = document.querySelector('select#flista');
let res = document.querySelector('div#res');
let valores = [];

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100)
        return true;
    else {
        return false;
    }
}
 
function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1){
        return true;
    }
    else {
        return false;
    }
}

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value));
        let item = document.createElement('option');
        item.text = `Valor ${num.value} adicionado`;
        lista.appendChild(item);
    }
    else{
        window.alert("Valor inválido ou já encontrado na lista.");
    }
    num.value = "";
    num.focus();
}

function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar.');
    } else {
        let totalValores = valores.length;
        let maiorValor = valores[0];
        let menorValor = valores[0];
        let somaValores = 0;
        let mediaValores = 0;

        for (let pos in valores){
            somaValores += valores[pos];
            if(valores[pos] > maiorValor)
                maiorValor = valores[pos];
            if(valores[pos] < menorValor)
                menorValor = valores[pos];
        }
        mediaValores = somaValores / totalValores;

        res.innerHTML = '';
        res.innerHTML += `<p>Ao todo, temos ${totalValores} valor(es) cadastrado(s).</p>`;
        res.innerHTML += `<p>O maior valor informado foi ${maiorValor}.</p>`;
        res.innerHTML += `<p>O menor valor informado foi ${menorValor}.</p>`;
        res.innerHTML += `<p>A soma de todos os valores é ${somaValores}.</p>`;
        res.innerHTML += `<p>A média dos valores é ${mediaValores}.</p>`;
    }
}
