//Calcularadora Professor
var calculei = false;//Essa variável é usada para controlar se a expressão já foi calculada anteriormente ou não.
var operei = false;//Essa variável é usada para controlar se um operador foi inserido anteriormente na expressão.
var expressao = '';//Essa variável armazena a expressão matemática inserida pelo usuário.

function insert(num){ //Essa é a função que é chamada quando um número ou operador é inserido na calculadora.
    var numero = document.getElementById('resultado').innerHTML;//Essa linha obtém o conteúdo atual do elemento HTML com o ID "resultado", que é onde o resultado da calculadora é exibido.
    var exp = document.getElementById('exp')//Essa linha obtém o elemento HTML com o ID "exp", que é onde a expressão atual é exibida.
    if (calculei){ //Essa condição verifica se a expressão já foi calculada anteriormente.
        if(num === '-' || num === '+' || num === '/' || num === '*'){//Essa condição verifica se o número inserido é um dos operadores: subtração, adição, divisão ou multiplicação.
            //document.getElementById('resultado').innerHTML = numero + num;
            calcular(true);//Essa linha chama a função calcular() com o parâmetro true, indicando que o cálculo deve ser parcial. Isso significa que a expressão atual será avaliada até o momento sem a necessidade de um número final.
            expressao = expressao + num;//Essa linha concatena o operador à expressão atual.
            calculei = true;//Essa linha define a variável calculei como verdadeira, indicando que a expressão foi calculada.
            operei = true;//Essa linha define a variável operei como verdadeira, indicando que um operador foi inserido.
        } else {
            document.getElementById('resultado').innerHTML = num;//Essa linha atualiza o elemento HTML com o ID "resultado" para exibir o número inserido.
            expressao = num;
        }
            calculei = false;//Essa linha define a variável calculei como falsa, indicando que a expressão não foi calculada completamente.
    } else {//Essa condição é executada quando a expressão não foi calculada anteriormente.
        if(num === '-' || num === '+' || num === '/' || num === '*'){//Essa condição verifica se o número inserido é um dos operadores.
       calcular(true);//Essa linha chama a função calcular() com o parâmetro true, indicando que o cálculo deve ser parcial.
       expressao = expressao + num;//Essa linha concatena o operador à expressão atual.
       operei = true;//Essa linha define a variável operei como verdadeira, indicando que um operador foi inserido.
    } else {
        if(operei){//Essa condição verifica se um operador foi inserido anteriormente na expressão.
            document.getElementById('resultado').innerHTML = num;//Se um operador foi inserido anteriormente, essa linha atualiza o elemento HTML com o ID "resultado" para exibir o número atual.
            expressao = expressao + num;//Essa linha concatena o número atual à expressão.
            operei = false;//Essa linha define a variável operei como falsa, indicando que um número foi inserido.
        } else {//Essa condição é executada quando nenhum operador foi inserido anteriormente.
            if (numero === "0"){//Essa condição verifica se o número atual é igual a "0".
                document.getElementById('resultado').innerHTML = num;//Se o número atual é "0", essa linha substitui o valor no elemento HTML com o ID "resultado" pelo número inserido.
            } else {//Essa condição é executada quando o número atual não é "0".
                document.getElementById('resultado').innerHTML = numero + num;//Se o número atual não é "0", essa linha concatena o número atual com o número inserido e atualiza o elemento HTML com o ID "resultado".
            }
            expressao = expressao + num;//Essa linha concatena o número atual à expressão.
        }
    }
}
}
            //exp.innerHTML = expressao;
function clean(){//Essa é a função chamada quando o botão "Limpar" é clicado na calculadora.
    document.getElementById('resultado').innerHTML = 0;//Essa linha define o elemento HTML com o ID "resultado" como "0", ou seja, limpa o resultado exibido.
    expressao = "";//Essa linha redefine a expressão como uma string vazia, ou seja, limpa a expressão armazenada.
}

function back(){//Essa é a função chamada quando o botão de retroceder (apagar um caractere) é clicado na calculadora.
    var resultado = document.getElementById('resultado').innerHTML;//Essa linha obtém o conteúdo atual do elemento HTML com o ID "resultado".
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length - 1);//Essa linha atualiza o elemento HTML com o ID "resultado" para excluir o último caractere do resultado.
    expressao.substring(0, expressao.length - 1);//Essa linha remove o último caractere da expressão, atualizando-a.

    }

function calcular(parcial = false) {//Essa é a função chamada quando o botão de igual (=) é clicado para calcular a expressão.
    var resultado = document.getElementById('resultado').innerHTML;//Essa linha obtém o conteúdo atual do elemento HTML com o ID "resultado".
    if (expressao) {//Essa condição verifica se a expressão não está vazia.
        document.getElementById('resultado').innerHTML = eval(expressao);//Essa linha utiliza a função eval() para avaliar a expressão e exibir o resultado no elemento HTML com o ID "resultado".
        expressao = document.getElementById('resultado').innerHTML;//Essa linha atualiza a variável expressao com o valor atual do elemento HTML com o ID "resultado". Isso é feito para manter a expressão atualizada após o cálculo.
            if (parcial){//Essa condição verifica se o parâmetro parcial é verdadeiro. Isso indica se o cálculo é parcial ou final.
            calculei = false;//Se o cálculo for parcial, essa linha define a variável calculei como falsa, indicando que a expressão não foi totalmente calculada.
            } else {//Essa condição é executada quando o cálculo é final, ou seja, quando o botão de igual (=) é pressionad
            calculei = true;//Se o cálculo for final, essa linha define a variável calculei como verdadeira, indicando que a expressão foi totalmente calculada.
            }
    } else {//Essa condição é executada quando a expressão está vazia.
            document.getElementById('resultado').innerHTML = "Nada...";//Essa linha atualiza o elemento HTML com o ID "resultado" para exibir a mensagem "Nada..." quando não há expressão inserida.
        }
}
