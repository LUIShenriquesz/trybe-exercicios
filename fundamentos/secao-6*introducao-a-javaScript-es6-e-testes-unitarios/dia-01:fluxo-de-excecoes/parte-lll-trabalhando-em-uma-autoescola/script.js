const studentRegister = (name, age) => {
    // seu código aqui
    try {
        if (name === undefined || age === undefined) {
            throw new Error('Todas as informações são necessárias');
        }
        if (age < 18) {
            throw new Error('Ops, infelizmente nesse momento você não pode fazer as aulas');
        }
        const nome = name;
        return `${nome}, seja bem-vindo(a) à AuTrybe!`;
    } catch (e) {
        return e.message;
    }
  }