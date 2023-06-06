import { useState } from 'react'
import { connect } from 'react-redux'
import Todo from '../components/Todo'
import { add } from '../store'

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
      <ul>
        {todos.map((todo) => (
          <Todo {...todo} key={todo.id} />
        ))}
      </ul>
    </>
  )
}

function mapStateToProps(state) {
  return { todos: state }
}

function mapDispatchToProps(dispatch) {
  return {
    addTodo: (text) => dispatch(add(text))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
