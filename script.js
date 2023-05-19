const listElement = document.querySelector("#app ul")
const inputElement = document.querySelector("#app input")
const buttonElement = document.querySelector("#app button")

console.log(listElement, inputElement, buttonElement)

const tarefas = {"Estudar para prova", "Dormir cedo"}

for (const itemTarefa of tarefas) {
    const tarefaElement = document.creatElement("li")
    const tarefaText = document.createTextNode(itemTarefa)
    tarefaElement.appendChild(tarefaText)
    listElement.appendChild(tarefaElement)
}