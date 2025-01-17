// APP AMIGO SECRETO
// Version: 1.0
// Author: Arthur Braga Padilha

// Variáveis globais
let amigos = [];
let campoAmigo = document.getElementById("amigo");
let listaAmigos = document.getElementById("listaAmigos");
let novoAmigo;
let novoItem;
let aleatorio;

// Adiciona amigos na lista ao clicar no botão Adicionar Amigo
function adicionarAmigo()
{
    if(campoAmigo.value == "") // Se o campo amigo for nulo
    {
        alert("Por favor, insira um nome válido.");
    }
    else
    {
        if(!amigos.includes(campoAmigo.value)) // Verifica a lista de amigos para NÃO duplicar o novo amigo
        {
            novoAmigo = campoAmigo.value;
            amigos.push(novoAmigo);
            campoAmigo.value = "";
            campoAmigo.focus();
            novoItem = document.createElement("li");
            novoItem.textContent = novoAmigo;
            listaAmigos.appendChild(novoItem);

            console.log(amigos);
        }
        else // Caso o nome de amigo já fazia parte da lista (duplicado)
        {
            alert("Este amigo já está na lista.");
            campoAmigo.value = "";
            campoAmigo.focus();
        }
    }
    
}

// Sotear o amigo
function sortearAmigo()
{
    // Verifica se há amigos na lista
    if(amigos.length == 0)
    {
        alert("Não há nenhum amigo na lista.\nPor favor, insira alguns amigos.");
        console.log("Não há amigos na lista.");
    }
    else
    {
        aleatorio = Math.floor(Math.random() * amigos.length);
        document.getElementById("resultado").innerText = amigos[aleatorio];
    }
}




