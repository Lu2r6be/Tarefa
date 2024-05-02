//Declarando Variaveis

let tarefas=[];

//Função que valida o preenchimento do campo caso esteja vazio

function validaCampo(){
    let valida = false;
    if(document.getElementById('task').value == '')
    valida = true;
    return valida;
}

//Função que adiciona a tarefa

function adicionarTarefa(){
    //Criando a variavel que vai receber a tarefas
    let linhas = document.getElementById('task');
    if(validaCampo()){
        alert('Preencha o campo com a tarefa')
    }else{
        //Adicionar as tarefas
        tarefas.push(linha.value);
        //Passando para a proxima linha vazia
        linha.value='';
        //Chamando a função que vai mostrar todas as tarefas
        listarTarefas();
    }
    //Volta para a caixa de input
    document.getElementById('task').focus();
    
}