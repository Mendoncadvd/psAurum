const removeRepetido = (sequencia, limite) => {
    let contador = 0;
    let sequenciaNova = "";
    for (let i = 0; i < sequencia.length; i++) {
        if (sequencia[i] == sequencia[i + 1]) {
            contador++;
            if (contador < limite) {
                sequenciaNova += sequencia[i];
            }
        } else {
            contador = 0;
            sequenciaNova += sequencia[i];
        }
    }
    return sequenciaNova
}

console.log(removeRepetido("xxxyzzaaayy", 2));