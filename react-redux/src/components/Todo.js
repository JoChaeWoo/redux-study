import { connect } from 'react-redux'
import { actionCreators } from '../store'

function Todo({ text, onBntClick }) {
  return (
    <li>
      {text} <button onClick={onBntClick}>DEL</button>
    </li>
  )
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onBntClick: () => dispatch(actionCreators.deleteToDo(ownProps.id))
  }
}

export default connect(null, mapDispatchToProps)(Todo)
