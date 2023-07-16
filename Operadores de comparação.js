
/*
Operadores de comparação

=    ---> ATRIBUIÇÃO

==   ---> Igual // Compara o valor, mais não o tipo
===  ---> TOTALMENTE igual // Compara VALOR e o TIPO

!=   ---> Diferente // ELE Compara o valor, mas não o tipo
!==  ---> TOTALMENTE Diferente // Compara o VALOR e o TIPO
*/

// --> Neste primeiro estamos comparando (perguntando) se os valores são iguais <--
//----- ==   ---> Igual // Compara o valor, mais não o tipo -----
const duploIgual = 30
const duploigualDOIS = '30'

console.log(duploIgual == duploigualDOIS)

if (duploIgual == duploigualDOIS){
    console.log("== sim o primeiro numero e igual a o segundo!!!")
}else {
    console.log("== Não, os numeros são igual mais o tipo não!!!")
}
console.log("-------------------------------------------------------------------")

// ===  ---> TOTALMENTE igual // Compara VALOR e o TIPO -----
const triploIgual = 33
const triploigualDOIS = '33'

console.log(triploIgual === triploigualDOIS)

if (triploIgual === triploigualDOIS){
    console.log("=== sim o primeiro numero e igual a o segundo!!!")
}else{
    console.log("=== Não, os numeros são igual mais o tipo não!!!")
}
console.log("-------------------------------------------------------------------")
console.log("-------------------------------------------------------------------")

console.log("Neste segundo estamos comparando (perguntando) se os valores são diferentes")
// --> Neste segundo estamos comparando (perguntando) se os valores são diferentes <--
//----->  !=   ---> Diferente // ELE Compara o valor, mas não o tipo <-----
const exclamacaoIgual = 55
const exclamacaoIgualDois = '55'

console.log(exclamacaoIgual != exclamacaoIgualDois)

if (exclamacaoIgual != exclamacaoIgualDois){
    console.log("!= Primeiro Valor e deferente do segundo! (compara o valor não o tipo)")
}else{
    console.log("!= Não! Primeiro não e diferente do segundo (compara o valor não o tipo) ")
}
console.log("-------------------------------------------------------------------")

//----->  !==   ---> TOTALMENTE Diferente // Compara o VALOR e o TIPO <-----
const exclamacaoDuploIgual = 55
const exclamacaoDuploIgualDois = '55'

console.log(exclamacaoDuploIgual !== exclamacaoDuploIgualDois)

if (exclamacaoDuploIgual !== exclamacaoDuploIgualDois){
    console.log("!=== Primeiro valor e diferente do segundo (compara valor e tipo)")
}else{
console.log("!= Não o promeiro não e diferente do segundo (compara o valor e tipo) ")
}