import { Link } from 'react-router-dom'
import './NotFound.scss'

function NotFound () {
  return (
    <div className='notfound_container'>
      <img src='./assets/page_not_found.svg' alt='Page not found' />

      <button className='notfound_button'>
        <Link to='/'>Go to Home</Link>
      </button>
    </div>
  )
}

export default NotFound
