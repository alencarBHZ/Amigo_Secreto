//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.


let amigos = [];

//Adicionar nomes: Os usuários escreverão o nome de um amigo em um campo de texto e o adicionarão a uma lista visível ao clicar em "Adicionar".


function adicionarAmigo() {
  let amigo = document.getElementById("amigo").value;
  if (amigo == "") {
    //Validar entrada: Se o campo de texto estiver vazio, o programa exibirá um alerta solicitando um nome válido.
    alert("Insira um nome por favor.");
  } else {
    amigos.push(amigo);
    console.log(amigos);
    limparCampo();
    adicionarAmigoNaLista();
  }
}

// Limpar o campo de entrada: Após adicionar o nome, redefina o campo de texto para uma string vazia.


function limparCampo() {
  amigo = document.getElementById("amigo");
  amigo.value = "";
}

//Visualizar a lista: Os nomes inseridos aparecerão em uma lista abaixo do campo de entrada.


function adicionarAmigoNaLista() {
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = ""; // Limpa a lista antes de reconstruí-la
  amigos.forEach(function (amigo) {
    let item = document.createElement("li"); // Cria um elemento <li>
    item.textContent = amigo; // Define o texto do item como o nome do amigo
    lista.appendChild(item); // Adiciona o item à lista
  });
}

//Sorteio aleatório: Ao clicar no botão "Sortear Amigo", um nome da lista será selecionado aleatoriamente e exibido na página.


function sortearAmigo() {
  if (amigos.length == "") {
    alert("Você nâo insira os nomes dos seus amigos!");
  } else {
    let amigoEscolhido = parseInt(Math.random() * amigos.length); // Sorteia o amigo
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `O amigos secreto é: ${amigos[amigoEscolhido]}`; // Mostra o amigo sorteado
    adicionarAmigoNaLista(); // Atualiza a exibição da lista
    LimpaLista();
  }
}


function LimpaLista() {
  lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";
}