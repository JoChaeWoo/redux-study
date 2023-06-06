import { configureStore, createSlice } from '@reduxjs/toolkit'

// const addToDo = createAction('ADD')
// const deleteToDo = createAction('DELETE')

// export const actionCreators = {
//   addToDo,
//   deleteToDo
// }

// // 1. return new state
// // 2. mutate state with no return
// const reducer = createReducer([], {
//   [addToDo]: (state, action) => {
//     state.push({ text: action.payload, id: Date.now() })
//   },
//   [deleteToDo]: (state, action) => state.filter((todo) => todo.id !== action.payload)
// })

const toDo = createSlice({
  name: 'toDosReducer',
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push({ text: action.payload, id: Date.now() })
    },
    remove: (state, action) => state.filter((todo) => todo.id !== action.payload)
  }
})

export const { add, remove } = toDo.actions

const store = configureStore({ reducer: toDo.reducer })

export default store
