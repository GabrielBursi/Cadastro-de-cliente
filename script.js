const btnCadastrar = document.querySelector('#btn-cadastrar');
const btnEditar = document.querySelector("#btn-editar");
const btnListar = document.querySelector("#btn-listar");
const btnExcluir = document.querySelector("#btn-excluir");

class Stack {
    constructor() {
        this.items = [];
    }

    push(item) {
        return this.items.push(item);
    }

    pop() {
        return this.items.pop();
    }

    top() {
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length == 0;
    }
}

const pilha = new Stack();

let cod = 0

btnCadastrar.addEventListener("click",()=>{
    const objPaciente = {}

    for(let z=0; z<= pilha.items.length; z++){
        cod = z
    }
    
    objPaciente.cod = cod
    objPaciente.nome = prompt("Qual o nome do paciente?") 
    objPaciente.data = prompt("Qual a data de nascimento do paciente?")
    objPaciente.endereco = prompt("Qual o endereço do paciente?")
    objPaciente.obs = prompt("Observações:");

    if(objPaciente.nome == '' || objPaciente.data == '' || objPaciente.endereco == ''){

        alert("Insira todos os dados!")
    }else{
        const dadosPaciente = `NOVO PACIENTE CADASTRADO!\nCódigo: ${cod}\nNome: ${objPaciente.nome}\nData de nascimento: ${objPaciente.data}\nEndereço: ${objPaciente.endereco}\nObservações: ${objPaciente.obs}`;
        alert(dadosPaciente);

        pilha.push(objPaciente);
    }
})