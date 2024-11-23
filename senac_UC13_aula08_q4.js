function podeAcessar({ idade, isadministrador, isbloqueado }) {
    // Verifica se o usuário pode acessar 
    if ((idade > 18 || isadministrador) && !isbloqueado) {
        return true;
    }
    return false;
}

console.log(podeAcessar({ idade: 20, isadministrador: false, isbloqueado: false })); // true
console.log(podeAcessar({ idade: 16, isadministrador: true, isbloqueado: true })); // false