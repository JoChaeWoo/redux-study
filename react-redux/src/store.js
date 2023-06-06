import { legacy_createStore as createStore } from 'redux'
import { createAction } from '@reduxjs/toolkit'

const addToDo = createAction("ADD")
const deleteToDo = createAction("DELETE")

export const actionCreators = {
  addToDo,
  deleteToDo
}

const reducer = (state = [], action) => {
  switch (action.type) {
    case addToDo.type:
      return [{ text: action.payload, id: Date.now() }, ...state]
    case deleteToDo.type:
      return state.filter((todo) => todo.id !== action.payload)
    default:
      return state
  }
}

const store = createStore(reducer)

export default store
