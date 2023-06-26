/*
let use1 = '@fellipe_125';
let senha1 = 123321;
let use;
let senha;
use = prompt('Usuario');
senha = parseInt(prompt('Senha'));
if (use1 == use && senha1 == senha){
    alert(`correct, welcome ${use}`);
}
else{
    alert('invalid')
};
*/

nomes = [];

while(true){
    nome = prompt('Name');
    nomes.push(nome);
    if(nome == 'Felipe'){
        document.write(`${nomes} <br>`)
        break;
    }
}
