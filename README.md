# psAurum
Teste - Vaga Estágio em Desenvolvimento Web

<h1>Exercícios para etapa técnica</h1>

<section>
  <div>
        <h3>Exercício 1</h3>
        <p>
            Escreva uma função que receba 2 parâmetros, uma String e um Inteiro. Essa função deve ter como retorno outra String.
            O objetivo da função é remover os caracteres repetidos consecutivamente e que extrapolam o limite (valor inteiro) 
            passado como segundo parâmetro, ou seja, se o limite for 2, os caracteres podem ser repetidos no máximo duas          
            vezes. Exemplos:
        </p>
        <ul>
            <li>function removeRepeated("xxxyzzaaayy", 1) => "xyzay"</li>
            <li>function removeRepeated("xxxyzzaaayy", 2) => "xxyzzaayy"</li>
        </ul>   
  </div>
  <div>
        <h3>Exercício 2</h3>
        <p>
            Escreva uma função que receba 2 parâmetros, uma String e um Inteiro. Essa função deve ter como retorno outra String. 
            O Objetivo da função é substituir o caracter "?" criando uma repetição do caracter que está antes dele o número de 
            vezes do parâmetro Inteiro. Caso o caracter "?" seja o primeiro da String fornecida ele deve repetir o          
            último caracter da String. Exemplos:
        </p>
            <ul>
            <li>function replaceChar("x?yzza?y?", 1) => "xxyzzaayy</li>
            <li>function replaceChar("x?yzza?y?", 2) => "xxxyzzaaayyy"</li>
            <li>function replaceChar("?x?yzza?y?", 2) => "yyxxxyzzaaayyy"</li>
            </ul>   
    </div>
    <div>
        <h3>Exercício 3</h3>
        <p>
            Escreva uma função que receba 2 Strings. Essa função deve ter como retorno um número. O objetivo da função é 
            ordenar as 2 strings alfabeticamente e extrair de cada uma a maior e a menor letra. Transforme essa letra em 
            um número considerando que o alfabeto é uma sequência numérica e a letra "a" é igual a 1 a letra "b" é igual 
            a 2 e assim sucessivamente. O retorno da função deve ser a soma da multiplicação entre a maior letra da primeira 
            String é a menor letra da segunda String com a multiplicação entre a maior letra da segunda String e a menor letra 
            da primeira String. <br>
            retorno =(maiorLetraString1 menorLetraString2 ) + (maiorLetraString2  menorLetraString1)
        </p>
            <ul>
                <li>function lettersSum("dacb", "gdab") =>  11</li>
                <li>function lettersSum("dcb", "gdab") =>  18</li>
            </ul>   
    </div>
</section>
