const dicionario = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o',
    'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];

const somatorioLetras = (sequencia1, sequencia2) => {
    let ordenada1 = sequencia1.split('').sort().join();
    let ordenada2 = sequencia2.split('').sort().join();
    let regex = new RegExp("[,]", "g")
    let sequenciaOrdenada1 = ordenada1.replace(regex, '');
    let sequenciaOrdenada2 = ordenada2.replace(regex, '')
    let maiorLetra1 = 1 + dicionario.indexOf(sequenciaOrdenada1[sequenciaOrdenada1.length - 1]);
    let menorLetra1 = 1 + dicionario.indexOf(sequenciaOrdenada1[0])
    let maiorLetra2 = 1 + dicionario.indexOf(sequenciaOrdenada2[sequenciaOrdenada2.length - 1])
    let menorLetra2 = 1 + dicionario.indexOf(sequenciaOrdenada2[0])
    return ((maiorLetra1 * menorLetra2) + (maiorLetra2 * menorLetra1))
}
console.log(somatorioLetras("dacb", "gdab"));