import { connect } from 'react-redux'
import { remove } from '../store'
import { Link } from 'react-router-dom'

function Todo({ text, id, onBntClick }) {
  return (
    <li>
      <Link to={`/${id}`}>{text}</Link>
      <button onClick={onBntClick}>DEL</button>
    </li>
  )
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onBntClick: () => dispatch(remove(ownProps.id)),
    ...ownProps
  }
}

export default connect(null, mapDispatchToProps)(Todo)
