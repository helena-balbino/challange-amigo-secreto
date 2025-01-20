let integrantes = [];

alert('Bem vindo ao Sorteador de amigo secreto');

// Define o nome de usuario da aplicação.
let nomeUsuario = prompt('Qual o seu nome:')

// Se o nome do usuário não for vazio adiciona ele a lista de participantes
if (nomeUsuario && nomeUsuario.trim() !== ''){
    integrantes.push(nomeUsuario.trim());
    alert(`${nomeUsuario} foi adicionado à lista de participantes!`);
}

// Função para adicionar os participantes do amigo secreto. 
function adicionarAmigo( ) {
    // Pegar o valor imputado no campo amigo, excluir os espaços antes e depois do nome.
    let amigo = document.getElementById('amigo').value.trim();
    // Se o valor imputado for diferente dos integrantes da lista:
    if (amigo && !integrantes.includes(amigo)) {
        integrantes.push(amigo); // adicionar o novo integrante a lista
        console.log(integrantes) // mostra no console, a lista atualizada com o nome dos integrantes
        atualizaListaIntegrante(); // atualiza a lista dos integrantes
        document.getElementById('amigo').value = ''; // limpa o campo com o nome do novo integrantes.
    } else { // Se o nome do integrante estiver na lista ou for vazio retorna a mensagem de alerta
        alert('Nome inválido ou já adicionado na lista de participantes.')
    }
}

// Função para atualizar o nome dos integrantes.
function atualizaListaIntegrante() {
    let listaAmigos = document.getElementById('listaAmigos');  // Pega os elementos do container com a nome dos integrantes e transforma em lista.
    listaAmigos.innerHTML = ''; // Limpa toda a lista de nomes do objeto.
    for (let qtdIntegrante = 0; qtdIntegrante < integrantes.length; qtdIntegrante++) { // Percorre todos os valores da lista integrantes e adicionar ao indice.
        let itemLista = document.createElement('li');  // Cria um elemento para cada item da lista
        itemLista.textContent = integrantes[qtdIntegrante]; // Pega o nome do elemento de acordo com o indice atribuido a ele.
        listaAmigos.appendChild(itemLista); // Adiciona cada elemento à lista novamente.
    }
}

// Função para sortear o amigo secreto
function sortearAmigo() {
    if (integrantes.length > 2) { // Se a lista de integrantes for maior que dois.
        let amigoSorteado; // Define a variavel para o amigo sorteado.
        let numeroAmigoSorteado; // Define o indice do amigo sorteado 
        
        while (true) { // Enquanto as condições forem verdadeira
            numeroAmigoSorteado = Math.floor(Math.random() * integrantes.length); // Seleciona um indice aleatório do tamanho da lista de integrantes. 
            amigoSorteado = integrantes[numeroAmigoSorteado]; // Busca o indece do sorteado na lista de integrantes.
            if (amigoSorteado !== nomeUsuario.trim()) { // Se o nome sorteado for diferente do nome do usuario:
                break;  // Para o loop.
            }
        }

        let resultado = document.getElementById('resultado'); // Mosta o resultado do nome sorteado.
        resultado.innerHTML = `O amigo sorteado é: ${amigoSorteado}`; 
    } else {
        alert('Adicione pelo menos três participantes antes de sortear.');// Se não tiver mais de dois participantes na lista retorna uma mensagem de alerta.
    }
}