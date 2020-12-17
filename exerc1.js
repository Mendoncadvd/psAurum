const sequencia = 'aaaabbbbcdf'; //aabbcdf
const limite = 3;
const removeRepetido = (sequencia, limite) => {
    let contador = 0;
    let sequenciaNova = "";
    for (let i = 0; i < sequencia.length; i++) {
        if (sequencia[i] == sequencia[i + 1]) {
            contador++;
            if (contador < limite) {
                console.log("entrou no incremento de string")
                sequenciaNova += sequencia[i];
            }
        } else {
            console.log(contador + " entrou no else")
            contador = 0;
            sequenciaNova += sequencia[i];
        }
        console.log(contador)
    }
    return sequenciaNova
}

console.log(removeRepetido(sequencia, limite));