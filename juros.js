const jurosSimples = (C, i, t) => (C*i*t)

const montante = ({jurosSimples}) => (C, i, t) => C+jurosSimples(C, i, t)

/*
    Exercício 3: montante com juros compostos

Crie uma função montanteJurosCompostos que recebe C (capital), i (juros em decimal) e t (tempo) e retorno o montante para o período, dado pela fórmula: M = C * (1 +  i) ^ t​.

Exercício 4: juros compostos

O exercício anterior já retorna o montante (capital + juros). Crie uma função em juros.js que retorne somente os juros.
*/

const montanteJurosCompostos = (C, i, t) => C * Math.pow((1+i), t)

const jurosCompostos = ({montanteJurosCompostos}) => (C, i, t) => (montanteJurosCompostos(C, i, t) - C)

module.exports ={
    jurosSimples,
    montante: montante({jurosSimples}),
    montanteJurosCompostos,
    pure:{
        montante,
        jurosCompostos
    },
    jurosCompostos: ({montanteJurosCompostos})
   
}