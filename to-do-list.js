//SELEÇÃO DE DOM
const todoInput = document.querySelector('.todo-input') //Por ser uma class, utilizou-se .
const todoButton = document.querySelector('.todo-button')
const todoList = document.querySelector('.todo-list')

//EVENTOS DE EXECUTA
todoButton.addEventListener('click', addTodo)
todoList.addEventListener('click', deleteCheck)
//todoList é a ul que contém a div com as linhas li 
//Dentro da todoList está os botoes para deletar e 'completar'

//FUNÇÕES
function addTodo(event){
    event.preventDefault()
    //Faz com que a lista não desapareça

    const todoDiv = document.createElement('div')
    //Criação de um elemento. Cria uma div
    todoDiv.classList.add('todo')
    //ClassList guarda todas as classes que o elemento carrega.
    //Então é possivel adicionar(add) ou remover(remove) uma classe.
    //Nesse caso, é adicionado a classe "todo"
    const todoLi = document.createElement('li')
    //Criação das linhas da lista
    todoLi.classList.add('todo-list')
    todoLi.innerText = todoInput.value
    //Adiciona o texto que é escrito na linha dentro da lista
    todoInput.value= null
    //Logo após digitar, a frase dentro do input text some
     todoDiv.appendChild(todoLi)
    //O appendChild adiciona a tabela dentro da div criada

    const completedButton = document.createElement('button')
    //Cria-se o elemento botao
    completedButton.innerHTML = 'Feito!'
    //Texto que aparecerá
    completedButton.classList.add('completed-btn')
    todoDiv.appendChild(completedButton)

    const trashButton = document.createElement('button')
    trashButton.innerHTML = "X"
    trashButton.classList.add('trash-bnt')
    todoDiv.appendChild(trashButton)
    //Criando botão de lixo. Fez o mesmo que lá em cima

    todoList.appendChild(todoDiv)
    //todoList é a classe da lista ul enquanto todoDiv é a div no qual as linhas li sáo inseridas
    //Neste caso, o codigo insere a div com a linha li na lista ul
}

  
function deleteCheck(e){
    console.log(e.target)
    //O botao deleteCheck funciona tanto para o botao delete quanto para o botao check 
    const item = e.target
     //Para diferenciar os botoes delete e check
    if(item.classList[0] === 'trash-bnt'){
        const todo = item.parentElement
         //O parentElement é utilizado pois não se quer remover apenas o botão e sim o conteúdo todo
        todo.remove()
        
    }
    if(item.classList[0] === 'completed-btn'){
        const todo = item.parentElement
        todo.classList.toggle('completed')

    }
}    