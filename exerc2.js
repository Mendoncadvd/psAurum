const removeChar = (sequencia, multiplicador) => {
    let sequenciaNova = "";
    for (let i = 0; i < sequencia.length; i++) {
        if (sequencia[i] !== "?") {
            let recebe = "";
            sequenciaNova += recebe.concat(sequencia[i])
        } else {
            if (sequencia[i - 1] == undefined) {
                let temp = sequencia;
                let recebeTemp = temp.split("?").join('');
                let charMulti = "";
                for (let k = 0; k < multiplicador; k++) {
                    charMulti += recebeTemp[recebeTemp.length - 1]
                }
                sequenciaNova += charMulti
            } else {
                let charMulti = "";
                for (let k = 0; k < multiplicador; k++) {
                    charMulti += sequencia[i - 1]
                }
                sequenciaNova += charMulti
            }
        }
    }
    return sequenciaNova;
}
console.log(removeChar("?x?yzza?y?", 5))