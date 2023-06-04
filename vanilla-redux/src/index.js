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

  const ADD_TODO = "ADD_TODO"
  const DELETE_TODO = "DELETE_TODO"

  const addTodo = (toDo) => {
    return {
      type: ADD_TODO,
      text: toDo
    }
  }

  const deleteTodo = (id) => {
    return {
      type: DELETE_TODO,
      id
    }
  }

  const reducer = (state = [], action) => {
    switch (action.type) {
      case ADD_TODO:
        return [{text: action.text, id: Date.now()}, ...state]
      case DELETE_TODO:
        return state.filter(todo => todo.id !== action.id)
      default:
        return state
    }
  }
  const paintToDos = () => {
    const toDos = todoStore.getState()
    console.log(toDos)
    ul.innerHTML = toDos.map(todo => `<li id="${todo.id}">${todo.text}<button>DEL</button></li>`).join("")
  }

  const dispatchAddToDo = (text) => {
    todoStore.dispatch(addTodo(text))
  }

  const dispatchDeleteToDo = (e) => {
    if(e.target.tagName !== "BUTTON") return
    const li = e.target.closest("li")
    todoStore.dispatch(deleteTodo(parseInt(li.id, 10)))
  }

  const todoStore = createStore(reducer)
  
  todoStore.subscribe(paintToDos)

  const onSubmit = (e) => {
    e.preventDefault()
    const toDo = input.value
    input.value = ""
    dispatchAddToDo(toDo)
  }

  form.addEventListener("submit", onSubmit)
  ul.addEventListener("click", dispatchDeleteToDo)
}

initCounter()
initTodos()
