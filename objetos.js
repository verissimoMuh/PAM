//objetos

var aluno1 = {
    matricula: 8783464,
    nome: 'Murilo Verissimo Pereira',
    curso: 'Desenvolvimento de Sistemas',
    ativo: true
};

var aluno2 = {
    matricula: 978434,
    nome: 'Larissa Silva Bezkorowayny de Oliveira',
    curso: 'Desenvolvimento de Sistemas',
    ativo: true
};

var aluno3 = {
    matricula: 132563,
    nome: 'Larissa de Souza Cardozo',
    curso: 'Desenvolvimento de Sistemas',
    ativo: true
};


console.log(aluno1);
console.log(aluno2);
console.log(aluno3);

aluno1.dataNascimento = '27/02/2008'
console.log(aluno1.dataNascimento);

aluno2.dataNascimento = '12/09/2007'
console.log(aluno2.dataNascimento);

aluno3.dataNascimento = '20/11/2007'
console.log(aluno3.dataNascimento);

delete aluno1.dataNascimento;
delete aluno2.dataNascimento;
delete aluno3.dataNascimento;

//underfined e null

var x;
var y = null;

//arrays

var frutas = ['Banana','Laranja','Maçã'];
