import './nav.js'
import '../css/lista-tarefa.css'
import 'phosphor-icons'

const taref = document.querySelector('#input-nova-tarefa')
const adiciona = document.querySelector('#btn-adicionar')
const listaTarefa = document.querySelector("#lista-tarefas")

adiciona.addEventListener('click', function(){
    let descricaoTarefa = taref.value
    const li = document.createElement('li')
    li.className = 'tarefa'
    li.innerHTML = `
	<div>${descricaoTarefa}</div>
    <button class="btn-excluir"><i class="ph-trash"></i></button>
    `
    listaTarefa.appendChild(li)
    console.log("Tarefa Adicionada")

    li.addEventListener('click', function(event){
        if(event.target.className === "btn-excluir" || event.target.className === "ph-trash"){
            listaTarefa.removeChild(li)
        }
    })
});
 