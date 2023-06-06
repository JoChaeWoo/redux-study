import { useState } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from '../store'

function Home({ todos, addTodo }) {
  const [text, setText] = useState('')
  const handleChange = (e) => {
    setText(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setText('')
    addTodo(text)
  }

  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={text} onChange={handleChange} />
        <button>Add</button>
      </form>
      <ul></ul>
    </>
  )
}

function mapStateToProps(state) {
  return { todos: state }
}

function mapDispatchToProps(dispatch) {
  return {
    addTodo: (text) => dispatch(actionCreators.addToDo(text))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
