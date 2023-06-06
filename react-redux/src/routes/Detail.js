import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

function Detail(props) {
  const { id } = useParams()
  const todo = useSelector((state) => {
    console.log(state, id)
    return state.find((todo) => todo.id === parseInt(id, 10))
  })
  return (
    <>
      <h2>{todo?.text}</h2>
      <h4>Created at: {todo?.id}</h4>
    </>
  )
}

export default Detail
