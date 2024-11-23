function verificarIdade(idade){
    switch (true){
        case (idade >= 18):
            return "Maior de idade"
            default:
                return "Menor de idade"
    }
}
resultado = verificarIdade(15)
console.log(resultado)

resultado = verificarIdade(18)
console.log(resultado)

resultado = verificarIdade(21)
console.log(resultado)