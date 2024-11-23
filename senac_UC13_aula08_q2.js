function definirDiaDaSemana(dia){
    switch(dia){
        case 1:
            return "Domingo"
        case 2:
            return "Segunda-feira"
        case 3:
            return "Terça-feira"
        case 4:
            return "Quarta-feira"
        case 5:
            return "Quinta-feira"
        case 6:
            return "Sexta-feira"
        case 7:
            return "Sábado"
            default:
                return "Número inválido"
    }
}
resultado = definirDiaDaSemana(3)
console.log(resultado)

resultado = definirDiaDaSemana(7)
console.log(resultado)

resultado = definirDiaDaSemana(8)
console.log(resultado)