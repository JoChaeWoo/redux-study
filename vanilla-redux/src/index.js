import { createStore } from "redux"

function initCounter() {  
  const plus = document.querySelector("button#plus")
  const minus = document.querySelector("button#minus")
  const number = document.querySelector("span")

  number.innerText = 0

  const ADD = "ADD"
  const MINUS = "MINUS"

  const countModifier = (state = 0, action) => {
    switch (action.type) {
      case ADD:
        return state + 1
      case MINUS:
        return state - 1
      default:
        return state
    }
  }
  const countStore = createStore(countModifier)

  const onChange = () => {
    number.innerText = countStore.getState()
  }

  countStore.subscribe(onChange)

  const handlePlus = () => {
    countStore.dispatch({ type: ADD })
  }
  const handleMinus = () => {
    countStore.dispatch({ type: MINUS })
  }

  plus.addEventListener("click", handlePlus)
  minus.addEventListener("click", handleMinus)

}

function initTodos() {
  const form = document.querySelector("form")
  const input = document.querySelector("input")
  const ul = document.querySelector("ul#todos")

  const createTodo = (toDo) => {
    const li = document.createElement("li");
    li.innerText = toDo
    ul.appendChild(li);
  }
  
  const onSubmit = (e) => {
    e.preventDefault()
    const toDo = input.value
    input.value = ""
    createTodo(toDo)
  }

  form.addEventListener("submit", onSubmit)
}

initCounter()
initTodos()
