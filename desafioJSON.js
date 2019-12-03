function obterId(){
    // recuperando o que foi digitado no input
    var usuario = document.getElementById("iddousuario").value;
    console.log("Id do usuário = "+usuario);

    // montando uma URL
    var URL = "https://jsonplaceholder.typicode.com/users/"+usuario;
    console.log("Montei a URL");
    console.log(URL);

    // buscando os detalhes do id do usuário
    fetch(URL, {method: "GET"})
        .then(response => response.json())
        .then(json => preencherHTML(json));

}

    // função para preencher os dados
    function preencherHTML(json){
        var result = document.getElementById("result");
       // result.innerHTML = JSON.stringify(json);

        result.innerHTML += "ID: "+json.id  + "<br/>";
        result.innerHTML += "Name: "+json.name  + "<br/>";
        result.innerHTML += "Username: "+json.username  + "<br/>";
        result.innerHTML += "E-mail: " +json.email  + "<br/>";
        result.innerHTML += "Address: <br/>";
        result.innerHTML += "Street: "+json.address.street  + "<br/>";
        result.innerHTML += "Suite: "+json.address.suite  + "<br/>";
        result.innerHTML += "City: "+json.address.city  + "<br/>";
        result.innerHTML += "Zipcode: "+json.address.zipcode  + "<br/>";
        result.innerHTML += "Phone: "+json.phone  + "<br/>";
        result.innerHTML += "Website: "+json.website  + "<br/>";
        result.innerHTML += "Company: <br/>";
        result.innerHTML += "Name: "+json.company.name  + "<br/>";
        result.innerHTML += "Catch Phrase: "+json.company.catchPhrase  + "<br/>";
        result.innerHTML += "bs: "+json.company.bs  + "<br/>";

    }