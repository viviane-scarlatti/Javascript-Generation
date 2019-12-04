function buscarTarefas(){
    var URL = "http://www.professorisidro.com.br/tarefas.php";
    fetch(URL,{"method":"GET"})
    .then(response => response.json())
    .then(json => exibeTarefas(json));
}

function exibeTarefas(json){
    var result = document.getElementById("resultado");


    for (i=0; i<json.length; i++) {
        result.innerHTML += json[i].nome + "</br>";   
}
}

// fim primeira parte

var numTarefa = 0;

function criarTarefa(texto){
    numTarefa++;
    //var textoTarefa = document.getElementById("tarefa").value;
    var tarefaDOM = document.createElement("div");
    tarefaDOM.setAttribute("id","t"+numTarefa);
    tarefaDOM.setAttribute("draggable","true");
    tarefaDOM.setAttribute("class","itemtarefa");
    tarefaDOM.setAttribute("ondragstart","pegaItem(event);");
    tarefaDOM.innerHTML = texto;
    
    document.getElementById("pendentes").appendChild(tarefaDOM);


}

function pegaItem(evt){
    console.log("comecei a arrastar "+evt.target.id);
    // adicionei o id do item que vou arrastar na estrutura dataTransfer
    evt.dataTransfer.setData("TAREFA",evt.target.id);
}

function habilitaArrastar(evt){
    evt.preventDefault();
    //console.log("Estou sobre um determinado ponto que vai receber a tarefa");
}

function recebeItem(evt){
    // agora preciso recuperar a TAREFA que estava no dataTransfer e adicioná-la na coluna
    var idTarefa = evt.dataTransfer.getData("TAREFA");
    var tarefa = document.getElementById(idTarefa);
    console.log("Dropei a tarefa aqui ="+evt.target.id);


    //if (evt.target.id === "pendentes" ||
    //    evt.target.id === "feitas"    ||
    //    evt.target.id === "fazendo"     ){
       evt.target.appendChild(tarefa);
    //    }
   // else{
    //    alert("nesta versao nao aninhamos tarefas...")
   // }
  
}
