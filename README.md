Exercício 1: Verificar Maioridade
O que a função faz:
Essa função verifica se uma pessoa é maior de idade ou menor de idade. Ela recebe um número que representa a idade da pessoa e diz:

"Menor de idade" se a pessoa tem menos de 18 anos.
"Maior de idade" se a pessoa tem 18 anos ou mais.
Como funciona:
A função só verifica se a idade é menor que 18 para dizer "Menor de idade". Caso contrário, ela diz "Maior de idade".
```js
Este exercício tem como objetivo ensinar a estrutura condicional if ou else em JavaScript, que permite tomar decisões com base em uma condição. No caso, a condição é a idade da pessoa. A função recebe a idade como parâmetro e, utilizando um teste condicional, verifica se a pessoa é menor de idade ou maior de idade.

Se a idade for menor que 18, a função retorna a mensagem "Menor de idade", indicando que a pessoa não é legalmente considerada adulta.
Se a idade for 18 anos ou mais, a função retorna "Maior de idade", indicando que a pessoa é adulta de acordo com a maioria das leis.
```

Exercício 2: Definir o Dia da Semana
O que a função faz:
Essa função recebe um número de 1 a 7 e retorna o nome do dia da semana correspondente. Por exemplo:

1 é "Domingo"
2 é "Segunda-feira"
3 é "Terça-feira", e assim por diante até 7, que é "Sábado".
Se o número não for de 1 a 7, a função diz "Número inválido".
Como funciona:
A função verifica qual número foi passado e retorna o nome do dia. Se o número não for válido, ela avisa que é inválido.
```js
Este exercício tem como objetivo ensinar como usar a estrutura condicional switch ou if em JavaScript para mapear valores numéricos para informações específicas. Nesse caso, o número recebido como parâmetro representa um dia da semana, e a função precisa retornar o nome correspondente a esse dia.

Se o número for de 1 a 7, a função retorna o nome do dia da semana correspondente (como "Domingo", "Segunda-feira", etc.).
Se o número for fora desse intervalo (ou seja, menor que 1 ou maior que 7), a função retorna "Número inválido", indicando que a entrada não corresponde a um dia válido da semana.
```

Exercício 3: Verificar se o número é Par ou Ímpar
O que a função faz:
Essa função recebe um número e diz se ele é par ou ímpar.
Se o número for par, a função diz "Par".
Se o número for ímpar, a função diz "Ímpar".
Como funciona:
A função usa uma técnica simples para verificar se o número pode ser dividido por 2. Se sim, ele é par; caso contrário, é ímpar.
```js
A função verifica se um número é par ou ímpar, utilizando o operador de módulo (%) para verificar a divisibilidade por 2. Se o resto da divisão for 0, o número é par; caso contrário, é ímpar. 
```

Exercício 4: Verificar se pode Acessar o Sistema
O que a função faz:
Essa função decide se um usuário pode ou não acessar um sistema. Para isso, ela verifica:

Se o usuário tem mais de 18 anos ou é administrador.
Se a conta não está bloqueada.
Se qualquer uma dessas condições for atendida, o acesso é permitido.
```js
 se o usuário tem mais de 18 anos, é administrador ou se a conta não está bloqueada. Ele utiliza operadores lógicos, como o "ou" (or), para combinar as condições.
```

Exercício 5: Calcular Desconto
O que a função faz:
Essa função calcula o preço de um produto após aplicar um desconto. Ela recebe:

O preço original do produto.
A porcentagem de desconto a ser aplicada.
A função então calcula o preço final depois de descontado o valor.

Como funciona:
A função calcula quanto é o valor de um produto e aplica um desconto.
```js
A função recebe o preço original e a porcentagem de desconto, e calcula o valor do desconto, subtraindo-o do preço original.
```