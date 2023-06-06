import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

function Detail(props) {
  console.log(props)
  const { id } = useParams()
  const todo = useSelector((state) => {
    console.log(state, id)
    return state.find((todo) => todo.id === parseInt(id, 10))
  })
  console.log(todo)
  return (
    <>
      <h2>{todo?.text}</h2>
      <h4>Created at: {todo?.id}</h4>
    </>
  )
}

export default Detail
