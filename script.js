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

const listaDePacientes = new Stack();

let cod = 0

function mostrarDados(paciente){
    const dadosPaciente = `\nCódigo: ${cod}\nNome: ${paciente.nome}\nData de nascimento: ${paciente.data}\nEndereço: ${paciente.endereco}\nObservações: ${paciente.obs}`;
    alert(dadosPaciente);
}

//*primeiro botão
btnCadastrar.addEventListener("click",()=>{
    const objPaciente = {}

    for(let z = 0; z <= listaDePacientes.items.length; z++){
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
        mostrarDados(objPaciente);

        listaDePacientes.push(objPaciente);
        //console.log(listaDePacientes.items[cod])
    }
})

//*segundo botão
btnEditar.addEventListener("click", ()=>{
    if(!listaDePacientes.isEmpty()){

        const codPaciente = prompt("Insira o código do paciente para edita-lo:");
        mostrarDados(listaDePacientes.items[codPaciente]);
        const confirma = confirm("Quer alterar os dados do paciente?")
        if(confirma){
            const paciente = listaDePacientes.items[codPaciente];
            
            paciente.nome = prompt("Qual o nome do paciente?")
            paciente.data = prompt("Qual a data de nascimento do paciente?");
            paciente.endereco = prompt("Qual o endereço do paciente?");
            paciente.obs = prompt("Observações:");
            if(paciente.nome == '' || paciente.data == '' || paciente.endereco == ''){

                alert("Insira todos os dados!")
            }else{
                mostrarDados(paciente);
            }
        }
    }else{
        alert("Nenhum paciente cadastrado... :/");
    }
})

//*terceiro botão
btnListar.addEventListener("click",()=>{
    if (listaDePacientes.isEmpty()){
        alert("Nenhum paciente cadastrado... :/")
    }else{
        for (let z = 0; z <= listaDePacientes.items.length; z++){
            mostrarDados(listaDePacientes.items[z]);
        }
    }
})

//*quarto botão
btnExcluir.addEventListener("click", ()=> {
    if(!listaDePacientes.isEmpty()){
        
        const codPaciente = prompt("Insira o código do paciente para excluí-lo:");
        mostrarDados(listaDePacientes.items[codPaciente]);
        const confirmar = confirm(`Você tem certeza que quer excluir esse paciente?`)
    
        if(confirmar){
            let index = listaDePacientes.items.indexOf(codPaciente);
            listaDePacientes.items.splice(index,1)
            alert(`Paciente ${codPaciente} excluído!`)
        }

    }else{
        alert("Nenhum paciente cadastrado... :/");
    }
})