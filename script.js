//1. Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.
alert('Hello World!')

//Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.
const numberOne= 10
const numberTwo= 20

const sum = numberOne + numberTwo

alert(sum)

//Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".

const isNumber = 10

if (typeof isNumber == 'number'){
    alert('E um numero')
} else{
    alert('Nao e um numero')
}

//Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".

const isString = 'Lais'

if(typeof isString == 'string'){
    alert('E uma string')
}else{alert('Nao e uma string')}

//Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".
const isBoolean = true

if (typeof isBoolean == 'boolean'){
    alert('E um booleano')
}else{alert('Nao e um booleano')}

//Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.

const sub = numberOne - numberTwo

alert(sub)

//Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.

const mult = numberOne * numberTwo

alert(mult)

//Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.

const div = numberOne / numberTwo

alert(div)

//Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".

const isEvenNumber = 7

if (isEvenNumber % 2 == 0) {
  alert('É um número par')
} else {
  alert('Não é um numero par')
}

//Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".
const isOddNumber = 2

if (isOddNumber % 2 != 0){
    alert('E um numero impar')
}else{
    alert('Nao e um numero impar')
}