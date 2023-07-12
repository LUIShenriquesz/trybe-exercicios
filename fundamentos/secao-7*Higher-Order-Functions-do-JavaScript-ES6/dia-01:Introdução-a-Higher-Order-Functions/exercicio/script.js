const structureGenerator = (nome) => {
    let email = `${nome.replace(' ', '_')}@trybe.com`

    return { nome, email: email };
};

const newEmployees = (função) => {
  const employees = {
    id1: função('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: função('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: função('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  
  return employees;
};

const verificarndoOResultado = (numero, numeroSorteado) => numero === numeroSorteado;

const numeroSorteado = (numero, funcao) => {
    let numeroSorteado = Math.floor(Math.random() * (5 - 1) + 1);
    if (funcao(numero, numeroSorteado) === true) {
        return 'Parabéns, você ganhou';
    } else {
        return 'Tente novamente';
    }
};

const comparadorDeArreys = (array1, array2) => {
    let pontuacao = 0;

    for (let i = 0; i < array1.length; i += 1) {
        if (array1[i] === array2[i]) {
            pontuacao += 1;
        } else if (array2[i] === 'N.A') {
            pontuacao += 0;
        } else {
            pontuacao -= 0.5;
        }
    }

    return pontuacao;
}

const resultado = (array1, array2, funcao) => {
    return funcao(array1, array2);
}
