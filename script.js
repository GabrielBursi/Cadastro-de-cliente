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

//*funções
function mostrarDados(paciente){
    const dadosPaciente = `\nCódigo: ${paciente.cod}\nNome: ${paciente.nome}\nData de nascimento: ${paciente.data}\nEndereço: ${paciente.endereco}\nObservações: ${paciente.obs}`;
    alert(dadosPaciente);
}

function verficarInfos(obj){
    obj.nome = prompt("Qual o nome do paciente?");
    obj.data = prompt("Qual a data de nascimento do paciente?");
    obj.endereco = prompt("Qual o endereço do paciente?");
    obj.obs = prompt("Observações:");
    if (obj.nome == ("" || null) || obj.data == ("" || null) || obj.endereco == ("" || null)) {
        alert("Insira todos os dados!");
        return false
    }else{
        return true
    }
}

//*primeiro botão
btnCadastrar.addEventListener("click",()=>{
    const objPaciente = {}

    for(let z = 0; z <= listaDePacientes.items.length; z++){
        cod = z
    }

    objPaciente.cod = cod
    if(verficarInfos(objPaciente)){
        mostrarDados(objPaciente)
        listaDePacientes.push(objPaciente)
    } 
})

//*segundo botão
btnEditar.addEventListener("click", ()=>{
    if(!listaDePacientes.isEmpty()){

        const codPaciente = prompt("Insira o código do paciente para edita-lo:");
        mostrarDados(listaDePacientes.items[codPaciente]);
        const confirma = confirm("Quer alterar os dados do paciente?")
        if(confirma){
            let paciente = listaDePacientes.items[codPaciente];
            if(verficarInfos(paciente)){
                mostrarDados(paciente)
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
        for (const element of listaDePacientes.items){
            console.log(listaDePacientes.items);
            
            const lista = listaDePacientes.items;
            const ultimoPaciente = lista.length;
            
            mostrarDados(element);
            if (lista[ultimoPaciente - 1].cod == ultimoPaciente){
                lista[ultimoPaciente - 1].cod--;
            }
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
            listaDePacientes.items.splice(codPaciente,1)
            alert(`Paciente ${codPaciente} excluído!`)
        }

    }else{
        alert("Nenhum paciente cadastrado... :/");
    }
}) 