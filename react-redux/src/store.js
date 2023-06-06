import { legacy_createStore as createStore } from 'redux'
import { createAction, createReducer } from '@reduxjs/toolkit'

const addToDo = createAction('ADD')
const deleteToDo = createAction('DELETE')

export const actionCreators = {
  addToDo,
  deleteToDo
}

// const reducer = (state = [], action) => {
//   switch (action.type) {
//     case addToDo.type:
//       return [{ text: action.payload, id: Date.now() }, ...state]
//     case deleteToDo.type:
//       return state.filter((todo) => todo.id !== action.payload)
//     default:
//       return state
//   }
// }

// 1. return new state
// 2. mutate state with no return
const reducer = createReducer([], {
  [addToDo]: (state, action) => {
    state.push({ text: action.payload, id: Date.now() })
  },
  [deleteToDo]: (state, action) => state.filter((todo) => todo.id !== action.payload)
})

const store = createStore(reducer)

export default store
