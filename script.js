document.getElementById('adicionar-tarefa').addEventListener('click', function() {
    var tarefa = document.getElementById('nova-tarefa').value;

    if (tarefa) {
        var li = document.createElement('li');
        li.textContent = tarefa;
        document.getElementById('lista-tarefas').appendChild(li);
        document.getElementById('nova-tarefa').value = '';
    } else {
        alert('Por favor, insira uma tarefa!');
    }
});
